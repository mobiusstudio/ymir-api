import { typeMap as T } from '../../../libs/types'

export const id = T.get('id').swg({
  description: 'id',
})

export const isCompleted = T.get('boolean').swg({
  description: 'task completion status',
})

export const title = T.get('string').swg({
  description: 'task title',
})

export const content = T.get('string').swg({
  description: 'task content',
})

export const deadline = T.get('timestamp').swg({
  description: 'task content',
})
