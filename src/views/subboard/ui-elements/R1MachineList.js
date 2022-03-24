import { Fragment, useCallback, useState, useEffect } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"
import { useHistory } from 'react-router'
import Select from 'react-select'
import { useSelector } from "react-redux"

const R1MachineList = (props) => {
    const history = useHistory()
    const hierarchyData = useSelector((state) => state.hierarchy.hierarchy)
    const equipmentData = useSelector((state) => state.equipment.equipment)
    const [hierarchy, setHierarchy] = useState([])
    const [equipment, setEquipment] = useState([])
    const [equipmentid, setEquipmentid] = useState(null)
    const [equipmentTypeOption, setEquipmentTypeOption] = useState([])
    const [equipmentIdOption, setEquipmentIdOption] = useState([])
    const [selectETOption, setSelectETOption] = useState(null)
    const [selectEIdOption, setSelectEIdOption] = useState(null)


    useEffect(() => {
        setHierarchy(hierarchyData)
        setEquipment(equipmentData)
        setEquipmentid(props.equipment)
    }, [hierarchyData, equipmentData, props.equipment])


    const linkToDashboard = useCallback(() => {
        history.push({
            pathname: '/dashboard'
        })
    }, [history])

    const linkToDetailboard = useCallback((type, id) => {
        history.push({
            pathname: './detailmachine',
            state: {
                equipmenttype: type, 
                equipmentid: id
            }
        })
    }, [history, equipmentData])


    // 첫 번째 select (Equipment Type)
    useEffect(() => {
        if (equipmentData.length > 0) {
            const selectETOptionList = []

            equipmentData.forEach((item) => {
                selectETOptionList.push({
                    value: item.equipmenttype,
                    label: item.equipmenttype
                })
            })
            setEquipmentTypeOption(selectETOptionList)
            setSelectETOption(selectETOptionList.find((item) => item.value === equipmentid))
        }
    }, [equipment, equipmentid])

    // useEffect(() => {
    //     if (hierarchyData.length > 0) {
    //         const selectETOptionList = []

    //         hierarchyData.forEach((item) => {
    //             (item.child).forEach((item) => {
    //                 console.log('*****', item)
    //                 const newItem = {
    //                     value: item.equipmenttype,
    //                     label: item.equipmenttype
    //                 }
    //                 if (selectETOptionList.filter(e => e.value === item.equipmenttype).length <= 0) {
    //                   selectETOptionList.push(newItem)
    //                 }
    //             })
    //         })
    //         setEquipmentTypeOption(selectETOptionList)
    //         setSelectETOption(selectETOptionList[0])
    //     }
    // }, [hierarchy])

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
            setSelectEIdOption(selectEIdOptionList[0])        
        }
    }, [equipment, selectETOption])
    
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
                                    setSelectETOption(value); props.setEquipmenttype(value.value)
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
                        <Col xl='6' />
                        <Col className='col-1 d-flex'>
                            <Button.Ripple 
                                color={'primary'}
                                block
                                onClick={() => linkToDetailboard(selectETOption, selectEIdOption)}
                            >
                            Detail</Button.Ripple>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default R1MachineList
