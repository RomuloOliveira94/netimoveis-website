"use client";

import Link from "next/link";

const NavigationFooter = () => {
  const nav = [
    {
      id: 1,
      title: "A Netimóveis",
      links: [
        { name: "Quem somos", path: "/" },
        { name: "Como funciona", path: "/" },
        { name: "Seja um parceiro", path: "/" },
        { name: "Quero me associar", path: "/" },
        { name: "Acessoria de imprensa", path: "/" },
        { name: "Soluções Corporativas", path: "/" },
        { name: "Covid-19", path: "/" },
      ],
    },
    {
      id: 2,
      title: "Recursos",
      links: [
        { name: "Comprar", path: "/" },
        { name: "Alugar", path: "/" },
        { name: "Lançamentos", path: "/" },
        { name: "Anunciar Imóvel", path: "/" },
        { name: "Simular Financiamento", path: "/" },
        { name: "Imobiliárias", path: "/" },
        { name: "Blog", path: "/" },
      ],
    },
    {
      id: 3,
      title: "Contato",
      links: [
        { name: "Fale Conosco", path: "/" },
        { name: "Perguntas Frequentes", path: "/" },
        { name: "Suporte", path: "/" },
      ],
    },
    {
      id: 4,
      title: "Nossos Aplicativos",
      links: [
        { name: "Loc Fácil Netimóveis", path: "/" },
        { name: "Pro Imob Netimóveis", path: "/" },
      ],
    },
  ];

  return (
    <section className="bg-[#EDF1F4] w-full py-10">
      <div className="container">
        <div className="grid grid-cols-4 items-start my-10">
          {nav.map((item) => (
            <div key={item.id} className="grid gap-2">
              <h1 className="font-bold text-body" key={item.id}>
                {item.title}
              </h1>
              {item.links.map((link) => (
                <Link key={link.name} href={link.path}>
                  {link.name}
                </Link>
              ))}
              {item.id === 4 && (
                <div className="flex gap-4 mt-4">
                  <img src="/icons/google-play.svg" alt="Google Play" />
                  <img src="/icons/app-store.svg" alt="App Store" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationFooter;
