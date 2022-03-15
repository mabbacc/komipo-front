import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import Select from 'react-select'
import axios from "axios"
import moment from "moment"
import { toast } from "react-toastify"

const A0TrendLevel = () => {
    const [chart, setChart] = useState(null)
    const [chartData, setChartData] = useState(null)
    const selectOption = { value: 'Motor Outboard VIB - X', label: 'Motor Outboard VIB - X'}

    const source = axios.CancelToken.source()

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/trend', {
                cancelToken: source.token
            })
            .then((res) => {
                setChartData(res.data)
                console.log('Trend Level', res.data)
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
                colors: ['#3F51B5', '#FF9800'],
                legend: {
                    show: true, 
                    position: 'right',
                    offsetY: 200,
                    customLegendItems: ['PAF-A pk-pk Motor Inbord X', 'PAF-A pk-pk Motor Inbord Y']                
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight',
                    width: 2
                },
                xaxis: {
                    // type: 'category',
                    categories: [],
                    tickAmount: 10,
                    title: {
                        text: 'Date'
                    },
                    labels :{
                        rotateAlways: false,
                        rotate: 0,
                        offsetX: 15,
                        formatter: function(value, timestamp, opts) {
                            return moment(value).format('YY-MM-DD')
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: 'Displacement'
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
                <Col xl='12'>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='1'>
                                    <div className="form-control">PAF-A</div>
                                </Col>
                                <Col xl='2'>
                                    <Select 
                                        defaultValue={selectOption}
                                        />
                                </Col>
                                <Col xl='2'>
                                    <div className="form-control">MOTOR Outboard VIB - Y</div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        {/* <CardHeader>
                            <CardTitle>Overall Trend</CardTitle>
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

            <Row>
                <Col>
                    <Card>
                        <CardBody>기간 선정</CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default A0TrendLevel