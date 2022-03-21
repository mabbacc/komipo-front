import { Fragment, useCallback, useState, useEffect } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"
import { useHistory } from "react-router"
import Select from 'react-select'

import AnalysisContainer from '../modal/AnalysisContainer'
import { useSelector } from "react-redux"

const R1MachineList = (props) => {
    const history = useHistory()
    const hierarchyData = useSelector((state) => state.hierarchy.hierarchy)
    const equipmentData = useSelector((state) => state.equipment.equipment)
    const [modal, setModal] = useState(false)
    const [hierarchy, setHierarchy] = useState([])
    const [equipment, setEquipment] = useState([])
    const [equipmentTypeOption, setEquipmentTypeOption] = useState([])
    const [equipmentIdOption, setEquipmentIdOption] = useState([])
    const [selectETOption, setSelectETOption] = useState(null)
    const [selectEIdOption, setSelectEIdOption] = useState(null) 
    
    const linkToDashboard = useCallback(() => {
        history.push({
            pathname: '/dashboard'
        })
    },
    [history])
    
    
    useEffect(() => {
        setHierarchy(hierarchyData)
        setEquipment(equipmentData)
    }, [hierarchyData, equipmentData])
    
    
    // 첫 번째 select (Equipment Type)
    useEffect(() => {
        if (equipmentData.length > 0 && props.equipmenttype !== null) {
            const selectETOptionList = []
            
            equipmentData.forEach((item) => {
                selectETOptionList.push({
                    value: item.equipmenttype,
                    label: item.equipmenttype
                })
            })
            setEquipmentTypeOption(selectETOptionList)
            setSelectETOption(selectETOptionList.find((item) => item.value === props.equipmenttype.value))
        }
    }, [equipment, props])
    
    // Equipment Type의 변화에 따른 Equipmentid select
    useEffect(() => {
        if (equipmentData.length > 0) {
            const selectEIdOptionList = []
            
            hierarchyData.forEach((item) => {
                (item.child).forEach((item) => {
                    if (selectETOption !== null && selectETOption !== undefined) {
                        if (item.equipmenttype === selectETOption.value) {
                            selectEIdOptionList.push({
                                value: item.equipmentkey,
                                label: item.equipmentid
                            })
                        }
                    }
                })
            }) 
            setEquipmentIdOption(selectEIdOptionList)
            setSelectEIdOption(selectEIdOptionList.find((item) => item.value === props.equipmentid.value) || selectEIdOptionList[0])        
        }
    }, [equipment, selectETOption])
    
    
    const closeModal = () => {
        setModal(!modal)
    }

    return (
        <Fragment>
            {/* <Row>
                <Col xl='12'>
                    <Card>List</Card>
                </Col>
            </Row> */}
            <Card className="text-center mb-1">
                <CardBody>
                    <Row>
                        <Col className='text-left col-1 d-flex'>
                            <Button.Ripple 
                                color={'secondary'}
                                block
                                onClick={() => linkToDashboard()}
                            >
                            Home</Button.Ripple>
                        </Col>
                        <Col xl='2'>
                            <Select 
                                className='react-select'
                                classNamePrefix='select'
                                value={selectETOption}
                                options={equipmentTypeOption}
                                onChange={(value) => {
                                    setSelectETOption(value)
                                }}
                            />
                        </Col>
                        <Col xl='2'>
                            <Select 
                                className='react-select'
                                classNamePrefix='select'
                                value={selectEIdOption}
                                options={equipmentIdOption}
                                onChange={(value) => {
                                    setSelectEIdOption(value)
                                }}
                            />
                        </Col>
                        <Col xl='5' />
                        <Col xl='2'>
                            <Button.Ripple
                                color={'primary'}
                                block
                                onClick={() => setModal(!modal)}
                            >
                                Analysis chart
                            </Button.Ripple>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            <AnalysisContainer modal={modal} closeModal={closeModal} equipmentid={selectEIdOption}/>
        </Fragment>
    )
}

export default R1MachineList