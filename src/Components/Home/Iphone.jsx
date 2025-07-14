import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScreenContent } from './ScreenContent';
import Reveal from '../Reveal';
import KnowMore from '../KnowMore';

gsap.registerPlugin(ScrollTrigger);

export default function IPhone() {
  const canvasRef = useRef();
  const phoneGroupRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor('#f9f9f9', 0);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 24);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // OrbitControls - DISABLED
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false; // Disable rotation
    controls.enableDamping = true;
    controls.enabled = false; // Completely disable controls

    // Phone Group
    const phoneGroup = new THREE.Group();
    phoneGroupRef.current = phoneGroup;
    scene.add(phoneGroup);

    // Load iPhone model
    const loader = new GLTFLoader();
    loader.load(
      './models/iphone_16free.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1.5, 1.5, 1.5);

        // ❌ No initial flip
        // model.rotation.y = Math.PI;

        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);
        model.position.sub(center);

        phoneGroup.add(model);

        // Set initial portrait rotation (screen facing)
        phoneGroup.rotation.set(0, 0, 0);

        // Scroll-triggered cinematic animation
        ScrollTrigger.create({
          trigger: "#phone-section",
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            const tl = gsap.timeline();

            // Step 1: Tilt backward (show top bezel)
            tl.to(phoneGroup.rotation, {
              x: "+=" + THREE.MathUtils.degToRad(90),
              duration: 0.6,
              ease: "power2.inOut",
            })
              // Step 2: Rotate to landscape
              .to(phoneGroup.rotation, {
                z: "+=" + THREE.MathUtils.degToRad(90),
                duration: 0.6,
                ease: "power2.inOut",
              })
              // Step 3: Bring screen to face front again
              .to(phoneGroup.rotation, {
                x: "-=" + THREE.MathUtils.degToRad(90),
                duration: 0.6,
                ease: "power2.inOut",
              });
          },
          once: true,
        });
      },
      undefined,
      (err) => {
        console.error('Error loading model', err);
      }
    );

    // Resize
    const handleResize = () => {
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      // controls.update(); // Removed since controls are disabled

      if (phoneGroupRef.current && sliderRef.current) {
        const rotation = phoneGroupRef.current.rotation;

        // Check if phone is facing forward in landscape orientation AND has completed the animation
        // After full animation: x ≈ 0 (returned to 0°), z ≈ π/2 (90° landscape)
        const phoneDir = new THREE.Vector3();
        const cameraDir = new THREE.Vector3();
        camera.getWorldDirection(cameraDir);
        phoneGroupRef.current.getWorldDirection(phoneDir);

        const facingForward = phoneDir.dot(cameraDir) < -0.9;

        // Check if animation has completed the final step (x back to ~0, z at ~90°)
        const xBackToZero = Math.abs(rotation.x) < 0.3; // x should be close to 0
        const zAtNinety = Math.abs(rotation.z - Math.PI / 2) < 0.3; // z should be close to π/2
        const animationComplete = xBackToZero && zAtNinety;

        // Only show screen content if facing forward AND animation is complete
        const shouldShowContent = facingForward && animationComplete;

        // Debug logging (remove after testing)
        console.log('Rotation:', {
          x: rotation.x,
          z: rotation.z,
          facingForward,
          xBackToZero,
          zAtNinety,
          animationComplete,
          shouldShowContent
        });

        gsap.to(sliderRef.current, {
          opacity: shouldShowContent ? 1 : 0,
          duration: 0.5,
          ease: 'power2.out',
          pointerEvents: shouldShowContent ? 'auto' : 'none',
        });
      }

      renderer.render(scene, camera);
    };

    animate(); // Start animation loop
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };


  }, []);

  return (
    <div>
      <div className='block mt-12 md:hidden'>
        <div className='w-fit marginal mx-auto text-center'>
          <Reveal animation="slide-up">
            <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Digital Powerhouse</h3>
          </Reveal>
          <Reveal animation="slide-up">
            <p className=" md:text-2xl pb-2 font-semibold text-[#013367] bg-clip-text">Kotak has developed a suite of digital apps and platforms designed specifically to meet the diverse needs of its chosen customer segments.</p>
          </Reveal>
        </div>
        <div className='border-gray-200 marginal rounded-4xl shadow-lg border !mb-4'>
          <img src="./Digital/Page-24.webp" className='' alt="" />
        <div className='w-fit mx-auto'>
          <KnowMore/>
        </div>
        </div>
      </div>
      <div id="phone-section" className=" relative hidden md:flex my-12 flex-col items-center justify-center">
        <div className='w-fit marginal mx-auto text-center'>
          <Reveal animation="slide-up">
            <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Digital Powerhouse</h3>
          </Reveal>
          <Reveal animation="slide-up">
            <p className=" md:text-2xl pb-2 font-semibold text-[#013367] bg-clip-text">Kotak has developed a suite of digital apps and platforms designed specifically to meet the diverse needs of its chosen customer segments.</p>
          </Reveal>
        </div>
        <div className="w-full h-[800px] bg-gradient-to-br from-[#ed1c25] to-[#013367] relative">
          <canvas ref={canvasRef} className="w-full h-full" />

          {/* SLIDER CONTENT OVERLAY */}
          <div
            ref={sliderRef}
            className="absolute"
            style={{
              top: '24.5%',
              left: '50%',
              background: 'black',
              transform: 'translateX(-50%)',
              width: '882px',
              height: '410px',
              opacity: 0,
              pointerEvents: 'none',
              overflow: 'hidden',
              borderRadius: '3.5rem',
            }}
          >
            <ScreenContent />
          </div>

        </div>
      </div>
    </div>
  );
}