"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type CardProps = {
  id: string | null;
  name: string;
  title: string;
  img_Url: string;
  image: { full: string };
};

const Card: React.FC<CardProps> = ({ id, name, title, img_Url, image }) => {
  const [hover, setHover] = useState<string | null>(null);

  const CardContens = (
    <div
      className="hoverAction h-auto w-[200px] p-4 shadow-xl"
      onMouseEnter={() => setHover(id)}
      onMouseLeave={() => setHover(null)}
    >
      <Image
        src={`${img_Url}${image.full}`}
        alt="Picture of the Champion/Item"
        width={200}
        height={200}
        className="rounded-lg"
      />
      {hover === id && (
        <div className="flexCenter hoverCard">
          <div className="flexCenter z-20 flex-col">
            <h2 className="title text-[25px]">
              {name.replace(/<[^>]+>|@\w+@/g, "")}
            </h2>
            <p className="text-emerald-50">
              {title.replace(/<[^>]+>|@\w+@/g, "")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <>
      {id ? (
        <Link className="mx-auto flex" href={`/champions/${id}`}>
          {CardContens}
        </Link>
      ) : (
        CardContens
      )}
    </>
  );
};

export default Card;
