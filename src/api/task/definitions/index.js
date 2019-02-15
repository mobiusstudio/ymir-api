import { BaseDefinitions } from '../../../swagger'
import { isCompleted, title, content, deadline } from './properties'

const body = {
  isCompleted,
  title,
  content,
  deadline,
}

class TaskDefinitions extends BaseDefinitions {
  constructor() {
    super('task', body)
  }
}

export const def = new TaskDefinitions()
