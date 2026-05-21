export const getIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas`);
  const data = await res.json();
  return data;
};
