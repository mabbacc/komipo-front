// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import hierarchy from './hierarchy'
import equipment from './equipment'

const rootReducer = {
  auth,
  navbar,
  layout,
  hierarchy,
  equipment
}

export default rootReducer
