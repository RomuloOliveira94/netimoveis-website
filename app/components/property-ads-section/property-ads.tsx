import Image from "next/image";
import PropertyAdsCard from "./property-ads-card";

const PropertyAds = () => {
  return (
    <section className="container my-20">
      <div className="flex justify-between">
        <div className="grid gap-2">
          <h1 className="font-semibold text-lg">
            Novos Anúncios em{" "}
            <span className="text-primary">Belo Horizonte</span>
          </h1>
          <a href="#" className="text-[#2362AF] flex gap-2 items-center">
            Ver todos os imóveis
            <Image
              src={"/icons/external-icon.svg"}
              alt="external"
              width={12}
              height={12}
            />
          </a>
        </div>
        <div className="flex items-center gap-2 w-fit">
          <button className="border border-gray-400 rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <Image
              src={"/icons/arrow-left.svg"}
              alt="arrow-left"
              width={12}
              height={12}
            />{" "}
          </button>
          <button className="border border-gray-400 rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <Image
              src={"/icons/arrow-right.svg"}
              alt="arrow-left"
              width={12}
              height={12}
            />{" "}
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <PropertyAdsCard />
        <PropertyAdsCard />
        <PropertyAdsCard />
        <PropertyAdsCard />
      </div>
    </section>
  );
};

export default PropertyAds;
