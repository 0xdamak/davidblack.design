import Logo from "./logo";
import NavLinks from "./nav-links";
import Socials from "./socials";
import classes from "./nav-bar.module.scss";

export default function NavBar() {
  return (
    <div className={classes.wrapper}>
      <Logo />
      <NavLinks />
      <Socials />
    </div>
  );
}
