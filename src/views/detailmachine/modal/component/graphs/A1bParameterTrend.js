import { Fragment } from "react"
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'

const A1bParameterTrend = () => {
    const options = {
        series: [
            {
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }
         ],
            chart: {
            height: 350,
            type: 'line',
            zoom: {
            enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
      }
    return (
        <Fragment>
            

            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <CardTitle>위상 Parameter Trend</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Chart
                                        options={options}
                                        series={options.series}
                                        type="line"
                                        height="200"
                                        width='100%'
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

export default A1bParameterTrend