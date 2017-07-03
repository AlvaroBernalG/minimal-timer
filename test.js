const timer = require('./index.js')
const sleep = require('delay')
const between = require('in-between')

test('should keep track of the elapsedTime correctly.', async () => {
  const chrono = timer()

  await sleep(500)

  expect(between(490, 510)(chrono.elapsedTime())).toBe(true)
})

test('stop() should stop tracking time.',
  async () => {
    const chrono = timer()

    await sleep(500)

    chrono.stop()

    await sleep(500)

    expect(between(490, 520)(chrono.elapsedTime())).toBe(true)
  })

it('resume() should resume time tracking.', async () => {
  const chrono = timer()

  await sleep(500)
  chrono.stop()

  await sleep(500)

  expect(between(490, 520)(chrono.elapsedTime())).toBe(true)

  chrono.resume()

  await sleep(500)

  chrono.stop()

  expect(between(990, 1020)(chrono.elapsedTime())).toBe(true)

  await sleep(500)

  chrono.resume()

  await sleep(500)

  expect(between(1490, 1530)(chrono.elapsedTime())).toBe(true)
})

it('should throw error if resume() is executed when timer is already runnig.', async () => {
  const chrono = timer()

  await sleep(500)

  expect(() => {
    chrono.resume()
  }).toThrow()
})
