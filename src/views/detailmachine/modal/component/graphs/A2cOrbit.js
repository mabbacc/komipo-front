import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import Chart from 'react-apexcharts'

const A2cOrbit = (props) => {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    const chartData = {
      series: [],
      options: {
        chart: {
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: true,
            tools: {
              download: false
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
            formatter: (val, index) => {
              if (val !== undefined) return val.toFixed(0)
            }
          }
        }
      }
    }

    if (props.graphData !== undefined) {
      chartData.series = props.graphData.series
      setChartData(chartData)
    }
  }, [props.graphData])

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
                  {chartData !== null ? <Chart options={chartData.options} series={chartData.series} type="line" height="500" width="100%" /> : null}
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
