import { errors } from 'ymir-models'
import jwt from 'jsonwebtoken'
import config from '../config'

errors.register({
  ApiAuthKeyIsMissing: 401,
  InvalidAuthKey: 401,
})

export const apiKeyAuth = (req, definition, apiKey, cb) => {
  if (!apiKey) {
    cb(new errors.ApiAuthKeyIsMissingError())
    return
  }
  try {
    const credentials = jwt.verify(apiKey, config.secret.jwt)
    req.trailers.credentials = credentials
    cb()
  } catch (err) {
    cb(new errors.InvalidAuthKeyError())
  }
}

export const getToken = (id, role) => {
  return jwt.sign({ id, role }, config.secret.jwt, config.jwtOptions)
}
