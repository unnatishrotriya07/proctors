"use client";

import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { PiShoppingBagBold } from "react-icons/pi";
import * as THREE from "three";

class HeartCurve extends THREE.Curve<THREE.Vector3> {
  constructor() {
    super();
  }
  getPoint(t: number, optionalTarget = new THREE.Vector3()) {
    t = t * Math.PI * 2;
    const x = 16 * Math.sin(t) ** 3;
    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);

    return optionalTarget.set(x * 0.002, (y + 6) * 0.002, 0);
  }
}

const sharedHeartCurve = new HeartCurve();

export function ResponsiveGroup({
  children,
  scale = 1,
}: {
  children: React.ReactNode;
  scale?: number;
}) {
  const { viewport } = useThree();
  const s = Math.min(1.1, viewport.width / 3.5) * scale;
  return <group scale={s}>{children}</group>;
}

export function GlassCapsule({
  color,
  power,
  intensity,
}: {
  color: string;
  power: number;
  intensity: number;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      color: { value: new THREE.Color("#ffffff") },
      intensity: { value: 0.6 },
      power: { value: 2.5 },
    }),
    []
  );

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.color.value.set(color);
      materialRef.current.uniforms.power.value = power;
      materialRef.current.uniforms.intensity.value = intensity;
    }
  });

  return (
    <mesh>
      <sphereGeometry args={[0.3, 64, 64, 0, Math.PI * 2, 0, Math.PI]} />
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        fragmentShader={`
          uniform vec3 color;
          uniform float power;
          uniform float intensity;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = 1.0 - max(dot(viewDir, normal), 0.0);
            fresnel = pow(fresnel, power);
            gl_FragColor = vec4(color, fresnel * intensity);
          }
        `}
        ref={materialRef}
        transparent={true}
        uniforms={uniforms}
        vertexShader={`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
      />
    </mesh>
  );
}

const earBaseMat = new THREE.MeshStandardMaterial({
  color: "#f0f0f0",
  roughness: 0.5,
});
const earRingMat = new THREE.MeshStandardMaterial({
  color: "#ffffff",
  roughness: 0.3,
});
const earCenterMat = new THREE.MeshStandardMaterial({
  color: "#cccccc",
  roughness: 0.8,
});
const antennaBaseMat = new THREE.MeshStandardMaterial({
  color: "#999999",
  metalness: 0.5,
  roughness: 0.4,
});
const antennaStickMat = new THREE.MeshStandardMaterial({
  color: "#d0d0d0",
  metalness: 0.2,
  roughness: 0.4,
});
const antennaTipMat = new THREE.MeshStandardMaterial({
  color: "#ff3366",
  roughness: 0.2,
  toneMapped: false,
});

export function RobotEar({
  position,
  scale = 1,
  isLeft = false,
}: {
  position: [number, number, number];
  scale?: number;
  isLeft?: boolean;
}) {
  const dir = isLeft ? -1 : 1;

  return (
    <group position={position} scale={scale}>
      <mesh
        castShadow
        material={earBaseMat}
        receiveShadow
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.04, 0.04, 0.025, 32]} />
      </mesh>

      <mesh
        castShadow
        material={earRingMat}
        position={[dir * 0.012, 0, 0]}
        receiveShadow
        rotation={[0, 0, Math.PI / 2]}
      >
        <torusGeometry args={[0.032, 0.008, 16, 32]} />
      </mesh>

      <mesh
        castShadow
        material={earCenterMat}
        position={[dir * 0.012, 0, 0]}
        receiveShadow
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.03, 0.03, 0.005, 32]} />
      </mesh>

      <group position={[dir * 0.015, 0.035, 0]} rotation={[-0.4, 0, 0]}>
        <mesh
          castShadow
          material={antennaBaseMat}
          position={[0, 0.01, 0]}
          receiveShadow
        >
          <cylinderGeometry args={[0.006, 0.008, 0.02, 16]} />
        </mesh>
        <mesh
          castShadow
          material={antennaStickMat}
          position={[0, 0.06, 0]}
          receiveShadow
        >
          <cylinderGeometry args={[0.003, 0.003, 0.1, 8]} />
        </mesh>
        <mesh
          castShadow
          material={antennaTipMat}
          position={[0, 0.11, 0]}
          receiveShadow
        >
          <sphereGeometry args={[0.006, 16, 16]} />
        </mesh>
      </group>
    </group>
  );
}

const eyeMat = new THREE.MeshBasicMaterial({
  color: new THREE.Color(2, 2, 2),
  toneMapped: false,
  transparent: true,
});
const heartMat = new THREE.MeshBasicMaterial({
  color: "#ff3366",
  toneMapped: false,
});

export function RobotEye({
  position,
  rotation,
  scale = 1,
  blinkDuration = 0.15,
  blinkCycle = 3.0,
  isLovedRef,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  blinkDuration?: number;
  blinkCycle?: number;
  isLovedRef: React.MutableRefObject<boolean>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const normalEyesRef = useRef<THREE.Group>(null);
  const heartEyeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!(groupRef.current && normalEyesRef.current && heartEyeRef.current)) {
      return;
    }

    const isHeart = isLovedRef.current;

    normalEyesRef.current.visible = !isHeart;
    heartEyeRef.current.visible = isHeart;

    const cycle = clock.getElapsedTime() % blinkCycle;

    let targetScaleY = 1;

    if (cycle < blinkDuration && !isHeart) {
      const progress = cycle / blinkDuration;
      const blinkClose = Math.sin(progress * Math.PI);

      targetScaleY = Math.max(0.05, 1.0 - blinkClose);
    }

    groupRef.current.scale.set(scale, scale * targetScaleY, scale);
  });

  const { topPath, bottomPath } = useMemo(() => {
    const w = 0.025;
    const h = 0.035;
    const r = 0.02;
    const g = 0.005;

    const tPath = new THREE.CurvePath<THREE.Vector3>();
    tPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w, g, 0),
        new THREE.Vector3(-w, h - r, 0)
      )
    );
    tPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-w, h - r, 0),
        new THREE.Vector3(-w, h, 0),
        new THREE.Vector3(-w + r, h, 0)
      )
    );
    tPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w + r, h, 0),
        new THREE.Vector3(w - r, h, 0)
      )
    );
    tPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(w - r, h, 0),
        new THREE.Vector3(w, h, 0),
        new THREE.Vector3(w, h - r, 0)
      )
    );
    tPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(w, h - r, 0),
        new THREE.Vector3(w, g, 0)
      )
    );

    const bPath = new THREE.CurvePath<THREE.Vector3>();
    bPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w, -g, 0),
        new THREE.Vector3(-w, -(h - r), 0)
      )
    );
    bPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-w, -(h - r), 0),
        new THREE.Vector3(-w, -h, 0),
        new THREE.Vector3(-w + r, -h, 0)
      )
    );
    bPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(-w + r, -h, 0),
        new THREE.Vector3(w - r, -h, 0)
      )
    );
    bPath.add(
      new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(w - r, -h, 0),
        new THREE.Vector3(w, -h, 0),
        new THREE.Vector3(w, -(h - r), 0)
      )
    );
    bPath.add(
      new THREE.LineCurve3(
        new THREE.Vector3(w, -(h - r), 0),
        new THREE.Vector3(w, -g, 0)
      )
    );

    return { bottomPath: bPath, topPath: tPath };
  }, []);

  return (
    <group position={position} ref={groupRef} rotation={rotation} scale={scale}>
      <mesh material={heartMat} ref={heartEyeRef} visible={false}>
        <tubeGeometry args={[sharedHeartCurve, 64, 0.0035, 8, true]} />
      </mesh>

      <group ref={normalEyesRef}>
        <mesh material={eyeMat}>
          <tubeGeometry args={[topPath, 20, 0.0035, 8, false]} />
        </mesh>
        <mesh material={eyeMat}>
          <tubeGeometry args={[bottomPath, 20, 0.0035, 8, false]} />
        </mesh>
      </group>
    </group>
  );
}

function generatePbrTexturesAsync(): Promise<{
  colorMap: THREE.CanvasTexture;
  bumpMap: THREE.CanvasTexture;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const size = 512;
      const canvasC = document.createElement("canvas");
      const canvasB = document.createElement("canvas");
      canvasC.width = canvasB.width = size;
      canvasC.height = canvasB.height = size;
      const ctxC = canvasC.getContext("2d");
      const ctxB = canvasB.getContext("2d");

      if (ctxC && ctxB) {
        ctxC.fillStyle = "#dcdcdc";
        ctxC.fillRect(0, 0, size, size);
        ctxB.fillStyle = "#808080";
        ctxB.fillRect(0, 0, size, size);

        for (let i = 0; i < 10_000; i++) {
          const x = Math.random() * size;
          const y = Math.random() * size;
          const r = 0.5 + Math.random() * 1.5;
          const isDark = Math.random() > 0.15;

          ctxC.beginPath();
          ctxC.arc(x, y, r, 0, Math.PI * 2);
          ctxC.fillStyle = isDark ? "#222222" : "#dddddd";
          ctxC.fill();

          ctxB.beginPath();
          ctxB.arc(x, y, r, 0, Math.PI * 2);
          ctxB.fillStyle = isDark ? "#000000" : "#ffffff";
          ctxB.fill();
        }
      }

      const texC = new THREE.CanvasTexture(canvasC);
      const texB = new THREE.CanvasTexture(canvasB);
      texC.wrapS = texB.wrapS = THREE.RepeatWrapping;
      texC.wrapT = texB.wrapT = THREE.RepeatWrapping;

      texC.repeat.set(6, 3);
      texB.repeat.set(6, 3);
      texC.needsUpdate = true;
      texB.needsUpdate = true;

      resolve({ bumpMap: texB, colorMap: texC });
    }, 0);
  });
}

export function RobotPrototype({
  neckParams = {
    baseH: -0.01,
    baseR: 0.25,
    innerDropH: 0.03,
    innerR: 0.24,
    lipBottomH: 0.025,
    lipBottomR: 0.27,
    lipTopH: 0.05,
    lipTopR: 0.28,
    midH: 0.02,
    midR: 0.23,
  },
  bodyParams = { bodyBevelR: 0.21, bodyBevelT: 0.015, bodyBevelY: 0.38 },
  color = "#c4c4c4",
  pantallaColor = "#00ffc6",
  pantallaBrillo = 1.2,
  blinkCycle = 3.0,
  metalness = 0.0,
}: {
  neckParams?: Record<string, number>;
  bodyParams?: Record<string, number>;
  color?: string;
  pantallaColor?: string;
  pantallaBrillo?: number;
  blinkCycle?: number;
  metalness?: number;
}) {
  const isLovedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  const [textures, setTextures] = useState<{
    colorMap: THREE.CanvasTexture | null;
    bumpMap: THREE.CanvasTexture | null;
  }>({ bumpMap: null, colorMap: null });

  const design = {
    alturaCabeza: 0.6,
    colorChasis: color,
    escalaOjos: 1.1,
    pantallaBrillo,
    pantallaColor,
    pantallaGrosor: 3.8,
    parpadeoDuracion: 0.45,
    parpadeoFrecuencia: blinkCycle,
    separacionOjos: 0.07,
    tamañoOrejas: 1.3,
  };

  const config = {
    bodyRotSpeed: 10.0,
    bodyTiltX: 0.0,
    bodyTiltY: 0.95,
    headLookX: 0.3,
    headLookY: 1.8,
    headRotSpeed: 20.0,
    moveSpeed: 0.35,
  };

  useFrame((state, delta) => {
    if (!(bodyRef.current && headRef.current)) {
      return;
    }

    const dt = Math.min(delta, 0.1);

    const tx = state.pointer.x;
    const ty = state.pointer.y;

    const maxMoveX = state.viewport.width / 3.5;
    const targetPosX = tx * maxMoveX;
    bodyRef.current.position.x = THREE.MathUtils.lerp(
      bodyRef.current.position.x,
      targetPosX,
      config.moveSpeed * dt
    );

    const relativeX = tx - bodyRef.current.position.x / 2.5;

    const bodyTargetRotY = -relativeX * config.bodyTiltY;

    const bodyTargetRotX = relativeX * relativeX * config.bodyTiltX - ty * 0.25;

    const bodyTargetRotZ = -relativeX * 0.15;

    bodyRef.current.rotation.y = THREE.MathUtils.lerp(
      bodyRef.current.rotation.y,
      bodyTargetRotY,
      config.bodyRotSpeed * dt
    );
    bodyRef.current.rotation.x = THREE.MathUtils.lerp(
      bodyRef.current.rotation.x,
      bodyTargetRotX,
      config.bodyRotSpeed * dt
    );
    bodyRef.current.rotation.z = THREE.MathUtils.lerp(
      bodyRef.current.rotation.z,
      bodyTargetRotZ,
      config.bodyRotSpeed * dt
    );

    const headTargetRotY = relativeX * config.headLookY;
    const headTargetRotX = -ty * config.headLookX;

    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      headTargetRotY,
      config.headRotSpeed * dt
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      headTargetRotX,
      config.headRotSpeed * dt
    );
  });

  useEffect(() => {
    let mounted = true;
    let generatedMaps: {
      colorMap: THREE.CanvasTexture;
      bumpMap: THREE.CanvasTexture;
    } | null = null;

    generatePbrTexturesAsync().then((res) => {
      if (mounted) {
        generatedMaps = res;
        setTextures(res);
      } else {
        res.colorMap.dispose();
        res.bumpMap.dispose();
      }
    });

    return () => {
      mounted = false;

      if (generatedMaps) {
        generatedMaps.colorMap.dispose();
        generatedMaps.bumpMap.dispose();
      }
    };
  }, []);

  const handlePointerDown = (
    e: import("@react-three/fiber").ThreeEvent<PointerEvent>
  ) => {
    e.stopPropagation();
    isLovedRef.current = true;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      isLovedRef.current = false;
    }, 2000);
  };

  const neckProfile = useMemo(() => {
    const points = [];

    points.push(new THREE.Vector2(neckParams.innerR, neckParams.baseH));

    points.push(new THREE.Vector2(neckParams.baseR, neckParams.baseH));

    points.push(new THREE.Vector2(neckParams.midR, neckParams.midH));

    points.push(
      new THREE.Vector2(neckParams.lipBottomR, neckParams.lipBottomH)
    );

    points.push(new THREE.Vector2(neckParams.lipTopR, neckParams.lipTopH));

    points.push(new THREE.Vector2(neckParams.innerR, neckParams.lipTopH));

    points.push(
      new THREE.Vector2(
        neckParams.innerR,
        neckParams.lipTopH - neckParams.innerDropH
      )
    );
    return points;
  }, [neckParams]);

  const headMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#111111",
        metalness: 0.0,
        roughness: 1.0,
      }),
    []
  );

  if (!textures.colorMap) {
    return null;
  }

  return (
    <group
      onPointerDown={handlePointerDown}
      onPointerOut={() => (document.body.style.cursor = "auto")}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      position={[0, -0.3, 0]}
      ref={bodyRef}
    >
      <mesh castShadow receiveShadow>
        <sphereGeometry
          args={[0.43, 64, 64, 0, Math.PI * 2, Math.PI * 0.15, Math.PI * 0.85]}
        />
        <meshStandardMaterial
          bumpMap={textures.bumpMap || undefined}
          bumpScale={0.005}
          color={design.colorChasis}
          envMapIntensity={0.0}
          map={textures.colorMap || undefined}
          metalness={metalness}
          roughness={1.0}
        />
      </mesh>

      {bodyParams.bodyBevelT > 0 && (
        <mesh
          castShadow
          position={[0, bodyParams.bodyBevelY, 0]}
          receiveShadow
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry
            args={[bodyParams.bodyBevelR, bodyParams.bodyBevelT, 32, 64]}
          />
          <meshStandardMaterial
            bumpMap={textures.bumpMap || undefined}
            bumpScale={0.005}
            color={design.colorChasis}
            envMapIntensity={0.0}
            map={textures.colorMap || undefined}
            metalness={metalness}
            roughness={1.0}
          />
        </mesh>
      )}

      <mesh castShadow position={[0, 0.38, 0]} receiveShadow>
        <latheGeometry args={[neckProfile, 64]} />
        <meshStandardMaterial
          bumpMap={textures.bumpMap || undefined}
          bumpScale={0.005}
          color={design.colorChasis}
          envMapIntensity={0.0}
          map={textures.colorMap || undefined}
          metalness={metalness}
          roughness={1.0}
        />
      </mesh>

      <group position={[0, design.alturaCabeza, 0]} ref={headRef}>
        <mesh castShadow material={headMat} receiveShadow>
          <sphereGeometry args={[0.28, 64, 64, 0, Math.PI * 2, 0, Math.PI]} />
        </mesh>

        <GlassCapsule
          color={design.pantallaColor}
          intensity={design.pantallaBrillo}
          power={design.pantallaGrosor}
        />

        <group position={[0, -0.02, 0.29]}>
          <RobotEye
            blinkCycle={design.parpadeoFrecuencia}
            blinkDuration={design.parpadeoDuracion}
            isLovedRef={isLovedRef}
            position={[-design.separacionOjos, 0, 0]}
            rotation={[0, -0.2, 0]}
            scale={design.escalaOjos}
          />
          <RobotEye
            blinkCycle={design.parpadeoFrecuencia}
            blinkDuration={design.parpadeoDuracion}
            isLovedRef={isLovedRef}
            position={[design.separacionOjos, 0, 0]}
            rotation={[0, 0.2, 0]}
            scale={design.escalaOjos}
          />
        </group>

        <RobotEar
          isLeft={true}
          position={[-0.29, 0, 0]}
          scale={design.tamañoOrejas}
        />
        <RobotEar
          isLeft={false}
          position={[0.29, 0, 0]}
          scale={design.tamañoOrejas}
        />
      </group>
    </group>
  );
}

export interface NavItem {
  href: string;
  label: string;
  target?: string;
}

export interface RobotHeroProps {
  backgroundText?: string;
  blinkCycle?: number;
  color?: string;
  contactHref?: string;
  contactTarget?: string;
  contactText?: string;
  ctaText?: string;
  metalness?: number;
  navItemsLeft?: NavItem[];
  onCtaClick?: () => void;
  pantallaBrillo?: number;
  pantallaColor?: string;
  scale?: number;
}

function AntennaNavbar({
  leftItems,
  contactText,
  contactHref,
  contactTarget,
  ctaText,
  onCtaClick,
}: {
  leftItems: NavItem[];
  contactText: string;
  contactHref: string;
  contactTarget?: string;
  ctaText: string;
  onCtaClick?: () => void;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollY } = useScroll();
  const lineOpacity = useTransform(scrollY, [0, 50], [1, 0]);

  return (
    <nav className="pointer-events-none sticky top-0 z-50 w-full px-8 pt-8">
      <div className="pointer-events-auto relative mx-auto flex w-full max-w-[1400px] flex-col">
        <div className="relative flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
          <div className="z-20 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
            {leftItems.map((item, idx) => (
              <a
                className="relative overflow-hidden rounded-full bg-white px-7 py-2.5 font-bold text-black text-sm shadow-[0_4px_14px_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-200"
                href={item.href}
                key={item.label}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                rel={
                  item.target === "_blank" ? "noopener noreferrer" : undefined
                }
                target={item.target}
              >
                {item.label}
                {hoveredIndex === idx && (
                  <motion.div
                    className="absolute inset-0 border-black border-b-[3px]"
                    layoutId="navbar-indicator-left"
                    transition={{ damping: 30, stiffness: 400, type: "spring" }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="group pointer-events-auto absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center lg:flex">
            <div className="relative flex h-12 w-16 items-center justify-center">
              <div className="absolute left-2 h-4 w-1.5 rounded-l-md bg-zinc-300 transition-transform duration-300 group-hover:-translate-x-1" />
              <div className="absolute right-2 h-4 w-1.5 rounded-r-md bg-zinc-300 transition-transform duration-300 group-hover:translate-x-1" />

              <div className="z-10 flex h-10 w-10 items-center justify-center rounded-[12px] border-2 border-white/20 bg-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-[0_4px_25px_rgba(255,255,255,0.15)]">
                <div className="flex h-[60%] w-[70%] items-center justify-center gap-1.5 overflow-hidden rounded-lg bg-[#0a0a0a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
                  <div className="h-3 w-1.5 rounded-[2px] bg-[#00ffc6] shadow-[0_0_8px_#00ffc6] transition-transform duration-200 group-hover:scale-y-[0.2]" />
                  <div className="h-3 w-1.5 rounded-[2px] bg-[#00ffc6] shadow-[0_0_8px_#00ffc6] transition-transform duration-200 group-hover:scale-y-[0.2]" />
                </div>
              </div>
            </div>
          </div>

          <div className="z-20 mt-4 flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3 lg:mt-0 lg:w-auto lg:justify-end">
            <a
              className="rounded-full bg-white px-5 py-2.5 font-bold text-black text-xs shadow-[0_4px_14px_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-200 sm:px-7 sm:text-sm"
              href={contactHref}
              rel={
                contactTarget === "_blank" ? "noopener noreferrer" : undefined
              }
              target={contactTarget}
            >
              {contactText}
            </a>
            <button
              className="flex items-center gap-2 rounded-full bg-[#00ffc6] px-5 py-2.5 font-black text-black text-xs shadow-[0_0_20px_rgba(0,255,198,0.4)] transition-colors hover:bg-[#00e5b2] sm:px-7 sm:text-sm"
              onClick={onCtaClick}
            >
              {ctaText}
              <PiShoppingBagBold size={18} />
            </button>
          </div>
        </div>

        <motion.div
          className="mt-6 w-full border-white/30 border-b-2 border-dotted"
          style={{ opacity: lineOpacity }}
        />
      </div>
    </nav>
  );
}

export function RobotHero({
  backgroundText = "UITHEFACTORY",
  navItemsLeft = [
    { href: "#", label: "Product" },
    { href: "#", label: "About" },
    { href: "#", label: "Specs" },
    { href: "#", label: "Reviews" },
  ],
  contactText = "Contact",
  contactHref = "#",
  contactTarget,
  ctaText = "Buy Now",
  onCtaClick,
  color = "#c4c4c4",
  scale = 1,
  pantallaColor = "#00ffc6",
  pantallaBrillo = 1.2,
  blinkCycle = 3.0,
  metalness = 0.0,
}: RobotHeroProps = {}) {
  const containerRef = useRef<HTMLElement>(null);

  const entorno = {
    fondoAbajo: "#bebebe",
    fondoArriba: "#cecbcb",
    fondoMedio: "#9a9a9a",
    luzAmbiente: 0.75,
    luzPrincipal: 0.0,
    luzPrincipalColor: "#00ffe2",
    luzRelleno: 0.0,
    luzRellenoColor: "#dbdbdb",
    sombraBlur: 1.7,
    sombraOpacidad: 0.85,
  };

  return (
    <section
      className="relative h-dvh min-h-[600px] w-full overflow-hidden"
      ref={containerRef}
      style={{
        background: `linear-gradient(to bottom, ${entorno.fondoArriba} 0%, ${entorno.fondoArriba} 55%, ${entorno.fondoMedio} 65%, ${entorno.fondoAbajo} 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <h1
          className="select-none whitespace-nowrap font-black font-sans"
          style={{
            color: "#000000",
            fontSize: "clamp(4rem, 15vw, 14rem)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            opacity: 0.13,
            transform: "translate(0px, 40px) rotate(0deg)",
          }}
        >
          {backgroundText}
        </h1>
      </div>

      <div className="absolute inset-0 z-10">
        <Canvas camera={{ fov: 40, position: [0, 0.2, 6] }} shadows>
          <ambientLight color="#ffffff" intensity={entorno.luzAmbiente} />

          <directionalLight
            castShadow
            color={entorno.luzPrincipalColor}
            intensity={entorno.luzPrincipal}
            position={[0, 6, 3]}
            shadow-bias={-0.0005}
            shadow-mapSize={[2048, 2048]}
          >
            <orthographicCamera
              args={[-1.5, 1.5, 1.5, -1.5, 0.1, 20]}
              attach="shadow-camera"
            />
          </directionalLight>

          <directionalLight
            color={entorno.luzRellenoColor}
            intensity={entorno.luzRelleno}
            position={[-5, 2, -5]}
          />

          <Environment blur={0.5} preset="studio" />

          <ResponsiveGroup scale={scale}>
            <ContactShadows
              blur={entorno.sombraBlur}
              color="#000000"
              far={2.5}
              opacity={entorno.sombraOpacidad}
              position={[0, -0.79, 0]}
              resolution={1024}
              scale={15}
            />
            <RobotPrototype
              blinkCycle={blinkCycle}
              bodyParams={{
                bodyBevelR: 0.235,
                bodyBevelT: 0.025,
                bodyBevelY: 0.34,
              }}
              color={color}
              metalness={metalness}
              neckParams={{
                baseH: -0.05,
                baseR: 0.215,
                innerDropH: 0.0,
                innerR: 0.1,
                lipBottomH: 0.045,
                lipBottomR: 0.295,
                lipTopH: 0.055,
                lipTopR: 0.27,
                midH: 0.02,
                midR: 0.28,
              }}
              pantallaBrillo={pantallaBrillo}
              pantallaColor={pantallaColor}
            />
          </ResponsiveGroup>
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col">
        <AntennaNavbar
          contactHref={contactHref}
          contactTarget={contactTarget}
          contactText={contactText}
          ctaText={ctaText}
          leftItems={navItemsLeft}
          onCtaClick={onCtaClick}
        />

        <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-8">
          <div className="mt-auto flex w-full items-end justify-between pb-12" />
        </div>
      </div>
    </section>
  );
}

export default RobotHero;
