import { Fragment, useState, useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import Chart from 'react-apexcharts'
import { generateDayWiseTimeSeries } from '@utils'

const ComparativeStatus = () => {
  /*TODO: delete this line : Test Code for generate sample Data */
  const [data, setData] = useState([])

  useEffect(() => {
    /*TODO: delete this line : Test Code for generate sample Data */
    setData(
      generateDayWiseTimeSeries(new Date('11 Fab 2022').getTime(), 185, {
        min: 30,
        max: 90
      })
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
