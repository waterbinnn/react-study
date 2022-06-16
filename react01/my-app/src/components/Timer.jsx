import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중");
    }, 1000);
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔창을 봐주십셔</span>
    </div>
  );
};

export default Timer;
