import { useRef, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function FloatingLogo() {
  const meshRef = useRef()
  const materialRef = useRef()

  useLayoutEffect(() => {
    if (!meshRef.current) return

    // Scroll animation for the 3D shape
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrubbing
      }
    })

    // Rotate and move the object as user scrolls
    tl.to(meshRef.current.position, {
      y: -2,
      x: 2,
      ease: 'none'
    }, 0)
    
    tl.to(meshRef.current.rotation, {
      y: Math.PI * 2,
      x: Math.PI / 2,
      ease: 'none'
    }, 0)

    // Morph color slightly
    tl.to(materialRef.current.color, {
      r: 30 / 255, // 1E -> 30
      g: 58 / 255, // 3A -> 58
      b: 138 / 255, // 8A -> 138
      ease: 'none'
    }, 0)

    return () => {
      tl.kill()
    }
  }, [])

  useFrame((state) => {
    // Add subtle continuous floating independent of scroll
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.003
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Abstracted geometric shape inspired by the S logo */}
      <torusKnotGeometry args={[1.5, 0.4, 128, 32, 2, 3]} />
      <meshPhysicalMaterial 
        ref={materialRef}
        color="#06B6D4" // Brand Teal
        metalness={0.8}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
        emissive="#06B6D4"
        emissiveIntensity={0.2}
        wireframe={true}
      />
    </mesh>
  )
}
