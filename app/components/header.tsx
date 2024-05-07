"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className={"py-4 fixed w-full bg-white z-50"}>
      <nav className="container relative flex items-center justify-between text-body">
        <div className="flex items-center justify-center gap-4 lg:gap-8  flex-col lg:flex-row">
          <Link href="/#hero">
            <Image
              src={"/logo-netimoveis.png"}
              alt="Netimóveis"
              width={150}
              height={50}
            />
          </Link>
          <ul
            className={twMerge(
              "flex items-center gap-8 max-lg:hidden bg-white",
              show ? "max-lg:grid gap-4" : ""
            )}
            onClick={() => setShow(false)}
          >
            <Link href={"/#imobiliárias"}>Imobiliárias</Link>
            <Link href={"/#associar"}>Quero me Associar</Link>
            <Link href={"/#sobre"}>Sobre</Link>
            <Link href={"/#blog"}>Blog</Link>
          </ul>

          <ul
            className={twMerge(
              "hidden bg-white",
              show ? "grid gap-4 justify-center" : ""
            )}
            onClick={() => setShow(false)}
          >
            <Link
              href={"/#hero"}
              className="flex rounded-full px-4 py-0.5 border border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              Anunciar Imóvel
            </Link>
            <Link href={"/#prices"} className="ml-2">
              Entrar
            </Link>
          </ul>
        </div>

        <div className="grid gap-3">
          <ul
            className={"flex items-center gap-8 max-lg:hidden bg-white"}
            onClick={() => setShow(false)}
          >
            <Link
              href={"/#anunciar"}
              className="rounded-full px-4 py-0.5 border border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              Anunciar Imóvel
            </Link>
            <Link href={"/#login"}>Entrar</Link>
          </ul>
        </div>

        <button
          className="text-body bg-white p-2 self-start max-lg:block hidden font-semibold rounded-md"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6.001h18m-18 6h18m-18 6h18"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
