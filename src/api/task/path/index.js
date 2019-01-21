import { typeMap as T } from '../../../libs/types'
import { assemblePath, addTag } from '../../../swagger'
import { contentType, pagesize, page, next, paging } from '../../../swagger/base/constants'

const routes = {
}

const id = T.get('id').swg({
  description: 'task id',
  name: 'id',
  in: 'path',
  required: true,
})

const addContent = {
  in: 'body',
  name: 'data',
  description: 'create task data',
  required: true,
  schema: {
    $ref: '#/definitions/addTaskRequest',
  },
}

const updateContent = {
  in: 'body',
  name: 'data',
  description: 'create task data',
  required: true,
  schema: {
    $ref: '#/definitions/updateTaskRequest',
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

addTag({
  name: 'Task',
})

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

const basePath = '/task'
export const pth = assemblePath(routes, basePath)
