const { Task } = global.models
const { logger } = global

export const addTask = async (req, res) => {
  const data = req.swagger.params.body.value
  logger.trace('Add new task', data)
  const object = await new Task(data).save()
  return res.json(object)
}

export const getTaskList = async (req, res) => {
  const params = req.swagger.params.query
  const t = new Task()
  logger.trace('Get task list', params)
  const items = await t.getList(params)
  const total = await t.getListCount(params)
  return res.json({
    total,
    items,
  })
}

export const getTask = async (req, res) => {
  const id = req.swagger.params.taskId.value
  logger.trace('Get task', id)
  const object = await new Task().get(id)
  return res.json(object)
}

export const updateTask = async (req, res) => {
  const id = req.swagger.params.taskId.value
  const data = req.swagger.params.body.value
  data.id = id
  logger.trace('Update task', data)
  await new Task(data).save()
  return res.sendStatus(200)
}

export const deleteTask = async (req, res) => {
  const id = req.swagger.params.taskId.value
  logger.trace('Delete task', id)
  await new Task().delete(id)
  return res.sendStatus(200)
}
