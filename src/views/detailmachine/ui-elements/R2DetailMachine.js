import { Fragment } from "react"
import { Card, Col, Row, CardBody, CardTitle } from "reactstrap"

import Summary from "./Summary"
import AlarmFrequency from "./AlarmFrequency"
import FaultyTendency from "./FaultyTendency"

const R2DetailMachine = () => {
    return (
        <Fragment>
            <Row className='match-height'>
                <Col xl='4'>
                    <Card>
                        <CardBody style={{height: '500px'}}>
                            <CardTitle tag='h5'>Detail Machine Overall</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl='8'>
                    <Card>
                        <Summary />
                    </Card>
                    <Row className = 'match-height'>
                        <Col xl='6'>
                            <Card>
                                <CardBody style={{height: '350px'}}>
                                    <CardTitle style={{fontSize: 'small', textAlign: 'center'}}>Alarm frequency</CardTitle>
                                    <AlarmFrequency />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='6'>
                            <Card>
                                <CardBody style={{height: '350px'}}>
                                    <CardTitle style={{fontSize: 'small', textAlign: 'center', marginBottom: 'auto'}}>Diagnosed Faulty Tendency</CardTitle>
                                    <FaultyTendency />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default R2DetailMachine