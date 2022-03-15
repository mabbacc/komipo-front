import { Fragment } from "react"
import { CardBody, Col, Row, Card, CardTitle } from "reactstrap"
import AlarmHistoryTable from "./AlarmHistoryTable"
import ComparativeStatus from "./ComparativeStatus"

const R2ComparaitveStatus = () => {
    
    return (
        <Fragment>
            <Row>
                <Col xl='6'>
                    <Card>
                        <CardBody style={{height: '315px'}}>
                            <CardTitle style={{fontSize: 'small', textAlign: 'center', marginBottom: 'auto'}}>Comparative status(current)</CardTitle>
                            <ComparativeStatus />
                        </CardBody>
                    </Card>
                    {/* Comparative status */}
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