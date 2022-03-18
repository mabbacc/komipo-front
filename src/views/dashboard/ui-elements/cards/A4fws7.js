import { Fragment, useCallback, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, Button, Table } from "reactstrap"
import Chart from 'react-apexcharts'
import { useHistory } from "react-router"

const A4FWS7 = (props) => {
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
            <Col xl='2' style={{float: 'left', height: '860px', marginRight: '10px', width: '16%'}}>
                {/* , borderStyle: 'groove' */}
                    <div className='text-center'>
                        <Button.Ripple
                            color={'primary'}
                            block
                            onClick={() => linkToSubboard(equipment[10].equipmenttype)}
                        >
                            {(hierarchy !== undefined) ? hierarchy.areaid : ''}
                        </Button.Ripple>

                        <Card style={{ height: '820px' }}>
                            <CardBody style={{padding: '0.5rem 1rem'}}>
                                <Button.Ripple
                                    color={'primary'}
                                    outline
                                    size='sm'
                                    style={{width: '100%'}}
                                    onClick={() => linkToSubboard()}>
                                    BFPT
                                </Button.Ripple>
                            </CardBody>
                            <CardBody style={{ height: '470px' }}>
                                {/* <Chart options={options} series={options.series} type='donut'height='180px'/> */}
                            </CardBody>


                            <CardBody style={{padding: '0.5rem 1rem'}}>
                                <Button.Ripple
                                    color={'primary'}
                                    outline
                                    size='sm'
                                    style={{width: '100%'}}
                                    onClick={() => linkToSubboard()}>
                                    BFPM
                                </Button.Ripple>
                            </CardBody>
                            <CardBody style={{ height: '200px' }}>
                                {/* <Chart options={options} series={options.series} type='donut' height='180px'/> */}
                            </CardBody>
                        </Card>
                   </div>
                </Col>

                 {/* <Col xl='2' style={{float: 'left'}}>
            <div className='text-center'>
                <Row style={{margin: 'auto'}}>
                    <Col className='d-flex'>
                        <Button.Ripple
                            color={'primary'}
                            block
                            size='sm'
                            >
                            FWS7
                        </Button.Ripple>
                    </Col>
                    <CardBody>
                        <Col className='d-flex'>
                            <Button.Ripple
                                color={'primary'}
                                outline
                                size='sm'
                                style={{width: '100%'}}
                            >
                                123
                            </Button.Ripple>
                        </Col>
                        <Card>
                            <CardBody style={{height:'455px'}}></CardBody>
                        </Card>
                        <Col className='d-flex'>
                            <Button.Ripple
                                color={'primary'}
                                outline
                                size='sm'
                                style={{width: '100%'}}
                            >
                                123
                            </Button.Ripple>
                        </Col>
                        <Card>
                            <CardBody style={{height:'200px'}}></CardBody>
                        </Card>
                    </CardBody>
                </Row>
            </div>
        </Col> */}

        </Fragment>
    )
}

export default A4FWS7