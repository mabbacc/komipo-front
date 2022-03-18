import { Fragment, useCallback, useState, useEffect } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"
import { useHistory } from 'react-router'
import Select from 'react-select'
import { useSelector } from "react-redux"

const R1MachineList = () => {
    const hierarchyData = useSelector((state) => state.hierarchy.hierarchy)
    console.log('hierarchyStore', hierarchyData)
    const history = useHistory()

    const linkToDashboard = useCallback(() => {
        history.push({
            pathname: '/dashboard'
        })
    }, [history])

    const [hierarchy, setHierarchy] = useState([])
    const [equipmentTypeOption, setEquipmentTypeOption] = useState([])
    const [equipmentIdOption, setEquipmentIdOption] = useState([])
    const [selectETOption, setSelectETOption] = useState(null)
    const [selectEIdOption, setSelectEIdOption] = useState(null)

    useEffect(() => {
        setHierarchy(hierarchyData)
    }, [hierarchyData])
   

    // 첫 번째 select (Equipment Type)
    useEffect(() => {
        if (hierarchyData.length > 0) {
            const selectETOptionList = []
        
            hierarchyData.forEach((item) => {
                (item.child).forEach((item) => {
                    const newItem = {
                        value: item.equipmenttype,
                        label: item.equipmenttype
                    }
                    if (selectETOptionList.filter(e => e.value === item.equipmenttype).length <= 0) {
                      selectETOptionList.push(newItem)
                    }
                })
            })
            setEquipmentTypeOption(selectETOptionList)
            setSelectETOption(selectETOptionList[0])
        }
    }, [hierarchy])

    // Equipment Type의 변화에 따른 Equipmentid select
    useEffect(() => {
            const selectEIdOptionList = []
    
            hierarchyData.forEach((item) => {
                (item.child).forEach((item) => {
                    console.log('equipmenttype', item.equipmenttype)
                    console.log('select', selectETOption)
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
            setSelectEIdOption(selectEIdOptionList[0])        
    }, [hierarchy, selectETOption])
    
    return (
        <Fragment>
            <Card className="text-center mb-1">
                <CardBody>
                    <Row>
                        <Col className='col-1 d-flex'>
                            <Button.Ripple 
                                color={'secondary'}
                                block
                                onClick={() => linkToDashboard()}
                            >
                            Home</Button.Ripple>
                        </Col>
                        <Col className='col-2'>
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
                        <Col className='col-2'>
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
                    </Row>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default R1MachineList
