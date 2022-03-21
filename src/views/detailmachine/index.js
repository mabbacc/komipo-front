import { Fragment, useEffect, useState } from "react"
import R1MachineList from "./ui-elements/R1MachineList"
import R2DetailMachine from './ui-elements/R2DetailMachine'
import { useSelector, useDispatch } from "react-redux"
import { getHierarchy } from '@store/hierarchy'
import { getEquipment } from '@store/equipment'

const detailMachineIndex = ({ location }) => {
    const dispatch = useDispatch()
    const { hierarchy } = useSelector(state => state.hierarchy)
    const { equipment } = useSelector(state => state.equipment)
    const [equipmenttype, setEquipmenttype] = useState(null)
    const [equipmentid, setEquipmentid] = useState(null)
  
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
        if (equipmenttype !== undefined && equipmentid !== undefined) {
            setEquipmenttype(location.state.equipmenttype)
            setEquipmentid(location.state.equipmentid)
        }
    }, [location.state])

    return (
        <Fragment>
            <R1MachineList equipmenttype={equipmenttype} equipmentid={equipmentid} />
            <R2DetailMachine />
        </Fragment>
    )
}

export default detailMachineIndex