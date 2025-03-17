import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    { next: { revalidate: 86400 } },
  );
  const data: string[] = await res.json();
  return NextResponse.json(data[0]);
};
