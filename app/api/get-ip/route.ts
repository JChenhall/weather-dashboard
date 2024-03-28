export const getIp = async () => {
  const res = await fetch(`https://freeipapi.com/api/json/`);
  if (!res.ok) {
    throw new Error("failed to fetch IP");
  }
  const data = await res.json();
  return data;
};
