const compute = (startTime, elapsedTime) => (+new Date() - startTime) + elapsedTime

module.exports = (startTime = 0, elapsedTime = 0, running = false) => ({
  start (customDate = new Date()) {
    running = true
    startTime = +customDate
  },
  stop () {
    if(running === false) return elapsedTime
    running = false
    return elapsedTime = compute(startTime, elapsedTime)
  },
  elapsedTime: () => running ? compute(startTime, elapsedTime) : elapsedTime,

  isRunning: () => running
})
