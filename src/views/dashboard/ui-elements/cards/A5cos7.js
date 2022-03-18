import { Fragment, useCallback, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, Button, Table } from "reactstrap"
import Chart from 'react-apexcharts'
import { useHistory } from "react-router"


const A5COS7 = (props) => {
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
            <Col style={{float: 'left', height: '280px', width: '33%'}}>
                    <div className='text-center'>
                        <Button.Ripple
                            color={'primary'}
                            block
                            onClick={() => linkToSubboard(equipment[12].equipmenttype)}
                        >
                            {(hierarchy !== undefined) ? hierarchy.areaid : ''}
                        </Button.Ripple>

                        <Card style={{ height: '242px' }}>
                            <CardBody style={{padding: '0.5rem 1rem'}}>
                                <Row>
                                    <Col xl='6' className='d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            outline
                                            size='sm'
                                            style={{width: '100%'}}
                                            onClick={() => linkToSubboard(equipment[12].equipmenttype)}
                                        >
                                            {(equipment.length > 0) ? equipment[12].equipmenttype : ''}
                                        </Button.Ripple>
                                    </Col>
                                    <Col xl='6' className='d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            outline
                                            size='sm'
                                            style={{width: '100%'}}
                                            onClick={() => linkToSubboard(equipment[13].equipmenttype)}
                                        >
                                            {(equipment.length > 0) ? equipment[13].equipmenttype : ''}
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
                        </Card>
                    </div>
                </Col>
        </Fragment>
    )
}

export default A5COS7