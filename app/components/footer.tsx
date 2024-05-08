import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-primary w-full py-4">
      <div className="container flex justify-between items-center">
        <Link href="/#hero">
          <Image
            src={"/logo-no-bg.png"}
            alt="Netimóveis"
            width={150}
            height={50}
          />
        </Link>
        <div className="text-white flex flex-col gap-2">
          <span>
            © Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.
          </span>
          <div className="flex gap-4">
            <Link href={"/"}>Política de privacidade </Link>
            <Link href={"/"}>Termos de uso</Link>
            <Link href={"/"}>LGPD</Link>
            <span>Versão: 25/10/2021</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src={"/social-media/instagram.svg"}
            alt="Google Play"
            width={38}
            height={38}
          />
          <Image
            src={"/social-media/facebook.svg"}
            alt="Google Play"
            width={38}
            height={38}
          />
          <Image
            src={"/social-media/youtube.svg"}
            alt="Google Play"
            width={38}
            height={38}
          />
          <Image
            src={"/social-media/linkedin.svg"}
            alt="Google Play"
            width={38}
            height={38}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
