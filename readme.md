# minimal-timer

> Keeps track of the elapsed time in miliseconds.

[![Build Status](https://travis-ci.org/AlvaroBernalG/minimal-timer.svg?branch=master)](https://travis-ci.org/AlvaroBernalG/minimal-timer) [![npm version](https://badge.fury.io/js/minimal-timer.svg)](https://badge.fury.io/js/minimal-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
$ npm install minimal-timer
```

## Usage 

```js
const delay = require('delay')
const timer = require('minimal-timer')

const time = timer() // initializing timer

await delay(500)

console.log(time.elapsedTime()) // => 500 +- 

stop()

await delay(500)

console.log(time.elapsedTime()) // => 500 +- 

resume()

await delay(500)

console.log(time.elapsedTime()) // => 1000 +- 

```

## API

### stop() `void`

Stops the timer

### resume() `void`

Resumes the timer

### elapsedTime() `number` 

Returns the elapased time in miliseconds

## License
MIT © [Alvaro Bernal](https://github.com/AlvaroBernalG/) 
