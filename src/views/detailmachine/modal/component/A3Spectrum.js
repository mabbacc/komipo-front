import { Fragment, useState, useEffect } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import A3aSpectrumPlot from "./graphs/A3aSpectrumPlot"
import A3bSpectrumPlot from "./graphs/A3bSpectrumPlot"
import axios from "axios"

const A3Spectrum = () => {
    const [chartData, setChartData] = useState([])
    const selectOption = { value: 'Motor Outboard VIB - X', label: 'Motor Outboard VIB - X'}

    useEffect(() => {
        axios
          .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/spectrum')
          .then((res) => {
            setChartData(res.data)
            console.log('spectrum', res.data)
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
                        <A3aSpectrumPlot graphData={chartData[0]} />
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <A3bSpectrumPlot graphData={chartData[1]} />
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

export default A3Spectrum