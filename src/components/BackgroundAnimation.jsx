import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/* ─── Rotating wireframe torus knot ─── */
function WireframeTorus({ position = [0, 0, 0], scale = 1, rotationSpeed = 0.12, color = '#1A56DB' }) {
  const meshRef = useRef()

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed
      meshRef.current.rotation.y += delta * rotationSpeed * 1.3
      meshRef.current.rotation.z += delta * rotationSpeed * 0.4
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusKnotGeometry args={[3.2, 0.9, 256, 32, 2, 3]} />
      <meshBasicMaterial
        wireframe
        color={color}
        transparent
        opacity={0.13}
      />
    </mesh>
  )
}

/* ─── Secondary ring / torus ─── */
function WireframeRing({ position = [0, 0, 0], scale = 1, rotationSpeed = 0.08, color = '#1A56DB' }) {
  const meshRef = useRef()

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed * 0.7
      meshRef.current.rotation.y -= delta * rotationSpeed
      meshRef.current.rotation.z += delta * rotationSpeed * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[2.8, 0.15, 24, 80]} />
      <meshBasicMaterial
        wireframe
        color={color}
        transparent
        opacity={0.08}
      />
    </mesh>
  )
}

/* ─── Small floating icosahedron accent ─── */
function WireframeAccent({ position, scale = 0.6, rotationSpeed = 0.2, color = '#1A56DB' }) {
  const meshRef = useRef()

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * rotationSpeed
      meshRef.current.rotation.z += delta * rotationSpeed * 1.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          wireframe
          color={color}
          transparent
          opacity={0.07}
        />
      </mesh>
    </Float>
  )
}

/* ─── Scene composition ─── */
function Scene() {
  return (
    <>
      {/* Main large torus knot — centred, slowly rotating */}
      <WireframeTorus
        position={[0, 0.5, 0]}
        scale={1.6}
        rotationSpeed={0.1}
        color="#1A56DB"
      />

      {/* Secondary torus knot — offset, different speed */}
      <WireframeTorus
        position={[4.5, -2, -3]}
        scale={0.9}
        rotationSpeed={0.16}
        color="#3B82F6"
      />

      {/* Orbital rings */}
      <WireframeRing
        position={[-1, 1, 1]}
        scale={2.0}
        rotationSpeed={0.06}
        color="#1A56DB"
      />
      <WireframeRing
        position={[2, -1, -1]}
        scale={1.5}
        rotationSpeed={0.09}
        color="#60A5FA"
      />

      {/* Small accents */}
      <WireframeAccent position={[-5, 3, -2]} scale={0.5} color="#1A56DB" />
      <WireframeAccent position={[5.5, -3, -1]} scale={0.4} color="#3B82F6" />
      <WireframeAccent position={[-3, -4, 1]} scale={0.35} color="#93C5FD" />
    </>
  )
}

/* ─── Background canvas wrapper ─── */
export default function BackgroundAnimation() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.85 }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
