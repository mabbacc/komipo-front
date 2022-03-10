import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import A1aParameterTrend from "./graphs/A1aParameterTrend"
import A1bParameterTrend from "./graphs/A1bParameterTrend"

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
                        <A1aParameterTrend /> 
                    </Card>
                    <Card>
                        <A1bParameterTrend />
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