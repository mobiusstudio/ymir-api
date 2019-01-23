import { typeMap as T } from '../../../libs/types'
import { id, carName, ownerId } from './properties'

export const def = {}

def.CarAddRequest = T.get('object').swg({
  description: 'create car request',
  properties: {
    id,
    carName,
    ownerId,
  },
})

def.CarUpdateRequest = T.get('object').swg({
  description: 'update car request',
  properties: {
    id,
    carName,
    ownerId,
  },
})
