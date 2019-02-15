import { assemblePath } from '../utils'
import apiPaths from '../../api'

const routes = {
  ...apiPaths,
}

const basePath = ''

export default assemblePath(routes, basePath)
