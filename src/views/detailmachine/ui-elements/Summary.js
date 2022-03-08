import { Fragment } from "react"
import { Card, CardBody, CardHeader, CardTitle, Table } from "reactstrap"

const Summary = () => {
    return (
        <Fragment>
            <Card style={{height: '400px', overflowX: 'hidden', overflowY: 'auto'}}>
                <CardHeader>
                    <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardBody style={{position: 'sticky', top: '0'}}>
                    <Table bordered>
                        <thead style={{height: '90%'}}>
                            <tr>
                                <th rowSpan='2' width={'10%'} style={{textAlign: 'center'}}>구분</th>
                                {/* <th width={'10%'} style={{padding: '5px', textAlign: 'center'}}>
                                    구분 
                                </th> */}
                           
                                <th colSpan='6' style={{textAlign: 'center'}}>PAF-A</th>
                            </tr>
                            <tr>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center'}}>Overall alarm count</th>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center'}}>Current Status</th>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center'}}>Failure rale</th>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center'}}>Predictor Estimation</th>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center'}}></th>
                                <th width={'15%'} style={{padding: '5px', textAlign: 'center'}}>Last Alarm</th>
                            </tr>
                        </thead>
                    </Table>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default Summary