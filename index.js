const compute = (startTime, elapsedTime = 0) => (+new Date() - startTime) + elapsedTime

module.exports = (startTime = 0, elapsedTime = 0, running = false) => ({
  start () {
    running = true
    return startTime = +new Date()
  },
  stop () {
    running = false
    return elapsedTime = compute(startTime, elapsedTime)
  },
  elapsedTime: ()=> running ? compute(startTime, elapsedTime) : elapsedTime,

  isRunning: ()=> running
  
})
