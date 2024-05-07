"use client";

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const PresentationCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-[513px] h-[471px] rounded-xl shadow-md bg-white">
      <div className="flex justify-between items-center px-10 py-4 relative">
        <span
          onClick={() => handleActiveTab(1)}
          className="flex flex-col gap-2 items-center justify-center text-center cursor-pointer"
        >
          <Image
            src={"/icons/key-icon.svg"}
            alt={"key"}
            width={22}
            height={22}
          />{" "}
          Alugar
          <br /> Imóvel
          <div
            className={twMerge(
              "w-[87px] h-0.5 bg-primary mt-4 absolute bottom-0",
              activeTab === 1 ? "block" : "hidden"
            )}
          ></div>
        </span>
        <span
          onClick={() => handleActiveTab(2)}
          className="flex flex-col items-center gap-2 justify-center text-center cursor-pointer"
        >
          <Image
            src={"/icons/dolar-icon.svg"}
            alt={"key"}
            width={14}
            height={14}
          />{" "}
          Comprar
          <br /> Imóvel
          <div
            className={twMerge(
              "w-[87px] h-0.5 bg-primary mt-4 absolute bottom-0",
              activeTab === 2 ? "block" : "hidden"
            )}
          ></div>
        </span>
        <span
          onClick={() => handleActiveTab(3)}
          className="flex flex-col items-center gap-2 justify-center text-center cursor-pointer"
        >
          <Image
            src={"/icons/house-icon.svg"}
            alt={"key"}
            width={22}
            height={22}
          />{" "}
          Anunciar
          <br /> Imóvel
          <div
            className={twMerge(
              "w-[87px] h-0.5 bg-primary mt-4 absolute bottom-0",
              activeTab === 3 ? "block" : "hidden"
            )}
          ></div>
        </span>
      </div>
      <hr />
      <div className="flex flex-col gap-4 p-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Alugue sem complicação</h1>
          <p className="text-body">
            Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis
            unde omnis iste natus error sit.
          </p>
        </div>
        <button className="flex rounded-md px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white w-fit mt-4">
          Ver imóveis para Alugar
        </button>
        <a href="#" className="underline text-body">
          Veja como Alugar sem Fiador
        </a>
        <a href="#" className="underline text-body">
          Saiba como funciona o Aluguel na Netimóveis
        </a>
      </div>
    </div>
  );
};

export default PresentationCard;
