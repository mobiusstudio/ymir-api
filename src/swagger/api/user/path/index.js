/* eslint-disable dot-notation */
import { assemblePath, addTag } from '../../../swagger'
import { contentType, pagesize, page, next, paging } from '../../../swagger/base/constants'
import { typeMap as T } from '../../../libs/types'

export const id = T.get('id-auto').swg({
  description: 'user id',
  name: 'id',
  in: 'path',
  required: true,
})

const addContent = {
  in: 'body',
  name: 'data',
  description: 'create user data',
  required: true,
  schema: {
    $ref: '#/definitions/UserAddRequest',
  },
}

const updateContent = {
  in: 'body',
  name: 'data',
  description: 'update user data',
  required: true,
  schema: {
    $ref: '#/definitions/UserUpdateRequest',
  },
}

const generalDescription = {
  tags: ['User'],
  consumes: [contentType.json],
  produces: [contentType.json],
  responses: {
    200: {
      description: 'return 200 if succeed',
    },
  },
}

addTag({
  name: 'User',
})

const routes = {}

routes[''] = {
  get: {
    operationId: 'getUserList',
    summary: 'Get user list',
    ...generalDescription,
    parameters: [pagesize, page, next, paging],
  },
  post: {
    operationId: 'addUser',
    summary: 'Add new user',
    ...generalDescription,
    parameters: [addContent],
  },
}

routes['{id}'] = {
  get: {
    operationId: 'getUser',
    summary: 'Get user by id',
    ...generalDescription,
    parameters: [id],
  },
  patch: {
    operationId: 'updateUser',
    summary: 'Update user',
    ...generalDescription,
    parameters: [id, updateContent],
  },
  delete: {
    operationId: 'deleteUser',
    summary: 'Delete user',
    ...generalDescription,
    parameters: [id],
  },
}


const basePath = '/user'
export const pth = assemblePath(routes, basePath)
