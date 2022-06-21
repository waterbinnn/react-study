import React, { useState } from "react";

export default function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("women");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`Your name is ${name} , gender is ${gender}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        Gender
        <select onClick={handleChangeGender}>
          <option value="women">women</option>
          <option value="man">man</option>
        </select>
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
