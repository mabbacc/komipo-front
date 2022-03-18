import { Fragment, useEffect } from "react"
import R1MachineList from "./ui-elements/R1MachineList"
import R2ComparaitveStatus from './ui-elements/R2ComparaitveStatus'
import R3ComparativeTrend from './ui-elements/R3ComparativeTrend'
import { useSelector, useDispatch } from "react-redux"
import { getHierarchy } from '@store/hierarchy'


const SubboardIndex = () => {
    const dispatch = useDispatch()
    const { hierarchy } = useSelector(state => state.hierarchy)
  
    useEffect(() => {
      if (hierarchy.length === 0) {
          dispatch(getHierarchy())
      }
    }, [])

    return (
        <Fragment>
            <R1MachineList />
            <R2ComparaitveStatus />
            <R3ComparativeTrend />
        </Fragment>
    )
}

export default SubboardIndex