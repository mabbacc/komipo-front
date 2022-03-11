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
        options: {
          chart: {
            id: 'chart2',
            type: 'line',
            height: 400,
            foreColor: '#B4B7BD',
            toolbar: {
              show: true,
              offsetX: -50,
              autoSelected: 'zoom',
              tools: {
                download: false,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                customIcons: []
              }
            }
          },
          colors: ['#546E7A'],
          stroke: {
            width: 1
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            opacity: 1
          },
          markers: {
            size: 0
          }
        }
      }
    return (
        <Fragment>
            

            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <CardTitle>Waveform 1</CardTitle>
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