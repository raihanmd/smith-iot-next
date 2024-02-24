const headers = {
  "Access-Control-Allow-Origin": "*",
  "X-M2M-Origin": process.env.NEXT_PUBLIC_ACCESS_KEY || "",
  "Content-Type": "application/json;ty=4",
  Accept: "application/json",
};

export default headers;
