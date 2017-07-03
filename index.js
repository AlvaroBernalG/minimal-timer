const compute = (startTime, elapsedTime = 0) => (+new Date() - startTime) + elapsedTime

module.exports = (startTime = +new Date(), elapsedTime = 0, running = true) => ({
  resume () {
    if (running) throw new Error('timer is already running.')
    running = true
    startTime = +new Date()
  },
  stop () {
    running = false
    elapsedTime = compute(startTime, elapsedTime)
  },
  elapsedTime () {
    return running ? compute(startTime, elapsedTime) : elapsedTime
  }
})
