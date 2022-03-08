import { Fragment } from "react"
import { Card, Col, Row } from "reactstrap"

import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'

const R2DetailMachine = () => {
    return (
        <Fragment>
            <Row className='match-height'>
                <Col xl='4'>
                    <CardTransactions></CardTransactions> 
                    {/* Equipment Image */}
                </Col>
                <Col xl='8'>
                    <CardMedal></CardMedal>
                    {/* Summary */}
                    <Row className = 'match-height'>
                        <Col xl='6'>
                            <CardMedal></CardMedal>
                            {/* Alarm frequency */}
                        </Col>
                        <Col xl='6'>
                            <CardMedal></CardMedal>
                            {/* Diagnosed Faulty Tendency */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default R2DetailMachine