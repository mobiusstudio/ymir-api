const { Task } = global.models
const { logger } = global

const task = new Task()

export const addTask = async (req, res) => {
  const data = req.swagger.params.body.value
  logger.trace('Add new task', data)
  const object = await task.add(data)
  return res.json(object)
}

export const getTaskList = async (req, res) => {
  const params = req.swagger.params.query
  logger.trace('Get task list', params)
  const items = await task.from().select().do()
  return res.json(items)
}

export const getTask = async (req, res) => {
  const id = req.swagger.params.taskId.value
  logger.trace('Get task', id)
  const object = await task.from().where`id = ${id}`.select().do()
  return res.json(object)
}

export const updateTask = async (req, res) => {
  const id = req.swagger.params.taskId.value
  const data = req.swagger.params.body.value
  logger.trace('Update task', data)
  const code = await new Task(data).update(data, id)
  return res.sendStatus(code)
}

export const deleteTask = async (req, res) => {
  const id = req.swagger.params.taskId.value
  logger.trace('Delete task', id)
  const code = await task.delete(id)
  return res.sendStatus(code)
}
