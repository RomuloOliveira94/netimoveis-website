"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const nav = [
    {
      id: 1,
      title: "Alugar",
      links: [
        { name: "Apartamentos", path: "/" },
        { name: "Casas", path: "/" },
        { name: "Terrenos", path: "/" },
        { name: "Lojas", path: "/" },
      ],
    },
    {
      id: 2,
      title: "Comprar",
      links: [
        { name: "Casas à venda", path: "/" },
        { name: "Imóv. em Condomínios", path: "/" },
        { name: "Comprar terrenos", path: "/" },
        { name: "Lançamentos", path: "/" },
      ],
    },
    {
      id: 3,
      title: "Comercial",
      links: [
        { name: "imóveis com escritório", path: "/" },
        { name: "Prédio comercial", path: "/" },
        { name: "Galpão de Armazenamento", path: "/" },
        { name: "Salão de Eventos", path: "/" },
      ],
    },
  ];

  const navMenu = [
    {
      id: 1,
      title: "Tipos de Propriedades",
    },
    {
      id: 2,
      title: "Populares para Venda",
    },
    {
      id: 3,
      title: "Populares para Locação",
    },
  ];

  return (
    <section className="container py-20">
      <div className="flex gap-4 items-center p-4 relative">
        {navMenu.map((item) => (
          <div className="flex flex-col gap-2 items-center justify-center text-center cursor-pointer">
            <h1
              onClick={() => handleActiveTab(item.id)}
              key={item.id}
              className="font-bold text-body cursor-pointer"
            >
              {item.title}
            </h1>
            <div
              className={twMerge(
                "w-[170px] h-0.5 bg-primary mt-4 absolute bottom-0",
                activeTab === item.id ? "block" : "hidden"
              )}
            ></div>
          </div>
        ))}
      </div>
      <hr />
      <div className="grid grid-cols-4 mt-6">
        {nav.map((item) => (
          <div className="grid gap-2" key={item.id}>
            <h1 className="font-bold text-body">{item.title}</h1>
            {item.links.map((link) => (
              <Link key={link.name} href={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navigation;
