import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"

const A6Statistic = () => {
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
                        <CardBody style={{height: '500px'}}>현 위치의 알람 발생 누적 빈도</CardBody>
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody style={{height: '500px'}}>현 위치의 알람 발생 원인 결함 클래스 빈도</CardBody>
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

export default A6Statistic