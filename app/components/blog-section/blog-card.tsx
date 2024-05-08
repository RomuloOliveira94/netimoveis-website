import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="w-[294px] h-[320px] mt-8 flex flex-col gap-6">
      <div className="w-full">
        <Image
          src="/blog/image03.png"
          alt="CE"
          width={384}
          height={252}
          className="rounded-xl w-full"
        />
      </div>

      <div className="flex flex-col w-full gap-2">
        <div className="flex gap-4">
          <span className="text-body flex gap-2">
            <Image
              src={"/icons/clock-icon.svg"}
              alt="clock"
              width={10}
              height={10}
            />
            2 mins de leitura
          </span>
          <span className="text-primary ">Mundo Netimóveis</span>
        </div>
        <h1 className="text-1xl font-bold">
          ENCONTRO NETIMÓVEIS BRASIL – N CONNECTIONS 2021: A FORÇA DOS NEGÓCIOS
          EM REDE
        </h1>
      </div>
    </div>
  );
};

export default BlogCard;
