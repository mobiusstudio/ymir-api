import { $ref, type } from '../constants'

export const errorResponse = {
  type: type.object,
  required: ['error'],
  properties: {
    error: {
      $ref: $ref('error'),
    },
  },
}
