"use client";
import { useState } from "react";
import PropertyOptionsCard from "./property-options-card";
import { twMerge } from "tailwind-merge";

const PropertyOptions = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section>
      <div
        className={twMerge(
          `w-full bg-no-repeat flex flex-col items-start min-h-[640px]`,
          activeTab && `bg-property-${activeTab}`
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
