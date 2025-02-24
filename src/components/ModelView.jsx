import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const ModelView = () => {
  // ✅ Load BMW Model (Correct Path)
  const { scene } = useGLTF("/models/2024_bmw_m4_coupe_competition.glb");

  // Available car colors
  const colors = ["black", "white", "blue", "green", "red", "orange", "yellow"];
  const [carColor, setCarColor] = useState(colors[0]);

  // Change car color dynamically
  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.set(carColor);
    }
  });

  return (
    <div className="w-full h-full relative">
      {/* Color Selection Buttons */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-10 h-10 rounded-full border-2 ${
              carColor === color ? "border-white" : "border-gray-500"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setCarColor(color)}
          />
        ))}
      </div>

      {/* 3D Model Canvas */}
      <Canvas camera={{ position: [0, 1.5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Environment preset="city" />

        {/* Render 3D Model */}
        <primitive object={scene} scale={1.5} position={[0, -1, 0]} />

        {/* Orbit controls for rotation */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelView;

