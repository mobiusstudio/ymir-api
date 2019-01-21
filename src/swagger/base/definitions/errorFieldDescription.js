import { typeMap as T } from '../../../libs/types'

export const errorFieldDescription = T.get('object').swg({
  properties: {
    code: T.get('string').swg(),
    field: T.get('string').swg(),
    message: T.get('string').swg(),
    recommendedValue: T.get('string').swg(),
    path: T.get('array').swg({
      items: T.get('string').swg(),
    }),
  },
})
