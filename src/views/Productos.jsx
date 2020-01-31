import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Table,  FormGroup, Form, Input, Button } from "reactstrap";
import FormProductos from './views_Forms/FormProductos.jsx';
import { Route, Switch } from "react-router-dom";
import routes from "routes.js";

class Productos extends React.Component {

  render() {  

    return (
      <>
        <div className="content">
        <FormProductos/>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Listado de productos</h5>
                </CardHeader>
                <CardBody>
                <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Nombre</th>
                        <th>Fecha de Ingreso</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>29/01/2019</td>
                        <td>Oud-Turnhout</td>
                        <td >$ 36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>29/01/2019</td>
                        <td>Sinaai-Waas</td>
                        <td >$ 23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>29/01/2019</td>
                        <td>Baileux</td>
                        <td >$ 56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>29/01/2019</td>
                        <td>Overland Park</td>
                        <td >$ 38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>29/01/2019</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td >$ 63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>29/01/2019</td>
                        <td>Gloucester</td>
                        <td >$ 78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td>29/01/2019</td>
                        <td>Gloucester</td>
                        <td >$ 98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col md="12">
            <Card>
                <CardHeader>
                  <h5 className="title">Agregar Productos</h5>
                </CardHeader>
                <CardBody>
                <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Nombre</label>
                          <Input
                            defaultValue=""
                            placeholder="Computador"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Fecha Ingreso</label>
                          <Input
                            defaultValue=""
                            placeholder=""
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Categoria</label>
                          <Input type="select" name="select" id="exampleSelect1">
                            <option value="Electrodomesticos">Electrodomesticos</option>
                            <option value="Enceres">Enceres</option>
                            <option value="Otros">Otros</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Precio</label>
                          <Input
                            defaultValue=""
                            placeholder="$ 100.000,00"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>                    
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Guardar Producto
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row> */}

        </div>
      </>
    );
  }
}

export default Productos;
