# node-multilanguage-quotes

Generate a random quote in any specified language in a promise based manner

```js
getQuote('fr').then( res => {
    console.log(res)}
    //Des mots gentils vont déverrouiller une porte en fer.
    )
.catch(err => {
    console.log(err)}
    );
```

The language in which the quote is translated must be one of the codes/names contained in [languages.js.](https://github.com/ragrag/node-multilanguage-quotes/blob/master/languages.js).

## Getting started


To use it in `node.js` first install by:

```bash
npm install node-multilanguage-quotes --save
```

Then import it:

```js
const getQuote = require('node-multilanguage-quotes');
```

