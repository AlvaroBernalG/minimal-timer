const timer = require('./index.js')
const sleep = require('delay')
const between = require('in-between')

test('should keep track of the elapsedTime correctly.', async () => {
  const chrono = timer()

  chrono.start()

  await sleep(500)

  expect(between(490, 510)(chrono.elapsedTime())).toBe(true)
})

test('stop() should stop tracking time.',
  async () => {
    const chrono = timer()

    chrono.start()

    await sleep(500)

    chrono.stop()

    await sleep(500)

    expect(between(490, 520)(chrono.elapsedTime())).toBe(true)
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
