import isPromise from 'is-promise'
import task from './task'

const controllers = {
  ...task,
}

const keys = Object.keys(controllers)
  .reduce((syncControllers, operationId) => {
    const newSC = syncControllers
    newSC[operationId] = (req, res, next) => {
      const result = controllers[operationId](req, res, next)
      if (isPromise(result)) {
        return result.catch(next)
      }
      return result
    }
    return newSC
  }, {})

export default keys
