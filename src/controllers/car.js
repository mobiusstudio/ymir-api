export const ctr = {}

ctr.getCarList = async (req, res) => {
  try {
    const { Car } = global.models
    const { page, pagesize, next, paging } = req.swagger.params
    const params = {
      page: page.value,
      pagesize: pagesize.value,
      next: next.value,
      nextKey: 'id',
      filters: paging.value.filters,
      orderBy: paging.value.orderBy,
    }
    global.logger.trace('Get car list', params)
    const items = await new Car().from().do(params)
    return res.json(items)
  } catch (error) {
    throw error
  }
}
ctr.getCar = async (req, res) => {
  try {
    const { Car } = global.models
    const id = req.swagger.params.id.value
    global.logger.trace('Get car', id)
    const result = await new Car().from().where`id = ${id}`.do()
    return res.json(result)
  } catch (error) {
    throw error
  }
}
ctr.addCar = async (req, res) => {
  try {
    const { Car } = global.models
    const data = req.swagger.params.data.value
    global.logger.trace('Add new car', data)
    delete data.id
    const result = await new Car().add({
      data,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}
ctr.updateCar = async (req, res) => {
  try {
    const { Car } = global.models
    const data = req.swagger.params.data.value
    const id = req.swagger.params.id.value
    global.logger.trace('Update car', data)
    const result = await new Car().update({
      data,
      pkeyValue: id,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}
ctr.deleteCar = async (req, res) => {
  try {
    const { Car } = global.models
    const id = req.swagger.params.id.value
    global.logger.trace('Delete car', id)
    const result = await new Car().delete(id)
    return res.json(result)
  } catch (error) {
    throw error
  }
}
