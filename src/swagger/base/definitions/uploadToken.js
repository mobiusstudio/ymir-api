import { typeMap as T } from '../../../libs/types'

export const uploadToken = T.get('object').swg({
  required: ['type', 'values'],
  properties: {
    type: T.get('string').swg({
      description: 'token 的类型，目前只有 `qiniu`',
    }),
    values: T.get('object').swg({
      description: '描述 token 信息的 Key-Value-Pair，string-to-string',
      additionalProperties: T.get('string').swg(),
    }),
  },
})
