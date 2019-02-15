import { typeMap as T } from '../../../libs/types'
import { id, username, password, idToken } from './properties'

export const def = {}

def.UserAddRequest = T.get('object').swg({
  description: 'create user request',
  properties: {
    id,
    username,
    password,
    idToken,
  },
})

def.UserUpdateRequest = T.get('object').swg({
  description: 'update user request',
  properties: {
    id,
    username,
    password,
    idToken,
  },
})
