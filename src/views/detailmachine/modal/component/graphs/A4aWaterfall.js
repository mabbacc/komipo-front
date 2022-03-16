import { Fragment } from 'react'
import { Card, CardBody, Col, Row } from "reactstrap"
import Plot from 'react-plotly.js'

const A4aWaterfall = (props) => {

    return (
        <Fragment>
            <Row>
                <Col>
                    <Card>
                        {/* <CardHeader>
                            <CardTitle>A4aWaterfall</CardTitle>
                        </CardHeader> */}
                        <CardBody>
                            <Row>
                                <Col>
                                    <Plot 
                                      data={props.graphData}
                                      layout={{
                                        margin:{
                                          autoexpand: false,
                                          b: 0, // bottom
                                          l: 0, // left
                                          r: 0, // right
                                          t: 0  // top
                                        },
                                        autosize: true,
                                        showlegend: false,
                                        width: 800,
                                        height: 500,
                                        colorway: ['#182844']
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

export default A4aWaterfall