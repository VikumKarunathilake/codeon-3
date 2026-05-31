"use client"

import { useGLTF, Float, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { PCFShadowMap } from "three"

function WardenModel() {
  const { scene } = useGLTF("/3d/minecraft_warden.glb")

  return (
    <primitive
      object={scene}
      scale={2.5}
      position={[0, -1, 0]}
      rotation={[0, Math.PI - Math.PI / 4, 0]}
    />
  )
}

export function WardenScene() {
  return (
    <div className="h-150 w-full lg:h-200">
      <Canvas shadows={{ type: PCFShadowMap }} camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} shadows="contact">
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <WardenModel />
            </Float>
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  )
}
