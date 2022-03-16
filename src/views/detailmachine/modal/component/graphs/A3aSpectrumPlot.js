import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import Chart from 'react-apexcharts'

const A3aSpectrumPlot = (props) => {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    const chartData = {
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
            tools: {
              download: false
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
                            <CardTitle>Spectrum Plot 1</CardTitle>
                        </CardHeader> */}
            <CardBody>
              <Row>
                <Col>
                  {chartData !== null ? <Chart options={chartData.options} series={chartData.series} type="line" height="450" width="100%" /> : null}
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
