import NewTodo from "./NewTodo";

export default function Header() {
  return (
    <header className="header">
      <h1>
        todo
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          alt=""
          width="70px"
          height="100%"
        />
      </h1>
      <NewTodo></NewTodo>
    </header>
  );
}
