import { Fragment, useCallback, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, Button, Table } from "reactstrap"
import Chart from 'react-apexcharts'
import { useHistory } from "react-router"


const A2WCS7 = (props) => {
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
            <Col style={{float: 'left', height: '280px', width: '33%', padding: '0.6rem 0 0 0'}}>
                    <div className='text-center'>
                        <Button.Ripple
                            color={'primary'}
                            block
                            onClick={() => linkToSubboard(equipment[3].equipmenttype)}
                        >
                            {(hierarchy !== undefined) ? hierarchy.areaid : ''}
                        </Button.Ripple>

                        <Card>
                            <CardBody style={{padding: '0.5rem 1rem'}}>
                                <Row>
                                    {equipment.length > 0 ? equipment.filter((e) => e.areaid === 'WCS7').map((e, index) => (
                                        <Col xl='6' key={'WCS7-' + index}>
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
                                                    <CardBody style={{height:'200px'}}></CardBody>
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

export default A2WCS7