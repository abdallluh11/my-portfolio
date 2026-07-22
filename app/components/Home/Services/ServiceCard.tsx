import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ description, icon, name }: Props) => {
  return (
    <div>
      <Image src={icon} alt={name} width={60} height={60} />
      <h1 className="mt-6 text-2xl font-bold text-white">{name}</h1>
      <p className="mt-6 text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
