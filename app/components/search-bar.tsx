"use client";

import Image from "next/image";
import { PlaceType } from "../data/place/types";
import { useState } from "react";
import PlaceList from "../data/place/place-list";
import placeJson from "../db/place.json" assert { type: "json" };
import { twMerge } from "tailwind-merge";

const placeList = new PlaceList(placeJson);

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<PlaceType[] | []>([]);
  const [showRoomsSearch, setShowRoomsSearch] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    const results = placeList.searchByText(searchText);
    setSearchResults(results);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    setShowRoomsSearch(true);
    setSearchResults([]);
  };

  const handleSelectRoom = (value: number) => {
    setSelectedRoom(value);
  };

  const roomsOptions = [
    { value: 0, label: "Todos" },
    { value: 1, label: "+1" },
    { value: 2, label: "+2" },
    { value: 3, label: "+3" },
    { value: 4, label: "+4" },
  ];

  return (
    <div className="min-w-[771px] h-[78px] rounded-full bg-white flex items-center relative">
      <div className="w-1/2 h-full class flex flex-col gap-1 justify-center p-8 rounded-full hover:bg-[#EDF1F4] relative">
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
        {searchResults.length > 0 && searchText && (
          <div className="absolute top-20 bg-white rounded-lg shadow-lg p-3 cursor-pointer w-fit">
            <span className="text-gray-400 mx-auto my-2">
              Busque por cidade, região, bairro ou código
            </span>
            {searchResults.map((place) => (
              <div
                key={place.name}
                onClick={() =>
                  handleSearch(`${place.name}, ${place.state.name}`)
                }
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
      <div
        className="w-1/2 h-full class flex flex-col gap-1 justify-center p-8 rounded-full hover:bg-[#EDF1F4] cursor-pointer relative"
        onClick={() => setShowRoomsSearch(true)}
      >
        <span className="flex gap-2 items-center font-semibold text-sm">
          <Image
            src={"/icons/bed-icon.svg"}
            alt="cama"
            width={20}
            height={20}
          />
          N° de quartos
        </span>
        <span className="text-gray-400">
          {selectedRoom
            ? `${selectedRoom}+ quartos`
            : selectedRoom === 0
            ? "Todos os Quartos"
            : "Quantos Quartos?"}
        </span>
        {showRoomsSearch && (
          <div className="bg-white flex flex-col gap-6 absolute top-20 w-[333px] p-6 rounded-xl z-10">
            <div className="flex flex-col gap-2">
              <span>Número de Quartos</span>
              <ul className="flex gap-4">
                {roomsOptions.map((room) => (
                  <li
                    key={room.value}
                    onClick={() => handleSelectRoom(room.value)}
                    className={twMerge(
                      "rounded-full p-2 cursor-pointer w-full text-center border border-gray-300 hover:border-secondary",
                      selectedRoom === room.value
                        ? "border-secondary bg-purple-100 w-full text-center"
                        : ""
                    )}
                  >
                    {room.label}
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <span>Tipo de Propriedade</span>
              <select
                name="property"
                className="bg-white border border-gray-300 rounded-md p-2"
              >
                <option value="Todos">Todos os tipos</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <button
        className="bg-primary rounded-full absolute right-2 h-[58px] w-[58px] flex items-center justify-center hover:bg-orange-600"
        onClick={() => setShowRoomsSearch(false)}
      >
        <Image
          src={"/icons/search-icon.svg"}
          alt="search"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default SearchBar;
