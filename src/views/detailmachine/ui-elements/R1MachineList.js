import { Fragment, useCallback, useState } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"
import { useHistory } from "react-router"
import Select from 'react-select'

import AnalysisContainer from '../modal/AnalysisContainer'

const R1MachineList = () => {
    const history = useHistory()
    const [modal, setModal] = useState(false)

    const linkToDashboard = useCallback(() => {
        history.push({
            pathname: '/dashboard'
        })
    },
    [history])

    const selectOption = [ 
        { value: 'PAF', label: '보일러 설비 통풍계통 PAF(Primary Air Fan)'},
        { value: 'PAF-A', label: 'PAF - A'},
        { value: 'Motor Outboard', label: 'Motor Outboard'}
    ]

    const closeModal = () => {
        setModal(!modal)
    }

    return (
        <Fragment>
            {/* <Row>
                <Col xl='12'>
                    <Card>List</Card>
                </Col>
            </Row> */}
            <Card className="text-center mb-1">
                <CardBody>
                    <Row>
                        <Col className='text-left col-1 d-flex'>
                            <Button.Ripple 
                                color={'secondary'}
                                block
                                onClick={() => linkToDashboard()}
                            >
                            Home</Button.Ripple>
                        </Col>
                        <Col xl='4'>
                            <Select 
                                defaultValue={selectOption[0]}
                            />
                        </Col>
                        <Col xl='2'>
                            <Select 
                                defaultValue={selectOption[1]}
                            />
                        </Col>
                        <Col xl='2'>
                            <Select 
                                defaultValue={selectOption[2]}
                            />
                        </Col>
                        <Col xl='1' />
                        <Col xl='2'>
                            <Button.Ripple
                                color={'primary'}
                                block
                                onClick={() => setModal(!modal)}
                                
                            >
                                Analysis chart
                            </Button.Ripple>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            <AnalysisContainer modal={modal} closeModal={closeModal} />
        </Fragment>
    )
}

export default R1MachineList