import { useState, useEffect } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, ModalFooter } from "reactstrap"
import { useSelector } from 'react-redux'
import A0TrendLevel from "./component/A0TrendLevel"
import A1MultiTrace from "./component/A1MultiTrace"
import A2OrbitWaveform from './component/A2OrbitWaveform'
import A3Spectrum from "./component/A3Spectrum"
import A4WaterfallMAP from "./component/A4WaterfallMAP"
import A5DiagnosisResult from "./component/A5DiagnosisResult"
import A6Statistic from "./component/A6Statistic"
import CalendarPeriodSetting from "./component/CalendarPeriodSetting"
import SelectPeriodSetting from "./component/SelectPeriodSetting"
import moment from "moment"


const AnalysisContainer = (props) => {
    const { equipment } = useSelector(state => state.equipment)
    const [activeTab, setActiveTab] = useState('1')

    // mptkey
    const [mptOption, setMptOption] = useState([])
    const [selectMptOption, setSelectMptOption] = useState({})
    const [pairMptValue, setPairMptValue] = useState(null)

    // itv
    const [itvValue, setItvValue] = useState('1 weeks')

    // start_dt, end_dt
    const [startDate, setStartDate] = useState(moment(new Date()).subtract(7, 'days'))
    const [endDate, setEndDate] = useState(moment(new Date()))
    const selectOption = [ 
        { value: '1 weeks', label: '1 Week'},
        { value: '1 months', label: '1 Month'},
        { value: '3 months', label: '3 Month'},
        { value: '6 months', label: '6 Month'}
    ]
    const [selected, setSelected] = useState(selectOption[0])

    // measdt
    const [measdt, setMeasdt] = useState([])

    const toggleTabs = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }

    // mpt select option
    useEffect(() => {
        if (equipment.length > 0 && props.modal === true) {
        const selectMptOptionList = []

        equipment.forEach((item) => {
            (item.child).forEach((item) => {
                if (item.equipmentid === props.equipmentid.label) {
                    (item.child).forEach((item) => {
                        (item.child).forEach((item) => {
                            selectMptOptionList.push({
                            value: item.mptkey,
                            label: item.description
                            //label: item.mptid
                            })
                        })
                    })
                }
            })
        })
        setMptOption(selectMptOptionList)
        setSelectMptOption(selectMptOptionList[0])
        }
    }, [equipment, props])

    // pair mpt value
    useEffect(() => {
        if (equipment.length > 0) {
            equipment.forEach((item) => {
                (item.child).forEach((item) => {
                    (item.child).forEach((item) => {
                        (item.child).forEach((item) => {
                            if (selectMptOption.value === item.companionmptkey) {
                                setPairMptValue(item.description)
                            }
                        })
                    })
                })
            })
        }
    }, [equipment, selectMptOption])
    

    return (
        <Modal isOpen={props.modal} className='modal-dialog-centered modal-xl'>
            <ModalHeader toggle={props.closeModal}>Analysis chart</ModalHeader>
            <ModalHeader>
                <Row>
                    <Col>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    active={activeTab === '1'}
                                    onClick={() => {
                                        toggleTabs('1')
                                    }}
                                    >
                                    Trend/Level
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={activeTab === '2'}
                                    onClick={() => {
                                        toggleTabs('2')
                                    }}
                                    >
                                    Multi Trace
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={activeTab === '3'}
                                    onClick={() => {
                                        toggleTabs('3')
                                    }}>
                                    Orbit / Waveform
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={activeTab === '4'}
                                    onClick={() => {
                                        toggleTabs('4')
                                    }}>
                                    Spectrum
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={activeTab === '5'}
                                    onClick={() => {
                                        toggleTabs('5')
                                    }}>
                                    Waterfall / MAP
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={activeTab === '6'}
                                    onClick={() => {
                                        toggleTabs('6')
                                    }}>
                                    Diagnosis Result
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={activeTab === '7'}
                                    onClick={() => {
                                        toggleTabs('7')
                                    }}>
                                    Statistic
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </ModalHeader>
            <ModalBody>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId='1'>
                        <A0TrendLevel 
                            equipmentid={props.equipmentid}
                            mptOption={mptOption}
                            selectMptOption={selectMptOption}
                            pairMptValue={pairMptValue}
                            setSelectMptOption={setSelectMptOption}
                            itvValue={itvValue}
                            startDate={startDate}
                            endDate={endDate}/>
                    </TabPane>
                    <TabPane tabId='2'>
                        <A1MultiTrace 
                            equipmentid={props.equipmentid}
                            mptOption={mptOption}
                            selectMptOption={selectMptOption}
                            pairMptValue={pairMptValue}
                            setSelectMptOption={setSelectMptOption}
                            itvValue={itvValue}
                            startDate={startDate}
                            endDate={endDate} />
                    </TabPane>
                    <TabPane tabId='3'>
                        <A2OrbitWaveform 
                            equipmentid={props.equipmentid}
                            mptOption={mptOption}
                            selectMptOption={selectMptOption}
                            pairMptValue={pairMptValue}
                            measdt={measdt}
                            setSelectMptOption={setSelectMptOption}/>
                    </TabPane>
                    <TabPane tabId='4'>
                        <A3Spectrum  
                            equipmentid={props.equipmentid}
                            mptOption={mptOption}
                            selectMptOption={selectMptOption}
                            pairMptValue={pairMptValue}
                            measdt={measdt}
                            setSelectMptOption={setSelectMptOption}
                            />
                    </TabPane>
                    <TabPane tabId='5'>
                        <A4WaterfallMAP 
                            equipmentid={props.equipmentid}
                            mptOption={mptOption}
                            selectMptOption={selectMptOption}
                            pairMptValue={pairMptValue}
                            setSelectMptOption={setSelectMptOption}
                            itvValue={itvValue}
                            startDate={startDate}
                            endDate={endDate} />
                    </TabPane>
                    <TabPane tabId='6'>
                        <A5DiagnosisResult />
                    </TabPane>
                    <TabPane tabId='7'>
                        <A6Statistic />
                    </TabPane>
                </TabContent>
            </ModalBody>

            <ModalFooter style={{display: 'block'}}>
                {(activeTab === '3' || activeTab === '4') ? 
                <SelectPeriodSetting 
                    activeTab={activeTab}
                    mptOption={mptOption}
                    selectMptOption={selectMptOption}
                    setMeasdt={setMeasdt}
                /> 
                : <CalendarPeriodSetting 
                    itvValue={itvValue}
                    startDate={startDate}
                    endDate={endDate}
                    selected={selected}
                    selectOption={selectOption}
                    setSelected={setSelected}
                    setItvValue={setItvValue}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}/>}
            </ModalFooter>

        </Modal>

    )
}

export default AnalysisContainer