import SearchBar from "./search-bar";

const Hero = () => {
  return (
    <section className="pt-[70px]">
      <div className="bg-hero-desktop w-full bg-no-repeat flex flex-col items-center min-h-[640px]">
        <div className="mt-[120px] grid gap-6">
          <h1 className="text-white font-bold text-4xl text-center">
            Vende. Aluga. Conecta.
          </h1>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
