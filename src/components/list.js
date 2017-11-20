import React from 'react';
import { Col } from 'react-bootstrap';
import { ListItem } from './list-item';

export const List = ({ payload }) => (
  payload.map(item => {
    return (
      <Col
        key={item.id}
        xs={6}
        md={4}
      >
        <ListItem item={item} />
      </Col>
    )
  })
);