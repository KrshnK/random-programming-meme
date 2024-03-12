// test.js

const { getProgrammingMeme } = require('./index');

(async () => {
  try {
    const meme = await getProgrammingMeme();
    console.log('Programming Meme:', meme);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
