import Wrapper from "../ui/wrapper";
import NavBar from "../nav-bar";
import classes from "./layout.module.scss";

export default function layout({ children }) {
  return (
    <div className={classes.container}>
      <Wrapper>
        <NavBar />
        {children}
      </Wrapper>
    </div>
  );
}
