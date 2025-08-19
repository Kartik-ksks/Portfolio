import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Animated Leaf Component for Navigation
function NavigationLeaf({ 
  position, 
  rotation, 
  section, 
  isActive, 
  isHovered, 
  onHover, 
  onClick,
  index 
}) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle swaying motion
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      
      // Growth animation when active
      if (isActive) {
        meshRef.current.scale.setScalar(1.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
      } else {
        meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
      }
      
      // Color animation
      const material = meshRef.current.material;
      if (isActive) {
        material.color.setHex(0x4ade80); // Bright green when active
      } else if (hovered) {
        material.color.setHex(0x22c55e); // Medium green when hovered
      } else {
        material.color.setHex(0x16a34a); // Dark green when normal
      }
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.3}>
      <group 
        position={position} 
        rotation={rotation}
        onPointerOver={() => {
          setHovered(true);
          onHover(section.id);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
        }}
        onClick={() => onClick(section.id)}
      >
        {/* Leaf Shape */}
        <mesh ref={meshRef}>
          <planeGeometry args={[1.5, 0.8]} />
          <meshStandardMaterial 
            color="#16a34a"
            transparent
            opacity={0.9}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Leaf Veins */}
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[1.4, 0.7]} />
          <meshStandardMaterial 
            color="#15803d"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Section Text */}
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          {section.name}
        </Text>
        
        {/* Glow effect when active */}
        {isActive && (
          <mesh position={[0, 0, -0.1]}>
            <planeGeometry args={[2, 1]} />
            <meshStandardMaterial 
              color="#4ade80"
              transparent
              opacity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
        )}
      </group>
    </Float>
  );
}

// Tree Trunk Component
function TreeTrunk() {
  const trunkRef = useRef();
  
  useFrame((state) => {
    if (trunkRef.current) {
      // Gentle swaying motion
      trunkRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.02;
    }
  });

  return (
    <group position={[0, -2, 0]}>
      {/* Main trunk */}
      <mesh ref={trunkRef}>
        <cylinderGeometry args={[0.3, 0.4, 4, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Bark texture */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.31, 0.41, 4, 8]} />
        <meshStandardMaterial 
          color="#654321"
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Roots */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.5, 0.8, 1, 8]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
    </group>
  );
}

// Branch Component
function Branch({ position, rotation, scale = 1 }) {
  const branchRef = useRef();
  
  useFrame((state) => {
    if (branchRef.current) {
      // Gentle swaying
      branchRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.01;
    }
  });

  return (
    <mesh ref={branchRef} position={position} rotation={rotation} scale={scale}>
      <cylinderGeometry args={[0.05, 0.08, 2, 6]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  );
}

// Main Tree Scene
function TreeScene({ sections, currentSection, onSectionClick, onHover }) {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  // Position leaves in a tree-like pattern
  const leafPositions = [
    { pos: [-2, 1, 0], rot: [0, 0, -0.3], branch: [-1.5, 0.5, 0] },
    { pos: [2, 1.2, 0], rot: [0, 0, 0.3], branch: [1.5, 0.7, 0] },
    { pos: [-1.5, 2.5, 0], rot: [0, 0, -0.2], branch: [-1.2, 1.8, 0] },
    { pos: [1.5, 2.7, 0], rot: [0, 0, 0.2], branch: [1.2, 2, 0] },
    { pos: [0, 3.5, 0], rot: [0, 0, 0], branch: [0, 2.5, 0] }
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.8} 
        color="#FFD700"
      />
      <pointLight 
        position={[-10, 10, -10]} 
        intensity={0.3} 
        color="#87CEEB"
      />
      
      {/* Tree Trunk */}
      <TreeTrunk />
      
      {/* Branches */}
      {leafPositions.map((leaf, index) => (
        <Branch 
          key={`branch-${index}`}
          position={leaf.branch}
          rotation={[0, 0, leaf.rot[2] * 2]}
          scale={0.8}
        />
      ))}
      
      {/* Navigation Leaves */}
      {sections.map((section, index) => (
        <NavigationLeaf
          key={section.id}
          position={leafPositions[index]?.pos || [0, 0, 0]}
          rotation={leafPositions[index]?.rot || [0, 0, 0]}
          section={section}
          isActive={currentSection === section.id}
          isHovered={false}
          onHover={onHover}
          onClick={onSectionClick}
          index={index}
        />
      ))}
      
      {/* Floating particles around the tree */}
      <FloatingParticles count={30} />
    </>
  );
}

// Floating Particles Component
function FloatingParticles({ count = 30 }) {
  const particles = useRef();
  
  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y += 0.001;
      particles.current.rotation.x += 0.0005;
    }
  });

  const particlePositions = [];
  for (let i = 0; i < count; i++) {
    particlePositions.push([
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ]);
  }

  return (
    <group ref={particles}>
      {particlePositions.map((pos, index) => (
        <mesh key={index} position={pos}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial 
            color="#4ade80"
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main Tree Navigation Component
export default function TreeNavigation({ sections, currentSection, onSectionChange }) {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    onSectionChange(sectionId);
    // Smooth scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHover = (sectionId) => {
    setHoveredSection(sectionId);
  };

  return (
    <div className="tree-navigation">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ 
          background: 'transparent',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 10,
          pointerEvents: 'auto'
        }}
      >
        <TreeScene 
          sections={sections}
          currentSection={currentSection}
          onSectionClick={handleSectionClick}
          onHover={handleHover}
        />
      </Canvas>
      
      {/* Section indicator */}
      {hoveredSection && (
        <motion.div
          className="section-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {sections.find(s => s.id === hoveredSection)?.name}
        </motion.div>
      )}
    </div>
  );
}
