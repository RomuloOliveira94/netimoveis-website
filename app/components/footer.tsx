import Link from "next/link";

const Navigation = () => {
  const nav = [
    {
      title: "Alugar",
      links: [
        { name: "Apartamentos", path: "/" },
        { name: "Casas", path: "/" },
        { name: "Terrenos", path: "/" },
        { name: "Lojas", path: "/" },
      ],
    },
    {
      title: "Comprar",
      links: [
        { name: "Casas à venda", path: "/" },
        { name: "Imóv. em Condomínios", path: "/" },
        { name: "Comprar terrenos", path: "/" },
        { name: "Lançamentos", path: "/" },
      ],
    },
    {
      title: "Comercial",
      links: [
        { name: "imóveis com escritório", path: "/" },
        { name: "Prédio comercial", path: "/" },
        { name: "Galpão de Armazenamento", path: "/" },
        { name: "Salão de Eventos", path: "/" },
      ],
    },
  ];

  return (
    <section className="container py-20">
      <div className="flex gap-4 items-center p-4">
        <span>Tipos de Propriedades</span>
        <span>Populares para Venda</span>
        <span>Populares para Locação</span>
      </div>
      <hr />
      <div className="grid grid-cols-4 mt-6">
        {nav.map((item) => (
          <div className="grid gap-2" key={item.title}>
            <h1 className="font-bold text-body">{item.title}</h1>
            {item.links.map((link) => (
              <Link key={link.name} href={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navigation;
