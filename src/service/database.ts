export const getData = async (url: string) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {}
};
