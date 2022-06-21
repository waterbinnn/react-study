import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

function MainPage(props) {
  return (
    <Wrapper>
      <Title>안녕 리액트 안녕 스타일 컴포넌트</Title>
    </Wrapper>
  );
}

const Button = styled.button`
color : ${(props) => (props.dark ? "white" : "black")}'
background : ${(props) => (props.dark ? "black" : "white")}
border :  1px solid black
`;

//버튼을 확장하고 싶을때
const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

function Sample(props) {
  return (
    <div>
      <Button>Normal</Button>
      <Button dark>Dark</Button>
      <RoundedButton>Rounded</RoundedButton>
    </div>
  );
}
