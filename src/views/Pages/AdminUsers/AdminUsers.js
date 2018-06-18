import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  UncontrolledTooltip
} from "reactstrap";
import MDSpinner from "react-md-spinner";
import DefaultLayout from "../../../containers/DefaultLayout";

class AdminUsers extends Component {
  static propTypes = {
    goToHighUserForm: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired
  };

  renderLoading() {
    if (this.props.isLoading) {
      return (
        <div className="text-center mt-2">
          <MDSpinner size={100} color="#e91e63" />
        </div>
      );
    }
  }

  renderTable() {
    return (
      <Table
        hover={true}
        responsive={true}
        className="table-outline mb-0 d-none d-sm-table"
      >
        <thead className="thead-light">
          <tr>
            <th>Email</th>
            <th>Nombre</th>
            <th>Servicio</th>
            <th>
              <i className="icon-pencil" id="tip-modify" />
              <UncontrolledTooltip placement="top" target="tip-modify">
                Modificar
              </UncontrolledTooltip>
            </th>
            <th>
              <i className="icon-key" id="tip-wipe" />
              <UncontrolledTooltip placement="top" target="tip-wipe">
                Blanquear clave
              </UncontrolledTooltip>
            </th>
          </tr>
        </thead>
        <tbody>{this.props.users.map(user => this.renderUser(user))}</tbody>
      </Table>
    );
  }

  renderUser(user) {
    return (
      <tr key={`id_${user.id_usuario}`}>
        <td>{user.email}</td>
        <td>{user.nombre + ' ' + user.apellidos}</td>
        <td>{user.id_servicio}</td>
        <td className="icon-action">
            <a href='#' onClick={(e) => this.props.openModifyForm(e, user)} >
                <i className="icon-pencil" id="tip-action-2" />
            </a>
          <UncontrolledTooltip placement="top" target="tip-action-2">
            Modificar
          </UncontrolledTooltip>
        </td>
        <td className="icon-action">
            <a href='#' onClick={(e) => this.props.openModifyForm(e, user.id_usuario)} >
                <i className="icon-key" id="tip-action-3" />
            </a>
          <UncontrolledTooltip placement="top" target="tip-action-3">
            Blanquear clave
          </UncontrolledTooltip>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <DefaultLayout>
        <Row>
          <Col>
            <Card>
              <CardHeader className="text-dark">
                <CardTitle className="mb-0">
                  Usuarios
                  <div className="card-header-actions">
                    <Button
                      color="primary"
                      className="btn-square"
                      onClick={this.props.goToHighUserForm}
                    >
                      <i className="icon-plus" />&nbsp;Dar de alta
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardBody className="text-dark">
                {this.renderLoading()}
                {!this.props.isLoading ? this.renderTable() : null}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </DefaultLayout>
    );
  }
}

export default AdminUsers;