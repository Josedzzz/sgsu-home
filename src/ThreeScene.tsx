import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 2;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Triangle Geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0.0,
      0.5,
      0.0, // Top vertex
      -0.5,
      -0.5,
      0.0, // Bottom left
      0.5,
      -0.5,
      0.0, // Bottom right
    ]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

    // Material
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffcc,
      side: THREE.DoubleSide,
    });

    // Mesh (Triangle)
    const triangle = new THREE.Mesh(geometry, material);
    scene.add(triangle);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      triangle.rotation.y += 0.02; // Rotate the triangle
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen bg-black"></div>;
}
