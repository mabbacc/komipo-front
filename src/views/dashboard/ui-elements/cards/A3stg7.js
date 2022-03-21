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
                                    {equipment.length > 0 ? equipment.filter((e) => e.areaid === 'STG7').map((e, index) => (
                                        <Col xl='6' key={'STG7-' + index}>
                                            <Button.Ripple
                                                color={'primary'}
                                                outline
                                                size='sm'
                                                style={{ width: '100%' }}
                                                onClick={() => linkToSubboard(e.equipmenttype)}
                                            >
                                                {(equipment.length > 0) ? e.equipmenttype : ''}
                                            </Button.Ripple>
                                            <Row>
                                                <Col>
                                                    <Card>
                                                        <CardBody style={{height:'217px'}}></CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Col>   
                                    )) : ''}
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
        </Fragment>
    )
}

export default A3STG7