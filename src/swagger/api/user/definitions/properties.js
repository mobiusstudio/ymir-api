import { typeMap as T } from '../../../libs/types'

export const id = T.get('id-auto').swg({
  description: 'user id',
})

export const username = T.get('string').swg({
  description: 'user username',
})

export const password = T.get('password').swg({
  description: 'user password',
})

export const idToken = T.get('string').swg({
  description: 'user idToken',
})
