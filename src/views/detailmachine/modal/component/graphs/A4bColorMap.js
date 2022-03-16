import { Fragment } from 'react'
import { Card, CardBody, Col, Row } from "reactstrap"
import Plot from 'react-plotly.js'


const A4aColorMap = (props) => {

    return (
        <Fragment>
            <Row>
                <Col>
                    <Card>
                        {/* <CardHeader>
                            <CardTitle>A4aColorMap</CardTitle>
                        </CardHeader> */}
                        <CardBody>
                            <Row>
                                <Col>
                                    <Plot 
                                      data={props.graphData}
                                      layout={{
                                        autosize: true,
                                        showlegend: false,
                                        width: 800,
                                        height: 500
                                      }}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default A4aColorMap