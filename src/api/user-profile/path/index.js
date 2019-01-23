/* eslint-disable dot-notation */
import { assemblePath, addTag } from '../../../swagger'
import { contentType } from '../../../swagger/base/constants'
import { id as userId } from '../../user/path'

const addContent = {
  in: 'body',
  name: 'data',
  description: 'create profile data',
  required: true,
  schema: {
    $ref: '#/definitions/UserProfileAddRequest',
  },
}

const updateContent = {
  in: 'body',
  name: 'data',
  description: 'update profile data',
  required: true,
  schema: {
    $ref: '#/definitions/UserProfileUpdateRequest',
  },
}

const generalDescription = {
  tags: ['User-Profile'],
  consumes: [contentType.json],
  produces: [contentType.json],
  responses: {
    200: {
      description: 'return 200 if succeed',
    },
  },
}

addTag({
  name: 'User-Profile',
})

const routes = {}


routes[''] = {
  get: {
    operationId: 'getUserProfile',
    summary: 'Get profile by userId',
    ...generalDescription,
    parameters: [userId],
  },
  post: {
    operationId: 'addUserProfile',
    summary: 'Add new profile',
    ...generalDescription,
    parameters: [userId, addContent],
  },
  patch: {
    operationId: 'updateUserProfile',
    summary: 'Update profile',
    ...generalDescription,
    parameters: [userId, updateContent],
  },
  delete: {
    operationId: 'deleteUserProfile',
    summary: 'Delete profile',
    ...generalDescription,
    parameters: [userId],
  },
}


const basePath = '/user/{id}/profile'
export const pth = assemblePath(routes, basePath)
