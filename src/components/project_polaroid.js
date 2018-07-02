import React, { Component } from 'react';
import { Col, Modal } from 'react-bootstrap';

export default class ProjectPolaroid extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return(
      <div className="project-item">
        <Col xs={6} sm={3} md={3} lg={3}>
          <div className="polaroid shadow" onClick={this.handleShow.bind(this)}>
            <img src={this.props.img} alt={this.props.title} />
            <hr/>
            <h4 className={this.props.titleClass}>{this.props.title}</h4>
          </div>
        </Col>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this)} bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title} ({this.props.type})</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}