import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const ParticleImage = ({ imageUrl, shouldStartAnimation }) => {
  const pointsRef = useRef();
  const [targetPositions, setTargetPositions] = useState([]);
  const [targetColors, setTargetColors] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const animationStartTime = useRef(0);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);

  // Extract pixels from image
  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Get original image dimensions
      const originalWidth = img.width;
      const originalHeight = img.height;

      // Calculate scaling to maintain aspect ratio
      const maxSize = 120; // Maximum dimension
      const aspectRatio = originalWidth / originalHeight;

      let width, height;
      if (aspectRatio > 1) {
        // Landscape
        width = maxSize;
        height = maxSize / aspectRatio;
      } else {
        // Portrait or square
        height = maxSize;
        width = maxSize * aspectRatio;
      }

      canvas.width = width;
      canvas.height = height;

      // Draw and sample the image (preserving aspect ratio)
      ctx.drawImage(img, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      const positions = [];
      const colors = [];

      // Sample every pixel (you can skip pixels with step > 1 for fewer particles)
      const step = 1;

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const a = data[index + 3];

          // Only create particles for non-transparent pixels
          if (a > 50) {
            // Convert to 3D coordinates (centered and scaled)
           const SCALE = 10;
const posX = (x - width / 2) * SCALE;
const posY = (height / 2 - y) * SCALE;

            const posZ = 0;

            positions.push(new THREE.Vector3(posX, posY, posZ));
            colors.push(new THREE.Color(r / 255, g / 255, b / 255));
          }
        }
      }

      console.log(`Generated ${positions.length} particles from image`);
      setTargetPositions(positions);
      setTargetColors(colors);
      setIsReady(true);
      setHasStartedAnimation(false);
    };

    img.onerror = () => {
      console.error('Failed to load image:', imageUrl);
      // Fallback: create a simple smiley face pattern
      const positions = [];
      const colors = [];

      // Create a simple smiley face with particles
      for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
        // Face outline
        const x = Math.cos(angle) * 80;
        const y = Math.sin(angle) * 80;
        positions.push(new THREE.Vector3(x, y, 0));
        colors.push(new THREE.Color(1, 1, 0)); // Yellow
      }

      // Eyes
      positions.push(new THREE.Vector3(-30, 20, 0));
      positions.push(new THREE.Vector3(30, 20, 0));
      colors.push(new THREE.Color(0, 0, 0)); // Black
      colors.push(new THREE.Color(0, 0, 0)); // Black

      // Mouth
      for (let angle = 0; angle < Math.PI; angle += 0.2) {
        const x = Math.cos(angle) * 40;
        const y = Math.sin(angle) * -20 - 20;
        positions.push(new THREE.Vector3(x, y, 0));
        colors.push(new THREE.Color(0, 0, 0)); // Black
      }

      setTargetPositions(positions);
      setTargetColors(colors);
      setIsReady(true);
      setHasStartedAnimation(false);
    };

    img.src = imageUrl;
  }, [imageUrl]);

  // Start animation when shouldStartAnimation becomes true
  useEffect(() => {
    if (shouldStartAnimation && isReady && targetPositions.length > 0) { 
      animationStartTime.current = Date.now();
setHasStartedAnimation(true);
    }
  }, [shouldStartAnimation, isReady, targetPositions.length, hasStartedAnimation]);

  const { geometry, initialPositions } = useMemo(() => {
    if (!isReady || targetPositions.length === 0) return { geometry: null, initialPositions: null };

    const particleCount = targetPositions.length;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const startPositions = [];

    // Random starting positions and store them
    for (let i = 0; i < particleCount; i++) {
      const startX = (Math.random() - 0.5) * 800;
      const startY = (Math.random() - 0.5) * 800;
      const startZ = (Math.random() - 0.5) * 400;

      positions[i * 3] = startX;
      positions[i * 3 + 1] = startY;
      positions[i * 3 + 2] = startZ;

      startPositions.push(new THREE.Vector3(startX, startY, startZ));

      // Start with white color
      colors[i * 3] = 1;
      colors[i * 3 + 1] = 1;
      colors[i * 3 + 2] = 1;
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return { geometry: geom, initialPositions: startPositions };
  }, [isReady, targetPositions.length]);

  // Animation loop
  useFrame(() => {
    if (!pointsRef.current || !isReady || targetPositions.length === 0 || !hasStartedAnimation) return;

    const posAttr = pointsRef.current.geometry.attributes.position;
    const colorAttr = pointsRef.current.geometry.attributes.color;

    const elapsed = (Date.now() - animationStartTime.current) / 1000; // seconds
    const morphDuration = 3; // 3 seconds to morph into image
    const progress = Math.min(elapsed / morphDuration, 1);

    // Smooth easing function
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    for (let i = 0; i < targetPositions.length; i++) {
      const i3 = i * 3;

      // Interpolate from initial random position to target position
      const initialPos = initialPositions[i];
      const targetPos = targetPositions[i];

      // Lerp positions
      const currentX = initialPos.x + (targetPos.x - initialPos.x) * easeProgress;
      const currentY = initialPos.y + (targetPos.y - initialPos.y) * easeProgress;
      const currentZ = initialPos.z + (targetPos.z - initialPos.z) * easeProgress;

      posAttr.array[i3] = currentX;
      posAttr.array[i3 + 1] = currentY;
      posAttr.array[i3 + 2] = currentZ;

      // Interpolate colors from white to target color
      const targetColor = targetColors[i];
      colorAttr.array[i3] = 1 + (targetColor.r - 1) * easeProgress;
      colorAttr.array[i3 + 1] = 1 + (targetColor.g - 1) * easeProgress;
      colorAttr.array[i3 + 2] = 1 + (targetColor.b - 1) * easeProgress;
    }

    posAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;
  });

  if (!isReady || !geometry) return null;

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={4}
        vertexColors={true}
        sizeAttenuation={false}
        transparent={true}
        opacity={0.9}
      />
    </points>
  );
};

export default function Scene() {
  const [currentImage, setCurrentImage] = useState(0);
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  // Sample images - replace with your own URLs
  const images = [
    './home/Kotak Infinity.webp'
  ];

  // Intersection Observer for scroll trigger
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShouldStartAnimation(false); // Reset
        setTimeout(() => setShouldStartAnimation(true), 50); // Re-trigger
      }
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
}, []);


  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    setShouldStartAnimation(false); // Reset animation trigger
    // Trigger animation again after a short delay
    setTimeout(() => setShouldStartAnimation(true), 100);
  };

  return (
    <div style={{

      background: 'transparent'
    }}>

      {/* Particle section */}
      <div
        ref={sectionRef}
        style={{
          width: '100%',
          height: '400px',
          background: 'transparent',
          position: 'relative'
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 500], fov: 75 }}
          onWheel={(e) => e.stopPropagation()}
        >
          <ambientLight intensity={0.5} />
          <ParticleImage
            imageUrl={images[currentImage]}
            shouldStartAnimation={shouldStartAnimation}
            key={currentImage}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
          />
        </Canvas>
      </div>
    </div>
  );
}