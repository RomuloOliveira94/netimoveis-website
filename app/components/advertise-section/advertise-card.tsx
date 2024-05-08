import Image from "next/image";

const AdvertisementCard = () => {
  return (
    <div className="flex rounded-lg border border-gray-300">
      <div>
        <Image
          src="/3 - Anuncie Grátis.png"
          alt="Advertise Card"
          width={822}
          height={420}
          className="rounded-l-lg w-full"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-24 p-10 w-fit">
        <div className="grid gap-4">
          <span className="font-bold text-primary text-lg">
            Quer Vender ou Alugar?
          </span>
          <h1 className="text-4xl font-bold">
            Anuncie grátis <br /> para mais de 100 mil <br /> pessoas todos os
            dias.
          </h1>
        </div>
        <div className="grid gap-4">
          <button className="flex rounded-md px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white w-fit">
            Anunciar Imóvel
          </button>
          <a href="#" className="text-body font-semibold flex gap-1">
            Saiba quanto vale seu imóvel
            <Image
              src={"/icons/arrow-complete-right-icon.svg"}
              alt="Arrow Right"
              width={14}
              height={14}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
