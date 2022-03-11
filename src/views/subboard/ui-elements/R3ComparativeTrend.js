import Flatpickr from 'react-flatpickr'
//import rangePlugin from 'flatpickr/dist/plugins/rangePlugin'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { Fragment, useState } from "react"
import { Col, Row, Card, CardBody, CardTitle, Button } from "reactstrap"
import ComparativeTrendChart from "./ComparativeTrendChart"
import Select from 'react-select'
import moment from 'moment'


const R3ComparativeTrend = () => {
    //eslint-disable-next-line
    const [startDate, setStartDate] = useState({})
    const [endDate, setEndDate] = useState({})
    
    const selectOption = [ 
        { value: '1 Week', label: '1 Week'},
        { value: '1 Month', label: '1 Month'},
        { value: '3 Month', label: '3 Month'},
        { value: '6 Month', label: '6 Month'}
    ]
    

    const clickCurrent = () => {
        setStartDate(new Date())
    }

    const changeValue = () => { 
        const today = moment(endDate[0]).subtract(6, 'months')

        console.log(today)
        console.log(today._d)

        
        if (selectOption[0].value === '1 Week') {
            setStartDate(moment(endDate[0]).subtract(7, 'days'))
            //setStartDate(endDate[0].getTime() - (7 * 24 * 60 * 60 * 1000))
        } 
        if (selectOption[1].value === '1 Month') {
            setStartDate(moment(endDate[0]).subtract(1, 'months'))
        }
        if (selectOption[2].value === '3 Month') {
            setStartDate(moment(endDate[0]).subtract(3, 'months'))
        }
        if (selectOption[3].value === '6 months') {
            setStartDate(moment(endDate[0]).subtract(6, 'months'))
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
                                        options = {selectOption}
                                        menuPlacement = 'auto'
                                        onChange = {() => changeValue()}
                                    />
                                </Col>
                                <Col xl='1'>
                                    <Button.Ripple color='primary'>Search</Button.Ripple>
                                </Col>
                                <Col xl='1'>
                                    <Button.Ripple color='primary' onClick={() => clickCurrent()}>Current</Button.Ripple>
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
