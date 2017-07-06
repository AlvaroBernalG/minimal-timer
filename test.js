const timer = require('./index.js')
const sleep = require('delay')
const between = require('in-between')

test('should keep track of the elapsedTime correctly.', async () => {
  const chrono = timer()

  chrono.start()

  await sleep(500)

  expect(between(490, 510)(chrono.elapsedTime())).toBe(true)
})

it('start() should start/resume time tracking.', async () => {
  const chrono = timer()

  chrono.start()

  await sleep(500)

  chrono.stop()

  await sleep(500)

  expect(between(490, 520)(chrono.elapsedTime())).toBe(true)

  chrono.start()

  await sleep(500)

  chrono.stop()

  expect(between(990, 1020)(chrono.elapsedTime())).toBe(true)

  await sleep(500)

  chrono.start()

  await sleep(500)

  expect(between(1490, 1530)(chrono.elapsedTime())).toBe(true)
})

it('start() should restart the timer if it has already started.', async () => {
  const chrono = timer()

  chrono.start()

  await sleep(200)

  chrono.start()

  await sleep(200)

  expect(between(190, 220)(chrono.elapsedTime())).toBe(true)
})

it('start(customDate) should be able to start the timer with a custom date.', async () => {
  const chrono = timer()

  const customDate = new Date()

  await sleep(200)

  chrono.start(customDate)

  await sleep(200)

  expect(between(390, 420)(chrono.elapsedTime())).toBe(true)
})

it('stop() should return the elapsed time in miliseconds.', async () => {
  const chrono = timer()

  chrono.start()

  await sleep(200)

  expect(between(190, 220)(chrono.stop())).toBe(true)
})

test('stop() should stop tracking time.', async () => {
  const chrono = timer()

  chrono.start()

  await sleep(500)

  chrono.stop()

  await sleep(500)

  expect(between(490, 520)(chrono.elapsedTime())).toBe(true)
})
