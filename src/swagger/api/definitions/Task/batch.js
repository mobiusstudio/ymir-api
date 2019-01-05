import { type as T, format } from '../../../base/constants'
import { isCompleted, title, content, deadline } from './properties'

export const batchAddTaskRequest = {
  description: 'batch add task request',
  type: T.array,
  items: {
    type: T.object,
    properties: {
      isCompleted,
      title,
      content,
      deadline,
    },
  },
}

export const batchUpdateTaskRequest = {
  description: 'batch update task request',
  type: T.array,
  items: {
    type: T.object,
    properties: {
      data: {
        type: T.object,
        properties: {
          isCompleted,
          title,
          content,
          deadline,
        },
      },
      id: {
        type: T.integer,
        format: format.integer.int64,
      },
    },
  },
}

export const batchDeleteTaskRequest = {
  description: 'batch delete task request',
  type: T.array,
  items: {
    type: T.integer,
    format: format.integer.int64,
  },
}
