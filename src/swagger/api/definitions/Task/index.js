import { type as T } from '../../../base/constants'
import { isCompleted, title, content, deadline } from './properties'

export const addTaskRequest = {
  description: 'create task request',
  type: T.object,
  properties: {
    isCompleted,
    title,
    content,
    deadline,
  },
}

export const updateTaskRequest = {
  description: 'update task request',
  type: T.object,
  properties: {
    isCompleted,
    title,
    content,
    deadline,
  },
}
