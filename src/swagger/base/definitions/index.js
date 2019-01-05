import error from './error'
import errorResponse from './errorResponse'
import validationError from './validationError'
import validationErrorResponse from './validationErrorResponse'
import errorFieldDescription from './errorFieldDescription'
import uploadToken from './uploadToken'
import { PagingData } from '../constants'

import * as apiDefinitions from '../../api/definitions'


const definitions = {
  error,
  errorResponse,
  validationError,
  validationErrorResponse,
  errorFieldDescription,
  uploadToken,
  PagingData,
  ...apiDefinitions,
}

export default definitions
