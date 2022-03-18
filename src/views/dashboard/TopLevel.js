import { Fragment, useEffect, useState } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import { useSelector } from "react-redux"
import axios from "axios"
import A1CAS7 from "./ui-elements/cards/A1CAS7"
import A4FWS7 from "./ui-elements/cards/A4FWS7"
import A3STG7 from "./ui-elements/cards/A3STG7"
import A5COS7 from "./ui-elements/cards/A5COS7"
import A2WCS7 from "./ui-elements/cards/A2WCS7"
import A7OAB7 from "./ui-elements/cards/A7OAB7"
import A6COM7 from "./ui-elements/cards/A6COM7"

const TopLevel = () => {
    const hierarchyData = useSelector((state) => state.hierarchy.hierarchy)
    
    return (
        <Fragment>
            <div id='dashboard-ecommerce'>
                <A1CAS7 hierarchy={hierarchyData[0]}/>
                <A4FWS7 hierarchy={hierarchyData[3]}/> 
                <A3STG7 />
                <A5COS7 />
                <A2WCS7 />
                <A7OAB7 />
                <A6COM7 />
                
            </div>
        </Fragment>
    )
}

export default TopLevel