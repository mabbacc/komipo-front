import { Fragment } from "react"
import R1FacilityList from "./ui-elements/R1FacilityList"
import R2EquipmentDetaiil from './ui-elements/R2EquipmentDetail'

const detailMachineIndex = () => {
    return (
        <Fragment>
            <R1FacilityList />
            <R2EquipmentDetaiil />
        </Fragment>
    )
}

export default detailMachineIndex