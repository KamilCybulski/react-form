const initialState = {
  backgroundOverlayVisible: true,
  formVisible: false,
  formAsideVisible: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HIDE_BACKGROUND_OVERLAY':
      return {
        ...state,
        backgroundOverlayVisible: false,
      };

    case 'SHOW_FORM':
      return {
        ...state,
        formVisible: true,
      };

    case 'SHOW_FORM_ASIDE':
      return {
        ...state,
        formAsideVisible: true,
      };

    default:
      return state;
  }
};

export default reducer;
