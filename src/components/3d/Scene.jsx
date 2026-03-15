import { Canvas } from '@react-three/fiber'
import { Environment, Float, Sparkles } from '@react-three/drei'
import { FloatingLogo } from './FloatingLogo'

export function Scene() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-10]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#06B6D4" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#1E3A8A" />
        
        <Environment preset="city" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <FloatingLogo />
        </Float>
        
        <Sparkles count={150} scale={12} size={2} speed={0.4} opacity={0.3} color="#06B6D4" />
      </Canvas>
    </div>
  )
}
