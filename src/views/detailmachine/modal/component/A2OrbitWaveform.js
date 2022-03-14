import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import A2aWavefrom from './graphs/A2aWaveform'
import A2bWaveform from './graphs/A2bWaveform'

const A2OrbitWaveform = () => {
    const selectOption = { value: 'Motor Outboard VIB - X', label: 'Motor Outboard VIB - X'}
    const filterOption = [
        { value: '1X Filter', label: '1X Filter'},
        { value: 'none', label: 'none'}
    ]
    
    return (
        <Fragment>
            <Row>
                <Col xl='12'>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='1'>
                                    <div className="form-control">PAF-A</div>
                                </Col>
                                <Col xl='2'>
                                    <Select 
                                        defaultValue={selectOption}
                                    />
                                </Col>
                                <Col xl='2'>
                                    <div className="form-control">MOTOR Outboard VIB - Y</div>
                                </Col>
                                <Col xl='5' />
                                <Col xl='2'>
                                    <Select
                                        defaultValue={filterOption[0]}
                                        options={filterOption}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
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