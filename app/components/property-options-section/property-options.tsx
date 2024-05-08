"use client";
import { useEffect, useState } from "react";
import PropertyOptionsCard from "./property-options-card";
import { twMerge } from "tailwind-merge";

const PropertyOptions = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setBgImage(`url(/properties-options/${activeTab}.png)`);
  }, [activeTab]);

  return (
    <section>
      <div
        style={{ backgroundImage: bgImage }}
        className={twMerge(
          `w-full bg-no-repeat flex flex-col items-start min-h-[640px]`
        )}
      >
        <div className="container">
          <PropertyOptionsCard setActiveTab={setActiveTab} />
        </div>
      </div>
    </section>
  );
};

export default PropertyOptions;
