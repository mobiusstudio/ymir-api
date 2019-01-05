const { Task } = global.models
const { logger } = global

const task = new Task()

export const addTask = async (req, res) => {
  try {
    const data = req.swagger.params.data.value
    logger.trace('Add new task', data)
    const object = await task.add(data)
    return res.json(object)
  } catch (error) {
    throw error
  }
}

export const getTaskList = async (req, res) => {
  try {
    const { page, pagesize, next, paging } = req.swagger.params
    const params = {
      page: page.value,
      pagesize: pagesize.value,
      next: next.value,
      nextKey: 'id',
      filters: paging.value.filters,
      orderBy: paging.value.orderBy,
    }
    logger.trace('Get task list', params)
    const items = await task.from().do(params)
    return res.json(items)
  } catch (error) {
    throw error
  }
}

export const getTask = async (req, res) => {
  try {
    const id = req.swagger.params.id.value
    logger.trace('Get task', id)
    const object = await task.from().where`id = ${id}`.select().do()
    return res.json(object)
  } catch (error) {
    throw error
  }
}

export const updateTask = async (req, res) => {
  try {
    const id = req.swagger.params.id.value
    const data = req.swagger.params.data.value
    logger.trace('Update task', data)
    const result = await task.update({
      data,
      pkeyValue: id,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}

export const deleteTask = async (req, res) => {
  try {
    const id = req.swagger.params.id.value
    logger.trace('Delete task', id)
    const result = await task.delete(id)
    return res.json(result)
  } catch (error) {
    throw error
  }
}

// batch functions

export const batchAddTask = async (req, res) => {
  try {
    const dataArray = req.swagger.params.dataArray.value
    logger.trace('Batch add task', dataArray)
    const result = await task.batchAdd(dataArray)
    return res.json(result)
  } catch (error) {
    throw error
  }
}

export const batchUpdateTask = async (req, res) => {
  try {
    const paramsArray = req.swagger.params.paramsArray.value
    logger.trace('Batch update task', paramsArray)
    const result = await task.batchUpdate(paramsArray)
    return res.json(result)
  } catch (error) {
    throw error
  }
}

export const batchDeleteTask = async (req, res) => {
  const idArray = req.swagger.params.idArray.value
  logger.trace('Batch delete task', idArray)
  const result = await task.batchDelete(idArray)
  return res.json(result)
}
