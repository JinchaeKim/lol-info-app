"use client";

import { getImgUrl, getRotation } from "../hooks/quries";
import Card from "@/_components/Card";

export default function Rotationpage() {
  const { data: imgUrl, isPending, isError, error } = getImgUrl();
  const { data: rotation = [] } = getRotation();

  if (isPending) {
    return <div>로딩 중입니다..</div>;
  }

  if (isError) {
    return (
      <>
        <div>에러가 발생했습니다!</div>
        <p>에러:{error.message}</p>
      </>
    );
  }

  return (
    <main className="m-[50px]">
      <h1 className="flexCenter title mt-[80px] text-[30px]">
        Champion Rotation (This week for free!)
      </h1>
      <div className="itemGrid mt-[30px] auto-rows-[minmax(200px,auto)]">
        {rotation.map((champion) => (
          <Card
            key={champion.key}
            id={champion.id}
            name={champion.name}
            title={champion.title}
            image={champion.image}
            img_Url={imgUrl}
          />
        ))}
      </div>
    </main>
  );
}
