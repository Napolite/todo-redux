export const openTextBox = (isOpen) => ({
  type: "OPEN_TEXTBOX",
  textboxIsOpen: isOpen,
});

export const addTodo = (text) => ({
  type: "ADD_TODO",
  text,
});
