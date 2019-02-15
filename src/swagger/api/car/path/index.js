/* eslint-disable dot-notation */
import { assemblePath, addTag } from '../../../swagger'
import { contentType, pagesize, page, next, paging } from '../../../swagger/base/constants'
import { typeMap as T } from '../../../libs/types'

export const id = T.get('id-auto').swg({
  description: 'car id',
  name: 'id',
  in: 'path',
  required: true,
})

const addContent = {
  in: 'body',
  name: 'data',
  description: 'create car data',
  required: true,
  schema: {
    $ref: '#/definitions/CarAddRequest',
  },
}

const updateContent = {
  in: 'body',
  name: 'data',
  description: 'update car data',
  required: true,
  schema: {
    $ref: '#/definitions/CarUpdateRequest',
  },
}

const generalDescription = {
  tags: ['Car'],
  consumes: [contentType.json],
  produces: [contentType.json],
  responses: {
    200: {
      description: 'return 200 if succeed',
    },
  },
}

addTag({
  name: 'Car',
})

const routes = {}

routes[''] = {
  get: {
    operationId: 'getCarList',
    summary: 'Get car list',
    ...generalDescription,
    parameters: [pagesize, page, next, paging],
  },
  post: {
    operationId: 'addCar',
    summary: 'Add new car',
    ...generalDescription,
    parameters: [addContent],
  },
}

routes['{id}'] = {
  get: {
    operationId: 'getCar',
    summary: 'Get car by id',
    ...generalDescription,
    parameters: [id],
  },
  patch: {
    operationId: 'updateCar',
    summary: 'Update car',
    ...generalDescription,
    parameters: [id, updateContent],
  },
  delete: {
    operationId: 'deleteCar',
    summary: 'Delete car',
    ...generalDescription,
    parameters: [id],
  },
}


const basePath = '/car'
export const pth = assemblePath(routes, basePath)
