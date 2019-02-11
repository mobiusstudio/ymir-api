export const ctr = {}

// ctr.getUserList = async (req, res) => {
//   try {
//     const { User } = global.models
//     const { page, pagesize, next, paging } = req.swagger.params
//     const params = {
//       page: page.value,
//       pagesize: pagesize.value,
//       next: next.value,
//       nextKey: 'id',
//       filters: paging.value.filters,
//       orderBy: paging.value.orderBy,
//     }
//     global.logger.trace('Get user list', params)
//     const items = await new User().from().do(params)
//     return res.json(items)
//   } catch (error) {
//     throw error
//   }
// }

ctr.getUserList = async (req, res) => {
  try {
    const { User, UserProfile, Car } = global.models
    const user = new User()
    const profile = new UserProfile()
    const car = new Car()
    const { page, pagesize, next, paging } = req.swagger.params
    const params = {
      page: page.value,
      pagesize: pagesize.value,
      next: next.value,
      nextKey: 'id',
      filters: paging.value.filters,
      orderBy: paging.value.orderBy,
    }
    global.logger.trace('Get user view list', params)
    const userOn = { userId: '"user".user.id' }
    const carOn = { carId: '"car".car.id' }
    const items = await profile.from().ljoin(user, userOn).ljoin(car, carOn).do(paging)
    return res.json(items)
  } catch (error) {
    throw error
  }
}

ctr.getUser = async (req, res) => {
  try {
    const { User } = global.models
    const id = req.swagger.params.id.value
    global.logger.trace('Get user', id)
    const result = await new User().from().where`id = ${id}`.do()
    return res.json(result)
  } catch (error) {
    throw error
  }
}
ctr.addUser = async (req, res) => {
  try {
    const { User } = global.models
    const data = req.swagger.params.data.value
    global.logger.trace('Add new user', data)
    delete data.id
    const result = await new User().add({
      data,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}
ctr.updateUser = async (req, res) => {
  try {
    const { User } = global.models
    const data = req.swagger.params.data.value
    const id = req.swagger.params.id.value
    global.logger.trace('Update user', data)
    const result = await new User().update({
      data,
      pkeyValue: id,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}
ctr.deleteUser = async (req, res) => {
  try {
    const { User } = global.models
    const id = req.swagger.params.id.value
    global.logger.trace('Delete user', id)
    const result = await new User().delete(id)
    return res.json(result)
  } catch (error) {
    throw error
  }
}
