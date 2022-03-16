import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'

const A2bWaveform = (props) => {
  const [chartData, setChartData] = useState(null)
    
    useEffect(() => {
      const chartData = {
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
          markers: {
            size: 0
          },
          xaxis: {
            // type: 'numeric',
            categories: [],
            tickAmount: 7,
            tickPlacement: 'on',
            // rotateAlways: true,
            // rotate: 0,
            title: {
              text: 'Time[ms]'
            },
            labels: {
              rotateAlways: false,
              rotate: 0
              // formatter: function(val, index) {
              //   if (val !== undefined) return val.toFixed(2)
              // }
            }
          },
          yaxis: {
            title: {
              text: 'Displacement[μm]'
            },
            labels: {
              formatter: function(val, index) {
                if (val !== undefined) return val.toFixed(0)
              }
            }
          }
        }
      }


    if (props.graphData !== undefined) {
      chartData.series = props.graphData.series
      if (props.graphData.xaxis[0].categories.length > 0) {
        chartData.options.xaxis.categories = props.graphData.xaxis[0].categories
      }
      setChartData(chartData)
    }
  }, [props.graphData])

    return (
        <Fragment>
            <Row>
                <Col>
                    <Card>
                        {/* <CardHeader>
                            <CardTitle>Waveform 2</CardTitle>
                        </CardHeader> */}
                        <CardBody>
                            <Row>
                                <Col>
                                  {chartData !== null ? <Chart options={chartData.options} series={chartData.series} type='line' height='500' width='100%' /> : null}
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