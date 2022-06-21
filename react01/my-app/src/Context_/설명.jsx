
import React, { useState, useContext } from "react";

function App(props) {
  return <Toolbar theme="dark" />;
}

function Toolbar(props) {
  //이 Toolbar 컴포넌트는 ThemeButton에 theme을 넘겨주기 위해서 'theme' props 를 가져와야만 한다.
  // 현재 이 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 매우 비효율적이고 직관적이지도 않다.
  return (
    <div>
      <Themebutton theme={props.theme} />
    </div>
  );
}

function Themebutton(props) {
  return <Button theme={props.theme} />;
}

//<---Context 를 사용해서 위와 동일한 기능 구현 --->//

//컨텐스트는 데이터를 매번 컴포넌트를 통해 전달할 필요 없이 컴포넌트 트리로 곧바로 전달하게 해준다.
//여기서는 현재 테마를 위한 컨텍스트를 생성하며, 기본값은 'light'이다.
const ThemeContext = React.createContext("light");

//Provider을 사용하여 하위 컴포넌트들에게 현재 테마 데이터를 전달한다.
// 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있다
//여기서는 현재 테마값으로 'dark' 를 전달하고 있다.
function App(props) {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

//이제 중간에 위치한 컴호넌트는 테마 데이터를 하위 컴포넌트로 전달할 필요가 없다.
function Toolbar(props) {
  return (
    <div>
      <Themebutton />
    </div>
  );
}

function ThemeButtons(props) {
  //리액트는 가장 가까운 상위 테마 Provider를 찾아서 해당되는 값을 사용한다.
  //만약 여기서 사용되는 Provider 가 없을 경우 기본값 (여기에서는 'light')을 사용한다. 
  //여기에서는 상위 Provider 가 있기 떄문에 현재 테마의 값은 'dark' 가 된다. 
  return (
    <ThemeContext.Consumer>
      {(value) => <Button theme={value} />}
    </ThemeContext.Consumer>
  );
}

//다른예시 
function Page(props){
  const user = props.user;

  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize}/>
    </Link>
  );

  //Page 컴포넌트는 PageLayout 컴포넌트를 렌더링 
  //이 때 props로 userLink 를 함께 전달 
  return <PageLayout userLink={userLink}/>;
}

{/* PageLayout 컴포넌트는 NavigationBar 컴포넌트를 렌더링 */}
<PageLayout userLink={...}/>

 {/* NavigationBar 컴포넌트틑 props로 전달받은 userLink element를 리턴 */}
<NavigationBar userLink={...}/>

// -- 하지만 이 방법들은 너무 상위 컴포넌트에 많은 걸 의존하게 되기도 하고, 하위 컴포넌트는 너무 유연해지기도 해서 
// 너무 많이 사용하는 것은 비추

// 하위 컴포넌트를 여러개의 변수로 나눠서 전달 하는 방법이 가장 많이 쓰이고 좋은 방법이다! 
// 하지만 하위 컴포넌트가 상위 컴포넌트와 통신해야 하는 경우 이 예시는 쓸 수 없고 context 를 써야한다.! 

function Page(props) {
  const user = props.user;

  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize}/>
      </Link>
    </NavigationBar>
  );
  const content = <Feed user={user}/>

  return(
    <PageLayout
    topBar={topBar}
    content={content}
    />
  )
}

//Provider 컴포넌트가 재렌더링 될 때마다 모든 하위 consumer 컴포넌트가 재렌더링 된다. 
function App(props) {
  return(
    <MyContext.Provider value={{something: 'something'}}>
      {/* value props 를 위한 생성 객체가 매번 새롭게 불려와서 계속 재랜더링  */}
    <Toolbar/>
    </MyContext.Provider>
  )
}

//위 코드는 State 를 사용하여 불필요한 재렌더링을 막을 수 있다. 
function App(props){
  const [value,setValue] = useState({something:'something'});

  return(
    <MyContext.Provider value = {value}>
      <Toolbar/>
    </MyContext.Provider>
  )
}

//context.Consumer  : context 의 데이터를 구독하는 컴포넌트 , 함수 컴포넌트에서 사용
function App(props){
//이렇게 감싸주면 자식으로 들어간 컨텍스트의 value를 받아서 리액트 노드로 return 
//이 때 함수로 전달되는 value는 provider의 value prop 과 동일 
//만약 상위 컴포넌트에 Provider가 없다면 이 value 값은 createContext를 호출할 때 넣는 값과 동일 
  <MyContext.Consumer> 
  {value => /**컨텍스트의 값에 따라서 컴포넌트들을 렌더링  */}
</MyContext.Consumer>
}

//리액트에서는 기본적으로 컴포넌트들을 children 으로 전달해주는데 이 children으로 컴포넌트 대신 함수로 사용하는 방법 
//1. children이라는 prop을 직접 선언하는 방식 
<Profile children={name => <p>이름: {name} </p>} />

//2. Profile component로 감싸서 children 으로 만드는 방식 
//  <Profile>{name => <p>이름: {name}</p>}</Profile> 


// Context.displayName - context provider 을 쓸때 같이 써주는 이름 역할, 리액트 개발자 도구에 적힘
const MyContext = React.createContext(/**some value */)
MyContext.displayName = 'MyDisplayName';
//개발자 도구에 "MyDisplayName.Provider" 로 표시됨
<MyContext.Provider/>
//개발자 도구에 "MyDisplayName.Consument" 로 표시됨
{/* <MyContext.Consumer/> */}



//useContext Hook()을 사용한 예시
function MyComponent(props) {
  const value = useContext(MyContext);

  return(
    // ...
  )
}