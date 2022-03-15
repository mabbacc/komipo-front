import { Card, CardBody, CardHeader, Alert, Table } from "reactstrap"
import { AlertCircle } from "react-feather"

const AlarmHistoryTable = () => {
    return (
        <Card className="card-company-table text-center mb-1">
            {/* <CardHeader className='text-center mb-1'>
                <CardTitle>
                    Alarm History Table
                </CardTitle>
            </CardHeader> */}
            <CardBody style={{position: 'sticky', top: '0', marginTop: '-10px'}}>
                <Table size={'sm'} responsive>
                    <thead style={{height: '90%'}}>
                        <tr>
                            <th></th>
                            <th>Alert</th>
                            <th>Time</th>
                            <th>Diagnosis Status</th>
                            <th>Equipment</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th colSpan="8">
                            <Alert color="success">
                                <div className="alert-body">
                                    <AlertCircle size={15} /> <span className="ml-1">No Alarm History &amp; Diagnostic Report Data</span>
                                </div>
                            </Alert>
                        </th>
                    </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default AlarmHistoryTable