import Blur from "../ui/blur";
import Button from "../ui/button";
import classes from "./hero.module.scss";

export default function Hero() {
  return (
    <>
      <Blur />
      <div className={classes.wrapper}>
        <h1>Hi, I’m David</h1>
        <p>
          I feel a strong sense of fulfillment when I see problems turn into
          meaninful digital experiences in the hands of people. I love working
          for, or with businesses that put end users at the fore-front of their
          design decisions.
        </p>
        <Button href="/" className={classes.button}>
          Download Resume
        </Button>
      </div>
    </>
  );
}
