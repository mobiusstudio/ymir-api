import { typeMap as T } from '../../../libs/types'

export const userId = T.get('id').swg({
  description: 'profile userId',
})

export const name = T.get('string').swg({
  description: 'profile name',
})

export const age = T.get('int').swg({
  description: 'profile age',
})

export const loverId = T.get('id').swg({
  description: 'profile loverId',
})

export const carId = T.get('id').swg({
  description: 'profile carId',
})
