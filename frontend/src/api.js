const BASE_URL = "http://localhost:3001/"; // Correct API base URL

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
      const reqParams = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      if (body) {
        reqParams.body = JSON.stringify(body);
      }
  
      // Use BASE_URL to construct the complete URL
      return await fetch(`${BASE_URL}${urlPath}`, reqParams);
    } catch (error) {
      console.error("Request error:", error);
    }
}

export const getAllChams = async () => {
    const rawRes = await baseRequest({method: "GET"});
    return await rawRes.json();
}