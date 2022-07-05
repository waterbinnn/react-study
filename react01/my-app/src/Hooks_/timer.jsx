import { useState, useEffect } from "react";

function Time() {
  const [showTimer, setShowTimer] = useState(false);

  const Timer = (props) => {
    useEffect(() => {
      const timer = setInterval(() => {
        console.log("타이머 실행중");
      }, 1000);

      return () => {
        clearInterval(timer);
        console.log("end");
      };
    }, []);
  };

  return (
    <div>
      {/* showTimer 이 true 일때만 Timer 보여주기 */}
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default Time;
