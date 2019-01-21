import { type as T } from '../../../swagger/base/constants'

export const id = {
  description: 'id',
  type: T.integer,
}

export const isCompleted = {
  description: 'task completion status',
  type: T.boolean,
}

export const title = {
  description: 'task title',
  type: T.string,
}

export const content = {
  description: 'task content',
  type: T.string,
}

export const deadline = {
  description: 'task content',
  type: T.integer,
}
