

export const getIdeas = async (query = "") => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas?query=${query}`);
  const data = await res.json();
  return data;
};

export const getFeaturedIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
  const data = await res.json();
  return data;
};

export const getIdeaById = async (ideaId) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas/${ideaId}`);
  const data = await res.json();
  return data;
};
