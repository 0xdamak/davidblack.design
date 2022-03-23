import Link from "next/link";
import classes from "./nav-links.module.scss";

export default function NavLinks() {
  return (
    <div className={classes.wrapper}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Download Resume</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
