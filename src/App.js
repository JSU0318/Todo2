import "./App.css";
import { useState } from "react";

function User(props) {
  return <div className="square-style">{props.user.title}</div>;
}

function App() {
  const [users, setUsers] = useState([{ id: 1, title: "react를 배워봅시다" }]);

  const [title, setTitle] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
    };

    setUsers([...users, newUser]);
  };
  return (
    <div className="App">
      <div className="title-content">
        <div className="title">
          <input
            className="input-box"
            value={title}
            placeholder=""
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button onClick={addUserHandler} padding>
          추가하기
        </button>
      </div>
      <span className="h4">
        <h4>Todo List</h4>
      </span>
      <ul className="app-style">
        {users.map((user) => {
          return <User user={user} key={user.id}></User>;
        })}
      </ul>
    </div>
  );
}

export default App;
