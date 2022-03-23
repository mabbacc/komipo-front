import { Fragment, useEffect, useState } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import A1aParameterTrend from "./graphs/A1aParameterTrend"
import A1bParameterTrend from "./graphs/A1bParameterTrend"
import axios from "axios"
import moment from 'moment'
import { useSelector } from "react-redux"

const A1MultiTrace = (props) => {
    const { equipment } = useSelector(state => state.equipment)

    const [selectMptOption, setSelectMptOption] = useState({})
    const [itvValue, setItvValue] = useState(null)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const [chartData, setChartData] = useState([])

    useEffect(() => {
        setSelectMptOption(props.selectMptOption)
        setItvValue(props.itvValue)
        setStartDate(moment(props.startDate._d).format('YYYY-MM-DD'))
        setEndDate(moment(props.endDate._d).format('YYYY-MM-DD'))
    }, [props])

    useEffect(() => {
        if (selectMptOption.value !== undefined) { 
        axios
            .get(process.env.REACT_APP_API_SERVER_URL + 
                '/front/detail-analysis/multi-trend?mptkey=' + selectMptOption.value + 
                '&itv=' + itvValue +
                '&end_dt=' + endDate +
                '&start_dt=' + startDate
                )
            .then((res) => {
              setChartData(res.data)
            })
        }
      }, [selectMptOption, itvValue, startDate, endDate])


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

        </Fragment>
    )
}

export default A1MultiTrace