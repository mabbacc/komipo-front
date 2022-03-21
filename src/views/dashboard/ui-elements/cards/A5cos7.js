import { Fragment, useCallback, useEffect, useState } from "react"
import { Col, Row, Card, CardBody, Button, Table } from "reactstrap"
import Chart from 'react-apexcharts'
import { useHistory } from "react-router"


const A5COS7 = (props) => {
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
            <Col style={{float: 'left', height: '280px', width: '33%'}}>
                    <div className='text-center'>
                        <Button.Ripple
                            color={'primary'}
                            block
                            onClick={() => linkToSubboard(equipment[12].equipmenttype)}
                        >
                            {(hierarchy !== undefined) ? hierarchy.areaid : ''}
                        </Button.Ripple>

                        <Card>
                            <CardBody style={{padding: '0.5rem 1rem'}}>
                                <Row>
                                    {equipment.length > 0 ? equipment.filter((e) => e.areaid === 'COS7').map((e, index) => (
                                        <Col xl='6' key={'COS7-' + index}>
                                            <Button.Ripple
                                                color={'primary'}
                                                outline
                                                size='sm'
                                                style={{width: '100%'}}
                                                onClick={() => linkToSubboard(e.equipmenttype)}
                                            >
                                                {(equipment.length > 0) ? e.equipmenttype : ''}
                                            </Button.Ripple>
                                            <Row>
                                                <Col>
                                                    <CardBody><Chart options={options} series={options.series} type='donut'height='180px'/></CardBody>
                                                </Col>
                                            </Row>
                                        </Col>   
                                    )) : ''}
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
        </Fragment>
    )
}

export default A5COS7