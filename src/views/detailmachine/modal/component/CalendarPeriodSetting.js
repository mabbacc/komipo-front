import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { Fragment, useState } from "react"
import { Col, Row, Card, CardBody, CardTitle, Button } from "reactstrap"
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import Select from 'react-select'
import moment from 'moment'

const CalendarPeriodSetting = (props) => {
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
        setStartDate(moment(new Date()))
        setEndDate(moment(new Date()))
    }

    const changeValue = (e) => { 
        if (e.value === '1 Week') {
            setStartDate(moment(endDate._d).subtract(7, 'days'))
            setSelected(selectOption[0])
        } else if (e.value === '1 Month') {
            setStartDate(moment(endDate._d).subtract(1, 'months'))
            setSelected(selectOption[1])
        } else if (e.value === '3 Month') {
            setStartDate(moment(endDate._d).subtract(3, 'months'))
            setSelected(selectOption[2])
        } else if (e.value === '6 Month') {
            setStartDate(moment(endDate._d).subtract(6, 'months'))
            setSelected(selectOption[3])
        }
    }

    const clickLeft = () => {
        if (selected.value === '1 Week') {
            setStartDate(moment(startDate._d).subtract(7, 'days'))
            setEndDate(moment(endDate._d).subtract(7, 'days'))
        } else if (selected.value === '1 Month') {
            setStartDate(moment(startDate._d).subtract(1, 'months'))
            setEndDate(moment(endDate._d).subtract(1, 'months'))
        } else if (selected.value === '3 Month') {
            setStartDate(moment(startDate._d).subtract(3, 'months'))
            setEndDate(moment(endDate._d).subtract(3, 'months'))
        } else if (selected.value === '6 Month') {
            setStartDate(moment(startDate._d).subtract(6, 'months'))
            setEndDate(moment(endDate._d).subtract(6, 'months'))
        }
    }

    const clickRight = () => {
        if (selected.value === '1 Week') {
            setStartDate(moment(startDate._d).add(7, 'days'))
            setEndDate(moment(endDate._d).add(7, 'days'))
        } else if (selected.value === '1 Month') {
            setStartDate(moment(startDate._d).add(1, 'months'))
            setEndDate(moment(endDate._d).add(1, 'months'))
        } else if (selected.value === '3 Month') {
            setStartDate(moment(startDate._d).add(3, 'months'))
            setEndDate(moment(endDate._d).add(3, 'months'))
        } else if (selected.value === '6 Month') {
            setStartDate(moment(startDate._d).add(6, 'months'))
            setEndDate(moment(endDate._d).add(6, 'months'))
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
                                        value={startDate._d}
                                        placeholder="Start Date"
                                        onChange={(date) => {
                                            return setStartDate(date)
                                        }}
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
                                        value={endDate._d}
                                        placeholder="End Date"
                                        onChange={(date) => {
                                            return setEndDate(date)
                                        }}
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
                                        options = {selectOption}
                                        menuPlacement = 'auto'
                                        // onChange = {changeValue}
                                        onChange={e => { changeValue(e); props.setItvValue(e.value) }}
                                        value = {selected}
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

export default CalendarPeriodSetting