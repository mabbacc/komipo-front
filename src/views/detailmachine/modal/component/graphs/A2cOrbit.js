import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import axios from "axios"

const A2cOrbit = () => {
    const [chart, setChart] = useState(null)
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        axios
          .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/waveform?filter=true')
          .then((res) => {
            setChartData(res.data[2])
            console.log('Orbit none', res.data[2])
          })
      }, [])

      useEffect(() => {
        const chart = {
          series: [],
          options : {
            chart: {
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
            colors: ['#546E7A'],
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
              width: 2
            },
            tooltip: {
              y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                  return value
                }
              }
            },
            dataLabels: {
              enabled: false
            },
            
            xaxis: {
              // type: 'numeric',
              categories: [],
              tickAmount: 7,
              labels: {
                rotateAlways: false,
                rotate: 0
                // formatter: function(val, index) {
                //   if (val !== undefined) return val.toFixed(2)
                // }
              }
            },
            yaxis: {
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
        //   if (chartData.xaxis[0].categories.length > 0) {
        //     chart.options.xaxis.categories = chartData.xaxis[0].categories
        //   }
          setChart(chart)
        }
       
      }, [chartData])

    return (
        <Fragment>
            <Row>
                <Col>
                    <Card>
                        {/* <CardHeader>
                            <CardTitle>Spectrum Plot 2</CardTitle>
                        </CardHeader> */}
                        <CardBody>
                            <Row>
                                <Col>
                                  {chart !== null ? <Chart options={chart.options} series={chart.series} type='line' height='500' width='100%' /> : null}
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Fragment>
    )
}

export default A2cOrbit