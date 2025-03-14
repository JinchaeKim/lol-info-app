import React from "react";

const ChampionDetail = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div>ChampionDetail</div>
      <div>챔피언 : {params.id}</div>
    </div>
  );
};

export default ChampionDetail;
