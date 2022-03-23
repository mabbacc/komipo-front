import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import { Fragment, useEffect, useState, useCallback } from "react"
import { Col, Row, Card, CardBody, Button } from "reactstrap"
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import Select from 'react-select'
import axios from "axios"

const SelectPeriodSetting = (props) => {
    // console.log('select props', props)
    const [selectMptOption, setSelectMptOption] = useState({})

    const [waveformData, setWaveformData] = useState([])
    const [waveformOption, setWaveformOption] = useState([])
    const [selectWaveformOption, setSelectWaveformOption] = useState([])

    const [spectrumData, setSpectrumData] = useState([])
    const [spectrumOption, setSpectrumOption] = useState([])
    const [selectSpectrumOption, setSelectSpectrumOption] = useState({})

    useEffect(() => {
        setSelectMptOption(props.selectMptOption)
      }, [props])
    

    // Waveform select option
    useEffect(() => {
        // front/detail-analysis/waveform-dt-list?mptkey=2
        if (selectMptOption.value !== undefined && props.activeTab === '3') {
            axios
                .get(process.env.REACT_APP_API_SERVER_URL +
                    '/front/detail-analysis/waveform-dt-list?mptkey=' + selectMptOption.value)
                .then((res) => {
                    // console.log('res', res.data)
                    setWaveformData(res.data)
                })
        }
    }, [selectMptOption])

    useEffect(() => {
        if (waveformData.length > 0) {
            const selectWaveformOptionList = []

            waveformData.forEach((item) => {
                if (item !== undefined) {
                    selectWaveformOptionList.push({
                        value: item.measdt,
                        label: item.measdt
                    })
                }
            })
            setWaveformOption(selectWaveformOptionList)
            setSelectWaveformOption(selectWaveformOptionList[0])
            props.setMeasdt(selectWaveformOptionList[0])
        }
    }, [waveformData])


    // spectrum select option
    useEffect(() => {
        // front/detail-analysis/spectrum-dt-list?mptkey=2
        if (selectMptOption.value !== undefined && props.activeTab === '4') {
            axios
                .get(process.env.REACT_APP_API_SERVER_URL + 
                    '/front/detail-analysis/spectrum-dt-list?mptkey=' + selectMptOption.value)
                .then((res) => {
                    setSpectrumData(res.data)
                }) 
        }
    }, [selectMptOption])


    useEffect(() => {
        if (spectrumData.length > 0) {
            const selectSpectrumOptionList = []
    
            spectrumData.forEach((item) => {
                if (item !== undefined) {
                    selectSpectrumOptionList.push({
                        value: item.measdt, 
                        label: item.measdt
                    })
                }
            })
            setSpectrumOption(selectSpectrumOptionList)
            setSelectSpectrumOption(selectSpectrumOptionList[0])
            props.setMeasdt(selectSpectrumOptionList[0])
        }
    }, [spectrumData])

    return (
        <Fragment>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='1'>
                                    {/* <Button.Ripple color='primary' style={{inlineSize: '-webkit-fill-available'}}>Calendar</Button.Ripple> */}
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
            </Row>
        </Fragment>
    )
}

export default SelectPeriodSetting