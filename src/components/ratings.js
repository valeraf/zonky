import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export class Ratings extends Component {
  render() {
    const { ratings, onClick } = this.props;
    return (
      ratings.length &&
      <ButtonToolbar>
        <ToggleButtonGroup onChange={onClick} type="checkbox" name="options">
          {
            ratings.map((rating, i) => <ToggleButton key={i} value={rating}>{rating}</ToggleButton>)
          }
        </ToggleButtonGroup>
      </ButtonToolbar>
    )
  }
}
