import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const models = {
  "BMW M4 Coupe": "/models/2024_bmw_m4_coupe_competition.glb",
  "BMW M8 Coupe": "/models/2020_bmw_m8_coupe.glb", // Adjust path if needed
};

const ModelView = () => {
  const [selectedModel, setSelectedModel] = useState("BMW M4 Coupe");

  // Load selected model
  const { scene } = useGLTF(models[selectedModel]);

  return (
    <div className="w-full h-full relative">
      {/* Model Selection Buttons */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10 bg-black p-2 rounded-lg shadow-lg">
        {Object.keys(models).map((model) => (
          <button
            key={model}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              selectedModel === model ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedModel(model)}
          >
            {model}
          </button>
        ))}
      </div>

      {/* 3D Model Canvas */}
      <Canvas camera={{ position: [0, 1.5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Environment preset="city" />

        {/* Render Selected 3D Model */}
        <primitive object={scene} scale={1.5} position={[0, -1, 0]} />

        {/* Orbit controls for rotation */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelView;

