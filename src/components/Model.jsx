import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";

const Model = () => {
  useGSAP(() => {
    gsap.to("#heading", { opacity: 1, y: -50, delay: 1 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Experience the Marvel of Engineering
        </h1>

        <p className="mt-2 text-lg text-white">
          Explore the BMW M Series Coupe Versions in stunning 3D.
        </p>

        <div className="flex flex-col items-center mt-8">
          {/* 3D Model Container */}
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative rounded-xl shadow-lg bg-white">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
