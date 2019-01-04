const { Task } = global.models
const { logger } = global

const task = new Task()

export const addTask = async (req, res) => {
  try {
    const data = req.swagger.params.body.value
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
    const id = req.swagger.params.taskId.value
    logger.trace('Get task', id)
    const object = await task.from().where`id = ${id}`.select().do()
    return res.json(object)
  } catch (error) {
    throw error
  }
}

export const updateTask = async (req, res) => {
  try {
    const id = req.swagger.params.taskId.value
    const data = req.swagger.params.body.value
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
    const id = req.swagger.params.taskId.value
    logger.trace('Delete task', id)
    const result = await task.delete(id)
    return res.json(result)
  } catch (error) {
    throw error
  }
}
