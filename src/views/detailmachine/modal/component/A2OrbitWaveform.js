import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import A2aWavefrom from './graphs/A2aWaveform'
import A2bWaveform from './graphs/A2bWaveform'
import A2cOrbit from "./graphs/A2cOrbit"
import axios from "axios"
import SelectPeriodSetting from './SelectPeriodSetting'

const A2OrbitWaveform = () => {
    const [chartData, setChartData] = useState([])
    const selectOption = { value: 'Motor Outboard VIB - X', label: 'Motor Outboard VIB - X'}
    const filterOption = [
        { value: 'none', label: 'none'},
        { value: '1X Filter', label: '1X Filter'}
    ]
    const [selected, setSelected] = useState(filterOption[0])

    const changeValue = (e) => {
        if (e.value === 'none') {
            setSelected(filterOption[0])
        } else if (e.value === '1X Filter') {
            setSelected(filterOption[1])
        }
    }
    
    const fetchData = (filterValue) => {
        axios
        .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/waveform?filter=' + filterValue)
        .then((res) => {
          setChartData(res.data)
          console.log('Orbit none', res.data)
        }) 
    }
    
    useEffect(() => {
        if (selected.value === 'none') {
            fetchData(false)
        } else if (selected.value === '1X Filter') {
            fetchData(true)
        }
    }, [selected.value])

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
                                <Col xl='5' />
                                <Col xl='2'>
                                    <Select
                                        className = 'react-select'
                                        classNamePrefix = 'select'
                                        defaultValue={filterOption[0]}
                                        options={filterOption}
                                        onChange = {changeValue}
                                        value = {selected}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl='4'>
                    <Card>
                        {/* <CardBody style={{height: '500px'}}>Waveform 1</CardBody> */}
                        <A2aWavefrom graphData={chartData[0]} />
                    </Card>
                </Col>
                <Col xl='4'>
                    <Card>
                        {/* <CardBody style={{height: '500px'}}>Waveform 2</CardBody> */}
                        <A2bWaveform graphData={chartData[1]} />
                    </Card>
                </Col>
                <Col xl='4'>
                    <Card>
                        {/* <CardBody style={{height: '500px'}}>Orbit</CardBody> */}
                        <A2cOrbit graphData={chartData[2]} />
                    </Card>
                </Col>
            </Row>

            <SelectPeriodSetting /> 
        </Fragment>
    )
}

export default A2OrbitWaveform