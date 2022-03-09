import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"

const A1MultiTrace = () => {
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
                <Col>
                    <Card>
                        <CardBody style={{height: '250px'}}>Parameter Trend</CardBody>
                    </Card>
                    <Card>
                        <CardBody style={{height: '250px'}}>위상 Parameter Trend</CardBody>
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

export default A1MultiTrace