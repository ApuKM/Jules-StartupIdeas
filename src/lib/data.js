export const getIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas`);
  const data = await res.json();
  return data;
};

export const getIdeaById = async (ideaId) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas/${ideaId}`);
  const data = await res.json();
  return data;
};
