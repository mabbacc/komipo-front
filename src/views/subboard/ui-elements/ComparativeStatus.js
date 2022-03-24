import { Fragment, useEffect, useState } from "react"
import { CardTitle, Col, Row } from "reactstrap"
import Chart from 'react-apexcharts'
import { useSelector } from "react-redux"
import axios from "axios"


const ComparativeStatus = (props) => {   
  // console.log('111chart', props)
  // const equipmentData = useSelector((state) => state.equipment.equipment)
  const [equipmenttype, setEquipmenttype] = useState()
  const [chart, setChart] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    setEquipmenttype(props.equipmenttype)
  }, [props])

  useEffect(() => {
    //front/comparative/status?equipmenttype=FDF
    if (props.equipmenttype !== null) {
      axios
        .get(process.env.REACT_APP_API_SERVER_URL + 
            '/front/comparative/status?equipmenttype=' + props.equipmenttype)
        .then((res) => {
          setChartData(res.data)
        })
    }
  }, [props.equipmenttype])


  useEffect(() => {
    const chart = {
      // series: [
      //   {
      //     data: [44, 90, 41, 64, 22, 55, 35, 42]
      //   }, {
      //     data: [53, 32, 33, 52, 13, 20, 42, 37]
      //   }
      // ],
      series: [],
      options: {
        colors: ['#FF9800', '#3F51B5'],
          chart: {
            type: 'bar',
            //height: 430,
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
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '70%',
              // distributed: false,
              // rangeBarOverlap: true,
              // rangeBarGroupRows: false,
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
          dataLabels: {
            enabled: false
            // offsetX: -6,
            // style: {
            //   fontSize: '12px',
            //   colors: ['#fff']
            // }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          noData: {
            text: 'No Data',
            offsetY: -25 
          },
          tooltip: {
            shared: true,
            intersect: false
          },
          xaxis: {
            categories: ['PAF'],
            title: {
              text: 'Displacement[μm pk-pk]'
              // offsetX: -35
            }
          },
          yaxis: {
            tickAmount: 10
          }
      }
    } 

    if (chartData !== null) {
      chart.series = chartData.series
      //chart.options.legend.customLegendItems = chartData.series[0].name
      // if (chartData.xaxis[0].name !== undefined) {
      //    chart.options.xaxis.categories = chartData.xaxis[0].name
      //  }
      setChart(chart)
    }     
  }, [chartData])

      return (
          <Fragment>
            <Row>
                <Col>{chart !== null ? <Chart options={chart.options} series={chart.series} type='bar' height='280' style={{marginTop: '-10px'}} /> : null} </Col>
            </Row>
        </Fragment>
    )
}

export default ComparativeStatus
