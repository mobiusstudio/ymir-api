import { typeMap as T } from '../../../libs/types'

export const id = T.get('id-auto').swg({
  description: 'car id',
})

export const carName = T.get('string').swg({
  description: 'car carName',
})

export const ownerId = T.get('id').swg({
  description: 'car ownerId',
})
