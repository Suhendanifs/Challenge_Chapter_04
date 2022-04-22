/* eslint-disable prettier/prettier */
const initialState = {
  buku: [{}],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BUKU':
      return {
        ...state,
        buku: action.payload,
      };

    default:
      return state;
  }
};

export default HomeReducer;
