import { Fragment, useEffect, useState } from "react"
import R1MachineList from "./ui-elements/R1MachineList"
import R2ComparaitveStatus from './ui-elements/R2ComparaitveStatus'
import R3ComparativeTrend from './ui-elements/R3ComparativeTrend'
import { useSelector, useDispatch } from "react-redux"
import { getHierarchy } from '@store/hierarchy'
import { getEquipment } from '@store/equipment'


const SubboardIndex = ({location}) => {
    const dispatch = useDispatch()
    const { hierarchy } = useSelector(state => state.hierarchy)
    const { equipment } = useSelector(state => state.equipment)
    const [equipmenttype, setEquipmenttype] = useState(null)
    console.log('location', location)
  
    useEffect(() => {
      if (hierarchy.length === 0) {
          dispatch(getHierarchy())
      }
    }, [])

    useEffect(() => {
        if (equipment.length === 0) {
            dispatch(getEquipment())
        }
    }, [])

    useEffect(() => {
        setEquipmenttype(location.state.equipmenttype)
    }, [location.state])

    return (
        <Fragment>
            <R1MachineList equipment={equipmenttype}/>
            <R2ComparaitveStatus />
            <R3ComparativeTrend />
        </Fragment>
    )
}

export default SubboardIndex