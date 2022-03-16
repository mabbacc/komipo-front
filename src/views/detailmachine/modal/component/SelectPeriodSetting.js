import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { Fragment, useState } from "react"
import { Col, Row, Card, CardBody, Button } from "reactstrap"
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import Select from 'react-select'

const SelectPeriodSetting = () => {
    // const [waveformDate, getWaveformDate] = useState([])
    // const [selected, getSelected] = useState(waveformDate[0])
    
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
                                <Col xl='5'>
                                    <Select 
                                        className = 'react-select'
                                        classNamePrefix = 'select'
                                        
                                    />
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

export default SelectPeriodSetting