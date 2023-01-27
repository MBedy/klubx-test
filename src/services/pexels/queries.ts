import { PEXELS_API_KEY } from "../../utils/env";

const BASE_URL = "https://api.pexels.com/v1/search?query=nature&per_page=50";

export const fetchImages = (page = 1) => {
  return fetch(`${BASE_URL}&page=${page}`, {
    headers: {
      Authorization: `${PEXELS_API_KEY}`,
    },
  }).then((res) => res.json());
};
