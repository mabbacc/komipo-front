import { Fragment, useCallback, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, Button, Table } from "reactstrap"
import Chart from 'react-apexcharts'
import { useHistory } from "react-router"

const A3STG7 = () => {
    const history = useHistory()

    const linkToSubboard = useCallback(() => {
        history.push({
            pathname: '/subboard'
        })
    },[history])

    return (
        <Fragment>
                <Col xl='4' style={{float: 'left', height: '860px', marginRight: '10px', width: '33%'}}>
                    <div className='text-center'>
                        <Button.Ripple
                            color={'primary'}
                            block
                            onClick={() => linkToSubboard()}
                        >
                            STG7
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
                                        >
                                            HP
                                        </Button.Ripple>
                                    </Col>
                                    <Col xl='6' className='d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            outline
                                            size='sm'
                                            style={{width: '100%'}}
                                        >
                                            IP
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
                                        >
                                            LP
                                        </Button.Ripple>
                                    </Col>
                                    <Col xl='6' className='d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            outline
                                            size='sm'
                                            style={{width: '100%'}}
                                        >
                                            GEN
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
                                        >
                                            EXC
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

                      {/* <Col xl='4' style={{float: 'left'}}>
                    <div className='text-center'>
                        <Row style={{margin: 'auto'}}>
                            <Col className='d-flex'>
                                <Button.Ripple
                                    color={'primary'}
                                    block
                                    size='sm'
                                    >
                                    STG7
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
                                                <CardBody style={{height:'200px'}}></CardBody>
                                            </Card>
                                        </Col>
                                        <Col xl='6'>
                                            <Card>
                                                <CardBody style={{height:'200px'}}></CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
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
                                                <CardBody style={{height:'200px'}}></CardBody>
                                            </Card>
                                        </Col>
                                        <Col xl='6'>
                                            <Card>
                                                <CardBody style={{height:'200px'}}></CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
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
                                                <CardBody style={{height:'200px'}}></CardBody>
                                            </Card>
                                        </Col>
                                        <Col xl='6'>
                                            <Card>
                                                <CardBody style={{height:'200px'}}></CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </CardBody>   
                            </Row>
                        </Row> 
                    </div>  
                </Col> */}

        </Fragment>
    )
}

export default A3STG7