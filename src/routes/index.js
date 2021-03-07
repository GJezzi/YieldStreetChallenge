import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import SurveyIdentity from '../pages/SurveyIdentity';
import SurveyDetails from '../pages/SurveyDetails';
import SurveyFavorites from '../pages/SurveyFavorites';
import SurveySummary from '../pages/SurveySummary';

const Survey = createStackNavigator();

const SurveyRoutes = () => {
  return (
    <Survey.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#312e38',
        },
      }}>
      <Survey.Screen name="Home" component={Home} />
      <Survey.Screen name="SurveyIdentity" component={SurveyIdentity} />
      <Survey.Screen name="SurveyDetails" component={SurveyDetails} />
      <Survey.Screen name="SurveyFavorites" component={SurveyFavorites} />
      <Survey.Screen name="SurveySummary" component={SurveySummary} />
    </Survey.Navigator>
  );
};

export default SurveyRoutes;
