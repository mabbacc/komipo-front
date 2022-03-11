import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import { generateDayWiseTimeSeries } from '@utils'

const A3bSpectrumPlot = () => {
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
        options: {
          chart: {
            id: 'chart2',
            type: 'line',
            stacked: false,
            height: 300,
            foreColor: '#B4B7BD',
            zoom: {
              enabled: true
            }
          },
          colors: ['#546E7A'],
          stroke: {
            width: 2
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0
          },
          xaxis: {
            type: 'numeric',
            tickAmount: 5,
    
            title: {
              text: 'Frequency [Hz]'
            }
          },
          yaxis: {
            title: {
              text: 'Velocity [mm/s r.m.s.]'
            }
          }
        }
      }
    return (
        <Fragment>
            

            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <CardTitle>Spectrum Plot 2</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Chart
                                        options={options}
                                        series={options.series}
                                        type="line"
                                        height="500"
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

export default A3bSpectrumPlot