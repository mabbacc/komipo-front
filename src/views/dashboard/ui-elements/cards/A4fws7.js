import { Fragment, useCallback, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, Button, Table } from "reactstrap"
import Chart from 'react-apexcharts'
import { useHistory } from "react-router"

const A4FWS7 = (props) => {
    const history = useHistory()
    const [hierarchy, setHierarchy] = useState({})
    const [equipment, setEquipment] = useState([])

    useEffect(() => {
        setHierarchy(props.hierarchy)
        setEquipment(props.equipment)
    }, [props.hierarchy, props.equipment])

    const linkToSubboard = useCallback((id) => {
        history.push({
            pathname: '/subboard',
            state: {
                equipmenttype: id
            }
        })
    },[history, equipment])

    return (
        <Fragment>
            <Col xl='2' style={{float: 'left', height: '860px', marginRight: '10px', width: '16%'}}>
                {/* , borderStyle: 'groove' */}
                    <div className='text-center'>
                        <Button.Ripple
                            color={'primary'}
                            block
                            onClick={() => linkToSubboard(equipment[10].equipmenttype)}
                        >
                            {(hierarchy !== undefined) ? hierarchy.areaid : ''}
                        </Button.Ripple>

                        <Card style={{ height: '820px' }}>
                            {equipment.length > 0 ? equipment.filter((e) => e.areaid === 'FWS7').map((e, index) => (
                                <CardBody style={{padding: '0.5rem 1rem'}} key={'FWS7-' + index}>
                                    <Button.Ripple
                                        color={'primary'}
                                        outline
                                        size='sm'
                                        style={{width: '100%'}}
                                        onClick={() => linkToSubboard(e.equipmenttype)}>
                                        {(equipment.length > 0) ? e.equipmenttype : ''}
                                    </Button.Ripple>
                                    <CardBody style={{ height: '505px' }}>
                                        {/* <Chart options={options} series={options.series} type='donut'height='180px'/> */}
                                    </CardBody>
                                </CardBody>
                            )) : ''}
                        </Card>
                   </div>
                </Col>
        </Fragment>
    )
}

export default A4FWS7