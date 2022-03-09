import { Fragment } from "react"
import { Col, Row, Card, CardBody, CardTitle } from "reactstrap"

const R3ComparativeTrend = () => {

    return (
        <Fragment>
            <Row>
                <Col xl='12'>
                    <Card>
                        <CardBody style={{height: '300px'}}>
                            <CardTitle tag='h5'>Comparative Trend</CardTitle>
                        </CardBody>
                    </Card>
                    {/* Comparative Trend */}
                </Col>
                <Col>
                    <Card>
                        <CardBody>기간 선정</CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default R3ComparativeTrend
