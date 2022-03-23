import { Fragment, useState, useEffect } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import axios from "axios"
import moment from 'moment'
import A4aWaterfall from "./graphs/A4aWaterfall"
import A4bColorMap from './graphs/A4bColorMap'
import { useSelector } from "react-redux"

const A4WaterfallMAP = (props) => {
    const [chartData, setChartData] = useState([])
    const { equipment } = useSelector(state => state.equipment)

    const [pairMptValue, setPairMptValue] = useState(null)
    const [selectMptOption, setSelectMptOption] = useState({})
    const [itvValue, setItvValue] = useState(null)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

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
                '/front/detail-analysis/waterfall?mptkey=' + selectMptOption.value + 
                '&itv=' + itvValue +
                '&end_dt=' + endDate +
                '&start_dt=' + startDate
                )
              .then((res) => {
                setChartData(res.data)
              })
            }
    }

    useEffect(() => {
        fetchData(endDate, startDate)
    }, [endDate, startDate])
    
    // useEffect(() => {
    //     if (selectMptOption.value !== undefined) { 
    //     axios
    //     .get(process.env.REACT_APP_API_SERVER_URL + 
    //         '/front/detail-analysis/waterfall?mptkey=' + selectMptOption.value + 
    //         '&itv=' + itvValue +
    //         '&end_dt=' + endDate +
    //         '&start_dt=' + startDate
    //         )
    //       .then((res) => {
    //         setChartData(res.data)
    //       })
    //     }
    //   }, [selectMptOption, itvValue, startDate, endDate])

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

        </Fragment>
    )
}

export default A4WaterfallMAP