import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'

const A5DiagnosisResult = () => {
    const selectOption = { value: 'Motor Outboard VIB - X', label: 'Motor Outboard VIB - X'}

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
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl='6'>
                    <Card>
                        <CardBody style={{height: '500px'}}>현재 신호의 결홤</CardBody>
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody style={{height: '500px'}}>결함클래스의 진행 방향을 보여주는 차트</CardBody>
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

export default A5DiagnosisResult