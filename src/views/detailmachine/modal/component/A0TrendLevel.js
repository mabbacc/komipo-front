import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, CardTitle, CardHeader, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import Select from 'react-select'
import { generateDayWiseTimeSeries } from '@utils'

const A0TrendLevel = () => {
    const [grdata, setGrdata] = useState([])
    const selectOption = [ 
        { value: 'PAF-A', label: 'PAF - A'},
        { value: 'Motor Outboard VIB - X', label: 'Motor Outboard VIB - X'},
        { value: 'Motor Outboard VIB - Y', label: 'Motor Outboard VIB - Y'}
    ]

    useEffect(() => {
        setGrdata(
            generateDayWiseTimeSeries(new Date('01 Jan 2022').getTime(), 185, {
                min: 30,
                max: 90
            })
        )
    }, [])

    const options = {
            series: [
        {
            name: 'Desktops',
            data: grdata
        }
        ],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 2
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
        }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
      }
    return (
        <Fragment>
            <Row>
                <Col xl='12'>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='4'>
                                    <Select 
                                        defaultValue={selectOption[0]}
                                    />
                                </Col>
                                <Col xl='2'>
                                    <Select 
                                        defaultValue={selectOption[1]}
                                    />
                                </Col>
                                <Col xl='2'>
                                    <Select 
                                        defaultValue={selectOption[2]}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <CardTitle>Overall Trend</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Chart
                                        options={options}
                                        series={options.series}
                                        type="line"
                                        height="500"
                                        width='100%'
                                    />
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