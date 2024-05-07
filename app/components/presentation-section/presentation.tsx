import PresentationCard from "./presentation-card";

const Presentation = () => {
  return (
    <section className="h-[631px] bg-gradient-to-bl from-[#EDF1F4] to-[#FFFFFF]">
      <div className="container flex justify-between items-center py-6 h-full">
        <div className="max-w-[495px] flex flex-col gap-6">
          <h1 className="text-6xl font-semibold text-body">Encontre um lugar que é a sua cara</h1>
          <p className="text-body">
            A Netimóveis te oferece uma experiência ágil e segura na hora de
            comprar ou alugar seu imóvel. Seja de maneira digital ou física,
            fazemos a diferença neste momento tão importante que é decidir um
            lar.
          </p>
        </div>
        <PresentationCard />
      </div>
    </section>
  );
};

export default Presentation;
