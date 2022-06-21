import React, { useState } from "react";

export default function Reservation(props) {
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleSubmit = (event) => {
    alert(`아침식사여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아침 드셨나요?
        <input
          type="checkbox"
          checked={haveBreakfast}
          onChange={(event) => {
            setHaveBreakfast(event.target.checked);
          }}
        />
      </label>
      <br />
      <label>
        방문객 수는?
        <input
          type="number"
          value={numberOfGuest}
          onChange={(event) => {
            setNumberOfGuest(event.target.value);
          }}
        />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
