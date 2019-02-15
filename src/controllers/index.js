import isPromise from 'is-promise'
import * as task from './task'
import * as service from './service'
import * as gallery from './gallery'
import * as screen from './screen'

const controllers = {
  ...task,
  ...service,
  ...gallery,
  ...screen,
}

export default Object.keys(controllers)
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
