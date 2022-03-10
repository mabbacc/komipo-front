import { Fragment } from "react"
import { Card, CardBody, CardHeader, CardTitle, Table } from "reactstrap"

const Summary = () => {
    return (
        <Fragment>
            <Card style={{height: '400px', overflowX: 'hidden', overflowY: 'auto'}}>
                <CardBody style={{position: 'sticky', top: '0'}}>
                    {/* <CardTitle tag='h6' style={{textAlign: 'center'}}>Summary</CardTitle> */}
                    <Table bordered>
                        <thead style={{height: '90%'}}>
                            <tr>
                                <th rowSpan='2' width={'10%'} style={{textAlign: 'center', verticalAlign: 'middle'}}>구분</th>
                                <th colSpan='6' style={{textAlign: 'center'}}>PAF-A</th>
                            </tr>
                            <tr>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center', verticalAlign: 'middle'}}>Overall alarm count</th>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center', verticalAlign: 'middle'}}>Current Status</th>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center', verticalAlign: 'middle'}}>Failure rale</th>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center', verticalAlign: 'middle'}}>Predictor Estimation</th>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center', verticalAlign: 'middle'}}></th>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center', verticalAlign: 'middle'}}>Last Alarm</th>
                            </tr>
                        </thead>
                    </Table>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default Summary