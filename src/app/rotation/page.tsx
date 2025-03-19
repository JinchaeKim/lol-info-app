"use client";

import { getImgUrl, getRotation } from "../hooks/quries";
import Card from "@/_components/Card";
import Loading from "../loading";

export default function Rotationpage() {
  const { data: imgUrl, isPending } = getImgUrl();
  const { data: rotation = [] } = getRotation();

  if (isPending) {
    return <Loading />;
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
            img_Url={imgUrl ?? ""} // 에러 처리 생략 시, data는 undefined가 될 가능성
          />
        ))}
      </div>
    </main>
  );
}
