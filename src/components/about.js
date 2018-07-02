import React from 'react';
import { Grid, Col, Image, PageHeader, Jumbotron, Table } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

const About = () => {
  return(
    <ScrollableAnchor id={'about'}>
      <div>
        <Grid>
          <PageHeader>a few words about me</PageHeader>
        </Grid>
        <hr/>
        <Grid>
          <Col xs={4} sm={2} md={2} lg={2} className="image-container" xsHidden>
            <Image src="../../style/img/kerenfabrisrotelli.JPG" thumbnail responsive />
          </Col>
          <Col xs={12} sm={10} md={10} lg={10}>
            <Jumbotron>
              <h1>keren fabris-rotelli</h1>
              <Col className="image-container" xs={5} smHidden mdHidden lgHidden>
                <Image src="../../style/img/kerenfabrisrotelli.JPG" rounded responsive />
              </Col>
              <p>
                i am a web developer with 7 years experience with open source php cms's, nodejs, and front end frameworks,
                working for agencies in the united kingdom, denmark, australia, and south africa.
              </p>
            </Jumbotron>
          </Col>
        </Grid>
        <Grid>
          <Col lg={12}>
            <Table responsive className="experience-table">
              <thead>
                <tr>
                  <th colSpan="4">What I Do</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>nodejs</td>
                  <td>drupal</td>
                  <td>wordpress</td>
                  <td>php</td>
                </tr>
                <tr>
                  <td>markojs</td>
                  <td>react</td>
                  <td>react bootstrap</td>
                  <td>redux</td>
                </tr>
              <tr>
                <td>mysql</td>
                <td>postgres</td>
                <td>xml</td>
                <td>json</td>
              </tr>
              <tr>
                <td>linux servers</td>
                <td>heroku</td>
                <td colSpan="2">apache</td>
              </tr>
              <tr>
                <td>circleci</td>
                <td>jenkins</td>
                <td>git</td>
                <td>svn</td>
              </tr>
              <tr>
                <td>jira</td>
                <td>trello</td>
                <td colSpan="2">basecamp</td>
              </tr>
              <tr>
                <td>agile</td>
                <td>kanban</td>
                <td>xampp</td>
                <td>mamp</td>
              </tr>
              </tbody>
            </Table>
          </Col>
        </Grid>
      </div>
    </ScrollableAnchor>
  );
}

export default About;
