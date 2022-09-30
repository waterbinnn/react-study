import React, { useState } from "react";

const heavywork = () => {
  return ["이수빈"];
};

function Clock(props) {
  const [time, setTime] = useState(1);
  const [names, setNames] = useState(() => {
    return heavywork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log(prevState);
      return [input, ...prevState];
    });
  };

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  return (
    <div>
      <h1>Hi React </h1>
      <h2>현재시간 : {time}</h2>
      <button onClick={handleClick}>click</button>
      <br />
      <hr />
      <br />

      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>입력</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
}

export default Clock;
