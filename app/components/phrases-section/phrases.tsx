import Image from "next/image";

const Phrases = () => {
  return (
    <section className="w-full my-20 flex">
      <Image
        src="/5 - Apresentação.png"
        alt="phrase1"
        width={600}
        height={400}
        className="w-1/2"
      />

      <div className="w-1/2 flex flex-col gap-6 bg-gradient-to-bl from-[#EDF1F4] to-[#FFFFFF] p-16 text-body ml-10">
        <h1 className="text-2xl font-semibold">Aqui vai uma frase de efeito</h1>
        <div className="flex flex-col gap-3 w-2/3">
          <h2 className="relative before:content-['•'] before:absolute before:-left-10 before:-bottom-7 before:text-body before:text-8xl text-lg font-semibold">
            Motivo para negociar com a Netimóveis
          </h2>
          <p>
            Aqui é desenvolvido esse motivo para negociar com a Netimóveis.
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
          </p>
        </div>
        <div className="flex flex-col gap-3 w-2/3">
          <h2 className="relative before:content-['•'] before:absolute before:-left-10 before:-bottom-7 before:text-body before:text-8xl text-lg font-semibold">
            Motivo para negociar com a Netimóveis
          </h2>
          <p>
            Aqui é desenvolvido esse motivo para negociar com a Netimóveis.
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
          </p>
        </div>
        <div className="flex flex-col gap-3 w-2/3">
          <h2 className="relative before:content-['•'] before:absolute before:-left-10 before:-bottom-7 before:text-body before:text-8xl text-lg font-semibold">
            Motivo para negociar com a Netimóveis
          </h2>
          <p>
            Aqui é desenvolvido esse motivo para negociar com a Netimóveis.
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
          </p>
        </div>
      </div>
    </section>
  );
};

export default Phrases;
