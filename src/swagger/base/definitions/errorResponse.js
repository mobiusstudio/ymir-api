import { typeMap as T } from '../../../libs/types'

export const errorResponse = T.get('object').swg({
  required: ['error'],
  properties: {
    error: {
      $ref: '#/definitions/error',
    },
  },
})
