import { useState } from "react";
import "./App.css";

function App() {
  const [mission, setMission] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const OnSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setMission([...mission, { id: crypto.randomUUID(), title: inputValue }]);
    } else return;
    setInputValue("");
  };
  console.log(mission);
  const ToggleId = (id, completed) => {
    setMission((currentmission) => {
      return currentmission.map((item) => {
        if (item.id === id) {
          return { ...item, completed };
        }
        return item;
      });
    });
  };
  const Delete = (id) => {
    setMission((miss) => {
      return miss.filter((deleted) => deleted.id !== id);
    });
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <form>
        <input
          type="text"
          placeholder="Add Your Missions..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={OnSubmit}>Add</button>
      </form>
      <div className="missions">
        <ul>
          {mission.map((miss) => {
            return (
              <li key={miss.id}>
                <input
                  type="checkbox"
                  onChange={(e) => ToggleId(miss.id, miss.completed)}
                  checked={miss.completed}
                />
                <label>{miss.title}</label>
                <button onClick={() => Delete(miss.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="done"></div>
    </div>
  );
}

export default App;
