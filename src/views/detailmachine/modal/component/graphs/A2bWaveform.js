import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import { generateDayWiseTimeSeries } from '@utils'

const A2bWaveform = () => {
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
        }
      },
      colors: ['#546E7A'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
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
          text: 'Time[ms]'
        }
      },
      yaxis: {
        title: {
          text: 'Displacement[μm]'
        }
    }
    }
    return (
        <Fragment>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <CardTitle>Waveform 2</CardTitle>
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

export default A2bWaveform