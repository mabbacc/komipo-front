import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"

const A5DiagnosisResult = () => {
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