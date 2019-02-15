export const ctr = {}

ctr.getUserProfile = async (req, res) => {
  try {
    const { UserProfile } = global.models
    const userId = req.swagger.params.id.value
    global.logger.trace('Get user profile', userId)
    const result = await new UserProfile().from().where`user_id = ${userId}`.do()
    return res.json(result)
  } catch (error) {
    throw error
  }
}
ctr.addUserProfile = async (req, res) => {
  try {
    const { UserProfile } = global.models
    const data = req.swagger.params.data.value
    const userId = req.swagger.params.id.value
    global.logger.trace('Add user profile', data)
    const result = await new UserProfile().add({
      data,
      pkeyValue: userId,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}
ctr.updateUserProfile = async (req, res) => {
  try {
    const { UserProfile } = global.models
    const data = req.swagger.params.data.value
    const userId = req.swagger.params.id.value
    global.logger.trace('Update user profile', data)
    const result = await new UserProfile().update({
      data,
      pkeyValue: userId,
    })
    return res.json(result)
  } catch (error) {
    throw error
  }
}
ctr.deleteUserProfile = async (req, res) => {
  try {
    const { UserProfile } = global.models
    const userId = req.swagger.params.id.value
    global.logger.trace('Delete user profile', userId)
    const result = await new UserProfile().delete(userId)
    return res.json(result)
  } catch (error) {
    throw error
  }
}
