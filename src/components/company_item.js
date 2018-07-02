import React, { Component } from 'react';
import { Col, Image, Glyphicon, Modal } from 'react-bootstrap';

export default class CompanyItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };
  }

  handleCompanyClose() {
    this.setState({ show: false });
  }

  handleCompanyShow() {
    this.setState({ show: true });
  }

  render() {
    return(
      <div className="col-lg-5ths col-xs-5ths company shadow">
        <Col onClick={this.handleCompanyShow.bind(this)}>
          <h1>{this.props.title}</h1>
          <div className="logo-image">
            <Image src={this.props.logo} width="150" />
          </div>
          <Glyphicon glyph="menu-down" />
        </Col>
        <Modal show={this.state.show} onHide={this.handleCompanyClose.bind(this)} bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}