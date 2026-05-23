export const getIdeas = async (query = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ideas?query=${query}`,
  );
  const data = await res.json();
  return data;
};

export const getFeaturedIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
  const data = await res.json();
  return data;
};

export const getIdeaById = async (ideaId, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ideas/${ideaId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const getCommentsWithIdeaId = async (ideaId, tokenData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${ideaId}`,
    {
      headers: {
        authorization: `Bearer ${tokenData.token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};
