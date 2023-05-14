import { HandleHooks, Window } from "../hooks/HandleHooks";
import { ChildrenComponent } from "./Children";

const MyButton = ({ name }) => {
  return (
    <button
      style={{
        backgroundColor: "green",
        color: "white",
      }}
    >
      {name}
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <MyButton name={"Navbar button"} />
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <MyButton name={"Footer button"} />
    </footer>
  );
};

export const MyComponent = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Footer /> */}
      {/* <ChildrenComponent>
        <div>
          <h2>This is a Children component</h2>
          <MyButton name={"Children button"} />
        </div>
        <div>
          <p>I'm a paragraph</p>
        </div>
      </ChildrenComponent> */}

      {/* <HandleHooks /> */}
      <Window />
    </>
  );
};
