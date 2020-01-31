import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

class Inicio extends React.Component {

    render() {
        return (
          <>
            <div className="content">
              <Row>
                <Col md="12">
                  <Card>
                    <CardBody>
                        <center>
                            <img src="https://www.siacol.com/wp-content/uploads/2015/04/icono-inventario.png" alt="inventario" width="500"/>
                        </center>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        );
      }

}

export default Inicio