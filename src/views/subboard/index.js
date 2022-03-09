import { Fragment } from "react"
import R1MachineList from "./ui-elements/R1MachineList"
import R2ComparaitveStatus from './ui-elements/R2ComparaitveStatus'
import R3ComparativeTrend from './ui-elements/R3ComparativeTrend'


const SubboardIndex = () => {
    return (
        <Fragment>
            <R1MachineList />
            <R2ComparaitveStatus />
            <R3ComparativeTrend />
        </Fragment>
    )
}

export default SubboardIndex