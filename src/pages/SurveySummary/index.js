import React, {useState, useEffect} from 'react';

import Button from '../../components/CustomButton';
import Input from '../../components/CustomInput';
import ListItem from '../../components/ListItem';
import PageHeader from '../../components/PageHeader';

import {
  Container,
  ColorsList,
  ListContainer,
  ButtonWrapper,
  Wrapper,
} from './styles';

const SurveySummary = ({route}) => {
  const data = route.params;
  const color = data.colors;

  const [colors, setColors] = useState([]);

  useEffect(() => {
    function loadColors() {
      setColors(color);
    }
    loadColors();
  }, [color, data]);

  return (
    <>
      <Wrapper>
        <PageHeader title="SUMMARY" />
      </Wrapper>
      <Container>
        <Input placeholder={`${data.data.data.name.value}`} disabled />
        <Input placeholder={`${data.data.data.email.value}`} disabled />
        <Input placeholder={`${data.data.date}`} disabled />
        <Input placeholder={`${data.data.gender}`} disabled />
        <Input placeholder={`${data.book.value}`} disabled />

        <ListContainer>
          <ColorsList
            bounces={false}
            data={colors}
            key={colors}
            keyExtractor={(item) => String(item.label)}
            renderItem={({item}) => <ListItem data={item} />}
          />
        </ListContainer>
      </Container>
      <ButtonWrapper>
        <Button buttonTitle="Submit" onPress={() => {}} />
      </ButtonWrapper>
    </>
  );
};

export default SurveySummary;
