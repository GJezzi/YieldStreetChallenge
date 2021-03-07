import React from 'react';
import PropTypes from 'prop-types';
import {Margin} from './styles';
import {View, Text} from 'react-native';
const PageHeader = ({title, subtitle, color, fontSize}) => {
  return (
    <>
      <View>
        <Text style={{color: 'white', fontSize: 24}}>{title}</Text>
        <Margin />
        {subtitle && <Text color={color}>{subtitle}</Text>}
      </View>
    </>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  color: PropTypes.string,
};

PageHeader.defaultProps = {
  subtitle: false,
  color: '',
};

export default PageHeader;
