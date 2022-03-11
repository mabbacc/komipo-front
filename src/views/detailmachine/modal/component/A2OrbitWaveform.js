import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import A2aWavefrom from './graphs/A2aWaveform'
import A2bWaveform from './graphs/A2bWaveform'

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
                        {/* <CardBody style={{height: '500px'}}>Waveform 1</CardBody> */}
                        <A2aWavefrom />
                    </Card>
                </Col>
                <Col xl='4'>
                    <Card>
                        {/* <CardBody style={{height: '500px'}}>Waveform 2</CardBody> */}
                        <A2bWaveform />
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