import { Fragment } from "react"
import { useSelector } from "react-redux"
import A1CAS7 from "./ui-elements/cards/A1CAS7"
import A4FWS7 from "./ui-elements/cards/A4FWS7"
import A3STG7 from "./ui-elements/cards/A3STG7"
import A5COS7 from "./ui-elements/cards/A5COS7"
import A2WCS7 from "./ui-elements/cards/A2WCS7"
import A7OAB7 from "./ui-elements/cards/A7OAB7"
import A6COM7 from "./ui-elements/cards/A6COM7"

const TopLevel = () => {
    const hierarchyData = useSelector((state) => state.hierarchy.hierarchy)
    const equipmentData = useSelector((state) => state.equipment.equipment)
    
    return (
        <Fragment>
            <div id='dashboard-ecommerce'>
                <A1CAS7 hierarchy={hierarchyData[0]} equipment={equipmentData}/>
                <A4FWS7 hierarchy={hierarchyData[3]} equipment={equipmentData}/> 
                <A3STG7 hierarchy={hierarchyData[2]} equipment={equipmentData}/>
                <A5COS7 hierarchy={hierarchyData[4]} equipment={equipmentData}/>
                <A2WCS7 hierarchy={hierarchyData[1]} equipment={equipmentData}/>
                <A7OAB7 hierarchy={hierarchyData[6]} equipment={equipmentData}/>
                <A6COM7 hierarchy={hierarchyData[5]} equipment={equipmentData}/>           
            </div>
        </Fragment>
    )
}

export default TopLevel