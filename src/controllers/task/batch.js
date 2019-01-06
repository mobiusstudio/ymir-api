export const batchAddTask = async (req, res) => {
  try {
    const { Task } = global.models
    const dataArray = req.swagger.params.dataArray.value
    global.logger.trace('Batch add task', dataArray)
    const result = await new Task().batchAdd(dataArray)
    return res.json(result)
  } catch (error) {
    throw error
  }
}

export const batchUpdateTask = async (req, res) => {
  try {
    const { Task } = global.models
    const paramsArray = req.swagger.params.paramsArray.value
    global.logger.trace('Batch update task', paramsArray)
    const result = await new Task().batchUpdate(paramsArray)
    return res.json(result)
  } catch (error) {
    throw error
  }
}

export const batchDeleteTask = async (req, res) => {
  try {
    const { Task } = global.models
    const idArray = req.swagger.params.idArray.value
    global.logger.trace('Batch delete task', idArray)
    const result = await new Task().batchDelete(idArray)
    return res.json(result)
  } catch (error) {
    throw error
  }
}
