import { Fragment } from "react"
import R1FacilityList from "./ui-elements/R1FacilityList"
import R2List from './ui-elements/R2List'
import R3ComparativeTrend from './ui-elements/R3ComparativeTrend'


const SubboardIndex = () => {
    return (
        <Fragment>
            <R1FacilityList />
            <R2List />
            <R3ComparativeTrend />
        </Fragment>
    )
}

export default SubboardIndex