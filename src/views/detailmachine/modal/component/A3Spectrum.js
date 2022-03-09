import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"

const A3Spectrum = () => {
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
                        <CardBody style={{height: '500px'}}>Spectrum Plot 1</CardBody>
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody style={{height: '500px'}}>Spectrum Plot 2</CardBody>
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

export default A3Spectrum