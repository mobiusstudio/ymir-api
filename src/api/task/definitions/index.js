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

def.batchAddTaskRequest = {
  description: 'batch add request',
  type: 'array',
  items: def.addTaskRequest,
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

def.batchUpdateTaskRequest = {
  description: 'batch update request',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      data: def.updateTaskRequest,
      pkeyValue: {
        description: 'id',
        type: 'integer',
        format: 'int64',
      },
    },
  },
}

def.batchDeleteTaskRequest = {
  description: 'batch delete request',
  type: 'array',
  items: {
    description: 'id',
    type: 'integer',
    format: 'int64',
  },
}
