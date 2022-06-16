import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링마다 매번 실행됨 - 렌더링 이후
  useEffect(() => {
    console.log("렌더링!");
  });
  // 마운트 + count 변화할 때마다 실행
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  // 마운트 + name 변화할 때마다 실행
  useEffect(() => {
    console.log("name 변화");
  }, [name]);

  useEffect(() => {
    console.log("마운팅");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name : {name}</span>
    </div>
  );
}

export default App;
