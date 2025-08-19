import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Floating Leaf Component
function FloatingLeaf({ position, rotation, speed, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.01;
      meshRef.current.rotation.z += 0.01;
      meshRef.current.rotation.y += 0.005;
      // Add wave-like motion
      meshRef.current.position.x += Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.005;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <planeGeometry args={[0.5, 0.3]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

// Tree Component with Wave Effect
function Tree({ position, scale = 1 }) {
  const trunkRef = useRef();
  const leavesRef = useRef();
  const groupRef = useRef();
  
  useFrame((state) => {
    if (trunkRef.current && leavesRef.current && groupRef.current) {
      // Gentle swaying motion like trees in wind
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.01;
      
      trunkRef.current.rotation.y += 0.001;
      leavesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Trunk */}
      <mesh ref={trunkRef}>
        <cylinderGeometry args={[0.1, 0.15, 2, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Main Leaves */}
      <mesh ref={leavesRef} position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
      
      {/* Additional leaf clusters with wave motion */}
      <mesh position={[0.3, 1.2, 0.2]} rotation={[0, 0.5, 0]}>
        <sphereGeometry args={[0.4, 12, 12]} />
        <meshStandardMaterial color="#32CD32" />
      </mesh>
      
      <mesh position={[-0.2, 1.3, -0.1]} rotation={[0, -0.3, 0]}>
        <sphereGeometry args={[0.3, 10, 10]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
      
      {/* More leaf clusters for fuller trees */}
      <mesh position={[0.1, 1.8, 0.3]} rotation={[0, 0.8, 0]}>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshStandardMaterial color="#90EE90" />
      </mesh>
      
      <mesh position={[-0.4, 1.6, -0.2]} rotation={[0, -0.6, 0]}>
        <sphereGeometry args={[0.2, 6, 6]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </group>
  );
}

// Floating Particles
function FloatingParticles({ count = 100 }) {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() * 0.02;
      const x = Math.random() * 40 - 20;
      const y = Math.random() * 40 - 20;
      const z = Math.random() * 40 - 20;
      
      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const points = useRef();

  useFrame((state) => {
    if (points.current) {
      particles.forEach((particle, i) => {
        const { time, factor, speed, x, y, z } = particle;
        const t = (state.clock.elapsedTime + time) * speed;
        points.current.geometry.attributes.position.array[i * 3] = x + Math.cos(t) * factor;
        points.current.geometry.attributes.position.array[i * 3 + 1] = y + Math.sin(t) * factor;
        points.current.geometry.attributes.position.array[i * 3 + 2] = z + Math.sin(t) * factor;
      });
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.length * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        color="#87A96B"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Ground Plane with Grass Effect and Wave Motion
function Ground() {
  const groundRef = useRef();
  
  useFrame((state) => {
    if (groundRef.current) {
      // Subtle wave-like motion for the ground
      groundRef.current.rotation.z += 0.001;
      groundRef.current.position.y = -10 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={groundRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeGeometry args={[50, 50, 32, 32]} />
      <meshStandardMaterial 
        color="#90EE90"
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

// Main Scene Component
function Scene({ theme }) {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  const leafColors = ['#228B22', '#32CD32', '#90EE90', '#98FB98', '#228B22', '#32CD32'];
  const leafPositions = [
    [-5, 3, -5], [5, 4, -3], [-3, 2, 5], [4, 5, 4],
    [-2, 3, -4], [6, 2, -2], [-4, 4, 3], [3, 3, 5],
    [-6, 2, -1], [2, 4, -5], [-1, 3, 4], [5, 2, 3],
    [-7, 1, -3], [7, 3, -1], [-5, 5, 2], [6, 1, 6],
    [-3, 4, -6], [4, 6, -2], [-2, 2, 7], [3, 5, 3]
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.8} 
        color={theme === 'dark' ? '#4A90E2' : '#FFD700'}
      />
      <pointLight 
        position={[-10, 10, -10]} 
        intensity={0.3} 
        color="#87CEEB"
      />
      
      {/* Ground */}
      <Ground />
      
      {/* Trees with natural wave effect */}
      <Tree position={[-8, -8, -8]} scale={1.2} />
      <Tree position={[8, -8, -6]} scale={0.8} />
      <Tree position={[-6, -8, 8]} scale={1} />
      <Tree position={[6, -8, 8]} scale={1.1} />
      <Tree position={[-10, -8, -4]} scale={0.9} />
      <Tree position={[10, -8, -8]} scale={1.3} />
      <Tree position={[-4, -8, 10]} scale={0.7} />
      <Tree position={[4, -8, 10]} scale={1.4} />
      
      {/* Floating Leaves */}
      {leafPositions.map((pos, index) => (
        <FloatingLeaf
          key={index}
          position={pos}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
          speed={0.5 + Math.random() * 0.5}
          color={leafColors[Math.floor(Math.random() * leafColors.length)]}
        />
      ))}
      
      {/* Floating Particles */}
      <FloatingParticles count={50} />
      
      {/* Organic Shapes - More Visible */}
      <mesh position={[0, 0, -15]} rotation={[0, 0, 0]}>
        <torusGeometry args={[3, 1, 16, 100]} />
        <meshStandardMaterial 
          color="#87A96B" 
          transparent 
          opacity={0.3}
          wireframe
        />
      </mesh>
      
      <mesh position={[15, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2, 0.5, 16, 100]} />
        <meshStandardMaterial 
          color="#6B8E23" 
          transparent 
          opacity={0.3}
          wireframe
        />
      </mesh>
      
      <mesh position={[-15, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <torusGeometry args={[2.5, 0.8, 16, 100]} />
        <meshStandardMaterial 
          color="#228B22" 
          transparent 
          opacity={0.3}
          wireframe
        />
      </mesh>
      
      {/* Additional Organic Shapes */}
      <mesh position={[0, 5, -10]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2, 0.3, 12, 80]} />
        <meshStandardMaterial 
          color="#90EE90" 
          transparent 
          opacity={0.4}
          wireframe
        />
      </mesh>
      
      <mesh position={[10, -2, 5]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[1.5, 0.4, 10, 60]} />
        <meshStandardMaterial 
          color="#32CD32" 
          transparent 
          opacity={0.3}
          wireframe
        />
      </mesh>
      
      <mesh position={[-10, 3, 8]} rotation={[Math.PI / 6, -Math.PI / 3, 0]}>
        <torusGeometry args={[1.8, 0.2, 14, 70]} />
        <meshStandardMaterial 
          color="#228B22" 
          transparent 
          opacity={0.4}
          wireframe
        />
      </mesh>
    </>
  );
}

// Main Scene3D Component
export default function Scene3D({ theme }) {
  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 75 }}
      style={{ 
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)' 
          : 'linear-gradient(135deg, #f0f8f0 0%, #e8f5e8 50%, #f0f8f0 100%)'
      }}
    >
      <Scene theme={theme} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
