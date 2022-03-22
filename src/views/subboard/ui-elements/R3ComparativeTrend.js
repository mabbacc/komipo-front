import Flatpickr from 'react-flatpickr'
// import rangePlugin from 'flatpickr/dist/plugins/rangePlugin'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { Fragment, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, CardTitle, Button } from "reactstrap"
import ComparativeTrendChart from "./ComparativeTrendChart"
import Select from 'react-select'
import moment from 'moment'
// import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'react-feather'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'

const R3ComparativeTrend = () => {
    const [startDate, setStartDate] = useState(moment(new Date()).subtract(7, 'days'))
    const [endDate, setEndDate] = useState(moment(new Date()))
    const selectOption = [ 
        { value: '1 Week', label: '1 Week'},
        { value: '1 Month', label: '1 Month'},
        { value: '3 Month', label: '3 Month'},
        { value: '6 Month', label: '6 Month'}
    ]
    const [selected, setSelected] = useState(selectOption[0])
    
    const clickCurrent = () => {
        // setStartDate(moment(new Date()))
        // setEndDate(moment(new Date()))
        setStartDate(moment(new Date()).subtract(7, 'days'))
        setEndDate(moment(new Date()))
        setSelected(selectOption[0])
    }

    const changeValue = (e) => { 
        if (e.value === '1 Week') {
            setStartDate(moment(endDate).subtract(7, 'days'))
            setSelected(selectOption[0])
        } else if (e.value === '1 Month') {
            setStartDate(moment(endDate).subtract(1, 'months'))
            setSelected(selectOption[1])
        } else if (e.value === '3 Month') {
            setStartDate(moment(endDate).subtract(3, 'months'))
            setSelected(selectOption[2])
        } else if (e.value === '6 Month') {
            setStartDate(moment(endDate).subtract(6, 'months'))
            setSelected(selectOption[3])
        }
    }

    const clickLeft = () => {
        if (selected.value === '1 Week') {
            setStartDate(moment(startDate).subtract(7, 'days'))
            setEndDate(moment(endDate).subtract(7, 'days'))
        } else if (selected.value === '1 Month') {
            setStartDate(moment(startDate).subtract(1, 'months'))
            setEndDate(moment(endDate).subtract(1, 'months'))
        } else if (selected.value === '3 Month') {
            setStartDate(moment(startDate).subtract(3, 'months'))
            setEndDate(moment(endDate).subtract(3, 'months'))
        } else if (selected.value === '6 Month') {
            setStartDate(moment(startDate).subtract(6, 'months'))
            setEndDate(moment(endDate).subtract(6, 'months'))
        }
    }

    const clickRight = () => {
        if (selected.value === '1 Week') {
            setStartDate(moment(startDate).add(7, 'days'))
            setEndDate(moment(endDate).add(7, 'days'))
        } else if (selected.value === '1 Month') {
            setStartDate(moment(startDate).add(1, 'months'))
            setEndDate(moment(endDate).add(1, 'months'))
        } else if (selected.value === '3 Month') {
            setStartDate(moment(startDate).add(3, 'months'))
            setEndDate(moment(endDate).add(3, 'months'))
        } else if (selected.value === '6 Month') {
            setStartDate(moment(startDate).add(6, 'months'))
            setEndDate(moment(endDate).add(6, 'months'))
        }
    }

    const changeDate = (date) => {
        if (selected.value === '1 Week') {
            setEndDate(moment(date[0]))
            setStartDate(moment(date[0]).subtract(7, 'days'))
        } else if (selected.value === '1 Month') {
            setEndDate(moment(date[0]))
            setStartDate(moment(date[0]).subtract(1, 'months'))
        } else if (selected.value === '3 Month') {
            setEndDate(moment(date[0]))
            setStartDate(moment(date[0]).subtract(3, 'months'))
        } else if (selected.value === '6 Month') {
            setEndDate(moment(date[0]))
            setStartDate(moment(date[0]).subtract(6, 'months'))
        }
    }

    return (
        <Fragment>
            <Row>
                <Col xl='12'>
                    <Card>
                        <CardBody style={{height: '280px'}}>
                            <CardTitle style={{fontSize: 'small', textAlign: 'center', marginBottom: 'auto'}}>Comparative Trend</CardTitle>
                            <ComparativeTrendChart />
                        </CardBody>
                    </Card>
                    {/* Comparative Trend */}
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='2'></Col>
                                <Col xl='1' style={{ textAlignLast: 'right', alignSelf: 'center' }}>
                                    <BiLeftArrow size={35} className='cursor-pointer' onClick={() => clickLeft()} />
                                </Col>
                                <Col xl='2'>
                                    <Flatpickr
                                        className="form-control"
                                        value={startDate._d}
                                        placeholder="Start Date"
                                        onChange={(date) => { setStartDate(date) }}
                                        id="default-picker"
                                        style={{ textAlign: 'center'}}
                                        options={{
                                            //maxDate: new Date(),
                                            enableTime: true,
                                            allowInput: true
                                            //mode: 'range'
                                            //plugins: [new rangePlugin({ input: '#secondRangeInput' })]
                                            // conjunction: ' - '
                                        }}
                                    /> 
                                </Col>
                                <span style={{ width: '0', alignSelf: 'center'}}>~</span>
                                <Col xl='2'>
                                    <Flatpickr
                                        className="form-control"
                                        value={endDate._d}
                                        placeholder="End Date"
                                        // onChange={(date) => { setEndDate(moment(date[0])) }}
                                        onChange={(date) => changeDate(date)}
                                        id="default-picker"
                                        style={{ textAlign: 'center'}}
                                        options={{
                                            //maxDate: new Date(),
                                            enableTime: true,
                                            allowInput: true
                                            //mode: 'range'
                                            //plugins: [new rangePlugin({ input: '#secondRangeInput' })]
                                            // conjunction: ' - '
                                        }}
                                    /> 
                                </Col>
                                <Col xl='1'>
                                    <Select 
                                        className = 'react-select'
                                        classNamePrefix = 'select'
                                        options = {selectOption}
                                        menuPlacement = 'auto'
                                        onChange = {changeValue}
                                        value = {selected}
                                    >
                                    </Select>
                                </Col>
                                <Col xl='1' style={{ alignSelf: 'center' }}>
                                    <BiRightArrow size={35} className='cursor-pointer' onClick={() => clickRight()} />
                                </Col>
                                
                                <Col xl='1'>
                                    <Button.Ripple color='primary' style={{inlineSize: '-webkit-fill-available'}}>Search</Button.Ripple>
                                </Col>
                                <Col xl='1'>
                                    <Button.Ripple 
                                        color='primary' 
                                        onClick={() => clickCurrent()} 
                                        style={{inlineSize: '-webkit-fill-available'}}
                                    >Current</Button.Ripple>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default R3ComparativeTrend
