//복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 만들고,
//만든 컴포넌트를 조합해서 새로운 컴포넌트를 만들자 !

import React, { useState } from "react";

//children props (개발자가 아닌 리액트가 넣어주는 기능)
function FancyBorder(props) {
  return (
    <div className="{'FancyBorder FancyBorder-' + props.color">
      {props.children}
    </div>
  );
}

//specialization 전문화, 구체화

//범용적으로 사용할 수 있는 컴포넌트를 만들고
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog- message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

//인사말로 구체화 한 컴포넌트
function WelcomeDialog(props) {
  return (
    <Dialog
      title="어서오세요"
      message="우리 사이트에 방문하신 것을 환영합니다"
    ></Dialog>
  );
}

//Containment & Specialization 을 같이 쓰는 경우
function SignUpDialog(props) {
  const [nickname, setNickname] = useState("");

  const handleChange = (event) => {
    setNickname(event.target.value);
  };
  const handleSignUp = () => {
    alert(`어서오세요, ${nickname}님!`);
  };

  return (
    <Dialog title="니쥬" message="닉넹임을 입력해주세요">
      {/* props.children 으로 받음 */}
      <input value={nickname} onChange={handleChange} />
      <button onClick={handleSignUp}>sign in</button>
    </Dialog>
  );
}
