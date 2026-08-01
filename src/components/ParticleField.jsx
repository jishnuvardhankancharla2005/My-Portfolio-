import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const Particles = ({ count = 200 }) => {
  const mesh = useRef();
  const light = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const rng = seededRandom(42);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const phases = new Float32Array(count);

    const palette = [
      [0.545, 0.361, 0.965],
      [0.024, 0.714, 0.831],
      [0.231, 0.510, 0.965],
      [0.851, 0.275, 0.937],
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rng() - 0.5) * 20;
      positions[i * 3 + 1] = (rng() - 0.5) * 20;
      positions[i * 3 + 2] = (rng() - 0.5) * 20;

      const color = palette[Math.floor(rng() * palette.length)];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];

      speeds[i] = rng() * 0.3 + 0.1;
      phases[i] = rng() * Math.PI * 2;
    }

    return { positions, colors, speeds, phases };
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current = { x, y };
      document.documentElement.style.setProperty('--mouse-x', x);
      document.documentElement.style.setProperty('--mouse-y', y);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    const posArray = mesh.current.geometry.attributes.position.array;
    const { x: mx, y: my } = mouseRef.current;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const speed = particles.speeds[i];
      const phase = particles.phases[i];

      const dx = mx * 10 - posArray[i3];
      const dy = -my * 8 - posArray[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);

      posArray[i3 + 1] += Math.sin(time * speed + phase) * 0.001;
      posArray[i3] += Math.cos(time * speed * 0.5 + phase) * 0.0005;

      const pull = 0.0003 / (1 + dist * 0.1);
      posArray[i3] += dx * pull;
      posArray[i3 + 1] += dy * pull;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02 + mx * 0.15;
    mesh.current.rotation.x = Math.sin(time * 0.01) * 0.1 + my * 0.08;

    if (light.current) {
      light.current.position.x = Math.sin(time * 0.3) * 5 + mx * 2;
      light.current.position.y = Math.cos(time * 0.2) * 3 + my * 2;
    }
  });

  return (
    <>
      <pointLight ref={light} color="#8b5cf6" intensity={2} distance={15} />
      <pointLight position={[5, -3, 2]} color="#06b6d4" intensity={1.5} distance={12} />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
};

const FloatingGeometry = () => {
  const group = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  const shapes = useMemo(() => {
    const rng = seededRandom(123);
    return Array.from({ length: 10 }, (_, i) => ({
      position: [
        (rng() - 0.5) * 16,
        (rng() - 0.5) * 10,
        (rng() - 0.5) * 8 - 2,
      ],
      rotation: [rng() * Math.PI, rng() * Math.PI, 0],
      scale: rng() * 0.4 + 0.08,
      speed: rng() * 0.5 + 0.2,
      phase: rng() * Math.PI * 2,
      type: ['octahedron', 'icosahedron', 'torus', 'dodecahedron', 'torusKnot'][i % 5],
    }));
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    const { x: mx, y: my } = mouseRef.current;

    group.current.rotation.x = my * 0.05;
    group.current.rotation.y = mx * 0.08;

    group.current.children.forEach((child, i) => {
      const shape = shapes[i];
      child.rotation.x = time * shape.speed * 0.3 + mx * 0.2;
      child.rotation.y = time * shape.speed * 0.5 + my * 0.2;
      child.position.y = shape.position[1] + Math.sin(time * shape.speed + shape.phase) * 0.5;
      child.position.x = shape.position[0] + Math.cos(time * shape.speed * 0.3 + shape.phase) * 0.3;
    });
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => {
        const colors = ['#8b5cf6', '#06b6d4', '#3b82f6', '#d946ef', '#a855f7'];
        const color = colors[i % colors.length];
        const props = {
          key: i,
          position: shape.position,
          rotation: shape.rotation,
          scale: shape.scale,
        };

        const geo = {
          octahedron: <octahedronGeometry args={[1, 0]} />,
          icosahedron: <icosahedronGeometry args={[1, 0]} />,
          torus: <torusGeometry args={[1, 0.3, 8, 16]} />,
          dodecahedron: <dodecahedronGeometry args={[1, 0]} />,
          torusKnot: <torusKnotGeometry args={[1, 0.3, 32, 8]} />,
        }[shape.type];

        return (
          <mesh {...props}>
            {geo}
            <meshStandardMaterial
              color={color}
              wireframe
              transparent
              opacity={0.15}
              emissive={color}
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const ParticleField = () => {
  return (
    <div className="particle-field-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <Particles count={180} />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default ParticleField;
