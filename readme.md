# minimal-timer

> Minimal time tracker.

[![Build Status](https://travis-ci.org/AlvaroBernalG/minimal-timer.svg?branch=master)](https://travis-ci.org/AlvaroBernalG/minimal-timer) [![npm version](https://badge.fury.io/js/minimal-timer.svg)](https://badge.fury.io/js/minimal-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
$ npm install minimal-timer
```

## Usage 

Basic usage:
```js

const timer = require('minimal-timer')
const delay = require('delay')

const time = timer() // initializing timer

delay(500)

console.log(time.elapsedTime()) // => 500ms +- 

```

## API

### stop() void

Stops the timer

### resume() void

Resumes the timer

### elapsedTime() `number` 

Returns the elapased time

## License
MIT © [Alvaro Bernal](https://github.com/AlvaroBernalG/) 
