export const fetchGET = async () => {
  try {
    const res = await fetch(
      //@ts-ignore
      process.env.NEXT_PUBLIC_API_URL,
      {
        method: "GET",
        headers: {
          //@ts-ignore
          "X-M2m-Origin": process.env.ACCESS_KEY,
          "Content-Type": "application/json;ty=4",
          Accept: "application/json",
        },
        next: { revalidate: 10 },
      }
    );

    const json = await res.json();
    return JSON.parse(json["m2m:cin"].con);
  } catch (error) {
    throw error;
  }
};
