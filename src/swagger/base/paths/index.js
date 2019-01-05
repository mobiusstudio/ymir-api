import { assemblePath } from '../utils'
import apiPaths from '../../api/path'

const routes = {
  ...apiPaths,
}

const basePath = ''

export default assemblePath(routes, basePath)
