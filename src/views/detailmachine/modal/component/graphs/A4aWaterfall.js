import { Fragment } from 'react'
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Plot from 'react-plotly.js'

const A4aWaterfall = () => {
  const randomValues = (num, mul) => {
    const arr = []
    const index = []
    for (let i = 0; i < num; i++) {
      arr.push(Math.random() * mul)
      index.push(i)
    }
    return {index, arr}
  }
    const traces = Array(3).fill(0).map((_, i) => {
        const {index, arr} = randomValues(20, 3)
        return {
          x: Array(20).fill(i),
          y: index,
          z: arr,
          type: 'scatter3d',
          mode: 'lines'
        }
      })


    return (
        <Fragment>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <CardTitle>A4aWaterfall</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Plot 
                                       data={traces}
                                       layout={{
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

export default A4aWaterfall