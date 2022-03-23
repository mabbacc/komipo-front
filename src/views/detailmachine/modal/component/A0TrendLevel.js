import { Fragment, useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from 'reactstrap'
import Chart from 'react-apexcharts'
import Select from 'react-select'
import axios from 'axios'
import moment from 'moment'
import { toast } from 'react-toastify'
import ErrorToast from '../../../toast/ErrorToast'
import { useSelector } from 'react-redux'


const A0TrendLevel = (props) => {
  const { hierarchy } = useSelector(state => state.hierarchy)
  const { equipment } = useSelector(state => state.equipment)

  const [pairMptValue, setPairMptValue] = useState(null)
  const [selectMptOption, setSelectMptOption] = useState({})
  const [itvValue, setItvValue] = useState(null)
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const [chart, setChart] = useState(null)
  const [chartData, setChartData] = useState(null)

  const source = axios.CancelToken.source()

  useEffect(() => {
    setSelectMptOption(props.selectMptOption)
    setPairMptValue(props.pairMptValue)
    setItvValue(props.itvValue)
    setStartDate(moment(props.startDate._d).format('YYYY-MM-DD'))
    setEndDate(moment(props.endDate._d).format('YYYY-MM-DD'))
  }, [props])


  const fetchData = (endDate, startDate) => {
    if (selectMptOption.value !== undefined) { 
      axios
        .get(process.env.REACT_APP_API_SERVER_URL + 
          '/front/detail-analysis/trend?mptkey=' + selectMptOption.value + 
          '&itv=' + itvValue +
          '&end_dt=' + endDate +
          '&start_dt=' + startDate
        , {
          cancelToken: source.token
        })
        .then((res) => {
          setChartData(res.data)
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Cancel Loading')
          } else {
            toast.warning(<ErrorToast msg={'에러가 발생했습니다.[' + error.message + ']'} />, { autoClose: 3000 })
          }
        })
        return () => {
          source.cancel('Canceling in cleanup')
        }
      } 
  }
  
  useEffect(() => {
    fetchData(endDate, startDate)
  }, [endDate, startDate])


  // useEffect(() => {
  //   if (selectMptOption.value !== undefined) { 
  //     axios
  //       .get(process.env.REACT_APP_API_SERVER_URL + 
  //         '/front/detail-analysis/trend?mptkey=' + selectMptOption.value + 
  //         '&itv=' + itvValue +
  //         '&end_dt=' + endDate +
  //         '&start_dt=' + startDate
  //       , {
  //         cancelToken: source.token
  //       })
  //       .then((res) => {
  //         setChartData(res.data)
  //       })
  //       .catch((error) => {
  //         if (axios.isCancel(error)) {
  //           console.log('Cancel Loading')
  //         } else {
  //           toast.warning(<ErrorToast msg={'에러가 발생했습니다.[' + error.message + ']'} />, { autoClose: 3000 })
  //         }
  //       })
  //       return () => {
  //         source.cancel('Canceling in cleanup')
  //       }
  //     } 
  //   }, [selectMptOption, itvValue, startDate, endDate])


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
            tools: {
              download: false
            }
          }
        },
        colors: ['#3F51B5', '#FF9800'],
        legend: {
          show: true,
          position: 'right',
          offsetY: 200,
          customLegendItems: [selectMptOption.label, pairMptValue]
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
          align: 'center',
          verticalAlign: 'middle'
        },
        xaxis: {
          // type: 'category',
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
        <Col xl="12">
          <Card>
            <CardBody>
              <Row>
                <Col xl="1">
                  <div className="form-control">{props.equipmentid.label}</div>
                </Col>
                <Col xl="2">
                  <Select 
                    className='react-select'
                    classNamePrefix='select'
                    value={selectMptOption}
                    options={props.mptOption}
                    onChange={(value) => {
                      setSelectMptOption(value); props.setSelectMptOption(value)
                    }}
                    />
                </Col>
                <Col xl="2">
                  <div className="form-control">{pairMptValue}</div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <CardBody>
              <Row>
                <Col>{chart !== null ? <Chart options={chart.options} series={chart.series} type="line" height="500" width="100%" /> : null}</Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default A0TrendLevel
