import { typeMap as T } from '../../../libs/types'

export const validationErrorResponse = T.get('object').swg({
  required: ['error'],
  properties: {
    error: {
      $ref: '#/definitions/validationError',
    },
  },
})
