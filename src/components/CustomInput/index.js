import React, {useState, useEffect, useRef} from 'react';
import {TextInput} from 'react-native-paper';

import PropTypes from 'prop-types';

const CustomInput = ({
  theme,
  label,
  disabled,
  value,
  focus,
  onChangeText,
  placeholder,
  mode,
  keyboardType,
  rules,
  error,
  onError,
  externalError,
  errorMessage,
  selectionColor,
  underlineColor,
  backgroundColor,
  placeholderTextColor,
}) => {
  const inputEl = useRef(null);

  const [validationError, setValidationError] = useState('');
  const [blurredOnce, setBlurredOnce] = useState(false);

  const validateInput = (inputValue) => {
    let errorText = '';

    if (rules.length) {
      rules.forEach((rule) => {
        let currentRule = rule(inputValue, errorMessage);
        if (!currentRule.isValid && errorText === '') {
          errorText = currentRule.errorText;
        }
      });
    }
    return errorText;
  };

  const inputChanged = (inputValue) => {
    const error = validateInput(inputValue);
    if (blurredOnce) {
      setValidationError(error);
    }

    onChangeText({value: inputValue, isValid: !error});
  };

  useEffect(() => {
    if (value) {
      validateInput();
    }

    if (focus) {
      setTimeout(() => {
        inputEl.current.focus();
      }, 200);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (blurredOnce) {
      inputChanged(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blurredOnce, value]);

  return (
    <TextInput
      rules={rules}
      theme={theme}
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={inputChanged}
      onBlur={() => {
        setBlurredOnce(true);
      }}
      disabled={disabled}
      mode={mode}
      keyboardType={keyboardType}
      onError={onError}
      error={externalError || validationError}
      selectionColor={selectionColor}
      underlineColor={underlineColor}
      backgroundColor={backgroundColor}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

CustomInput.propTypes = {
  rules: PropTypes.arrayOf(PropTypes.func),
  theme: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  disabled: PropTypes.bool,
  mode: PropTypes.string,
  keyboardType: PropTypes.string,
  onError: PropTypes.func,
  error: PropTypes.string,
  selectionColor: PropTypes.string,
  underlineColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeholderTextColor: PropTypes.string,
};

CustomInput.defaultProps = {
  rules: [],
  theme: {colors: {primary: '#FF9000', text: '#666360'}},
  label: '',
  placeholder: '',
  value: '',
  onChangeText: () => {},
  disabled: false,
  mode: 'outlined',
  keyboardType: 'default',
  onError: () => {},
  error: '',
  selectionColor: '#666360',
  underlineColor: '#FF9000',
  backgroundColor: '#232129',
  placeholderTextColor: '#666360',
};

export default CustomInput;
