import axios from "axios";

const BASE_URL = "https://gnews.io/api/v4";

export async function fetchSearch(q: string, apiKey: string) {
  const { data } = await axios.get(`${BASE_URL}/search`, {
    params: {
      q,
      lang: "en",
      max: 10,
      apikey: apiKey,
    },
  });
  return data.articles;
}

export async function fetchTop(country: string, apiKey: string) {
  const { data } = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country,
      lang: "en",
      max: 10,
      apikey: apiKey,
    },
  });
  return data.articles;
}
