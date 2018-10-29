export const initialState = { onClick: false, show: false };

function reducer(state, action) {
  switch (action.type) {
    case 'CLICKONCARD':
      return { onClick: !state.onClick, show: false };
    case 'ONCLICKSHOW':
      return { ...state, show: !state.show };
    default:
      return '';
  }
}

export { reducer };
