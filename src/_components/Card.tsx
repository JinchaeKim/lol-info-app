"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// 타입이 null이면 타입 에러
type CardProps = {
  id?: string; // string | undefined
  name: string;
  title: string;
  img_Url: string;
  image: { full: string };
};

const Card: React.FC<CardProps> = ({ id, name, title, img_Url, image }) => {
  const [hover, setHover] = useState<string | null>(null);
  const hoverKey = id ?? name; // id가 없을 때 name을 사용

  const CardContens = (
    <div
      className="hoverAction h-auto w-[200px] p-4 shadow-xl"
      onMouseEnter={() => setHover(hoverKey)}
      onMouseLeave={() => setHover(null)}
    >
      <Image
        src={`${img_Url}${image.full}`}
        alt="Picture of the Champion/Item"
        width={200}
        height={200}
        className="rounded-lg"
      />
      {hover === hoverKey && (
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
