import { Fragment, useEffect } from 'react'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getHierarchy } from '@store/hierarchy'


import TopLevel from './TopLevel'

const Dashboard = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.hierarchy)

  useEffect(() => {
    dispatch(getHierarchy())
  }, [])


  return (
    <Fragment>
      <TopLevel />
    </Fragment>
  )
}

export default Dashboard
