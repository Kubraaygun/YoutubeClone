import axios from "axios";

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
  params: { geo: "TR", lang: "tr" },

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);
    //console.log(response);
    return response.data;
  } catch (err) {
    console.error("error data", err);
  }
};
