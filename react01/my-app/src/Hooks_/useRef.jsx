import { useState, useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`welcome ${inputRef.current.value}!`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="아이디를 입력하세요" />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;
