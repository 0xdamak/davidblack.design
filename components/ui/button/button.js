import Link from "next/link";
import classes from "./button.module.scss";

export default function Button({ children, className, href, onclick }) {
  if (href) {
    return (
      <Link href={href}>
        <a className={`${classes.button} ${className}`}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
}
