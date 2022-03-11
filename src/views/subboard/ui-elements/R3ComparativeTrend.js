import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { Fragment, useState } from "react"
import { Col, Row, Card, CardBody, CardTitle, Button } from "reactstrap"
import ComparativeTrendChart from "./ComparativeTrendChart"
import { Rewind } from 'react-feather'
import Select from 'react-select'

const R3ComparativeTrend = () => {
    //eslint-disable-next-line
    const [picker, setPicker] = useState([new Date()])
    
    const selectOption = [ 
        { value: '1 Week', label: '1 Week'},
        { value: '1 Month', label: '1 Month'},
        { value: '3 Month', label: '3 Month'},
        { value: '6 Month', label: '6 Month'}
    ]
    
    const clickCurrent = () => {
        setPicker(new Date())
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
                                <Col xl='1'>
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
                                        allowInput: true,
                                        mode: 'range'
                                    }}
                                />
                                </Col>
                                <Col xl='4'>
                                <Flatpickr
                                    className="form-control"
                                    value={picker}
                                    onChange={(date) => {
                                        return setPicker(date)
                                    }}
                                    id="range-picker"
                                    options={{
                                        enableTime: true,
                                        allowInput: true,
                                        mode: 'range'
                                        
                                        // conjunction: ' - '
                                    }}
                                /> 
                                </Col>
                                <Col xl='2'>
                                    <Select 
                                        options = {selectOption}
                                        menuPlacement = 'auto'
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
