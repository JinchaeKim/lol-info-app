"use client";

import { getChampionError } from "./hooks/quries";
import Loading from "./loading";

export default function Error() {
  const { error, isPending, isError, refetch } = getChampionError();

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="flexCenter mt-[300px] flex-col gap-8">
        <h1 className="title text-[50px]">에러 발생!</h1>
        <p className="text-white">에러 메세지 : {error.message}</p>
        <button
          onClick={() => refetch()}
          className="rounded-md border-2 border-emerald-100 p-4 text-white"
        >
          다시 시도
        </button>
      </div>
    );
  }
}
