import Image from "next/image";

const StateCard = () => {
  return (
    <div className="w-[294px] h-[320px] mt-8 flex flex-col gap-6">
      <div>
        <Image
          src="/states/CE.png"
          alt="CE"
          width={294}
          height={192}
          className="rounded-xl w-full"
        />
      </div>

      <div className="flex items-center gap-2 ml-4">
        <ul className=" text-body text-sm flex flex-col gap-1">
          <li className="relative before:content-['•'] before:absolute before:-left-3 before:-bottom-1.5 before:text-primary before:text-2xl">
            Casas à venda em Belo Horizonte
          </li>
          <li className="relative before:content-['•'] before:absolute before:-left-3 before:-bottom-1.5 before:text-primary before:text-2xl">
            Apto. à venda em Belo Horizonte
          </li>
          <li className="relative before:content-['•'] before:absolute before:-left-3 before:-bottom-1.5 before:text-primary before:text-2xl">
            Casas para Locação em Belo Horizonte
          </li>
          <li className="relative before:content-['•'] before:absolute before:-left-3 before:-bottom-1.5 before:text-primary before:text-2xl">
            Casas para Locação em Belo Horizonte
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StateCard;
