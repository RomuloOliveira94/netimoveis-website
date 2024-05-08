import Image from "next/image";

const Associate = () => {
  return (
    <section className="container my-20">
      <div className="flex items-center justify-between bg-[#1C2A39] rounded-xl">
        <div className="bg-[#1C2A39] flex flex-col gap-4 p-10 text-white rounded-l-xl">
          <button className="rounded-full px-4 py-1 border border-primary w-fit text-white hover:bg-primary hover:text-white">
            Para empressas
          </button>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl font-bold">Faça parte da Netimóveis</h1>
              <p className="font-semibold text-xl">
                É uma empresa ou rede de imobiliárias? Associe-se e <br />
                alcance um próximo patamar de eficiência e tecnologia.
              </p>
            </div>

            <div className="flex items-center gap-16">
              <button className="rounded-xl px-4 py-2 border bg-white border-primary w-fit text-primary hover:bg-primary hover:text-white">
                Mais sobre se associar
              </button>

              <a href="#" className="underline">
                Conheça Nossos Produtos
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-r-xl">
          <Image
            src="/6 - Faça parte.png"
            alt="associates"
            width={604}
            height={352}
            className="flex-1 rounded-r-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Associate;
