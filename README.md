Fish-and-chips
============

A small library providing the conversion of British English words to their American English counterparts for correct usage in HTML and CSS

## Installation

  npm install fish-and-chips --save

## Usage

var fish = require('fish-and-chips')

var css = 'text-align: centre;',\s\s
css = fish.toAmerican(css);

## Tests

npm test

## Contrbuting

General styleguide:
smallcase for filenames\s\s
camelCase for methods and variables\s\s
PascalCase for Class Names\s\s

Add unit tests for any new or changed functionality\s\s
Lint and test your code.\s\s

