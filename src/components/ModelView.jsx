import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const models = {
  "M2 Competition": { path: "/models/2019_bmw_m2_competition.glb", scale: 150 },
  "M4 Competition": { path: "/models/2024_bmw_m4_coupe_competition.glb", scale: 1.5 },
  "M5 Competition": { path: "/models/2021_bmw_m5_competition.glb", scale: 150 },
  "M6 Competition": { path: "/models/bmw_m6_gran_coupe.glb", scale: 1.5 },
  "M8 Competition": { path: "/models/2020_BMW_M8_COUPE_first.glb", scale: 150 }, 
};

const ModelView = () => {
  const [selectedModel, setSelectedModel] = useState("M4 Competition");

  // Load selected model
  const { scene } = useGLTF(models[selectedModel].path);

  return (
    <div className="w-full h-full relative">
      {/* Model Selection Buttons */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-wrap lg:flex-nowrap gap-3 z-10 bg-black p-2 rounded-lg shadow-lg">
        {Object.keys(models).map((model) => (
          <button
            key={model}
            className={`flex-1 lg:flex-initial px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              selectedModel === model ? "bg-gray-700 text-white" : "bg-blue-600 text-white" 
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

        {/* Render Selected 3D Model with dynamic scale */}
        <primitive object={scene} scale={models[selectedModel].scale} position={[0, -1, 0]} />

        {/* Orbit controls for rotation */}
        <OrbitControls 
          enableZoom={true} // Allows zooming with scroll wheel
          enablePan={true}  // Allows moving the camera horizontally
          minDistance={1}   // Prevents zooming in too close
          maxDistance={6}  // Prevents zooming out too far
        />
      </Canvas>
    </div>
  );
};

export default ModelView;