import { Fragment, useState, useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import Chart from 'react-apexcharts'
import { generateDayWiseTimeSeries } from '@utils'

const ComparativeStatus = () => {
  /*TODO: delete this line : Test Code for generate sample Data */
  const [data, setData] = useState([])

  useEffect(() => {
      setData(
            generateDayWiseTimeSeries(new Date('11 Fab 2022').getTime(), 185, {
              min: 30,
              max: 90
            }))
  }, [])

const ComparativeStatus = () => {   
    const options = {
        series: [
            {
        data: [44, 55, 41, 64, 22]
      }, {
        data: [53, 32, 33, 52, 13]
      }
    ],
        chart: {
        type: 'bar',
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005]
      }
      }       
      return (
          <Fragment>
            <Row>
                <Col>
                <Chart
                    options={options}
                    series={options.series}
                    type="bar"
                    height="250"
                />
                </Col>
            </Row>
        </Fragment>
    )
  }, [])

  return (
    <Fragment>
      <Row>
        <Col></Col>
      </Row>
      {
        /*TODO: delete this block : Test Code for generate sample Data */
        data.length > 1 ? data[2] : 'null'
      }
    </Fragment>
  )
}

export default ComparativeStatus
