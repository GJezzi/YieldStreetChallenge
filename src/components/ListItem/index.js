import React from 'react';

import {Container, Title} from './styles';

const ListItem = ({data}) => {
  return (
    <Container>
      <Title>{data.label}</Title>
    </Container>
  );
};

export default ListItem;
