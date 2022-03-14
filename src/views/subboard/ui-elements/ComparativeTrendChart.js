import { Fragment, useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import Chart from 'react-apexcharts'
import { generateDayWiseTimeSeries } from '@utils'

const ComparativeTrendChart = () => {
  const [grdata, setGrdata] = useState([])

  useEffect(() => {
    setGrdata(
      generateDayWiseTimeSeries(new Date('01 Jan 2022').getTime(), 185, {
        min: 30,
        max: 90
      })
    )
  }, [])
  const options = {
    series: [
      {
        name: 'Desktops',
        data: grdata
      }
    ],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: true,
        tools:{
          download:false 
        }
      }
      // animations: {
      //   enabled: false,
      //   dynamicAnimation: {
      //     enabled: false
      //   }
      // }
    },
    legend: {
      show: true,
      position: 'right'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    // title: {
    //   text: 'Product Trends by Month',
    //   align: 'left'
    // },
    // grid: {
    //   row: {
    //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    //     opacity: 0.5
    //   }
    // },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      title: {
        text: 'Date'
      }
    },
    yaxis: {
      title: {
        text: 'Displacement'
      }
    }
  }
  return (
    <Fragment>
      <Row>
        <Col>
          <Chart options={options} series={options.series} type="line" height="230" width="100%" />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ComparativeTrendChart
