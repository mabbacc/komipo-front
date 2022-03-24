import { Fragment, useEffect, useState } from "react"
import { CardBody, Col, Row, Card, CardTitle } from "reactstrap"
import AlarmHistoryTable from "./AlarmHistoryTable"
import ComparativeStatus from "./ComparativeStatus"
import { useSelector } from "react-redux"

const R2ComparaitveStatus = (props) => {
    console.log('111 props', props)
    //const equipmentData = useSelector((state) => state.equipment.equipment)
    //const [equipment, setEquipment] = useState([])
    const [equipmenttype, setEquipmenttype] = useState(null)
    //const [itvValue, setItvValue] = useState('1 weeks')
    //const [startDate, setStartDate] = useState(moment(new Date()).subtract(7, 'days'))
    //const [endDate, setEndDate] = useState(moment(new Date()))

    useEffect(() => {
        //setEquipment(equipmentData)
        setEquipmenttype(props.equipmenttype)
        //setItvValue(props.itvValue)
        //setStartDate(moment(props.startDate._d).format('YYYY-MM-DD'))
        //setEndDate(moment(props.endDate._d).format('YYYY-MM-DD'))
    }, [props])
    
    return (
        <Fragment>
            <Row>
                <Col xl='6'>
                    <Card>
                        <CardBody style={{height: '315px'}}>
                            <CardTitle style={{fontSize: 'small', textAlign: 'center', marginBottom: 'auto'}}>Comparative status(current)</CardTitle>
                            <ComparativeStatus 
                                equipmenttype={equipmenttype}
                                />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody style={{height: '315px'}}>
                            <CardTitle style={{fontSize: 'small', textAlign: 'center', marginBottom: 'auto'}}>Alarm history table (Report 기능 포함)</CardTitle>
                            <AlarmHistoryTable />
                        </CardBody>
                    </Card>
                    {/* Alarm History table */}
                </Col>
            </Row>
        </Fragment>
    )
}

export default R2ComparaitveStatus