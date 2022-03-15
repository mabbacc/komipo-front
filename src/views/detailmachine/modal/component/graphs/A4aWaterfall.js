import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Plot from 'react-plotly.js'
import axios from 'axios'

const A4aWaterfall = () => {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/waterfall')
      .then((res) => {
        setChartData(res.data[0])
        console.log('waterfall', res.data[0])
      })
  }, [])

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
                                      data={chartData}
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