import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';
import { getData } from '../actions';
import Ratings from './toolbarContainer';
import List from './listContainer';
import Loader from '../components/loader';
import Average from './averageContainer';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div>
        <Loader />
        <Grid>
          <Row className="toolbar">
            <Col xs={4}>
              <Ratings />
            </Col>
            <Col xs={4}>
              <Average />
            </Col>
          </Row>
          <Row>
            <List />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  null,
  { getData }
)(App)
