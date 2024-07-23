import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1>Say hello to ReactJS</h1>
      <p>
        <span>You will learn how to use </span><br />
        <span>the most popular frontend library, </span><br />
        <span>and become a super Ninja developer</span>
      </p>
      <button className="button">Awesome</button>
    </div>
  );
}

export default Header;
