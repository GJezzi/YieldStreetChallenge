import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Dimensions} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import SelectMultiple from 'react-native-select-multiple';

import required from '../../validators/required';
import Input from '../../components/CustomInput';
import Button from '../../components/CustomButton';
import PageHeader from '../../components/PageHeader';

import {favoriteRequest} from '../../store/modules/survey/actions';

import {Container, ButtonWrapper, ColorsWrapper, Wrapper} from './styles';

const SurveyFavorites = ({navigation, route}) => {
  const dispatch = useDispatch();
  const dim = Dimensions.get('screen');
  const data = route.params;

  const [book, setBook] = useState({
    value: '',
    isValid: false,
  });
  const [selectedColor, setSelectedColor] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const contentStyle = {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
  };

  const handleSubmit = useCallback(() => {
    dispatch(favoriteRequest(book, selectedColor));
    navigation.navigate('SurveySummary', {
      data,
      book: book,
      colors: selectedColor,
    });
  }, [book, selectedColor, dispatch, data, navigation]);

  const colors = [
    {value: 'blue', label: 'Blue'},
    {value: 'yellow', label: 'Yellow'},
    {value: 'red', label: 'Red'},
    {value: 'gray', label: 'Gray'},
    {value: 'pink', label: 'Pink'},
    {value: 'orange', label: 'Orange'},
    {value: 'purple', label: 'Purple'},
    {value: 'green', label: 'Green'},
    {value: 'White', label: 'White'},
  ];

  const updateColor = (selectedColor) => {
    setSelectedColor(selectedColor);
    setIsSelected(true);
  };

  const updateBook = (input) => {
    setBook(input);
  };

  const formIsValid = () => {
    return book.isValid && isSelected === true;
  };

  return (
    <>
      <KeyboardAwareScrollView
        bounces={false}
        enableOnAndroid
        enableAutomaticScroll
        keyboardShouldPersistTaps={'always'}
        extraHeight={dim.height - dim.height * 0.45}
        contentContainerStyle={contentStyle}
        scrollEnabled={true}>
        <Wrapper>
          <PageHeader title="FAVORITES" />
        </Wrapper>
        <Container>
          <Input
            rules={[required]}
            label="Favorite Book"
            placeholder="Type your favorite book"
            onChangeText={(value) => updateBook(value)}
            value={book.value}
            keyboardType="default"
          />
          <ColorsWrapper>
            <SelectMultiple
              rules={[required]}
              items={colors}
              selectedItems={selectedColor}
              onSelectionsChange={(selectedColor) => updateColor(selectedColor)}
            />
          </ColorsWrapper>
        </Container>
        <ButtonWrapper>
          <Button
            buttonTitle="Previous"
            onPress={() => navigation.navigate('SurveyDetails')}
          />
          <Button
            buttonTitle="Next"
            disabled={!formIsValid()}
            onPress={handleSubmit}
          />
        </ButtonWrapper>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SurveyFavorites;
