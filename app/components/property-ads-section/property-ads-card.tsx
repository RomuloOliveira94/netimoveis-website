import Image from "next/image";

const PropertyAdsCard = () => {
  return (
    <div className="w-[294px] h-[387px] rounded-xl mt-4 border border-gray-300">
      <div>
        <Image
          src={"/properties/image01.png"}
          alt="imovel"
          width={293}
          height={198}
          className="rounded-t-xl"
        />
      </div>

      <div className="grid gap-2 p-4">
        <div>
          <h1 className="font-semibold text-lg mt-2">Casa à Venda, 113m²</h1>
          <p className="text-sm text-gray-400">
            Cristiano Moreira Sales, Buritis
          </p>
        </div>
        <p className="text-sm text-gray-400">
          3 quartos - 2 banheiros - 4 vagas
        </p>
        <p className="text-smflex items-center gap-2">
          <span className="rounded-full bg-gray-200 text-body text-xs p-1 px-2">
            Armário embutido
          </span>{" "}
          <span className="rounded-full bg-gray-200 text-body text-xs p-1 px-2">
            elevador
          </span>
        </p>
        <p className="text-primary font-bold text-xl">R$ 268.000</p>
      </div>
    </div>
  );
};

export default PropertyAdsCard;
