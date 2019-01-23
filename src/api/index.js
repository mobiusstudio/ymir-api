import { addPaths, addDefinitions } from '../swagger'
import { addControllers } from '../controllers'

import task from './task'
import user from './user'
import profile from './user-profile'
import car from './car'

const api = {
  task,
  user,
  profile,
  car,
}

export const register = () => {
  Object.values(api).forEach((i) => {
    addPaths(i.pth)
    addDefinitions(i.def)
    addControllers(i.ctr)
  })
}
