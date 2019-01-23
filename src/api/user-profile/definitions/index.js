import { typeMap as T } from '../../../libs/types'
import { userId, name, age, loverId, carId } from './properties'

export const def = {}

def.UserProfileAddRequest = T.get('object').swg({
  description: 'create profile request',
  properties: {
    userId,
    name,
    age,
    loverId,
    carId,
  },
})

def.UserProfileUpdateRequest = T.get('object').swg({
  description: 'update profile request',
  properties: {
    userId,
    name,
    age,
    loverId,
    carId,
  },
})
