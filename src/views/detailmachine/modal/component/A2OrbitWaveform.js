import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import A2aWavefrom from './graphs/A2aWaveform'
import A2bWaveform from './graphs/A2bWaveform'
import A2cOrbit from "./graphs/A2cOrbit"
import axios from "axios"

const A2OrbitWaveform = (props) => {
    const [chartData, setChartData] = useState([])
    const [measdt, setMeasdt] = useState([])
    const [pairMptValue, setPairMptValue] = useState(null)
    const [selectMptOption, setSelectMptOption] = useState({})
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

    useEffect(() => {
        setSelectMptOption(props.selectMptOption)
        setPairMptValue(props.pairMptValue)
        setMeasdt(props.measdt)
      }, [props])
    
    const fetchData = (filterValue, mptkey, measdt) => {
        if (mptkey !== undefined && measdt !== undefined) { 
            axios
            .get(process.env.REACT_APP_API_SERVER_URL + 
                '/front/detail-analysis/waveform?filter=' + filterValue +
                '&mptkey=' + mptkey +
                '&measdt=' + measdt.value)
            .then((res) => {
            setChartData(res.data)
            }) 
        }
    }
    
    useEffect(() => {
        if (selected.value === 'none') {
            fetchData(false, selectMptOption.value, measdt)
        } else if (selected.value === '1X Filter') {
            fetchData(true, selectMptOption.value, measdt)
        }
    }, [selected.value, selectMptOption.value, measdt])


    return (
        <Fragment>
            <Row>
                <Col xl='12'>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='1'>
                                    <div className="form-control">{props.equipmentid.label}</div>
                                </Col>
                                <Col xl='2'>
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
                                <Col xl='2'>
                                    <div className="form-control">{pairMptValue}</div>
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
                        <A2aWavefrom graphData={chartData[0]} />
                    </Card>
                </Col>
                <Col xl='4'>
                    <Card>
                        <A2bWaveform graphData={chartData[1]} />
                    </Card>
                </Col>
                <Col xl='4'>
                    <Card>
                        <A2cOrbit graphData={chartData[2]} />
                    </Card>
                </Col>
            </Row>

        </Fragment>
    )
}

export default A2OrbitWaveform