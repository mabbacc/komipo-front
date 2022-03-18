import { Fragment, useEffect } from "react"
import R1MachineList from "./ui-elements/R1MachineList"
import R2DetailMachine from './ui-elements/R2DetailMachine'
import { useSelector, useDispatch } from "react-redux"
import { getHierarchy } from '@store/hierarchy'

const detailMachineIndex = () => {
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
            <R2DetailMachine />
        </Fragment>
    )
}

export default detailMachineIndex