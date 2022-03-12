import Flatpickr from 'react-flatpickr'
//import rangePlugin from 'flatpickr/dist/plugins/rangePlugin'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { Fragment, useState } from "react"
import { Col, Row, Card, CardBody, CardTitle, Button } from "reactstrap"
import ComparativeTrendChart from "./ComparativeTrendChart"
import { TiMediaPlayReverseOutline, TiMediaPlayOutline, TiMediaFastForwardOutline, TiMediaRewindOutline } from "react-icons/ti"
import Select from 'react-select'
import moment from 'moment'
import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'react-feather'


const R3ComparativeTrend = () => {
    const [startDate, setStartDate] = useState([])
    const [endDate, setEndDate] = useState([new Date()])
    const [selected, setSelected] = useState("")
    
    const selectOption = [ 
        { value: '1 Week', label: '1 Week'},
        { value: '1 Month', label: '1 Month'},
        { value: '3 Month', label: '3 Month'},
        { value: '6 Month', label: '6 Month'}
    ]
  
    const clickCurrent = () => {
        setStartDate(new Date())
        setEndDate(new Date())
    }

    const changeValue = (e) => { 
        if (e.value === '1 Week') {
            setStartDate(moment(endDate[0]).subtract(7, 'days'))
            setSelected(selectOption[0])
        } else if (e.value === '1 Month') {
            setStartDate(moment(endDate[0]).subtract(1, 'months'))
            setSelected(selectOption[1])
        } else if (e.value === '3 Month') {
            setStartDate(moment(endDate[0]).subtract(3, 'months'))
            setSelected(selectOption[2])
        } else if (e.value === '6 Month') {
            setStartDate(moment(endDate[0]).subtract(6, 'months'))
            setSelected(selectOption[3])
        }
    }

    return (
        <Fragment>
            <Row>
                <Col xl='12'>
                    <Card>
                        <CardBody style={{height: '300px'}}>
                            <CardTitle tag='h6' style={{textAlign: 'center'}}>Comparative Trend</CardTitle>
                            <ComparativeTrendChart />
                        </CardBody>
                    </Card>
                    {/* Comparative Trend */}
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='1'></Col>
                                {/* <Col xl='1'>
                                <Flatpickr
                                    placeholder="Calendar"
                                    className="form-control"
                                    value={picker}
                                    onChange={(date) => {
                                        return setPicker(date)
                                    }}
                                    id="range-picker"
                                    options={{
                                        enableTime: true,
                                        allowInput: true
                                        //mode: 'range'
                                    }}
                                />
                                </Col> */}
                                <Col xl='1' style={{textAlignLast: 'right', alignSelf: 'center'}}>
                                    <ChevronsLeft size={35} className='cursor-pointer'/>
                                    <ChevronLeft size={35} className='cursor-pointer'/>
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
                                    value={endDate}
                                    placeholder="End Date"
                                    onChange={(date) => {
                                        return setEndDate(date)
                                    }}
                                    id="default-picker"
                                    style={{ textAlign: 'center'}}
                                    options={{
                                        // maxDate: 'today',
                                        enableTime: true,
                                        allowInput: true
                                        //mode: 'range'
                                        //plugins: [new rangePlugin({ input: '#secondRangeInput' })]
                                        
                                        // conjunction: ' - '
                                    }}
                                /> 
                                </Col>
                                {/* <Col xl='2'>
                                <input 
                                // value={endDate}
                                placeholder="End Date"
                                style={{ textAlign: 'center'}}
                                id="secondRangeInput"
                                className="form-control" />
                                
                            </Col> */}
                                <Col xl='2'>
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
                                    <ChevronRight size={35} className='cursor-pointer' />
                                    <ChevronsRight size={35} className='cursor-pointer' />
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
