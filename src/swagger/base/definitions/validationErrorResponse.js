import { $ref, type } from '../constants'

export const validationErrorResponse = {
  type: type.object,
  required: ['error'],
  properties: {
    error: {
      $ref: $ref('validationError'),
    },
  },
}
