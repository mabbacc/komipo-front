import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import axios from 'axios'

const A3aSpectrumPlot = () => {
  const [chart, setChart] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/spectrum')
      .then((res) => {
        setChartData(res.data[0])
        console.log('spectrum A', res.data[0])
      })
  }, [])

  useEffect(() => {
    const chart = {
        series: [],
        options: {
          chart: {
            id: 'chart2',
            type: 'line',
            stacked: false,
            height: 300,
            foreColor: '#B4B7BD',
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
          colors: ['#546E7A'],
          stroke: {
            width: 2
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [],
            tickAmount: 7,
            title: {
              text: 'Frequency[Hz]'
            },
            labels: {
              rotateAlways: false,
              rotate: 0
            }
          },
          yaxis: {
            title: {
              text: 'Amplitude[μm]'
            },
            labels: {
              formatter: function(val, index) {
                if (val !== undefined) return val.toFixed(0)
              }
            }
          }
        }
      }

    if (chartData !== null) {
      chart.series = chartData.series
      if (chartData.xaxis[0].categories.length > 0) {
        chart.options.xaxis.categories = chartData.xaxis[0].categories
      }
      setChart(chart)
    }
  }, [chartData])

    return (
        <Fragment>
            

            <Row>
                <Col>
                    <Card>
                        {/* <CardHeader>
                            <CardTitle>Spectrum Plot 1</CardTitle>
                        </CardHeader> */}
                        <CardBody>
                            <Row>
                                <Col>
                                  {chart !== null ? <Chart options={chart.options} series={chart.series} type='line' height='450' width='100%' /> : null}
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Fragment>
    )
}

export default A3aSpectrumPlot