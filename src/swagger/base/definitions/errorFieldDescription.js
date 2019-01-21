import { type } from '../constants'

export const errorFieldDescription = {
  type: type.object,
  properties: {
    code: {
      type: type.string,
    },
    field: {
      type: type.string,
    },
    message: {
      type: type.string,
    },
    recommendedValue: {
      type: type.string,
    },
    path: {
      type: type.array,
      items: {
        type: type.string,
      },
    },
  },
}
