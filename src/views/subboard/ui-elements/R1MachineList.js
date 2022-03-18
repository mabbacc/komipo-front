import { Fragment, useCallback, useState, useEffect } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"
import { useHistory } from 'react-router'
import Select from 'react-select'
import { useSelector } from "react-redux"

const R1MachineList = (props) => {
    const history = useHistory()
    const hierarchyData = useSelector((state) => state.hierarchy.hierarchy)
    const equipmentData = useSelector((state) => state.equipment.equipment)
    const [equipmentid, setEquipmentid] = useState(null)
    const [hierarchy, setHierarchy] = useState([])
    const [equipment, setEquipment] = useState([])
    const [equipmentTypeOption, setEquipmentTypeOption] = useState([])
    const [equipmentIdOption, setEquipmentIdOption] = useState([])
    const [selectETOption, setSelectETOption] = useState(null)
    const [selectEIdOption, setSelectEIdOption] = useState(null)

    useEffect(() => {
        setHierarchy(hierarchyData)
        setEquipment(equipmentData)
    }, [hierarchyData, equipmentData])


    useEffect(() => {
        setEquipmentid(props.equipment)
    }, [props.equipment])


    const linkToDashboard = useCallback(() => {
        history.push({
            pathname: '/dashboard'
        })
    }, [history])

    const linkToDetailboard = useCallback((id) => {
        history.push({
            pathname: './detailmachine'
        })
    }, [history])


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
                        <Col xl='6' />
                        <Col className='col-1 d-flex'>
                            <Button.Ripple 
                                color={'primary'}
                                block
                                onClick={() => linkToDetailboard()}
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
