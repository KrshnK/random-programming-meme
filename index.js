// index.js

const axios = require('axios');
const { parse } = require('node-html-parser');

const getProgrammingMeme = async () => {
  try {
    const response = await axios.get('https://www.reddit.com/r/ProgrammerHumor/random.json');
    const memeData = response.data[0].data.children[0].data;
    const memeTitle = memeData.title;
    const memeImageUrl = memeData.url_overridden_by_dest;

    return { title: memeTitle, imageUrl: memeImageUrl };
  } catch (error) {
    console.error('Error fetching programming meme:', error.message);
    throw error;
  }
};

module.exports = { getProgrammingMeme };
