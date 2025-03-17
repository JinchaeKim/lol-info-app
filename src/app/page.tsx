import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LOL Info Home",
  description: "This is Home Website",
};

export default function Home() {
  return (
    <>
      <h1 className="flexCenter title mt-[90px] text-[30px]">
        LEAGUE of LEGENDS info App
      </h1>
      <p className="flexCenter my-[15px] font-bold text-slate-400">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <div className="flexCenter mx-auto mt-[70px] flex-col gap-[50px]">
        <Link
          href={"/champions"}
          className="navFont hoverAction grid gap-3 text-[20px]"
        >
          <Image
            src="/images/championList.webp"
            alt="championListimg"
            width={600}
            height={550}
            className="hover: rounded-lg shadow-xl"
          />
          <p className="mx-auto">Champion List</p>
        </Link>
        <Link
          href={"/rotation"}
          className="navFont hoverAction grid gap-3 text-[20px]"
        >
          <Image
            src="/images/rotation.webp"
            alt="rotationimg"
            width={600}
            height={550}
            className="hover: rounded-lg shadow-xl"
          />
          <p className="mx-auto">Rotation List</p>
        </Link>
        <Link
          href={"/items"}
          className="navFont hoverAction grid gap-3 text-[20px]"
        >
          <Image
            src="/images/items.webp"
            alt="itemimg"
            width={600}
            height={550}
            className="hover: rounded-lg shadow-xl"
          />
          <p className="mx-auto">Item List</p>
        </Link>
      </div>
    </>
  );
}
