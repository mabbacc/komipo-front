import { Fragment, useEffect } from 'react'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getHierarchy } from '@store/hierarchy'
import { getEquipment } from '@store/equipment'


import TopLevel from './TopLevel'

const Dashboard = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const hierarchyStore = useSelector(state => state.hierarchy)
  const equipmentStore = useSelector(state => state.equipment)

  useEffect(() => {
    dispatch(getHierarchy())
    dispatch(getEquipment())
  }, [])


  return (
    <Fragment>
      <TopLevel />
    </Fragment>
  )
}

export default Dashboard
