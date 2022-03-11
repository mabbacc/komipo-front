import { Fragment } from "react"
import { Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'


const AlarmFrequency = () => {   
    const options = {
        series: [44, 55, 13, 43, 22],
        chart: {
        width: 380,
        type: 'pie'
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
            <Row>
                <Col>
                    <Chart
                        options={options}
                        series={options.series}
                        type="pie"
                        height="280"
                        width='100%'
                    />
                </Col>
            </Row>
        </Fragment>
    )
}

export default AlarmFrequency