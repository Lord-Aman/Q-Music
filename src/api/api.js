import Axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchFAQs = async () => {
  try {
    const res = await Axios.get(`${BACKEND_ENDPOINT}/faq`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchTopAlbums = async () => {
  try {
    const res = await Axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await Axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await Axios.get(`${BACKEND_ENDPOINT}/songs`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
