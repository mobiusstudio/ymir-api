export const ctr = {}

ctr.addTask = async (req, res) => {
  try {
    const { Task } = global.models
    const data = req.swagger.params.data.value
    global.logger.trace('Add new task', data)
    const object = await new Task().add(data)
    return res.json(object)
  } catch (error) {
    throw error
  }
}

ctr.getTaskList = async (req, res) => {
  try {
    const { Task } = global.models
    const { page, pagesize, next, paging } = req.swagger.params
    const params = {
      page: page.value,
      pagesize: pagesize.value,
      next: next.value,
      nextKey: 'id',
      filters: paging.value.filters,
      orderBy: paging.value.orderBy,
    }
    global.logger.trace('Get task list', params)
    const items = await new Task().from().do(params)
    return res.json(items)
  } catch (error) {
    throw error
  }
}

ctr.getTask = async (req, res) => {
  try {
    const { Task } = global.models
    const id = req.swagger.params.id.value
    global.logger.trace('Get task', id)
    const object = await new Task().from().where`id = ${id}`.select().do()
    return res.json(object)
  } catch (error) {
    throw error
  }
}

ctr.updateTask = async (req, res) => {
  try {
    const { Task } = global.models
    const id = req.swagger.params.id.value
    const data = req.swagger.params.data.value
    global.logger.trace('Update task', data)
    const result = await new Task().update({
      data,
      pkeyValue: id,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}

ctr.deleteTask = async (req, res) => {
  try {
    const { Task } = global.models
    const id = req.swagger.params.id.value
    global.logger.trace('Delete task', id)
    const result = await new Task().delete(id)
    return res.json(result)
  } catch (error) {
    throw error
  }
}
