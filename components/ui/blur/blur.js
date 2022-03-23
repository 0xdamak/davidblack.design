import classes from "./blur.module.scss";

export default function Blur({ className }) {
  return (
    <div className={`${classes.wrapper} ${className}`}>
      <div className={classes.red}>
        <div className={classes.ellipse}></div>
        <div className={classes.ellipse}></div>
        <div className={classes.ellipse}></div>
      </div>
      <div className={classes.blue}>
        <div className={classes.ellipse}></div>
        <div className={classes.ellipse}></div>
        <div className={classes.ellipse}></div>
      </div>
    </div>
  );
}
