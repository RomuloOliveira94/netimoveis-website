import InfoCard from "../info-card";

const PresentationCard = () => {
  const tabMenu = [
    {
      id: 1,
      title: "Alugar Imóvel",
      icon: "/icons/key-icon.svg",
    },
    {
      id: 2,
      title: "Comprar Imóvel",
      icon: "/icons/dolar-icon.svg",
    },
    {
      id: 3,
      title: "Anunciar Imóvel",
      icon: "/icons/house-icon.svg",
    },
  ];

  const tabs = [
    {
      id: 1,
      title: "Alugue sem complicação",
      description:
        "Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis unde omnis iste natus error sit.",
      button: "Ver imóveis para Alugar",
      button2: "Ver imóveis para Alugar",
      link1: "Veja como Alugar sem Fiador",
      link2: "Saiba como funciona o Aluguel na Netimóveis",
    },
    {
      id: 2,
      title: "Compre com Segurança",
      description:
        "Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis unde omnis iste natus error sit.",
      button: "Ver imóveis para Comprar",
      link1: "Simule seu Financiamento",
      link2: "Saiba como funciona a Compra na Netimóveis",
    },
    {
      id: 3,
      title: "Anuncie seu Imóvel",
      description:
        "Anuncie gratuitamente na maior rede de imobiliárias do Brasil.",
      button: "Anunciar imóvel",
      link1: "Simule seu Financiamento",
    },
  ];

  return <InfoCard tabsMenu={tabMenu} tabs={tabs} />;
};

export default PresentationCard;
