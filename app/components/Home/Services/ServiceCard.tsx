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
    </div>
  );
};

export default ServiceCard;