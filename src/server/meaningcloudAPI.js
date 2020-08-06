const axios = require ("axios")


const fetchAPI = async (url) => {
  const res = await axios(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&url=${url}&model=general&lang=en`);
  try {
    return res.data;
  } catch (e) {
    console.log("Error", e);
  }
}

 module.exports =  fetchAPI
