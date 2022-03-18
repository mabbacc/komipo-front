import { Fragment, useEffect, useState } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import { useSelector } from "react-redux"
import axios from "axios"
import A1cas7 from "./ui-elements/cards/A1cas7"

const TopLevel = () => {
    const hierarchyData = useSelector((state) => state.hierarchy.hierarchy)
    
    return (
        <Fragment>
            <div id='dashboard-ecommerce'>
                <A1cas7 hierarchy={hierarchyData[0]}/>
                

                {/*---FWS7---*/}
                <Col xl='2' style={{float: 'left'}}>
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
                </Col>

                {/*---STG7---*/}
                <Col xl='4' style={{float: 'left'}}>
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
                </Col>

                {/*---COS7---*/}
                <Col xl='4' style={{float: 'left'}}>
                    {/*---COS7---*/}
                    <div className='text-center'>
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
                    </div>  

                    {/*---WCS7---*/}
                    <div className='text-center'>
                        <Row style={{margin: 'auto'}}>
                            <Col className='d-flex'>
                                <Button.Ripple
                                    color={'primary'}
                                    block
                                    size='sm'
                                    >
                                    WCS7
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
                    </div> 

                    
                    <div className='text-center'>
                        <Row style={{margin: 'auto'}}>
                            {/*---OAB7---*/}
                            <Col xl='6' className='d-flex'>
                                <Button.Ripple
                                    color={'primary'}
                                    block
                                    size='sm'
                                    >
                                    COS7
                                </Button.Ripple>
                            </Col>
                            {/*---OAB7---*/}
                            <Col xl='6' className='d-flex'>
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
                </Col>
            </div>
        </Fragment>
    )
}

export default TopLevel