import { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업");
  return ["수콩", "콩콩"];
};

function App() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state:", prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
}

export default App;
