const initialState = {
  email: '',
  password: '',
  name: '',
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGIST_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_REGIST_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    case 'SET_REGIST_NAME':
      return {
        ...state,
        name: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default RegisterReducer;
