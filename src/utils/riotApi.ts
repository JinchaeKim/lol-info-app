export const getChampionRotation = async () => {
  const res = await fetch("http://localhost:3000/api/rotation");
  const data = await res.json();

  return data;
};
