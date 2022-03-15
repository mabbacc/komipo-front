import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import axios from "axios"
import moment from "moment"

const A1aParameterTrend = () => {
  const [chart, setChart] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    axios
        .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/multi-trend')
        .then((res) => {
          setChartData(res.data[0])
            console.log('Multi-trend A', res.data[0])
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
      colors: ['#FA4443', '#008FFB', '#00E396', '#F9A3A4', '#775DD0', '#A5978B', '#FEB019'],
      legend: {
        show: true, 
        position: 'right'
      },
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
      xaxis: {
        categories: [],
        labels: {
          rotateAlways: false,
          rotate: 0,
          formatter: function(value) {
            return moment(value).format('YYYY-MM-DD')
          }
        }
      },
      yaxis: [
        {
          /* Speed */
          opposite: true,
          labels: {
            formatter: function(val, index) {
              if (val !== undefined) return val.toFixed(0)
            }
          }
        },
        {
          // title: {
          //   text: 'A'
          // },
          labels: {
            formatter: function(val, index) {
              if (val !== undefined) return val
            }
          }
        }
      ]
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
                            <CardTitle>Parameter Trend</CardTitle>
                        </CardHeader> */}
                        <CardBody style={{ height: '290px' }}>
                            <Row>
                                <Col>
                                  {chart !== null ? <Chart options={chart.options} series={chart.series} type='line' height='290' width='100%' /> : null}
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