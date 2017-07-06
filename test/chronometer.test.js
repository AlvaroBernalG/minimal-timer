const sleep = require('delay')
const test = require('ava')
const between = require('in-between')
const chronometer = require('../index.js')

test('should keep track of the elapsedTime correctly.', async (t) => {
  const chrono = chronometer()

  chrono.start()

  await sleep(200)

  t.is(between(190, 220)(chrono.elapsedTime()), true)
})

test('isRunning() should return true if timer is already running otherwise false.', async (t) => {
  const chrono = chronometer()

  chrono.start()

  await sleep(200)

  t.is(chrono.isRunning(), true)

  chrono.stop()

  t.is(chrono.isRunning(), false)
})

test('stop() should return the elapsed time in miliseconds.', async (t) => {
  const chrono = chronometer()

  chrono.start()

  await sleep(200)

  t.is(between(190, 220)(chrono.stop()), true)
})

test('stop() should stop tracking time.', async (t) => {
  const chrono = chronometer()

  chrono.start()

  await sleep(200)

  chrono.stop()

  await sleep(200)

  t.is(between(190, 220)(chrono.elapsedTime()), true)
})
test('start() should start/resume time tracking.', async (t) => {
  const chrono = chronometer()

  chrono.start()

  await sleep(200)

  chrono.stop()

  await sleep(200)

  t.is(between(190, 220)(chrono.elapsedTime()), true)

  chrono.start()

  await sleep(200)

  chrono.stop()

  t.is(between(390, 418)(chrono.elapsedTime()), true)

  await sleep(200)

  chrono.start()

  await sleep(200)

  t.is(between(590, 620)(chrono.elapsedTime()), true)
})

test('start() should restart the chronometer if it has already started.', async (t) => {
  const chrono = chronometer()

  chrono.start()

  await sleep(200)

  chrono.start()

  await sleep(200)

  t.is(between(190, 220)(chrono.elapsedTime()), true)
})

test('start(customDate) should be able to start the chronometer with a custom date.', async (t) => {
  const chrono = chronometer()

  const customDate = new Date()

  await sleep(200)

  chrono.start(customDate)

  await sleep(200)

  t.is(between(390, 420)(chrono.elapsedTime()), true)
})

