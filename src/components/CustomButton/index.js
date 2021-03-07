import React from 'react';
import {Button} from 'react-native-paper';

import PropTypes from 'prop-types';

const CustomButton = ({buttonTitle, onPress, disabled, color}) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      disabled={disabled}
      color={color}>
      {buttonTitle}
    </Button>
  );
};

CustomButton.propTypes = {
  buttonTitle: PropTypes.string,
  color: PropTypes.string,
};

CustomButton.defaultProps = {
  color: '#FF9000',
};
export default CustomButton;
