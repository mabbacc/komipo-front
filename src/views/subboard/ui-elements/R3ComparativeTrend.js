
import { Fragment, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, CardTitle, Button } from "reactstrap"
import moment from "moment"
import Chart from 'react-apexcharts'
import axios from "axios"


const R3ComparativeTrend = (props) => {
    const [equipmenttype, setEquipmenttype] = useState('')

    const [itvValue, setItvValue] = useState('1 weeks')
    const [startDate, setStartDate] = useState(moment(new Date()).subtract(7, 'days').format('YYYY-MM-DD'))
    const [endDate, setEndDate] = useState(moment(new Date()).format('YYYY-MM-DD'))

    const [chart, setChart] = useState(null)
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        setEquipmenttype(props.equipmenttype)
        setItvValue(props.itvValue)
        setStartDate(moment(props.startDate).format('YYYY-MM-DD'))
        setEndDate(moment(props.endDate).format('YYYY-MM-DD'))
    }, [props])


    const fetchData = (equipmenttype, itvValue, startDate, endDate) => {
        // front/comparative/trend?equipmenttype=FDF&itv=1 months&start_dt=2019-11-02&end_dt=2019-11-10
        if (equipmenttype !== undefined) {
            axios
                .get(process.env.REACT_APP_API_SERVER_URL + 
                    '/front/comparative/trend?equipmenttype=' + equipmenttype +
                    '&itv=' + itvValue +
                    '&start_dt=' + startDate +
                    '&end_dt=' + endDate)
                .then((res) => {
                    setChartData(res.data)
                })
        }
    }

    useEffect(() => {
        fetchData(equipmenttype, itvValue, startDate, endDate)
    }, [equipmenttype, itvValue, startDate, endDate])


    useEffect(() => {
        const chart = {
          series: [],
          options: {

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
                // animations: {
                //   enabled: false,
                //   dynamicAnimation: {
                //     enabled: false
                //   }
                // }
              },
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
                text: 'No Data',
                offsetY: -25 
              },
              // title: {
              //   text: 'Product Trends by Month',
              //   align: 'left'
              // },
              // grid: {
              //   row: {
              //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              //     opacity: 0.5
              //   }
              // },
              xaxis: {
                categories: [],
                tickAmount: 10,
                title: {
                  text: 'Date'
                },
                labels: {
                    rotateAlways: false,
                    rotate: 0,
                    offsetX: 15,
                    formatter: (value, timestamp, opts) => {
                      return moment(value).format('YY-MM-DD')
                    }
                  }
              },
              yaxis: {
                title: {
                  text: 'Displacement'
                },
                labels: {
                    formatter: (val, index) => {
                      if (val !== undefined) return val
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
                <Col xl='12'>
                    <Card>
                        <CardBody style={{height: '280px'}}>
                            <CardTitle style={{fontSize: 'small', textAlign: 'center', marginBottom: 'auto'}}>Comparative Trend</CardTitle>
                            {chart !== null ? <Chart options={chart.options} series={chart.series} type="line" height="230" width="100%" /> : null}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default R3ComparativeTrend
