import React from 'react';
import { Grid, Col, PageHeader } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

const Contact = () => {
  return(
    <ScrollableAnchor id={'contact'}>
      <div>
        <Grid>
          <PageHeader>a few ways to contact me</PageHeader>
        </Grid>
        <hr/>
        <Grid>
          <Col className="text-detail-panel contact-list">
            <h2>Email</h2><a href="mailto:kann.rotelli@gmail.com">kann.rotelli@gmail.com</a>
          </Col>
          <Col className="text-detail-panel contact-list">
            <h2>Linkedin</h2><a href="https://www.linkedin.com/in/kerenfabrisrotelli/" target="_blank" rel="noopener noreferrer">view profile</a>
          </Col>
        </Grid>
      </div>
    </ScrollableAnchor>
  )
}

export default Contact;