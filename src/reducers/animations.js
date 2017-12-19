const initialState = {
  showBackgroundOverlay: false,
  showForm: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_BACKGROUND_OVERLAY':
      return {
        ...state,
        showBackgroundOverlay: true,
      };

    case 'SHOW_FORM':
      return {
        ...state,
        showForm: true,
      };

    default:
      return state;
  }
};

export default reducer;
