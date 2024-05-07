import Image from "next/image";

const SearchBar = () => {
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
    </div>
  );
};

export default SearchBar;
