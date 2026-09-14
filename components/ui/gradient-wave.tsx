"use client";
import { useEffect, useRef } from "react";

function normalizeColor(hexCode: number): number[] {
  return [
    ((hexCode >> 16) & 255) / 255,
    ((hexCode >> 8) & 255) / 255,
    (255 & hexCode) / 255,
  ];
}

class MiniGl {
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;
  meshes: any[] = [];
  commonUniforms: any;
  width?: number;
  height?: number;
  Material: any;
  Uniform: any;
  PlaneGeometry: any;
  Mesh: any;
  Attribute: any;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const gl = this.canvas.getContext("webgl", { antialias: true });
    if (!gl) {
      throw new Error("WebGL not supported");
    }
    this.gl = gl;

    const context = this.gl;
    const _miniGl = this;

    this.Uniform = class {
      type = "float";
      value: any;
      typeFn: string;
      excludeFrom?: string;
      transpose?: boolean;

      constructor(e: any) {
        Object.assign(this, e);
        const typeMap: Record<string, string> = {
          float: "1f",
          int: "1i",
          mat4: "Matrix4fv",
          vec2: "2fv",
          vec3: "3fv",
          vec4: "4fv",
        };
        this.typeFn = typeMap[this.type] || "1f";
      }

      update(location: any): void {
        if (this.value === undefined || location === null) {
          return;
        }

        const isMatrix = this.typeFn.indexOf("Matrix") === 0;
        const fn = `uniform${this.typeFn}`;

        if (isMatrix) {
          (context as any)[fn](location, this.transpose, this.value);
        } else {
          (context as any)[fn](location, this.value);
        }
      }

      getDeclaration(name: string, type: string, length?: number): string {
        if (this.excludeFrom === type) {
          return "";
        }

        if (this.type === "array") {
          return (
            this.value[0].getDeclaration(name, type, this.value.length) +
            `\nconst int ${name}_length = ${this.value.length};`
          );
        }

        if (this.type === "struct") {
          let nameNoPrefix = name.replace("u_", "");
          nameNoPrefix =
            nameNoPrefix.charAt(0).toUpperCase() + nameNoPrefix.slice(1);
          const fields = Object.entries(this.value)
            .map(([n, u]: [string, any]) =>
              u.getDeclaration(n, type).replace(/^uniform/, "")
            )
            .join("");
          return `uniform struct ${nameNoPrefix} \n{\n${fields}\n} ${name}${length ? `[${length}]` : ""};`;
        }

        return `uniform ${this.type} ${name}${length ? `[${length}]` : ""};`;
      }
    };

    this.Attribute = class {
      type: number = context.FLOAT;
      normalized = false;
      buffer: WebGLBuffer;
      target!: number;
      size!: number;
      values?: Float32Array | Uint16Array;

      constructor(e: any) {
        this.buffer = context.createBuffer()!;
        Object.assign(this, e);
      }

      update(): void {
        if (this.values) {
          context.bindBuffer(this.target, this.buffer);
          context.bufferData(this.target, this.values, context.STATIC_DRAW);
        }
      }

      attach(e: string, t: WebGLProgram): number {
        const n = context.getAttribLocation(t, e);
        if (this.target === context.ARRAY_BUFFER) {
          context.bindBuffer(this.target, this.buffer);
          context.enableVertexAttribArray(n);
          context.vertexAttribPointer(
            n,
            this.size,
            this.type,
            this.normalized,
            0,
            0
          );
        }
        return n;
      }

      use(e: number): void {
        context.bindBuffer(this.target, this.buffer);
        if (this.target === context.ARRAY_BUFFER) {
          context.enableVertexAttribArray(e);
          context.vertexAttribPointer(
            e,
            this.size,
            this.type,
            this.normalized,
            0,
            0
          );
        }
      }
    };

    this.Material = class {
      uniforms: any;
      uniformInstances: any[] = [];
      program!: WebGLProgram;

      constructor(
        vertexShaders: string,
        fragments: string,
        uniforms: any = {}
      ) {
        function getShader(type: number, source: string): WebGLShader {
          const shader = context.createShader(type)!;
          context.shaderSource(shader, source);
          context.compileShader(shader);
          if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
            console.error(context.getShaderInfoLog(shader));
            throw new Error("Shader compilation error");
          }
          return shader;
        }

        function getUniformDeclarations(uniforms: any, type: string): string {
          return Object.entries(uniforms)
            .map(([uniform, value]: [string, any]) =>
              value.getDeclaration(uniform, type)
            )
            .join("\n");
        }

        this.uniforms = uniforms;
        const prefix = "precision highp float;";

        const vertexSource = `
          ${prefix}
          attribute vec4 position;
          attribute vec2 uv;
          attribute vec2 uvNorm;
          ${getUniformDeclarations(_miniGl.commonUniforms, "vertex")}
          ${getUniformDeclarations(uniforms, "vertex")}
          ${vertexShaders}
        `;

        const fragmentSource = `
          ${prefix}
          ${getUniformDeclarations(_miniGl.commonUniforms, "fragment")}
          ${getUniformDeclarations(uniforms, "fragment")}
          ${fragments}
        `;

        this.program = context.createProgram()!;
        context.attachShader(
          this.program,
          getShader(context.VERTEX_SHADER, vertexSource)
        );
        context.attachShader(
          this.program,
          getShader(context.FRAGMENT_SHADER, fragmentSource)
        );
        context.linkProgram(this.program);

        if (!context.getProgramParameter(this.program, context.LINK_STATUS)) {
          console.error(context.getProgramInfoLog(this.program));
          throw new Error("Program linking error");
        }

        context.useProgram(this.program);
        this.attachUniforms(undefined, _miniGl.commonUniforms);
        this.attachUniforms(undefined, this.uniforms);
      }

      attachUniforms(name: string | undefined, uniforms: any): void {
        if (name === undefined) {
          Object.entries(uniforms).forEach(([n, u]) =>
            this.attachUniforms(n, u)
          );
        } else if (uniforms.type === "array") {
          uniforms.value.forEach((u: any, i: number) =>
            this.attachUniforms(`${name}[${i}]`, u)
          );
        } else if (uniforms.type === "struct") {
          Object.entries(uniforms.value).forEach(([u, i]) =>
            this.attachUniforms(`${name}.${u}`, i)
          );
        } else {
          this.uniformInstances.push({
            location: context.getUniformLocation(this.program, name),
            uniform: uniforms,
          });
        }
      }
    };

    this.PlaneGeometry = class {
      width = 1;
      height = 1;
      attributes: any;
      vertexCount = 0;
      xSegCount = 0;
      ySegCount = 0;

      constructor() {
        this.attributes = {
          index: new _miniGl.Attribute({
            size: 3,
            target: context.ELEMENT_ARRAY_BUFFER,
            type: context.UNSIGNED_SHORT,
          }),
          position: new _miniGl.Attribute({
            size: 3,
            target: context.ARRAY_BUFFER,
          }),
          uv: new _miniGl.Attribute({ size: 2, target: context.ARRAY_BUFFER }),
          uvNorm: new _miniGl.Attribute({
            size: 2,
            target: context.ARRAY_BUFFER,
          }),
        };
      }

      setTopology(xSegs = 1, ySegs = 1): void {
        this.xSegCount = xSegs;
        this.ySegCount = ySegs;
        this.vertexCount = (this.xSegCount + 1) * (this.ySegCount + 1);
        const quadCount = this.xSegCount * this.ySegCount * 2;

        this.attributes.uv.values = new Float32Array(2 * this.vertexCount);
        this.attributes.uvNorm.values = new Float32Array(2 * this.vertexCount);
        this.attributes.index.values = new Uint16Array(3 * quadCount);

        for (let y = 0; y <= this.ySegCount; y++) {
          for (let x = 0; x <= this.xSegCount; x++) {
            const i = y * (this.xSegCount + 1) + x;
            this.attributes.uv.values[2 * i] = x / this.xSegCount;
            this.attributes.uv.values[2 * i + 1] = 1 - y / this.ySegCount;
            this.attributes.uvNorm.values[2 * i] = (x / this.xSegCount) * 2 - 1;
            this.attributes.uvNorm.values[2 * i + 1] =
              1 - (y / this.ySegCount) * 2;

            if (x < this.xSegCount && y < this.ySegCount) {
              const s = y * this.xSegCount + x;
              this.attributes.index.values[6 * s] = i;
              this.attributes.index.values[6 * s + 1] = i + 1 + this.xSegCount;
              this.attributes.index.values[6 * s + 2] = i + 1;
              this.attributes.index.values[6 * s + 3] = i + 1;
              this.attributes.index.values[6 * s + 4] = i + 1 + this.xSegCount;
              this.attributes.index.values[6 * s + 5] = i + 2 + this.xSegCount;
            }
          }
        }

        this.attributes.uv.update();
        this.attributes.uvNorm.update();
        this.attributes.index.update();
      }

      setSize(width = 1, height = 1): void {
        this.width = width;
        this.height = height;
        this.attributes.position.values = new Float32Array(
          3 * this.vertexCount
        );

        const offsetX = width / -2;
        const offsetY = height / -2;
        const segWidth = width / this.xSegCount;
        const segHeight = height / this.ySegCount;

        for (let y = 0; y <= this.ySegCount; y++) {
          const posY = offsetY + y * segHeight;
          for (let x = 0; x <= this.xSegCount; x++) {
            const posX = offsetX + x * segWidth;
            const idx = y * (this.xSegCount + 1) + x;
            this.attributes.position.values[3 * idx] = posX;
            this.attributes.position.values[3 * idx + 1] = -posY;
            this.attributes.position.values[3 * idx + 2] = 0;
          }
        }

        this.attributes.position.update();
      }
    };

    this.Mesh = class {
      geometry: any;
      material: any;
      attributeInstances: any[] = [];

      constructor(geometry: any, material: any) {
        this.geometry = geometry;
        this.material = material;

        Object.entries(this.geometry.attributes).forEach(
          ([e, attribute]: [string, any]) => {
            this.attributeInstances.push({
              attribute,
              location: attribute.attach(e, this.material.program),
            });
          }
        );

        _miniGl.meshes.push(this);
      }

      draw(): void {
        context.useProgram(this.material.program);
        this.material.uniformInstances.forEach(({ uniform, location }: any) =>
          uniform.update(location)
        );
        this.attributeInstances.forEach(({ attribute, location }: any) =>
          attribute.use(location)
        );
        context.drawElements(
          context.TRIANGLES,
          this.geometry.attributes.index.values.length,
          context.UNSIGNED_SHORT,
          0
        );
      }
    };

    const identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    this.commonUniforms = {
      aspectRatio: new this.Uniform({ type: "float", value: 1 }),
      modelViewMatrix: new this.Uniform({
        type: "mat4",
        value: identityMatrix,
      }),
      projectionMatrix: new this.Uniform({
        type: "mat4",
        value: identityMatrix,
      }),
      resolution: new this.Uniform({ type: "vec2", value: [1, 1] }),
    };
  }

  setSize(w = 640, h = 480): void {
    this.width = w;
    this.height = h;
    this.canvas.width = w;
    this.canvas.height = h;
    this.gl.viewport(0, 0, w, h);
    this.commonUniforms.resolution.value = [w, h];
    this.commonUniforms.aspectRatio.value = w / h;
  }

  setOrthographicCamera(): void {
    this.commonUniforms.projectionMatrix.value = [
      2 / this.width!,
      0,
      0,
      0,
      0,
      2 / this.height!,
      0,
      0,
      0,
      0,
      -0.001,
      0,
      0,
      0,
      0,
      1,
    ];
  }

  render(): void {
    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clearDepth(1);
    this.meshes.forEach((m) => m.draw());
  }
}

class Gradient {
  canvas: HTMLCanvasElement;
  colors: string[];
  minigl: MiniGl;
  mesh: any;
  time = 0;
  last = 0;
  animationId?: number;
  isPlaying = false;
  resizeHandler?: () => void;

  constructor(canvas: HTMLCanvasElement, colors: string[]) {
    this.canvas = canvas;
    this.colors = colors;
    this.minigl = new MiniGl(canvas);
    this.init();
  }

  init(): void {
    const sectionColors = this.colors.map((hex) =>
      normalizeColor(Number.parseInt(hex.replace("#", "0x"), 16))
    );

    const uniforms = {
      u_active_colors: new this.minigl.Uniform({
        type: "vec4",
        value: [1, 1, 1, 1],
      }),
      u_baseColor: new this.minigl.Uniform({
        excludeFrom: "fragment",
        type: "vec3",
        value: sectionColors[0],
      }),
      u_darken_top: new this.minigl.Uniform({ value: 0 }),
      u_global: new this.minigl.Uniform({
        type: "struct",
        value: {
          noiseFreq: new this.minigl.Uniform({
            type: "vec2",
            value: [0.000_14, 0.000_29],
          }),
          noiseSpeed: new this.minigl.Uniform({ value: 0.000_005 }),
        },
      }),
      u_shadow_power: new this.minigl.Uniform({ value: 5 }),
      u_time: new this.minigl.Uniform({ value: 0 }),
      u_vertDeform: new this.minigl.Uniform({
        excludeFrom: "fragment",
        type: "struct",
        value: {
          incline: new this.minigl.Uniform({ value: 0 }),
          noiseAmp: new this.minigl.Uniform({ value: 320 }),
          noiseFlow: new this.minigl.Uniform({ value: 3 }),
          noiseFreq: new this.minigl.Uniform({ type: "vec2", value: [3, 4] }),
          noiseSeed: new this.minigl.Uniform({ value: 5 }),
          noiseSpeed: new this.minigl.Uniform({ value: 10 }),
          offsetBottom: new this.minigl.Uniform({ value: -0.5 }),
          offsetTop: new this.minigl.Uniform({ value: -0.5 }),
        },
      }),
      u_waveLayers: new this.minigl.Uniform({
        excludeFrom: "fragment",
        type: "array",
        value: [],
      }),
    };

    for (let i = 1; i < sectionColors.length; i++) {
      uniforms.u_waveLayers.value.push(
        new this.minigl.Uniform({
          type: "struct",
          value: {
            color: new this.minigl.Uniform({
              type: "vec3",
              value: sectionColors[i],
            }),
            noiseCeil: new this.minigl.Uniform({ value: 0.63 + 0.07 * i }),
            noiseFloor: new this.minigl.Uniform({ value: 0.1 }),
            noiseFlow: new this.minigl.Uniform({ value: 6.5 + 0.3 * i }),
            noiseFreq: new this.minigl.Uniform({
              type: "vec2",
              value: [
                2 + i / sectionColors.length,
                3 + i / sectionColors.length,
              ],
            }),
            noiseSeed: new this.minigl.Uniform({ value: 5 + 10 * i }),
            noiseSpeed: new this.minigl.Uniform({ value: 11 + 0.3 * i }),
          },
        })
      );
    }

    const vertexShader = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

vec3 blendNormal(vec3 base, vec3 blend) { return blend; }
vec3 blendNormal(vec3 base, vec3 blend, float opacity) { return (blend * opacity + base * (1.0 - opacity)); }

varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;
  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;
  float tilt = resolution.y / 2.0 * uvNorm.y;
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);
  
  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;
  
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);
  noise = max(0.0, noise);
  
  vec3 pos = vec3(position.x, position.y + tilt + incline + noise - offset, position.z);
  
  v_color = u_baseColor;
  
  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];
      float layerNoise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );
      v_color = blendNormal(v_color, layer.color, pow(layerNoise, 4.));
    }
  }
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`;

    const fragmentShader = `
varying vec3 v_color;

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  gl_FragColor = vec4(color, 1.0);
}`;

    const material = new this.minigl.Material(
      vertexShader,
      fragmentShader,
      uniforms
    );
    const geometry = new this.minigl.PlaneGeometry();
    this.mesh = new this.minigl.Mesh(geometry, material);

    this.resize();
    this.resizeHandler = () => this.resize();
    window.addEventListener("resize", this.resizeHandler);
  }

  resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.minigl.setSize(width, height);
    this.minigl.setOrthographicCamera();

    const xSegCount = Math.ceil(width * 0.02);
    const ySegCount = Math.ceil(height * 0.05);
    this.mesh.geometry.setTopology(xSegCount, ySegCount);
    this.mesh.geometry.setSize(width, height);
    this.mesh.material.uniforms.u_shadow_power.value = width < 600 ? 5 : 6;
  }

  animate = (timestamp: number): void => {
    if (!this.isPlaying) {
      return;
    }

    this.time += Math.min(timestamp - this.last, 1000 / 15);
    this.last = timestamp;
    this.mesh.material.uniforms.u_time.value = this.time;
    this.minigl.render();

    this.animationId = requestAnimationFrame(this.animate);
  };

  start(): void {
    this.isPlaying = true;
    this.animationId = requestAnimationFrame(this.animate);
  }

  stop(): void {
    this.isPlaying = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
    }
  }
}

export interface GradientWaveProps {
  className?: string; // custom Tailwind classes
  colors?: string[]; // gradient colors
  darkenTop?: boolean; // enable/disable top shadow
  deform?: {
    incline?: number;
    offsetTop?: number;
    offsetBottom?: number;
    noiseFreq?: [number, number];
    noiseAmp?: number;
    noiseSpeed?: number;
    noiseFlow?: number;
    noiseSeed?: number;
  };
  isPlaying?: boolean; // animation toggle
  noiseFrequency?: [number, number]; // global noise frequency
  noiseSpeed?: number; // global noise animation speed
  shadowPower?: number; // strength of top darkening
}

export function GradientWave({
  colors = ["#38bdf8", "#ffffff", "#38bdf8", "#ffffff", "#38bdf8", "#ffffff"],
  isPlaying = true,
  className = "",
  shadowPower = 8,
  darkenTop = false,
  noiseSpeed = 0.000_01,
  noiseFrequency = [0.0001, 0.0009],
  deform = { incline: 0.5, noiseAmp: 250, noiseFlow: 5 },
}: GradientWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<Gradient | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const canvas = document.createElement("canvas");
    Object.assign(canvas.style, {
      display: "block",
      height: "100%",
      left: "0",
      position: "absolute",
      top: "0",
      width: "100%",
    });
    containerRef.current.appendChild(canvas);

    try {
      const gradient = new Gradient(canvas, colors);
      gradientRef.current = gradient;

      // apply props to uniforms
      gradient.mesh.material.uniforms.u_shadow_power.value = shadowPower;
      gradient.mesh.material.uniforms.u_darken_top.value = darkenTop ? 1 : 0;
      gradient.mesh.material.uniforms.u_global.value.noiseFreq.value =
        noiseFrequency;
      gradient.mesh.material.uniforms.u_global.value.noiseSpeed.value =
        noiseSpeed;

      // deform settings (only if provided)
      Object.assign(gradient.mesh.material.uniforms.u_vertDeform.value, {
        ...gradient.mesh.material.uniforms.u_vertDeform.value,
        ...deform,
      });

      if (isPlaying) {
        gradient.start();
      }
    } catch (error) {
      console.error("Failed to initialize gradient:", error);
    }

    return () => {
      gradientRef.current?.stop();
      if (containerRef.current?.contains(canvas)) {
        containerRef.current.removeChild(canvas);
      }
    };
  }, [
    colors,
    isPlaying,
    shadowPower,
    darkenTop,
    noiseSpeed,
    noiseFrequency,
    deform,
  ]);

  return (
    <div
      className={`absolute inset-0 z-0 h-full w-full overflow-hidden ${className}`}
      ref={containerRef}
    />
  );
}

export default GradientWave;
