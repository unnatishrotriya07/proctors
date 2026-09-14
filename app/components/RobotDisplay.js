"use client";

import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ResponsiveGroup, RobotPrototype } from "@/components/ui/robot-hero";
import styles from "./RobotDisplay.module.css";

export default function RobotDisplay() {
  return (
    <div className={styles.robotContainer}>
      <div className={styles.canvasWrap}>
        <Canvas
          camera={{ fov: 38, position: [0, 0.05, 3.4] }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "default",
          }}
          shadows
        >
          <ambientLight color="#ffffff" intensity={1.2} />
          <directionalLight
            castShadow
            color="#ffffff"
            intensity={1.25}
            position={[0, 6, 3]}
            shadow-bias={-0.0005}
            shadow-mapSize={[512, 512]}
          />
          <directionalLight
            color="#93c5fd"
            intensity={0.65}
            position={[-5, 3, -4]}
          />
          <directionalLight
            color="#ffffff"
            intensity={0.4}
            position={[5, -2, 2]}
          />

          <Suspense fallback={null}>
            <ResponsiveGroup scale={1.35}>
              <ContactShadows
                blur={1.6}
                color="#0f172a"
                far={2.5}
                opacity={0.5}
                position={[0, -0.79, 0]}
                resolution={512}
                scale={14}
              />
              <RobotPrototype
                blinkCycle={3.0}
                bodyParams={{
                  bodyBevelR: 0.235,
                  bodyBevelT: 0.025,
                  bodyBevelY: 0.34,
                }}
                color="#f8fafc"
                metalness={0.05}
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
                pantallaBrillo={1.6}
                pantallaColor="#1b9ffe"
              />
            </ResponsiveGroup>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
