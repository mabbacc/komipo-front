import { Fragment } from "react"
import { Card, Col, Row, CardBody, CardTitle } from "reactstrap"

import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import Summary from "./Summary"

const R2DetailMachine = () => {
    return (
        <Fragment>
            <Row className='match-height'>
                <Col xl='4'>
                    <Card>
                        <CardBody style={{height: '600px'}}>
                            <CardTitle tag='h5'>Detail Machine Overall</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl='8'>
                    <Card>
                        {/* <CardBody style={{height: '300px'}}>
                            <CardTitle tag='h5'>Summary</CardTitle>
                        </CardBody> */}
                        <Summary />
                    </Card>
                    <Row className = 'match-height'>
                        <Col xl='6'>
                            <Card>
                                <CardBody style={{height: '300px'}}>
                                    <CardTitle tag='h5'>Alarm frequency</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='6'>
                            <Card>
                                <CardBody style={{height: '300px'}}>
                                    <CardTitle tag='h5'>Diagnosed Faulty Tendency</CardTitle>
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