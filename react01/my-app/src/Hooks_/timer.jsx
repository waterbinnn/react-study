import { useState, useEffect } from "react";
import Timer from "../components/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {/* showTimer 이 true 일때만 Timer 보여주기 */}
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
