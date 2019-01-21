import { type as T } from '../../../swagger/base/constants'
import { isCompleted, title, content, deadline } from './properties'

export const def = {}

def.addTaskRequest = {
  description: 'create task request',
  type: T.object,
  properties: {
    isCompleted,
    title,
    content,
    deadline,
  },
}

def.updateTaskRequest = {
  description: 'update task request',
  type: T.object,
  properties: {
    isCompleted,
    title,
    content,
    deadline,
  },
}
