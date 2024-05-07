"use client";

import InfoCard from "../info-card";

interface PropertyOptionsProps {
  setActiveTab: (index: number) => void;
}

const PropertyOptionsCard = ({
  setActiveTab,
}: PropertyOptionsProps) => {
  const tabsMenu = [
    {
      id: 1,
      title: "Pega Sol",
      icon: "/icons/sun-icon.svg",
    },
    {
      id: 2,
      title: "Aceitam Pet",
      icon: "/icons/pet-icon.svg",
    },
    {
      id: 3,
      title: "Boa Internet",
      icon: "/icons/wifi-icon.svg",
    },
    {
      id: 4,
      title: "Tem Varanda",
      icon: "/icons/house-check-icon.svg",
    },
    {
      id: 5,
      title: "Tem Quintal",
      icon: "/icons/house-back-icon.svg",
    },
    {
      id: 6,
      title: "Ônibus Perto",
      icon: "/icons/bus-icon.svg",
    },
  ];

  const tabs = [
    {
      id: 1,
      title: "Sol que ilumina as suas manhãs",
      description:
        "Busque imóveis que pegam Sol durante a manhã para que você fique com a vitamina D em dia  ;)",
      button: "Buscar imóveis",
    },
    {
      id: 2,
      title: "Aceita Pet",
      description:
        "Encontre imóveis que aceitam animais de estimação. Seu pet é bem-vindo!",
      button: "Buscar imóveis",
    },
    {
      id: 3,
      title: "Boa Internet",
      description:
        "Trabalhe de casa com tranquilidade. Encontre imóveis com uma boa conexão de internet.",
      button: "Buscar imóveis",
    },
    {
      id: 4,
      title: "Tem Varanda",
      description:
        "Aproveite o ar fresco e o espaço extra. Encontre imóveis com varanda.",
      button: "Buscar imóveis",
    },
    {
      id: 5,
      title: "Tem Quintal",
      description:
        "Aproveite o espaço para o seu pet ou para cultivar uma horta. Encontre imóveis com quintal.",
      button: "Buscar imóveis",
    },
    {
      id: 6,
      title: "Ônibus Perto",
      description:
        "Facilite a sua locomoção. Encontre imóveis próximos a pontos de ônibus.",
      button: "Buscar imóveis",
    },
  ];

  return (
    <InfoCard
      setCustomTabs={setActiveTab}
      tabs={tabs}
      tabsMenu={tabsMenu}
      styles="mt-8"
      navStyles="gap-28 mx-6 overflow-x-auto [&::-webkit-scrollbar]:hidden"
    />
  );
};

export default PropertyOptionsCard;
