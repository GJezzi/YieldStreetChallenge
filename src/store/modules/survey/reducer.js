import produce from 'immer';

const INITIAL_STATE = {
  name: '',
  email: '',
};

const survey = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@survey/IDENTITY_REQUEST':
      return produce(state, (draft) => {
        draft.name = action.payload.name;
        draft.email = action.payload.email;
      });
    case '@survey/DETAILS_REQUEST':
      return produce(state, (draft) => {
        draft.birthdate = action.payload.birthdate;
        draft.gender = action.payload.gender;
      });
    case '@survey/IDENTITY_REQUEST':
      return produce(state, (draft) => {
        draft.book = action.payload.book;
        draft.colors = action.payload.colors;
      });
    default:
      return state;
  }
};

export default survey;
