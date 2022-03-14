import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import { generateDayWiseTimeSeries } from '@utils'

const A1aParameterTrend = () => {
    const [grdata, setGrdata] = useState([])

    useEffect(() => {
      setGrdata(
        generateDayWiseTimeSeries(new Date('01 Jan 2022').getTime(), 185, {
          min: 30,
          max: 90
        })
      )
    }, [])
    const options = {
      series: [
        {
          name: 'Desktops',
          data: grdata
        }
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: true,
          tools:{
            download:false 
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      // title: {
      //   text: 'Product Trends by Month',
      //   align: 'left'
      // },
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
                            <CardTitle>Parameter Trend</CardTitle>
                        </CardHeader>
                        <CardBody style={{ height: '200px' }}>
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

export default A1aParameterTrend