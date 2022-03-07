import { Fragment, useCallback } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"
import { useHistory } from "react-router"

const R1FacilityList = () => {
    const history = useHistory()

    const linkToDashboard = useCallback(() => {
        history.push({
            pathname: '/dashboard'
        })
    },
    [history]
)

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
                    </Row>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default R1FacilityList