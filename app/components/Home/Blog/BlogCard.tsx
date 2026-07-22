import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt="blog"
        width={500}
        height={500}
        className="object-cover"
      />
      <p className="mt-4 text-gray-500 font-medium text-base sm:text-lg">
        22 July 2026
      </p>
      <h1 className="mt-4 text-lg font-semibold text-white cursor-pointer hover:text-cyan-300 hover:underline transition-colors">
        {title}
      </h1>
      <div className="mt-4 flex gap-2 items-center">
        <p className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full">
          React
        </p>
        <p className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full">
          Next Js
        </p>
        <p className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full">
          Tailwind
        </p>
      </div>
    </div>
  );
};

export default BlogCard;