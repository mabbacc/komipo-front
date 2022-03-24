import { Fragment, useEffect, useState } from "react"
import R1MachineList from "./ui-elements/R1MachineList"
import R2ComparaitveStatus from './ui-elements/R2ComparaitveStatus'
import R3ComparativeTrend from './ui-elements/R3ComparativeTrend'
import R4CalendarPeriodSetting from "./ui-elements/R4CalendarPeriodSetting"
import { useSelector, useDispatch } from "react-redux"
import { getHierarchy } from '@store/hierarchy'
import { getEquipment } from '@store/equipment'
import moment from "moment"


const SubboardIndex = ({ location }) => {
    const dispatch = useDispatch()
    const { hierarchy } = useSelector(state => state.hierarchy)
    const { equipment } = useSelector(state => state.equipment)
    const [equipmenttype, setEquipmenttype] = useState(null)

    // itv
    const [itvValue, setItvValue] = useState('1 weeks')

    // start_dt, end_dt
    const [startDate, setStartDate] = useState(moment(new Date()).subtract(7, 'days'))
    const [endDate, setEndDate] = useState(moment(new Date()))
  
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
        if (location.state.equipmenttype !== null) {
            setEquipmenttype(location.state.equipmenttype)
        }
    }, [location.state])

    return (
        <Fragment>
            <R1MachineList 
                equipment={equipmenttype}
                setEquipmenttype={setEquipmenttype}
                
                />
            <R2ComparaitveStatus 
                equipmenttype={equipmenttype}
                itvValue={itvValue}
                startDate={startDate}
                endDate={endDate}/>
            <R3ComparativeTrend 
                equipmenttype={equipmenttype}
                itvValue={itvValue}
                startDate={startDate}
                endDate={endDate} />
            <R4CalendarPeriodSetting 
                itvValue={itvValue}
                startDate={startDate}
                endDate={endDate}
                setItvValue={setItvValue}
                setStartDate={setStartDate}
                setEndDate={setEndDate}/>
        </Fragment>
    )
}

export default SubboardIndex