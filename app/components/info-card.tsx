"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface InfoCardProps {
  tabsMenu: {
    id: number;
    title: string;
    icon: string;
  }[];
  tabs: {
    id: number;
    title: string;
    description: string;
    button: string;
    button2?: string;
    link1: string;
    link2?: string;
  }[];
}

const InfoCard = ({ tabsMenu, tabs }: InfoCardProps) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div className="w-[513px] h-[471px] rounded-xl shadow-md bg-white">
      <div className="flex justify-between items-center px-10 py-4 relative">
        {tabsMenu.map((tab) => (
          <span
            key={tab.id}
            onClick={() => handleActiveTab(tab.id)}
            className="flex flex-col gap-2 items-center justify-center text-center cursor-pointer"
          >
            <Image src={tab.icon} alt={tab.title} width={22} height={22} />{" "}
            <span className="w-1/2">{tab.title}</span>
            <div
              className={twMerge(
                "w-[87px] h-0.5 bg-primary mt-4 absolute bottom-0",
                activeTab === tab.id ? "block" : "hidden"
              )}
            ></div>
          </span>
        ))}
      </div>
      <hr />

      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={twMerge(
            "flex flex-col gap-4 p-10",
            activeTab === tab.id ? "block" : "hidden"
          )}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{tab.title}</h1>
            <p className="text-body">{tab.description}</p>
          </div>
          <div
            className={twMerge(
              "mt-6 flex items-center gap-4",
              tab.button2 && "justify-center"
            )}
          >
            <button className="flex rounded-md px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white w-fit">
              {tab.button}
            </button>
            {tab.button2 && (
              <button className="flex rounded-md px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white w-fit">
                {tab.button2}
              </button>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <Link
              href={tab.link1}
              className="underline text-body hover:text-secondary"
            >
              {tab.link1}
            </Link>
            {tab.link2 && (
              <Link
                href={tab.link2}
                className="underline text-body hover:text-secondary"
              >
                {tab.link2}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
