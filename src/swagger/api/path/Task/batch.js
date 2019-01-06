import { assemblePath } from '../../../base/utils'
import { $ref, contentType } from '../../../base/constants'

const routes = {}

const batchAddContent = {
  in: 'body',
  name: 'dataArray',
  description: 'batch add task',
  required: true,
  schema: {
    $ref: $ref('batchAddTaskRequest'),
  },
}

const batchUpdateContent = {
  in: 'body',
  name: 'paramsArray',
  description: 'batch update task',
  required: true,
  schema: {
    $ref: $ref('batchUpdateTaskRequest'),
  },
}

const batchDeleteContent = {
  in: 'body',
  name: 'idArray',
  description: 'batch delete task',
  required: true,
  schema: {
    $ref: $ref('batchDeleteTaskRequest'),
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

// eslint-disable-next-line dot-notation
routes[''] = {
  post: {
    operationId: 'batchAddTask',
    summary: 'Batch add new task',
    ...generalDescription,
    parameters: [batchAddContent],
  },
  patch: {
    operationId: 'batchUpdateTask',
    summary: 'Batch update task',
    ...generalDescription,
    parameters: [batchUpdateContent],
  },
  delete: {
    operationId: 'batchDeleteTask',
    summary: 'Batch delete task',
    ...generalDescription,
    parameters: [batchDeleteContent],
  },
}

const basePath = 'batch'

export default assemblePath(routes, basePath)
