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

    // Scene setup
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor('#f9f9f9', 0);

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

    // Disable OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;

    // Phone Group
    const phoneGroup = new THREE.Group();
    phoneGroupRef.current = phoneGroup;
    scene.add(phoneGroup);

    // --- Render function (used by GSAP and resize) ---
    const render = () => {
      if (sliderRef.current && phoneGroupRef.current) {
        const rotation = phoneGroupRef.current.rotation;

        const phoneDir = new THREE.Vector3();
        const cameraDir = new THREE.Vector3();
        camera.getWorldDirection(cameraDir);
        phoneGroupRef.current.getWorldDirection(phoneDir);

        const facingForward = phoneDir.dot(cameraDir) < -0.9;
        const xBackToZero = Math.abs(rotation.x) < 0.3;
        const zAtNinety = Math.abs(rotation.z - Math.PI / 2) < 0.3;
        const animationComplete = xBackToZero && zAtNinety;

        const shouldShowContent = facingForward && animationComplete;

        gsap.to(sliderRef.current, {
          opacity: shouldShowContent ? 1 : 0,
          duration: 0.5,
          ease: 'power2.out',
          pointerEvents: shouldShowContent ? 'auto' : 'none',
        });
      }

      renderer.render(scene, camera);
    };

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      './models/iphone_16free.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1.5, 1.5, 1.5);

        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);
        model.position.sub(center);

        phoneGroup.add(model);
        phoneGroup.rotation.set(0, 0, 0);

        // Scroll-triggered GSAP animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#phone-section",
            start: "top center",
            end: "bottom center",
            once: true,
            onUpdate: render,
          },
          onUpdate: render,
          onComplete: render,
        });

        tl.to(phoneGroup.rotation, {
          x: "+=" + THREE.MathUtils.degToRad(90),
          duration: 0.6,
          ease: "power2.inOut",
        })
          .to(phoneGroup.rotation, {
            z: "+=" + THREE.MathUtils.degToRad(90),
            duration: 0.6,
            ease: "power2.inOut",
          })
          .to(phoneGroup.rotation, {
            x: "-=" + THREE.MathUtils.degToRad(90),
            duration: 0.6,
            ease: "power2.inOut",
          });
      },
      undefined,
      (err) => {
        console.error('Error loading model', err);
      }
    );

    // Resize handler
    const handleResize = () => {
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      render(); // Re-render after resizing
    };

    window.addEventListener('resize', handleResize);

    // Initial render
    render();

    // Cleanup
    return () => {
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
            <KnowMore />
          </div>
        </div>
      </div>
      <div id="phone-section" className=" relative hidden md:flex mt-12 flex-col items-center justify-center">

        <div className="w-full h-[800px] bg-gradient-to-br from-[#ed1c25] to-[#013367] relative">
          <div className='w-fit absolute marginal left-1/2 md:-translate-x-1/2 text-center'>
            <Reveal animation="slide-up">
              <h3 className="text-2xl mb-3 font-bold text-white">Digital Powerhouse</h3>
            </Reveal>
            <div className='flex w-[50px] mx-auto mb-4'>
              <div className='h-[2px] bg-white w-1/2 mx-auto' />
              <div className='h-[2px] bg-white w-1/2 mx-auto' />
            </div>
            <Reveal animation="slide-up">
              <p className=" md:text-xl pb-2 font-semibold text-white bg-clip-text">Kotak has developed a suite of digital apps and platforms designed specifically to meet the diverse needs of its chosen customer segments.</p>
            </Reveal>
          </div>
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
          <div className='mt-8 absolute bottom-10 left-1/2 md:-translate-x-1/2'>
            <KnowMore to={""} theme='white' themeText='[#ed1c25]' />
          </div>
        </div>
      </div>
    </div>
  );
}