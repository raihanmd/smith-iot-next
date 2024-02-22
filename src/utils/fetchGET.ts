export const fetchGET = async () => {
  try {
    const res = await fetch(
      //@ts-ignore
      process.env.NEXT_PUBLIC_API_URL as string,
      {
        method: "GET",
        headers: {
          //@ts-ignore
          "X-M2m-Origin": process.env.NEXT_PUBLIC_ACCESS_KEY as string,
          "Content-Type": "application/json;ty=4",
          Accept: "application/json",
        },
        next: { revalidate: 10 },
      }
    );

    const json = await res.json();
    return json;
  } catch (error) {
    throw error;
  }
};
