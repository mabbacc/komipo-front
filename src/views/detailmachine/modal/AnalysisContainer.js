import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import A0TrendLevel from "./component/A0TrendLevel"
import A1MultiTrace from "./component/A1MultiTrace"
import A2OrbitWaveform from './component/A2OrbitWaveform'
import A3Spectrum from "./component/A3Spectrum"
import A4WaterfallMAP from "./component/A4WaterfallMAP"
import A5DiagnosisResult from "./component/A5DiagnosisResult"
import A6Statistic from "./component/A6Statistic"


const AnalysisContainer = (props) => {
    const [activeTab, setActiveTab] = useState('1')

    const toggleTabs = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }
    
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
                        <A0TrendLevel equipmentid={props.equipmentid}/>
                    </TabPane>
                    <TabPane tabId='2'>
                        <A1MultiTrace equipmentid={props.equipmentid}/>
                    </TabPane>
                    <TabPane tabId='3'>
                        <A2OrbitWaveform />
                    </TabPane>
                    <TabPane tabId='4'>
                        <A3Spectrum />
                    </TabPane>
                    <TabPane tabId='5'>
                        <A4WaterfallMAP />
                    </TabPane>
                    <TabPane tabId='6'>
                        <A5DiagnosisResult />
                    </TabPane>
                    <TabPane tabId='7'>
                        <A6Statistic />
                    </TabPane>
                </TabContent>
            </ModalBody>
        </Modal>
    )
}

export default AnalysisContainer