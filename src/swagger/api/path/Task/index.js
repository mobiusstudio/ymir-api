import { assemblePath } from '../../../base/utils'
import { $ref, contentType, id as pid, pagesize, page, next, paging } from '../../../base/constants'
import batch from './batch'

const routes = {
  ...batch,
}

const id = {
  name: 'id',
  in: 'path',
  description: 'task id',
  ...pid,
}

const addContent = {
  in: 'body',
  name: 'data',
  description: 'create task data',
  required: true,
  schema: {
    $ref: $ref('addTaskRequest'),
  },
}

const updateContent = {
  in: 'body',
  name: 'params',
  description: 'create task data',
  required: true,
  schema: {
    $ref: $ref('updateTaskRequest'),
  },
}

const generalDescription = {
  tags: ['Task'],
  consumes: [contentType.json],
  produces: [contentType.json],
  responses: {
    200: {
      description: 'return 200 if succeed',
    },
  },
}

routes[''] = {
  get: {
    operationId: 'getTaskList',
    summary: 'Get task list',
    ...generalDescription,
    parameters: [pagesize, page, next, paging],
  },
  post: {
    operationId: 'addTask',
    summary: 'Add new task',
    ...generalDescription,
    parameters: [addContent],
  },
}

routes['{id}'] = {
  get: {
    operationId: 'getTask',
    summary: 'Get task by id',
    ...generalDescription,
    parameters: [id],
  },
  patch: {
    operationId: 'updateTask',
    summary: 'Update task',
    ...generalDescription,
    parameters: [id, updateContent],
  },
  delete: {
    operationId: 'deleteTask',
    summary: 'Delete task',
    ...generalDescription,
    parameters: [id],
  },
}

const basePath = 'task'

export default assemblePath(routes, basePath)
