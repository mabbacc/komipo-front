import { Fragment, useCallback, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, Button, Table } from "reactstrap"
import Chart from 'react-apexcharts'
import { useHistory } from "react-router"

const A1CAS7 = (props) => {
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

    const options = {
        series: [44, 55, 41, 17, 15],
        chart: {
        type: 'donut'
      },
      legend: {
        show: false
      },
      responsive: [
          {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
    }

    return (
        <Fragment>
            <Col xl='2' style={{float: 'left', height: '860px', marginRight: '10px', width: '16%'}}>
            {/* , borderStyle: 'groove' */}
                <div className='text-center'>
                    <Button.Ripple
                        color={'primary'}
                        block
                        onClick={() => linkToSubboard(equipment[0].equipmenttype)}
                    >
                        {(hierarchy !== undefined) ? hierarchy.areaid : ''}    
                    </Button.Ripple>

                    <Card style={{ height: '820px' }} >
                        {equipment.length > 0 ? equipment.filter((e) => e.areaid === 'CAS7').map((e, index) => (
                            <CardBody style={{padding: '0.5rem 1rem'}} key={'CAS7-' + index}>
                                <Button.Ripple
                                    color={'primary'}
                                    outline
                                    size='sm'
                                    style={{width: '100%'}}
                                    onClick={() => linkToSubboard(e.equipmenttype)}>
                                    {(equipment.length > 0) ? e.equipmenttype : ''}
                                    {/* {(equipment.length > 0) ? equipment[0].equipmenttype : ''} */}
                                </Button.Ripple>
                                <CardBody style={{ height: '200px' }}>
                                    <Chart options={options} series={options.series} type='donut'height='180px'/>
                                </CardBody>
                            </CardBody>
                        )) : ''}
                    </Card>
                </div>
            </Col>
        </Fragment>
    )
}

export default A1CAS7