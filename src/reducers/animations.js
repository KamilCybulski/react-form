const initialState = {
  backgroundOverlayVisible: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HIDE_BACKGROUND_OVERLAY':
      return {
        ...state,
        backgroundOverlayVisible: false,
      };

    default:
      return state;
  }
};

export default reducer;
