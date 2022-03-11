import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import A4aWaterfall from "./graphs/A4aWaterfall"

const A4WaterfallMAP = () => {
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
                       <A4aWaterfall /> 
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody style={{height: '620px'}}>2D Color Map</CardBody>
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