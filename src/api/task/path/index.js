import { BaseRoutes, assemblePath, addTag } from '../../../swagger'

const routes = new BaseRoutes('task')

const basePath = '/task'

addTag({
  name: 'Task',
})

export const pth = assemblePath(routes, basePath)
