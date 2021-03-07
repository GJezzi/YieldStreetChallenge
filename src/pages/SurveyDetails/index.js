import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Dimensions} from 'react-native';
import moment from 'moment';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {RadioButton} from 'react-native-paper';
import DatePicker from '@react-native-community/datetimepicker';

import Button from '../../components/CustomButton';
import PageHeader from '../../components/PageHeader';

import {detailsRequest} from '../../store/modules/survey/actions';

import {Container, Wrapper, ButtonWrapper, Calendar, Title} from './styles';

const SurveyDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const dim = Dimensions.get('screen');
  const data = route.params;

  const [gender, setGender] = useState({value: '', isValid: false});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const contentStyle = {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
  };

  const handleDateChange = useCallback((event, date) => {
    if (date) {
      setSelectedDate(date);
    }
  }, []);

  const handleSubmit = useCallback(() => {
    dispatch(detailsRequest(selectedDate, gender));
    navigation.navigate('SurveyFavorites', {
      data,
      date: formatDate(selectedDate),
      gender: gender,
    });
  }, [selectedDate, gender, data, navigation, dispatch]);

  const formatDate = (date) => {
    const formattedDate = moment(date).format('MM/DD/YYYY');
    return formattedDate;
  };

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
          <PageHeader title="DETAILS" />
        </Wrapper>
        <Container>
          <Calendar>
            <Title>Pick your birth date</Title>
            <DatePicker
              value={selectedDate}
              mode="date"
              onChange={handleDateChange}
            />
          </Calendar>

          <RadioButton.Group
            onValueChange={(newValue) => setGender(newValue)}
            value={gender}>
            <RadioButton.Item
              label="Male"
              value="Male"
              labelStyle={{color: 'white'}}
            />
            <RadioButton.Item
              label="Female"
              value="Female"
              labelStyle={{color: 'white'}}
            />
          </RadioButton.Group>
        </Container>
        <ButtonWrapper>
          <Button
            buttonTitle="Previous"
            onPress={() => navigation.navigate('SurveyIdentity')}
          />
          <Button buttonTitle="Next" onPress={handleSubmit} />
        </ButtonWrapper>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SurveyDetails;
