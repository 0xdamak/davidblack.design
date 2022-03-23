import Link from "next/link";
import {
  LinkedInIcon,
  MediumIcon,
  TwitterIcon,
} from "../../../public/svg/icons";
import classes from "./socials.module.scss";

export default function Socials() {
  return (
    <div className={classes.wrapper}>
      <Link href="/">
        <a>
          <LinkedInIcon />
        </a>
      </Link>
      <Link href="/">
        <a>
          <MediumIcon />
        </a>
      </Link>
      <Link href="/">
        <a>
          <TwitterIcon />
        </a>
      </Link>
    </div>
  );
}
