import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { Fragment, useEffect, useState, useCallback } from "react"
import { Col, Row, Card, CardBody, Button } from "reactstrap"
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import Select from 'react-select'
import axios from "axios"
import moment from 'moment'

const SelectPeriodSetting = (props) => {
    //console.log('select setting', props)
    const [selectMptOption, setSelectMptOption] = useState({})
    const [waveformDt, setWaveformDt] = useState(undefined)
    const [spectrumDt, setSpectrumDt] = useState(undefined)

    const [waveformData, setWaveformData] = useState()
    const [waveformOption, setWaveformOption] = useState([])
    const [selectWaveformOption, setSelectWaveformOption] = useState([])

    const [spectrumData, setSpectrumData] = useState()
    const [spectrumOption, setSpectrumOption] = useState([])
    const [selectSpectrumOption, setSelectSpectrumOption] = useState([])

    useEffect(() => {
        setSelectMptOption(props.selectMptOption)
      }, [props])
    

    // Waveform select option
    const waveformFetchData = (waveformDt, selectMptOption) => {
        let URL = process.env.REACT_APP_API_SERVER_URL +
        '/front/detail-analysis/waveform-dt-list?mptkey=' + selectMptOption.value
        if (waveformDt !== undefined) {
            URL += '&dt=' + waveformDt
        }

        if (selectMptOption.value !== undefined) {
            axios
                .get(URL)
                .then((res) => {
                    setWaveformData(res.data)
                })
        }
    }

    useEffect(() => {
            waveformFetchData(waveformDt, selectMptOption)
    }, [waveformDt, selectMptOption])


    useEffect(() => {
        if (waveformData !== undefined) {
            const selectWaveformOptionList = []
            waveformData.child.forEach((item) => {
                if (item !== undefined) {
                    selectWaveformOptionList.push({
                        value: item.measdt,
                        label: item.measdt
                    })
                }
            })
            setWaveformOption(selectWaveformOptionList)
            setSelectWaveformOption(selectWaveformOptionList[0])
            // props.setMeasdt(selectWaveformOptionList[0])
        }
    }, [waveformData])


    // spectrum select option
    const spectrumFetchData = (spectrumDt, selectMptOption) => {
        let URL = process.env.REACT_APP_API_SERVER_URL +
        '/front/detail-analysis/spectrum-dt-list?mptkey=' + selectMptOption.value
        if (spectrumDt !== undefined) {
            URL += '&dt=' + spectrumDt
        }

        if (selectMptOption.value !== undefined) {
            axios
                .get(URL)
                .then((res) => {
                    console.log('dfdf', res.data)
                    setSpectrumData(res.data)
                })
        } 
    }

    useEffect(() => {
        spectrumFetchData(spectrumDt, selectMptOption)
    }, [spectrumDt, selectMptOption])

    useEffect(() => {
        if (spectrumData !== undefined) {
            const selectSpectrumOptionList = []
            spectrumData.child.forEach((item) => {
                if (item !== undefined) {
                    selectSpectrumOptionList.push({
                        value: item.measdt,
                        label: item.measdt
                    })
                } 
            })
            setSpectrumOption(selectSpectrumOptionList)
            setSelectSpectrumOption(selectSpectrumOptionList[0])
        } 
    }, [spectrumData])

    // currnet Click (currnet data)
    const clickCurrent = () => {
        if (props.activeTab === '3') { 
            waveformFetchData(undefined, selectMptOption)
        } else if (props.activeTab === '4') {
            spectrumFetchData(undefined, selectMptOption)
        }
    }

    // search Click
    const clickSearch = () => {
        if (props.activeTab === '3') {
            props.setMeasdt(selectWaveformOption)
        } else if (props.activeTab === '4') {
            props.setMeasdt(selectSpectrumOption)
        }
    }


    return (
        <Fragment>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='4'>
                                </Col>
                                <Col xl='2'> 
                                    {props.activeTab === '3' ? 
                                        <Flatpickr
                                            className='form-control'
                                            id='default-picker'
                                            placeholder='Select Date'
                                            onChange={(date) => setWaveformDt(moment(date[0]).format('YYYY-MM-DD'))}
                                            value={waveformData && waveformData.dt}
                                            style={{ textAlign: 'center' }}
                                            options={{
                                                enableTime: false,
                                                allowInput: true
                                            }}
                                        /> :
                                        <Flatpickr
                                            className='form-control'
                                            id='default-picker'
                                            placeholder='Select Date'
                                            onChange={(date) => setSpectrumDt(moment(date[0]).format('YYYY-MM-DD'))}
                                            value={spectrumData && spectrumData.dt}
                                            style={{ textAlign: 'center' }}
                                            options={{
                                                enableTime: false,
                                                allowInput: true
                                            }}
                                        />    
                                    }
                                
                                </Col>
                                <Col xl='2'>
                                    {props.activeTab === '3' ? 
                                        <Select 
                                            className = 'react-select'
                                            classNamePrefix = 'select'
                                            placeholder='No data'
                                            options={waveformOption}
                                            value={selectWaveformOption}
                                            menuPlacement = 'auto'
                                            onChange={(value) => { setSelectWaveformOption(value) }}
                                        /> : 
                                        <Select 
                                            className = 'react-select'
                                            classNamePrefix = 'select'
                                            placeholder='No data'
                                            options={spectrumOption}
                                            value={selectSpectrumOption}
                                            menuPlacement = 'auto'
                                            onChange={(value) => { setSelectSpectrumOption(value) }} //; setMeasdt(value)
                                        /> 
                                    }
                                </Col>
                                <Col xl='2'/>
                                <Col xl='1'>
                                    <Button.Ripple 
                                        color='primary'
                                        onClick={() => clickSearch()}
                                        style={{inlineSize: '-webkit-fill-available'}}
                                    >Search</Button.Ripple>
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


            {/* <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='1'>
                                </Col>
                                <Col xl='1' />
                                <Col xl='1' style={{ textAlignLast: 'right', alignSelf: 'center' }}>
                                    <BiLeftArrow size={35} className='cursor-pointer' onClick={() => clickLeft()} />
                                </Col>
                                <Col xl='5'>
                                    {props.activeTab === '3' ? 
                                        <Select 
                                            className = 'react-select'
                                            classNamePrefix = 'select'
                                            options={waveformOption}
                                            value={selectWaveformOption}
                                            menuPlacement = 'auto'
                                            onChange={(value) => { setSelectWaveformOption(value); props.setMeasdt(value) }}
                                        /> : 
                                        <Select 
                                            className = 'react-select'
                                            classNamePrefix = 'select'
                                            options={spectrumOption}
                                            value={selectSpectrumOption}
                                            menuPlacement = 'auto'
                                            onChange={(value) => { setSelectSpectrumOption(value); props.setMeasdt(value) }}
                                        /> 
                                    }
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
            </Row> */}
        </Fragment>
    )
}

export default SelectPeriodSetting