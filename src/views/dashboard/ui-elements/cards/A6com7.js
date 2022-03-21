import { Fragment, useCallback, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, Button, Table } from "reactstrap"
import Chart from 'react-apexcharts'
import { useHistory } from "react-router"


const A6COM7 = (props) => {
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
            <Col xl='2' style={{float: 'left', height: '280px', padding: '1.2rem 0.5rem 0 0'}}>
                    <div className='text-center'>
                        <Button.Ripple
                            color={'primary'}
                            block
                            onClick={() => linkToSubboard(equipment[14].equipmenttype)}
                        >
                            COM7
                        </Button.Ripple>

                        <Card>
                            <CardBody style={{padding: '0.5rem 1rem'}}>
                                <Row>
                                    {equipment.length > 0 ? equipment.filter((e) => e.areaid === 'COM7').map((e, index) => (
                                        <Col key={'COM7-' + index}>
                                            <Button.Ripple
                                                color={'primary'}
                                                outline
                                                size='sm'
                                                style={{width: '100%'}}
                                                onClick={() => linkToSubboard(e.equipmenttype)}
                                            >
                                                {(equipment.length > 0) ? e.equipmenttype : ''}
                                            </Button.Ripple>
                                            <Row>
                                                <Col>
                                                    <CardBody style={{height: '200px'}}></CardBody>
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

export default A6COM7