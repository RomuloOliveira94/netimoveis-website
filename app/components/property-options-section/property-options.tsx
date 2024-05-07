import PropertyOptionsCard from "./property-options-card";

const PropertyOptions = () => {
  return (
    <section>
      <div className="bg-property-01 w-full bg-no-repeat flex flex-col items-start min-h-[640px]">
        <div className="container">
          <PropertyOptionsCard />
        </div>
      </div>
    </section>
  );
};

export default PropertyOptions;
