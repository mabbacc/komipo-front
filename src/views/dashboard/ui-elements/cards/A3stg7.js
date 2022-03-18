import { Fragment, useCallback, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, Button, Table } from "reactstrap"
import Chart from 'react-apexcharts'
import { useHistory } from "react-router"

const A3STG7 = (props) => {
    const history = useHistory()
    const [hierarchy, setHierarchy] = useState({})
    const [equipment, setEquipment] = useState([])

    useEffect(() => {
        setHierarchy(props.hierarchy)
        setEquipment(props.equipment)
    }, [props.hierarchy, props.equipment])

    const linkToSubboard = useCallback((id) => {
        history.push({
            pathname: '/subboard',
            state: {
                equipmenttype: id
            }
        })
    },[history, equipment])

    return (
        <Fragment>
                <Col xl='4' style={{float: 'left', height: '860px', marginRight: '10px', width: '33%'}}>
                    <div className='text-center'>
                        <Button.Ripple
                            color={'primary'}
                            block
                            onClick={() => linkToSubboard(equipment[5].equipmenttype)}
                        >
                            {(hierarchy !== undefined) ? hierarchy.areaid : ''}
                        </Button.Ripple>

                        <Card style={{ height: '820px' }}>
                            <CardBody style={{padding: '0.5rem 1rem'}}>
                                <Row>
                                    <Col xl='6' className='d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            outline
                                            size='sm'
                                            style={{width: '100%'}}
                                            onClick={() => linkToSubboard(equipment[5].equipmenttype)}
                                        >
                                            {(equipment.length > 0) ? equipment[5].equipmenttype : ''}
                                        </Button.Ripple>
                                    </Col>
                                    <Col xl='6' className='d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            outline
                                            size='sm'
                                            style={{width: '100%'}}
                                            onClick={() => linkToSubboard(equipment[6].equipmenttype)}
                                        >
                                            {(equipment.length > 0) ? equipment[6].equipmenttype : ''}
                                        </Button.Ripple>
                                    </Col>
                                </Row>
                            </CardBody>
                            <Row>
                                <Col xl='6'>
                                    <Card>
                                        <CardBody style={{height:'200px'}}></CardBody>
                                    </Card>
                                </Col>
                                <Col xl='6'>
                                    <Card>
                                        <CardBody style={{height:'200px'}}></CardBody>
                                    </Card>
                                </Col>
                            </Row>


                            <CardBody style={{padding: '0.5rem 1rem'}}>
                                <Row>
                                    <Col xl='6' className='d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            outline
                                            size='sm'
                                            style={{width: '100%'}}
                                            onClick={() => linkToSubboard(equipment[7].equipmenttype)}
                                        >
                                            {(equipment.length > 0) ? equipment[7].equipmenttype : ''}
                                        </Button.Ripple>
                                    </Col>
                                    <Col xl='6' className='d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            outline
                                            size='sm'
                                            style={{width: '100%'}}
                                            onClick={() => linkToSubboard(equipment[8].equipmenttype)}
                                        >
                                            {(equipment.length > 0) ? equipment[8].equipmenttype : ''}
                                        </Button.Ripple>
                                    </Col>
                                </Row>
                            </CardBody>
                            <Row>
                                <Col xl='6'>
                                    <Card>
                                        <CardBody style={{height:'200px'}}></CardBody>
                                    </Card>
                                </Col>
                                <Col xl='6'>
                                    <Card>
                                        <CardBody style={{height:'200px'}}></CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <CardBody style={{padding: '0.5rem 1rem'}}>
                                <Row>
                                    <Col xl='6' className='d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            outline
                                            size='sm'
                                            style={{width: '100%'}}
                                            onClick={() => linkToSubboard(equipment[9].equipmenttype)}
                                        >
                                            {(equipment.length > 0) ? equipment[9].equipmenttype : ''}
                                        </Button.Ripple>
                                    </Col>
                                </Row>
                            </CardBody>
                            <Row>
                                <Col xl='6'>
                                    <Card>
                                        <CardBody style={{height:'200px'}}></CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Col>
        </Fragment>
    )
}

export default A3STG7