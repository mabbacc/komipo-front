import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Plot from 'react-plotly.js'
import axios from 'axios'

const A4aColorMap = () => {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/waterfall')
      .then((res) => {
        setChartData(res.data[1])
        console.log('colorMap', res.data[1])
      })
  }, [])

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
                                      data={chartData}
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