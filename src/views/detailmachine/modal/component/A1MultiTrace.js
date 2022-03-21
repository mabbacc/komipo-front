import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import A1aParameterTrend from "./graphs/A1aParameterTrend"
import A1bParameterTrend from "./graphs/A1bParameterTrend"
import axios from "axios"
import CalendarPeriodSetting from "./CalendarPeriodSetting"
import { useSelector } from "react-redux"

const A1MultiTrace = (props) => {
    const { equipment } = useSelector(state => state.equipment)
    const [chartData, setChartData] = useState([])
    const [mptOpton, setMptOption] = useState([])
    const [selectMptOption, setSelectMptOption] = useState([])

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_SERVER_URL + '/front/detail-analysis/multi-trend')
            .then((res) => {
              setChartData(res.data)
                console.log('Multi-trend', res)
            })
            console.log('chartData', chartData)
      }, [])

    // mpt select option
    useEffect(() => {
        if (equipment.length > 0) {
            const selectMptOptionList = []

            equipment.forEach((item) => {
                (item.child).forEach((item) => {
                    if (item.equipmentid === props.equipmentid.label) {
                        (item.child).forEach((item) => {
                            (item.child).forEach((item) => {
                                selectMptOptionList.push({
                                    value: item.mptkey,
                                    label: item.description
                                })
                            })
                        })
                    }
                })
            })
            setMptOption(selectMptOptionList)
            setSelectMptOption(selectMptOptionList[0])
        }
    }, [equipment, props])


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
                                        options={mptOpton}
                                        onChange={(value) => {
                                            setSelectMptOption(value)
                                        }}
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

            <CalendarPeriodSetting />
        </Fragment>
    )
}

export default A1MultiTrace