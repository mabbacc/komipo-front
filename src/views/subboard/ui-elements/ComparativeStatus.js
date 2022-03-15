import { Fragment } from "react"
import { CardTitle, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'


const ComparativeStatus = () => {   
    const options = {
    series: [
      {
        data: [44, 90, 41, 64, 22, 55, 35, 42]
      }, {
        data: [53, 32, 33, 52, 13, 20, 42, 37]
      }
    ],
    colors: ['#FF9800', '#3F51B5'],
        chart: {
        type: 'bar',
        height: 430
        // animations: {
        //   enabled: false,
        //   dynamicAnimation: {
        //     enabled: false
        //   }
        // }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      legend: {
        position: 'top',
        show: true,
        fontSize: '12px',
        offsetX: 0,
        offsetY: 20,
        customLegendItems: ['PAF-B pk-pk', 'PAF-A pk-pk']
      },
      // dataLabels: {
      //   enabled: true,
      //   offsetX: -6,
      //   style: {
      //     fontSize: '12px',
      //     colors: ['#fff']
      //   }
      // },
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
        categories: ['Fan Outboard Y', 'Fan Outboard X', 'Fan Inboard Y', 'Fan Inboard X', 'Motor Outboard Y', 'Motor Outboard X', 'Motor Inboard Y', 'Motor Inboard X'],
        title: {
          text: 'Displacement[μm pk-pk]'
          // offsetX: -35
        }
      },
      yaxis: {
        tickAmount: 10
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
                    height="280"
                    style={{marginTop: '-10px'}}
                />
                </Col>
            </Row>
        </Fragment>
    )
}

export default ComparativeStatus
