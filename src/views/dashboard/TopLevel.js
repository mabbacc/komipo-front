import { Fragment } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"

const TopLevel = () => {
    return (
        <Fragment>
            <div id='dashboard-ecommerce'>
                <Row className='match-height'>
                    <Col xl='3'>
                        <Col xl='12'>
                            <div className='text-center mb-1'>
                                <Row>
                                    <Col className='col-6 d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            block
                                            size='sm'
                                        >
                                            1-1.통풍계통
                                        </Button.Ripple>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Card>
                            <CardBody style={{height: '200px'}} />
                        </Card>
                    </Col>
                    <Col xl='6'>
                        <Col xl='12'>
                            <div className='text-center mb-1'>
                                <Row>
                                    <Col className='col-6 d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            block
                                            size='sm'
                                        >
                                            2.터빈설비 터빈본체
                                        </Button.Ripple>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Card>
                            <CardBody style={{height: '200px'}} />
                        </Card>
                    </Col>
                    <Col xl='3'>
                        <Col xl='12'>
                            <div className='text-center mb-1'>
                                <Row>
                                    <Col className='col-6 d-flex'>
                                        <Button.Ripple
                                            color={'primary'}
                                            block
                                            size='sm'
                                        >
                                            6.탈황설비계통
                                        </Button.Ripple>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Card>
                            <CardBody style={{height: '200px'}} />
                        </Card>
                    </Col>
                </Row>

                <Row className='match-height'>
                    <Col xl='3'>
                        <Row className='match-height'>
                            <Col xl='12'>
                                <Card className='text-center mb-1'>1-2.통풍계통</Card>
                                <Card>
                                    <CardBody style={{height: '200px'}} />
                                </Card>
                            </Col>
                            <Col xl='12'>
                                <Card className='text-center mb-1'>1-3. 통풍계통</Card>
                                <Card>
                                    <CardBody style={{height: '200px'}} />
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl='2'>
                        <Col xl='12'>
                            <Card className='text-center mb-1'>3. 급수계통</Card>
                        </Col>
                        <Card>
                            <CardBody style={{height: '400px'}} />
                        </Card>
                    </Col>
                    <Col xl='2'>
                        <Col xl='12'>
                            <Card className='text-center mb-1'>4. 복수계통</Card>
                        </Col>
                        <Card>
                            <CardBody style={{height: '400px'}} />
                        </Card>
                    </Col>
                    <Col xl='2'>
                        <Col xl='12'>
                            <Card className='text-center mb-1'>5. 순환수 계통</Card>
                        </Col>
                        <Card>
                            <CardBody style={{height: '400px'}} />
                        </Card>
                    </Col>
                    <Col xl='3'>
                        <Row className='match-height'>
                            <Col xl='12'>
                                <Card className='text-center mb-1'>7-1. 압축설비계통</Card>
                                <Card>
                                    <CardBody style={{height: '200px'}} />
                                </Card>
                            </Col>
                            <Col xl='12'>
                                <Card className='text-center mb-1'>7-2. 압축설비계통</Card>
                                <Card>
                                    <CardBody style={{height: '200px'}} />
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            
        </Fragment>
    )
}

export default TopLevel