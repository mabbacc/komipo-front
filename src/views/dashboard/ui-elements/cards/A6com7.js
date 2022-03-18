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

                        <Card style={{ height: '242px' }}>
                            <CardBody style={{padding: '0.5rem 1rem'}}>
                                <Row>
                                    <Col className='d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            outline
                                            size='sm'
                                            style={{width: '100%'}}
                                        >
                                            COMP
                                        </Button.Ripple>
                                    </Col>
                                </Row>
                            </CardBody>
                            <Row>
                                <Col>
                                    <Card>
                                        <CardBody style={{height:'200px'}}></CardBody>
                                    </Card>
                                </Col>
                                
                            </Row>
                        </Card>
                    </div>
                </Col>


            {/* <div className='text-center'>
                <Row style={{margin: 'auto'}}>
                    <Col className='d-flex'>
                        <Button.Ripple
                            color={'primary'}
                            block
                            size='sm'
                            >
                            COS7
                        </Button.Ripple>
                    </Col>

                    <Row style={{margin: 'auto'}}>
                        <CardBody>
                            <Row>
                                <Col xl='6' className='d-flex'>
                                    <Button.Ripple
                                        color={'primary'}
                                        outline
                                        size='sm'
                                        style={{width: '100%'}}
                                    >
                                        123
                                    </Button.Ripple>
                                </Col>
                                <Col xl='6' className='d-flex'>
                                    <Button.Ripple
                                        color={'primary'}
                                        outline
                                        size='sm'
                                        style={{width: '100%'}}
                                    >
                                        123
                                    </Button.Ripple>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl='6'>
                                    <Card>
                                        <CardBody style={{height:'100px'}}></CardBody>
                                    </Card>
                                </Col>
                                <Col xl='6'>
                                    <Card>
                                        <CardBody style={{height:'100px'}}></CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </CardBody>
                    </Row>
                </Row> 
            </div>   */}
        </Fragment>
    )
}

export default A6COM7