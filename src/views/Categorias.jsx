import React from "react";
import SweetAlert from 'sweetalert2-react';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Table, FormGroup, Form, Input, Button } from "reactstrap";


class Categorias extends React.Component {

  state ={
    show: ''
  }

  handleSubmit = async e => {
    e.preventDefault()
  }

    render() {
        return (
          <>
            <div className="content">
            <Row>
                <Col md="12">
                <Card>
                    <CardHeader>
                      <h5 className="title">Agregar Categoria</h5>
                    </CardHeader>
                    <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                          <Col className="pr-1" md="6">
                            <FormGroup>
                              <label>Nombre</label>
                              <Input
                                defaultValue=""
                                placeholder="Elctronica"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col className="pl-1" md="6">
                            <FormGroup>
                                <Button
                                  onClick={() => this.setState({ show: true })}
                                  className="btn-round"
                                  color="primary"
                                  type="submit"
                                  style={{marginLeft: 50 + 'px', marginTop: 25 + 'px' }}
                                >
                                  Guardar Categoria
                                </Button>
                                 <SweetAlert
                                    show={this.state.show}
                                    title="Guardado Correctamente"
                                    text="SweetAlert in React"
                                    icon= "success"
                                    onConfirm={() => this.setState({ show: false })}
                                  />
                            </FormGroup>
                          </Col>
                        </Row>               
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader>
                      <h5 className="title">Listado de Categorias</h5>
                    </CardHeader>
                    <CardBody>
                    <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>000001</td>
                            <td>Dakota Rice</td>
                          </tr>
                          <tr>
                            <td>000002</td>
                            <td>Minerva Hooper</td>
                          </tr>
                          <tr>
                            <td>000003</td>
                            <td>Sage Rodriguez</td>
                          </tr>
                          <tr>
                            <td>000004</td>
                            <td>Philip Chaney</td>
                          </tr>
                          <tr>
                            <td>000005</td>
                            <td>Doris Greene</td>
                          </tr>
                          <tr>
                            <td>000006</td>
                            <td>Mason Porter</td>
                          </tr>
                          <tr>
                            <td>000007</td>
                            <td>Jon Porter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        );
    }

}

export default Categorias