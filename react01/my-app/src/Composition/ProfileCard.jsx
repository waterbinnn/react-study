import Card from "./Card";

// Card 컴포넌트가 사용자의 프로필을 나타내는 ProfileCard 가 된다. 

function ProfileCard(props) {
  return (
    //Card 컴포넌트로 설정값 넣어줌  
    <Card title="Susu" backgroundColor="#4ea04e">
      {/* 이 p태그들이 children  */}
      <p>안녕</p>
      <p>리액트 컴포넌트 어렵다</p>
    </Card>
  );
}

export default ProfileCard;
