//Calculator 에 입력할 컴포넌트

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

export default function temperatureInput(props) {
  //사용자가 온도값을 변경할때 마다 props에 있는 onTemperatureChange 함수를 통해 변경된 온도값이 상위 컴포넌트로 전달된다.
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>온도를 입력하세요(단위:{scaleNames[props.scale]}) </legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}
