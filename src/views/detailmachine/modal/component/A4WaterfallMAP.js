import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import A4aWaterfall from "./graphs/A4aWaterfall"
import A4bColorMap from './graphs/A4bColorMap'

const A4WaterfallMAP = () => {
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
                       <A4aWaterfall /> 
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <A4bColorMap /> 
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

export default A4WaterfallMAP