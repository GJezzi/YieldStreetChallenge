export const identityRequest = (name, email) => {
  return {
    type: '@survey/IDENTITY_REQUEST',
    payload: {name, email},
  };
};

export const detailsRequest = (birthdate, gender) => {
  return {
    type: '@survey/DETAILS_REQUEST',
    payload: {birthdate, gender},
  };
};

export const favoriteRequest = (book, colors) => {
  return {
    type: '@survey/FAVORITES_REQUEST',
    payload: {book, colors},
  };
};

export const summaryRequest = (
  name,
  email,
  birthdate,
  gender,
  book,
  colors,
) => {
  return {
    type: '@survey/SUMMARY_REQUEST',
    payload: {name, email, birthdate, gender, book, colors},
  };
};
