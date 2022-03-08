import { Fragment, useCallback } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"
import { useHistory } from 'react-router'
import Select from 'react-select'

const R1MachineList = () => {
    const history = useHistory()

    const linkToDashboard = useCallback(() => {
        history.push({
            pathname: '/dashboard'
        })
    },
    [history])
    
    const selectOption = [ 
        { value: 'PAF', label: '보일러 설비 통풍계통 PAF(Primary Air Fan)'},
        { value: 'PAF-A', label: 'PAF - A'}
    ]

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
                        <Col className='col-1 d-flex'>
                            <Button.Ripple 
                                color={'secondary'}
                                block
                                onClick={() => linkToDashboard()}
                            >
                            Home</Button.Ripple>
                        </Col>
                        <Col className='col-4'>
                            <Select 
                                defaultValue={selectOption[0]}
                            />
                        </Col>
                        <Col className='col-2'>
                            <Select 
                                defaultValue={selectOption[1]}
                            />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default R1MachineList
