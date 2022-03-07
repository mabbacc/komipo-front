import { Fragment } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"

import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'

const TopLevel = () => {
    return (
        <Fragment>
            <div id='dashboard-ecommerce'>
                {/* <Row className='match-height'>
                    <Col xl='12'>
                        <Card>List</Card>
                    </Col>
                </Row> */}
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
                                            1.통풍계통
                                        </Button.Ripple>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <CardTransactions></CardTransactions>
                    </Col>
                    
                    <Col xl='9'>
                        <Row className='match-height'>
                            <Col xl='9'>
                                <Card className='text-center mb-1'>2. 터빈설비 터빈본체</Card>
                            <CardMedal></CardMedal>
                            </Col>
                            <Col xl='3'>
                                <Card className='text-center mb-1'>6. 탈황설비계통</Card>
                                <CardMedal></CardMedal>
                            </Col>
                        </Row>
                        <Row className='match-height'>
                            <Col xl='3'>
                                <Col xl='12'>
                                    <Card className='text-center mb-1'>3. 급수계통</Card>
                                </Col>
                                <CardTransactions></CardTransactions>
                            </Col>
                            <Col xl='3'>
                                <Col xl='12'>
                                    <Card className='text-center mb-1'>4. 복수계통</Card>
                                </Col>
                                <CardTransactions></CardTransactions>
                            </Col>
                            <Col xl='3'>
                                <Col xl='12'>
                                    <Card className='text-center mb-1'>5. 순환수 계통</Card>
                                </Col>
                                <CardTransactions></CardTransactions>
                            </Col>
                            <Col xl='3'>
                                <Row className='match-height'>
                                    <Col xl='12'>
                                        <Card className='text-center mb-1'>7-1. 압축설비계통</Card>
                                        <CardMedal></CardMedal>
                                    </Col>
                                    <Col xl='12'>
                                        <Card className='text-center mb-1'>7-2. 압축설비계통</Card>
                                        <CardMedal></CardMedal>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    
                    {/* <Col xl='3'>
                        <Col xl='12'>
                            <Card>6. 탈황설비계통</Card>
                        </Col>
                        <CardMedal></CardMedal>
                        
                        <Col xl='12'>
                            <Card>7-1. 압축설비계통</Card>
                        </Col>
                        <Row className='match-height'>
                            <Col xl='12'>
                                <CardMedal></CardMedal>
                            </Col>
                        </Row>
                        <Row className='match-height'>
                            <Col xl='12'>
                                <Card>7-2. 압축설비계통</Card>
                            </Col>
                            <Col xl='12'>
                                <CardMedal></CardMedal>
                            </Col>
                        </Row>
                    </Col> */}
                </Row>
            </div>
            
        </Fragment>
    )
}

export default TopLevel