import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import axios from 'axios'
import moment from 'moment'

const A1bParameterTrend = () => {
  const [chart, setChart] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    axios
        .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/multi-trend')
        .then((res) => {
          setChartData(res.data[1])
            console.log('Multi-trend b', res.data[1])
        })
    }, [])

    useEffect(() => {
      const chart = {
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
            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
              return value
            }
          }
        },
        xaxis: {
          categories: [],
          labels: {
            rotateAlways: false,
            rotate: 0,
            formatter: function(value, timestamp, opts) {
              return moment(value).format('MM-YYYY')
            }
          }
        },
        yaxis: {
          title: {
            text: 'Phase in degrees'
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
                            <CardTitle>위상 Parameter Trend</CardTitle>
                        </CardHeader> */}
                        <CardBody style={{ height: '290px' }}>
                            <Row>
                                <Col>
                                   {chart !== null ? <Chart options={chart.options} series={chart.series} type='line' height='280' width='100%' /> : null}
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