import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Dimensions} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import Input from '../../components/CustomInput';
import Button from '../../components/CustomButton';
import PageHeader from '../../components/PageHeader';

import {identityRequest} from '../../store/modules/survey/actions';

import {Container, Wrapper, ButtonWrapper} from './styles';

const SurveyIdentity = ({navigation}) => {
  const dispatch = useDispatch();
  const dim = Dimensions.get('screen');

  const [name, setName] = useState({value: '', isValid: false});
  const [email, setEmail] = useState({value: '', isValid: false});

  const contentStyle = {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
  };

  const handleSubmit = useCallback(() => {
    dispatch(identityRequest(name, email));
    navigation.navigate('SurveyDetails', {
      name: name,
      email: email,
    });
  }, [name, email, dispatch, navigation]);

  return (
    <>
      <KeyboardAwareScrollView
        bounces={false}
        resetScrollToCoords={{x: 0, y: 0}}
        enableOnAndroid
        enableAutomaticScroll
        keyboardShouldPersistTaps={'always'}
        extraHeight={dim.height - dim.height * 0.45}
        contentContainerStyle={contentStyle}
        scrollEnabled={true}>
        <Wrapper>
          <PageHeader title="IDENTITY" />
        </Wrapper>
        <Container>
          <Input
            label="Name"
            placeholder="Type your name"
            onChangeText={(name) => setName(name)}
            value={name.value}
          />
          <Input
            label="E-mail"
            placeholder="Type your e-mail"
            onChangeText={(email) => setEmail(email)}
            value={email.value}
          />
        </Container>
        <ButtonWrapper>
          <Button
            buttonTitle="Previous"
            onPress={() => navigation.navigate('Home')}
          />
          <Button buttonTitle="Next" onPress={handleSubmit} />
        </ButtonWrapper>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SurveyIdentity;
