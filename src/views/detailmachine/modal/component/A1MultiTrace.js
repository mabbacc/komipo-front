import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import A1aParameterTrend from "./graphs/A1aParameterTrend"
import A1bParameterTrend from "./graphs/A1bParameterTrend"
import axios from "axios"

const A1MultiTrace = () => {
    const [chartData, setChartData] = useState([])
    const selectOption = { value: 'Motor Outboard VIB - X', label: 'Motor Outboard VIB - X'}

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/multi-trend')
            .then((res) => {
              setChartData(res.data)
                console.log('Multi-trend', res)
            })
            console.log('chartData', chartData)
      }, [])

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
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <A1aParameterTrend graphData={chartData[0]} /> 
                    </Card>
                    <Card>
                        <A1bParameterTrend graphData={chartData[1]} />
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

export default A1MultiTrace