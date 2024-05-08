import Image from "next/image";
import BlogCard from "./blog-card";

const Blog = () => {
  return (
    <section className="container my-20 w-full">
      <div className="flex justify-between">
        <div className="grid gap-2">
          <h1 className="font-bold text-3xl text-body">
            Para compradores, vendedores ou curiosos :)
          </h1>
        </div>
        <div className="flex items-center gap-2 w-fit">
          <a href="#" className="text-body font-semibold flex gap-1">
            Ver mais no Blog
            <Image
              src={"/icons/arrow-complete-right-icon.svg"}
              alt="Arrow Right"
              width={14}
              height={14}
            />
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
