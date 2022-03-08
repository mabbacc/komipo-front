import { Fragment } from "react"
import { Col, Row } from "reactstrap"
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'

const R2ComparaitveStatus = () => {
    
    return (
        <Fragment>
            <Row>
                <Col xl='6'>
                    <CardMedal></CardMedal>
                    {/* Comparative status */}
                </Col>
                <Col xl='6'>
                    <CardMedal></CardMedal>
                    {/* Alarm History table */}
                </Col>
            </Row>
        </Fragment>
    )
}

export default R2ComparaitveStatus