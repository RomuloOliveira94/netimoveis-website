"use client";

import Image from "next/image";
import { PlaceType } from "../data/place/types";
import { useState } from "react";
import PlaceList from "../data/place/place-list";
import placeJson from "../db/place.json" assert { type: "json" };

const placeList = new PlaceList(placeJson);

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<PlaceType[] | []>([]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    const results = placeList.searchByText(searchText);
    setSearchResults(results);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    setSearchResults([]);
  };

  return (
    <div className="min-w-[771px] h-[78px] rounded-full bg-white flex items-center relative">
      <div className="w-1/2 h-full class flex flex-col gap-1 justify-center p-8 rounded-full hover:bg-[#EDF1F4]">
        <label
          htmlFor="search"
          className="flex gap-2 items-center font-semibold text-sm"
        >
          <Image
            src={"/icons/local-icon.svg"}
            alt="local"
            width={14}
            height={14}
          />{" "}
          Localização
        </label>
        <input
          className="bg-inherit focus:outline-none"
          type="text"
          name="search"
          onChange={onSearch}
          value={searchText}
          placeholder="Qual é a localização?"
        />
      </div>
      <div className="w-1/2 h-full class flex flex-col gap-1 justify-center p-8 rounded-full hover:bg-[#EDF1F4] cursor-pointer">
        <span className="flex gap-2 items-center font-semibold text-sm">
          <Image
            src={"/icons/bed-icon.svg"}
            alt="cama"
            width={20}
            height={20}
          />
          N° de quartos
        </span>
        <span className="text-gray-400">Quantos Quartos?</span>
      </div>
      <button className="bg-primary rounded-full absolute right-2 h-[58px] w-[58px] flex items-center justify-center hover:bg-orange-600">
        <Image
          src={"/icons/search-icon.svg"}
          alt="search"
          width={20}
          height={20}
        />
      </button>
      {searchResults.length > 0 && searchText && (
        <div className="absolute top-20 bg-white rounded-lg shadow-lg p-3 cursor-pointer w-fit">
          <span className="text-gray-400 mx-auto my-2">
            Busque por cidade, região, bairro ou código
          </span>
          {searchResults.map((place) => (
            <div
              key={place.name}
              onClick={() => handleSearch(`${place.name}, ${place.state.name}`)}
              className="p-4"
            >
              <h1 className="flex gap-2">
                <Image
                  src={"/icons/local-icon.svg"}
                  width={10}
                  height={10}
                  alt="local"
                />{" "}
                {place.name}, {place.state.name}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
