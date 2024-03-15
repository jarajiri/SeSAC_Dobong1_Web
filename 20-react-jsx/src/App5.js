import "./App.css";
export default () => {
  const title = "Hello React";
  return (
    <div className="loginForm">
      <div className="title">{title}</div>
      <div>
        아이디 : <input type="text"></input>
      </div>
      <div>
        비밀번호 : <input type="password"></input>
      </div>
    </div>
  );
};
