import { upperFirst } from 'lodash'
import { contentType, pagesize, page, next, paging } from '../constants'

export class BaseRoutes {
  constructor(schemaName) {
    const id = {
      type: 'integer',
      format: 'int64',
      description: `${schemaName} id`,
      name: 'id',
      in: 'path',
      required: true,
    }

    const addContent = {
      in: 'body',
      name: 'data',
      description: `create ${schemaName} data`,
      required: true,
      schema: {
        $ref: `#/definitions/add${upperFirst(schemaName)}Request`,
      },
    }

    const updateContent = {
      in: 'body',
      name: 'data',
      description: `create ${schemaName} data`,
      required: true,
      schema: {
        $ref: `#/definitions/update${upperFirst(schemaName)}Request`,
      },
    }

    const generalDescription = {
      tags: [upperFirst(schemaName)],
      consumes: [contentType.json],
      produces: [contentType.json],
      responses: {
        200: {
          description: 'return 200 if succeed',
        },
      },
    }

    this[''] = {
      get: {
        operationId: `get${upperFirst(schemaName)}List`,
        summary: `Get ${schemaName} list`,
        ...generalDescription,
        parameters: [pagesize, page, next, paging],
      },
      post: {
        operationId: `add${upperFirst(schemaName)}`,
        summary: `Add new ${schemaName}`,
        ...generalDescription,
        parameters: [addContent],
      },
    }
    this['{id}'] = {
      get: {
        operationId: `get${upperFirst(schemaName)}`,
        summary: `Get ${schemaName} by id`,
        ...generalDescription,
        parameters: [id],
      },
      patch: {
        operationId: `update${upperFirst(schemaName)}`,
        summary: `Update ${schemaName}`,
        ...generalDescription,
        parameters: [id, updateContent],
      },
      delete: {
        operationId: `delete${upperFirst(schemaName)}`,
        summary: `Delete ${schemaName}`,
        ...generalDescription,
        parameters: [id],
      },
    }
  }
}
