# minimal-timer 
> Keeps track of the elapsed time in miliseconds.

[![Build Status](https://travis-ci.org/AlvaroBernalG/minimal-timer.svg?branch=master)](https://travis-ci.org/AlvaroBernalG/minimal-timer) [![npm version](https://badge.fury.io/js/minimal-timer.svg)](https://badge.fury.io/js/minimal-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
$ npm install minimal-timer --save
```

## Usage 

```js
const delay = require('delay')
const timer = require('minimal-timer')

const time = timer() // instantiates the timer

time.start()

await delay(500)

console.log(time.elapsedTime()) // => 500 +- 

time.stop()

await delay(500)

console.log(time.elapsedTime()) // => 500 +- 

time.start()

await delay(500)

console.log(time.elapsedTime()) // => 1000 +- 

```

## API

### timer() `object`

Creates a new instance 

### start() `number`

Starts/Restart the timer

Returns the current time in miliseconds

### stop() `number`

Stops the timer 

Returns the elapsed time in miliseconds

### elapsedTime() `number` 

Returns the elapased time in miliseconds

### isRunning() `boolean` 

Returns true if the timer is running otherwise false 

## License
MIT © [Alvaro Bernal](https://github.com/AlvaroBernalG/) 
