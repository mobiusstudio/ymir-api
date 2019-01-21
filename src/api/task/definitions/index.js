import { typeMap as T } from '../../../libs/types'
import { isCompleted, title, content, deadline } from './properties'

export const def = {}

def.addTaskRequest = T.get('object').swg({
  description: 'create task request',
  properties: {
    isCompleted,
    title,
    content,
    deadline,
  },
})

def.updateTaskRequest = T.get('object').swg({
  description: 'update task request',
  properties: {
    isCompleted,
    title,
    content,
    deadline,
  },
})
