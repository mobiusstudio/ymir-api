import isPromise from 'is-promise'

const promiseControllers = ctrs => Object.keys(ctrs)
  .reduce((syncControllers, operationId) => {
    const newSC = syncControllers
    newSC[operationId] = (req, res, next) => {
      const result = ctrs[operationId](req, res, next)
      if (isPromise(result)) {
        return result.catch(next)
      }
      return result
    }
    return newSC
  }, {})

export const controllers = {}

export const addControllers = (data) => {
  const newData = promiseControllers(data)
  Object.keys(data).forEach((key) => {
    if (Object.keys(controllers).includes(key)) throw new Error(`Duplicate controller name: ${key}`)
    else controllers[key] = newData[key]
  })
}
