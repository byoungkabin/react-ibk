import axios from "axios";

export const getMovies = async (params) => {
  const config = {
    method: "GET",
    url: "/v1/search/movie.json",
    headers: {
      "X-Naver-Client-Id": "cI3E2q5yE1AFjw0RkHWB",
      "X-Naver-Client-Secret": "5iyJkTj1nI",
    },
    params,
  };
  const result = await axios(config);
  return result.data;
};

export const getBooks = async (params) => {
  const config = {
    method: "GET",
    url: "/v1/search/book.json",
    headers: {
      "X-Naver-Client-Id": "cI3E2q5yE1AFjw0RkHWB",
      "X-Naver-Client-Secret": "5iyJkTj1nI",
    },
    params,
  };
  const result = await axios(config);
  return result.data;
};
