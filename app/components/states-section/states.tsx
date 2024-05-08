import Image from "next/image";
import StateCard from "./state-card";
import PortugalCTA from "./portugal-cta";

const States = () => {
  return (
    <section className="container my-20 w-full">
      <div className="flex justify-between">
        <div className="grid gap-2">
          <h1 className="font-bold text-3xl text-body">
            Prontos para te Receber em mais de 10 estados
          </h1>
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
        <StateCard />
        <StateCard />
        <StateCard />
        <StateCard />
      </div>
      <div className="my-20">
        <PortugalCTA />
      </div>
    </section>
  );
};

export default States;
