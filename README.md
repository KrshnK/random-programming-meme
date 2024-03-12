# Random Programming Meme

A simple npm package that provides a random programming meme. It fetches memes from the "ProgrammerHumor" subreddit on Reddit.

## Installation

```bash
npm install random-programming-meme
```

## Usage

```javascript
const { getProgrammingMeme } = require('random-programming-meme');

(async () => {
  try {
    const meme = await getProgrammingMeme();
    console.log('Programming Meme:', meme);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

## Example Output

```json
{
  "title": "A witty programming meme",
  "imageUrl": "https://example.com/meme.jpg"
}
```

## Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [node-html-parser](https://www.npmjs.com/package/node-html-parser)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
