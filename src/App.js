import { useState } from "react";
import "./App.css";
import Todo from "./component/listComponent/todo";
import { store } from "./store";
import addIcon from "./assets/add-new-1439785-1214356.webp";
import { openTextBox, addTodo } from "./actions";

function App() {
  const [textItem, setText] = useState("");
  const openText = (text) => {
    return store.dispatch(openTextBox(text));
  };

  const addItem = () => {
    return store.dispatch(addTodo(textItem));
  };

  const handleTextChange = (e) => setText(e.target.value);
  return (
    <div className="todo">
      {store.getState().todo.length === 0 ? (
        <div className="nothing-here">NOTHING HERE!</div>
      ) : (
        store.getState().todo.map((t) => <Todo item={t} />)
      )}
      {store.getState().textboxIsOpen === true ? (
        <>
          <input
            className="input-box"
            value={textItem}
            onChange={handleTextChange}
          />
          <span className="button-span">
            <button onClick={addItem} className="close-button">
              submit
            </button>
            <button onClick={() => openText(false)} className="close-button">
              close
            </button>
          </span>
        </>
      ) : (
        <button onClick={() => openText(true)} className="add-button">
          <img src={addIcon} />
        </button>
      )}
    </div>
  );
}

export default App;
