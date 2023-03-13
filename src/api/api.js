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
