import { Fragment } from "react"
import { CardBody, Col, Row, Card, CardTitle } from "reactstrap"
import ComparativeStatus from "./ComparativeStatus"

const R2ComparaitveStatus = () => {
    
    return (
        <Fragment>
            <Row>
                <Col xl='6'>
                    <Card>
                        <CardBody style={{height: '350px'}}>
                            <CardTitle tag='h6' style={{textAlign: 'center'}}>Comparative status(current)</CardTitle>
                            <ComparativeStatus />
                        </CardBody>
                    </Card>
                    {/* Comparative status */}
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody style={{height: '350px'}}>
                            <CardTitle tag='h6' style={{textAlign: 'center'}}>Alarm history table (Report 기능 포함)</CardTitle>
                        </CardBody>
                    </Card>
                    {/* Alarm History table */}
                </Col>
            </Row>
        </Fragment>
    )
}

export default R2ComparaitveStatus