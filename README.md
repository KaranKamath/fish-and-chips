fish-and-chips
============

A small library providing the conversion of British English words to their American English counterparts for correct usage in HTML and CSS

https://www.npmjs.com/package/fish-and-chips

## Installation

```
  npm install fish-and-chips --save
```

## Usage

```js
var fish = require('fish-and-chips')

var css = 'text-align: centre;',  
css = fish.toAmerican(css);
```

## Tests

```
npm test
```

## Contributing

General styleguide:
smallcase for filenames  
camelCase for methods and variables    
PascalCase for Class Names  

Add unit tests for any new or changed functionality  
Lint and test your code.  

