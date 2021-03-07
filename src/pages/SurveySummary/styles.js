import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const dim = Dimensions.get('screen');

export const Container = styled.View`
  flex: 3;
  padding: 20px;
  justify-content: center;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  padding: 20px;
  width: ${dim.width - dim.width * 0.1}px;
  align-self: center;
`;

export const ColorsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 20},
})``;

export const ListContainer = styled.View``;
