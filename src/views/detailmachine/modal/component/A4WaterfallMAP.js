import { Fragment, useState, useEffect } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import axios from "axios"
import A4aWaterfall from "./graphs/A4aWaterfall"
import A4bColorMap from './graphs/A4bColorMap'
import CalendarPeriodSetting from "./CalendarPeriodSetting"

const A4WaterfallMAP = () => {
    const [chartData, setChartData] = useState([])
    const selectOption = { value: 'Motor Outboard VIB - X', label: 'Motor Outboard VIB - X'}

    useEffect(() => {
        axios
          .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/waterfall')
          .then((res) => {
            setChartData(res.data)
            console.log('waterfall/Color Map', res.data)
          })
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
                                <Col xl='2'>
                                    <div className="form-control">MOTOR Outboard VIB - Y</div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl='6'>
                    <Card>
                       <A4aWaterfall graphData={chartData[0]} /> 
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <A4bColorMap graphData={chartData[1]} /> 
                    </Card>
                </Col>
            </Row>

            <CalendarPeriodSetting /> 
        </Fragment>
    )
}

export default A4WaterfallMAP