import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SineWaveBackground({ theme }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let time = 0;
    const waves = [
      {
        amplitude: 80,
        frequency: 0.02,
        speed: 0.02,
        color: theme === 'dark' ? '#4ade80' : '#22c55e',
        opacity: 0.15,
        yOffset: 0.2
      },
      {
        amplitude: 60,
        frequency: 0.015,
        speed: 0.015,
        color: theme === 'dark' ? '#16a34a' : '#15803d',
        opacity: 0.12,
        yOffset: 0.4
      },
      {
        amplitude: 100,
        frequency: 0.025,
        speed: 0.025,
        color: theme === 'dark' ? '#22c55e' : '#16a34a',
        opacity: 0.1,
        yOffset: 0.6
      },
      {
        amplitude: 40,
        frequency: 0.01,
        speed: 0.01,
        color: theme === 'dark' ? '#15803d' : '#14532d',
        opacity: 0.08,
        yOffset: 0.8
      }
    ];

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw waves
      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = wave.opacity;
        
        // Create flowing sine wave
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = canvas.height * wave.yOffset + 
                    Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
                    Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.7) * wave.amplitude * 0.3;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      });
      
      // Add floating particles
      for (let i = 0; i < 20; i++) {
        const x = (time * 50 + i * 100) % canvas.width;
        const y = canvas.height * 0.3 + Math.sin(time * 0.5 + i) * 50;
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' ? '#4ade80' : '#22c55e';
        ctx.globalAlpha = 0.3;
        ctx.fill();
      }
      
      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  return (
    <div 
      className="sine-wave-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
          : 'linear-gradient(135deg, #f0f8f0 0%, #e8f5e8 50%, #f0f8f0 100%)'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
      
      {/* Floating organic shapes */}
      <motion.div
        className="floating-shape shape-1"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="floating-shape shape-2"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="floating-shape shape-3"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          rotate: [0, 90, 180]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="floating-shape shape-4"
        animate={{
          y: [0, 15, 0],
          x: [0, -25, 0],
          rotate: [0, -90, -180]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
