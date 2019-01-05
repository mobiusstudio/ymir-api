import { assemblePath } from '../../../base/utils'
import * as P from '../../../base/constants'

const routes = {}

const id = {
  name: 'id',
  in: 'path',
  description: 'task id',
  ...P.id,
}

const addContent = {
  in: 'body',
  name: 'data',
  description: 'create task data',
  required: true,
  schema: {
    $ref: P.$ref('addTaskRequest'),
  },
}

const updateContent = {
  in: 'body',
  name: 'params',
  description: 'create task data',
  required: true,
  schema: {
    $ref: P.$ref('updateTaskRequest'),
  },
}

const generalDescription = {
  tags: ['Task'],
  consumes: [P.contentType.json],
  produces: [P.contentType.json],
  responses: {
    200: {
      description: 'return 200 if succeed',
    },
  },
}

routes[''] = {
  'x-swagger-router-controller': 'Task',
  get: {
    operationId: 'getTaskList',
    summary: 'Get task list',
    ...generalDescription,
    parameters: [P.pagesize, P.page, P.next, P.paging],
  },
  post: {
    operationId: 'addTask',
    summary: 'Add new task',
    ...generalDescription,
    parameters: [addContent],
  },
}

routes['{id}'] = {
  'x-swagger-router-controller': 'Task',
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
