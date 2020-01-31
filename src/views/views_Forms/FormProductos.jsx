import React from "react";
import SweetAlert from 'sweetalert2-react';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Table,  FormGroup, Form, Input, Button } from "reactstrap";

class FormProductos extends React.Component {

  state ={
    show: ''
  }

  handleSubmit = async e => {
    e.preventDefault()
  }

    render() {
        return (
          <>
              <Row>
                <Col md="12">
                <Card>
                    <CardHeader>
                      <h5 className="title">Agregar Productos</h5>
                    </CardHeader>
                    <CardBody>
                    <Form onSubmit={this.handleSubmit}>
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
                              onClick={() => this.setState({ show: true })}
                              className="btn-round"
                              color="primary"
                              type="submit"
                            >
                              Guardar Producto
                            </Button>
                            <SweetAlert
                              show={this.state.show}
                              title="Guardado Correctamente"
                              text="SweetAlert in React"
                              icon= "success"
                              onConfirm={() => this.setState({ show: false })}
                            />
                          </div>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
          </>
        );
      }


}

export default FormProductos