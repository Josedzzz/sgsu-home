import { useEffect } from "react";
import * as THREE from "three";

export default function Main() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // Establecer el tamaño del renderizador
    renderer.setSize(400, 400);
    document
      .getElementById("threejs-container")
      ?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      const container = document.getElementById("threejs-container");
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Cubo Verde Giratorio</h2>
      <div id="threejs-container" style={{ width: "400px", height: "400px" }} />
    </div>
  );
}
