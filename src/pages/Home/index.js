import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native-paper';

import Button from '../../components/CustomButton';

import {Container, TitleView, Title} from './styles';

const Home = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const hideModal = () => setVisible(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 2000);
  }, []);

  const modalStyle = {
    backgroundColor: '#232129',
    padding: 40,
  };

  const onSubmit = () => {
    navigation.navigate('SurveyIdentity');
  };

  return (
    <>
      <Container>
        <TitleView>
          <Title>YieldStreet Challenge</Title>
        </TitleView>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={modalStyle}>
          <Button buttonTitle="TAKE THE SURVEY" onPress={() => onSubmit()} />
        </Modal>
      </Container>
    </>
  );
};

export default Home;
