import lodashIsEmpty from 'lodash/isEmpty';

const required = (value, errorMessage) => {
  let errorText = errorMessage || 'This field is required';
  const errorObject = {
    isValid: false,
    errorText: errorText,
  };

  if (lodashIsEmpty(value)) {
    return errorObject;
  }

  return {
    isValid: true,
  };
};

export default required;
