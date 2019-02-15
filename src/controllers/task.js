import { Task } from '../models'

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
    global.logger.trace('Get task list', params)
    const items = await new Task().from().do(params)
    return res.json(items)
  } catch (error) {
    throw error
  }
}

export const getTask = async (req, res) => {
  try {
    const id = req.swagger.params.id.value
    global.logger.trace('Get task', id)
    const object = await new Task().from().where`id = ${id}`.do()
    return res.json(object)
  } catch (error) {
    throw error
  }
}

export const addTask = async (req, res) => {
  try {
    const data = req.swagger.params.data.value
    global.logger.trace('Add new task', data)
    const result = await new Task().add({
      data,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}

export const batchAddTask = async (req, res) => {
  try {
    const data = req.swagger.params.data.value
    global.logger.trace('Batch add new task', data)
    const result = await new Task().batchAdd(data)
    return res.json(result)
  } catch (error) {
    throw error
  }
}

export const updateTask = async (req, res) => {
  try {
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

export const batchUpdateTask = async (req, res) => {
  try {
    const data = req.swagger.params.data.value
    global.logger.trace('Batch update new task', data)
    const result = await new Task().batchUpdate(data)
    return res.json(result)
  } catch (error) {
    throw error
  }
}

export const deleteTask = async (req, res) => {
  try {
    const id = req.swagger.params.id.value
    global.logger.trace('Delete task', id)
    const result = await new Task().delete(id)
    return res.json(result)
  } catch (error) {
    throw error
  }
}

export const batchDeleteTask = async (req, res) => {
  try {
    const data = req.swagger.params.data.value
    global.logger.trace('Batch delete task', data)
    const result = await new Task().batchDelete(data)
    return res.json(result)
  } catch (error) {
    throw error
  }
}
