import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"

const A2OrbitWaveform = () => {
    return (
        <Fragment>
            <Row>
                <Col xl='12'>
                    <Card>
                        <CardBody> Select List </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl='4'>
                    <Card>
                        <CardBody style={{height: '500px'}}>Waveform 1</CardBody>
                    </Card>
                </Col>
                <Col xl='4'>
                    <Card>
                        <CardBody style={{height: '500px'}}>Waveform 2</CardBody>
                    </Card>
                </Col>
                <Col xl='4'>
                    <Card>
                        <CardBody style={{height: '500px'}}>Orbit</CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <CardBody>기간 선정</CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default A2OrbitWaveform