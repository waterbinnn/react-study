// 하위컴포넌트로 만들어서 Children 으로 쓸 것

function Card(props) {
  const { title, backgroundColor, children } = props;
  return (
    //범용 컴포넌트 부분
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 9,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >

      {/* specialization 한 부분 */}
      {title && <h1>{title}</h1>}

      {/* containment 한 부분 */}
      {children}

    </div>
  );
}

export default Card;
