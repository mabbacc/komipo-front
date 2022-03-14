import { Fragment } from "react"
import { Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'


const FaultyTendency = () => {   
    const options = {
        series: [
            {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20]
      }
    ],
    chart: {
        height: 350,
        type: 'radar',
        toolbar: {
          show: true,
          tools:{
            download:false 
          }
        }
      },
    stroke: {
        show: true,
        width: 2,
        colors: [],
        dashArray: 0
      },
    xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June']
      }
    }

    
    return (
        <Fragment>
            <Row>
                <Col>
                    <Chart
                        options={options}
                        series={options.series}
                        type="radar"
                        height="300"
                        width='100%'
                    />
                </Col>
            </Row>
        </Fragment>
    )
}

export default FaultyTendency