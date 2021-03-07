import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'challenge',
      storage: AsyncStorage,
      whiteList: ['survey'],
    },
    reducers,
  );

  return persistedReducer;
};
