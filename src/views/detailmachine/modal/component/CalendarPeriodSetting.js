import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { Fragment, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, CardTitle, Button } from "reactstrap"
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import Select from 'react-select'
import moment from 'moment'

const CalendarPeriodSetting = (props) => {
    console.log('calendar props', props)
    // const [startDate, setStartDate] = useState(moment(new Date()).subtract(7, 'days'))
    // const [endDate, setEndDate] = useState(moment(new Date()))
    // const selectOption = [ 
    //     { value: '1 weeks', label: '1 Week'},
    //     { value: '1 months', label: '1 Month'},
    //     { value: '3 months', label: '3 Month'},
    //     { value: '6 months', label: '6 Month'}
    // ]
    // const [selected, setSelected] = useState(selectOption[0])

  
    const clickCurrent = () => {
        // setStartDate(moment(new Date()))
        // setEndDate(moment(new Date()))
        props.setStartDate(moment(new Date()).subtract(7, 'days'))
        props.setEndDate(moment(new Date()))
        props.setSelected(props.selectOption[0])
        props.setItvValue(props.selectOption[0].value)
    }

    const changeValue = (e) => { 
        if (e.value === '1 weeks') {
            // setStartDate(moment(endDate).subtract(7, 'days'))
            props.setStartDate(moment(props.endDate).subtract(7, 'days'))
            props.setSelected(props.selectOption[0])
        } else if (e.value === '1 months') {
            props.setStartDate(moment(props.endDate).subtract(1, 'months'))
            props.setSelected(props.selectOption[1])
        } else if (e.value === '3 months') {
            props.setStartDate(moment(props.endDate).subtract(3, 'months'))
            props.setSelected(props.selectOption[2])
        } else if (e.value === '6 months') {
            props.setStartDate(moment(props.endDate).subtract(6, 'months'))
            props.setSelected(props.selectOption[3])
        }
    }

    const clickLeft = () => {
        if (props.selected.value === '1 weeks') {
            props.setStartDate(moment(props.startDate).subtract(7, 'days'))
            props.setEndDate(moment(props.endDate).subtract(7, 'days'))
        } else if (props.selected.value === '1 months') {
            props.setStartDate(moment(props.startDate).subtract(1, 'months'))
            props.setEndDate(moment(props.endDate).subtract(1, 'months'))
        } else if (props.selected.value === '3 months') {
            props.setStartDate(moment(startDate).subtract(3, 'months'))
            props.setEndDate(moment(props.endDate).subtract(3, 'months'))
        } else if (props.selected.value === '6 months') {
            props.setStartDate(moment(props.startDate).subtract(6, 'months'))
            props.setEndDate(moment(props.endDate).subtract(6, 'months'))
        }
    }

    const clickRight = () => {
        if (props.selected.value === '1 weeks') {
            props.setStartDate(moment(props.startDate).add(7, 'days'))
            props.setEndDate(moment(props.endDate).add(7, 'days'))
        } else if (props.selected.value === '1 months') {
            props.setStartDate(moment(props.startDate).add(1, 'months'))
            props.setEndDate(moment(props.endDate).add(1, 'months'))
        } else if (props.selected.value === '3 months') {
            props.setStartDate(moment(props.startDate).add(3, 'months'))
            props.setEndDate(moment(props.endDate).add(3, 'months'))
        } else if (props.selected.value === '6 months') {
            props.setStartDate(moment(props.startDate).add(6, 'months'))
            props.setEndDate(moment(props.endDate).add(6, 'months'))
        }
    }

    const changeDate = (date) => {
        if (props.selected.value === '1 weeks') {
            props.setEndDate(moment(date[0]))
            props.setStartDate(moment(date[0]).subtract(7, 'days'))
        } else if (props.selected.value === '1 months') {
            props.setEndDate(moment(date[0]))
            props.setStartDate(moment(date[0]).subtract(1, 'months'))
        } else if (props.selected.value === '3 months') {
            props.setEndDate(moment(date[0]))
            props.setStartDate(moment(date[0]).subtract(3, 'months'))
        } else if (props.selected.value === '6 months') {
            props.setEndDate(moment(date[0]))
            props.setStartDate(moment(date[0]).subtract(6, 'months'))
        }
    }

    return (
        <Fragment>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='1'>
                                    <Button.Ripple color='primary' style={{inlineSize: '-webkit-fill-available'}}>Calendar</Button.Ripple>
                                </Col>
                                <Col xl='1' />
                                <Col xl='1' style={{ textAlignLast: 'right', alignSelf: 'center' }}>
                                    <BiLeftArrow size={35} className='cursor-pointer' onClick={() => clickLeft()} />
                                </Col>
                                <Col xl='2'>
                                    <Flatpickr
                                        className="form-control"
                                        value={props.startDate._d}
                                        placeholder="Start Date"
                                        onChange={(date) => { props.setStartDate(date) }}
                                        
                                        id="default-picker"
                                        style={{ textAlign: 'center'}}
                                        options={{
                                            enableTime: true,
                                            allowInput: true
                                        }}
                                    /> 
                                </Col>
                                <Col xl='1' style={{ width: '0', alignSelf: 'center'}}>~</Col>
                                <Col xl='2'>
                                    <Flatpickr
                                        className="form-control"
                                        value={props.endDate._d}
                                        placeholder="End Date"
                                        // onChange={(date) => {
                                        //     return setEndDate(date)
                                        // }}
                                        onChange={(date) => { changeDate(date); props.setEndDate(moment(date[0])) }}
                                        id="default-picker"
                                        style={{ textAlign: 'center'}}
                                        options={{           
                                            enableTime: true,
                                            allowInput: true
                                        }}
                                    /> 
                                </Col>
                                <Col xl='1'>
                                    <Select 
                                        className = 'react-select'
                                        classNamePrefix = 'select'
                                        options = {props.selectOption}
                                        menuPlacement = 'auto'
                                        // onChange = {changeValue}
                                        onChange={e => { changeValue(e); props.setItvValue(e.value) }}
                                        value = {props.selected}
                                    >
                                    </Select>
                                </Col>
                                <Col xl='1' style={{ alignSelf: 'center', marginRight: '118px' }}>
                                    <BiRightArrow size={35} className='cursor-pointer' onClick={() => clickRight()} />
                                </Col>
                                
                                <Col xl='1'>
                                    <Button.Ripple color='primary' style={{inlineSize: '-webkit-fill-available'}}>Search</Button.Ripple>
                                </Col>
                                <Col xl='1'>
                                    <Button.Ripple 
                                        color='primary' 
                                        onClick={() => clickCurrent() } 
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

export default CalendarPeriodSetting