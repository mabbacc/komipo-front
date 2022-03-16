import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import moment from 'moment'

const A1bParameterTrend = (props) => {
  const [chartData, setChartData] = useState(null)

    useEffect(() => {
      const chartData = {
        series: [],
        options : {
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
        legend: {
          show: true,
          showForSingleSeries: true,
          position: 'right'
        },
        stroke: {
          curve: 'straight',
          width: 2
        },
        tooltip: {
          y: {
            formatter: (value, { series, seriesIndex, dataPointIndex, w }) => {
              return value
            }
          }
        },
        xaxis: {
          categories: [],
          labels: {
            rotateAlways: false,
            rotate: 0,
            formatter: (value, timestamp, opts) => {
              return moment(value).format('MM-YYYY')
            }
          }
        },
        yaxis: {
          title: {
            text: 'Phase in degrees'
          },
          labels: {
            formatter: (val, index) => {
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
                            <CardTitle>위상 Parameter Trend</CardTitle>
                        </CardHeader> */}
                        <CardBody style={{ height: '290px' }}>
                            <Row>
                                <Col>
                                   {chartData !== null ? <Chart options={chartData.options} series={chartData.series} type='line' height='280' width='100%' /> : null}
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