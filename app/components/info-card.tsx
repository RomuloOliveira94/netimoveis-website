"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";

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
    button?: string;
    button2?: string;
    link1?: string;
    link2?: string;
  }[];
  styles?: string;
  navStyles?: string;
  setCustomTabs?: (index: number) => void;
}

const InfoCard = ({
  tabsMenu,
  tabs,
  styles,
  navStyles,
  setCustomTabs,
}: InfoCardProps) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleActiveTab = (index: number) => {
    if (setCustomTabs) setCustomTabs(index);
    setActiveTab(index);
  };

  const menuRef = useRef<HTMLElement>(null);

  const scrollMenu = (offset: number) => {
    if (menuRef.current)
      menuRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div
      className={twMerge(
        "w-[513px] h-[471px] rounded-xl shadow-md bg-white relative",
        styles
      )}
    >
      <div
        className={twMerge(
          "flex justify-between items-center px-12 py-6 relative",
          navStyles
        )}
        ref={menuRef as any}
      >
        {tabsMenu.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleActiveTab(tab.id)}
            className={twMerge(
              "flex flex-col gap-2 items-center justify-center text-center cursor-pointer w-full"
            )}
          >
            <Image src={tab.icon} alt={tab.title} width={22} height={22} />{" "}
            <span>{tab.title}</span>
            <div
              className={twMerge(
                "w-[87px] h-0.5 bg-primary mt-4 absolute bottom-0",
                activeTab === tab.id ? "block" : "hidden"
              )}
            ></div>
          </div>
        ))}
      </div>
      {tabsMenu.length > 3 && (
        <>
          <button
            onClick={() => scrollMenu(-500)}
            className="absolute left-0 top-14 flex items-center justify-center w-12"
          >
            <Image
              src="/icons/arrow-left.svg"
              alt="arrow-left"
              width={12}
              height={12}
            />
          </button>
          <button
            onClick={() => scrollMenu(500)}
            className="absolute right-0 top-14 flex items-center justify-center w-12"
          >
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              width={12}
              height={12}
            />
          </button>
        </>
      )}
      <hr />

      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={twJoin(
            "flex flex-col gap-4 p-10",
            activeTab === tab.id ? "block" : "hidden"
          )}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{tab.title}</h1>
            <p className="text-body">{tab.description}</p>
          </div>
          <div
            className={twJoin(
              "mt-6 flex items-center gap-4",
              tab.button2 && "justify-center",
              tab.button ? "block" : "hidden"
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
          <div
            className={twJoin(
              "flex flex-col gap-2 mt-6",
              tab.link1 ? "block" : "hidden"
            )}
          >
            <Link
              href={tab.link1 ? tab.link1 : "/"}
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
