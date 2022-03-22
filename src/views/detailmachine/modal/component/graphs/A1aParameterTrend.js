import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import moment from "moment"

const A1aParameterTrend = (props) => {
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
      noData: {
        text: 'No Data'
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
          formatter: (value) => {
            return moment(value).format('YYYY-MM-DD')
          }
        }
      },
      yaxis: [
        {
          /* Speed */
          opposite: true,
          labels: {
            formatter: (val, index) => {
              if (val !== undefined) return val.toFixed(0)
            }
          }
        },
        {
          // title: {
          //   text: 'A'
          // },
          labels: {
            formatter: (val, index) => {
              if (val !== undefined) return val
            }
          }
        }
      ]
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
                            <CardTitle>Parameter Trend</CardTitle>
                        </CardHeader> */}
                        <CardBody style={{ height: '290px' }}>
                            <Row>
                                <Col>
                                  {chartData !== null ? <Chart options={chartData.options} series={chartData.series} type='line' height='290' width='100%' /> : null}
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