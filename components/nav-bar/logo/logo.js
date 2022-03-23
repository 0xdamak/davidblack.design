import Link from "next/dist/client/link";
import Image from "../../../public/images/logo.png";
import classes from "./logo.module.scss";

export default function Logo() {
  return (
    <div className={classes.wrapper}>
      <Link href="/">
        <a>
          <img src={Image.src} alt="David Black - Logo" />
        </a>
      </Link>
    </div>
  );
}
