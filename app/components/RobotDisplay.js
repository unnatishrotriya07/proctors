'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { RobotPrototype, ResponsiveGroup } from '@/components/ui/robot-hero';
import styles from './RobotDisplay.module.css';

export default function RobotDisplay() {
  return (
    <div className={styles.robotContainer}>
      <div className={styles.canvasWrap}>
        <Canvas
          shadows
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'default',
          }}
          camera={{ position: [0, 0.05, 3.4], fov: 38 }}
        >
          <ambientLight intensity={1.2} color="#ffffff" />
          <directionalLight
            position={[0, 6, 3]}
            intensity={1.25}
            color="#ffffff"
            castShadow
            shadow-mapSize={[512, 512]}
            shadow-bias={-0.0005}
          />
          <directionalLight
            position={[-5, 3, -4]}
            intensity={0.65}
            color="#93c5fd"
          />
          <directionalLight
            position={[5, -2, 2]}
            intensity={0.4}
            color="#ffffff"
          />

          <Suspense fallback={null}>
            <ResponsiveGroup scale={1.35}>
              <ContactShadows
                position={[0, -0.79, 0]}
                opacity={0.50}
                scale={14}
                resolution={512}
                blur={1.6}
                far={2.5}
                color="#0f172a"
              />
              <RobotPrototype
                neckParams={{
                  baseR: 0.215,
                  baseH: -0.05,
                  midR: 0.28,
                  midH: 0.02,
                  lipBottomR: 0.295,
                  lipBottomH: 0.045,
                  lipTopR: 0.27,
                  lipTopH: 0.055,
                  innerR: 0.1,
                  innerDropH: 0.0,
                }}
                bodyParams={{
                  bodyBevelR: 0.235,
                  bodyBevelY: 0.34,
                  bodyBevelT: 0.025,
                }}
                color="#f8fafc"
                pantallaColor="#1b9ffe"
                pantallaBrillo={1.6}
                blinkCycle={3.0}
                metalness={0.05}
              />
            </ResponsiveGroup>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
