import { Fragment } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import A3aSpectrumPlot from "./graphs/A3aSpectrumPlot"
import A3bSpectrumPlot from "./graphs/A3bSpectrumPlot"

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
                        <A3aSpectrumPlot />
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <A3bSpectrumPlot />
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