import { Fragment } from "react"
import R1MachineList from "./ui-elements/R1MachineList"
import R2DetailMachine from './ui-elements/R2DetailMachine'

const detailMachineIndex = () => {
    return (
        <Fragment>
            <R1MachineList />
            <R2DetailMachine />
        </Fragment>
    )
}

export default detailMachineIndex