import { isCompleted, title, content, deadline } from './properties'

export const def = {}

def.addTaskRequest = {
  description: 'create task request',
  properties: {
    isCompleted,
    title,
    content,
    deadline,
  },
}

def.updateTaskRequest = {
  description: 'update task request',
  properties: {
    isCompleted,
    title,
    content,
    deadline,
  },
}
