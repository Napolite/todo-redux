export default (state, action) => {
  switch (action.type) {
    case "OPEN_TEXTBOX":
      return { ...state, textboxIsOpen: action.textboxIsOpen };
    case "ADD_TODO":
      return { ...state, todo: [...state.todo, action.text] };
    default:
      return state;
  }
};
