// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import hierarchy from './hierarchy'

const rootReducer = {
  auth,
  navbar,
  layout,
  hierarchy
}

export default rootReducer
