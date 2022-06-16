import { useState, useEffect } from "react";
import Timer from "./components/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {/* showTimer 이 true 일때만 Timer 보여주기 */}
      {showTimer && <Timer />}

      {/* showTimer이 true 면 false 혹은 그 반대로 바뀌게 toggle  */}
      {/* setShowTimer(!showTimer) 이걸통해 showTimer이 true 면 false 혹은 그 반대로 바뀌게 해줌 */}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
