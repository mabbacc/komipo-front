import { Fragment, useState, useEffect } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Select from 'react-select'
import A3aSpectrumPlot from "./graphs/A3aSpectrumPlot"
import A3bSpectrumPlot from "./graphs/A3bSpectrumPlot"
import axios from "axios"


const A3Spectrum = (props) => {
    const [chartData, setChartData] = useState([])
    const [pairMptValue, setPairMptValue] = useState(null)
    const [selectMptOption, setSelectMptOption] = useState({})
    const [measdt, setMeasdt] = useState({})

    useEffect(() => {
        setSelectMptOption(props.selectMptOption)
        setPairMptValue(props.pairMptValue)
        setMeasdt(props.measdt)
      }, [props])

    useEffect(() => {
        // detail-analysis/spectrum?mptkey=9&measdt=2019-10-29 08:13:39
        if (selectMptOption.value !== undefined && measdt.value !== undefined) {
            axios
              .get(process.env.REACT_APP_API_SERVER_URL + 
                '/front/detail-analysis/spectrum?' +
                '&mptkey=' + selectMptOption.value +
                '&measdt=' + measdt.value)
              .then((res) => {
                setChartData(res.data)
              })
        }
      }, [selectMptOption, measdt])


    return (
        <Fragment>
            <Row>
                <Col xl='12'>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl='1'>
                                    <div className="form-control">{props.equipmentid.label}</div>
                                </Col>
                                <Col xl='2'>
                                    <Select 
                                        className='react-select'
                                        classNamePrefix='select'
                                        value={selectMptOption}
                                        options={props.mptOption}
                                        onChange={(value) => {
                                            setSelectMptOption(value); props.setSelectMptOption(value)
                                        }}
                                    />
                                </Col>
                                <Col xl='2'>
                                    <div className="form-control">{pairMptValue}</div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl='6'>
                    <Card>
                        <A3aSpectrumPlot graphData={chartData[0]} />
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <A3bSpectrumPlot graphData={chartData[1]} />
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default A3Spectrum