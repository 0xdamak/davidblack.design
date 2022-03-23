import Blur from "../ui/blur";
import classes from "./error.module.scss";

export default function Error() {
  return (
    <>
      <Blur />
      <div className={classes.wrapper}>
        <h1>Error 404!</h1>
        <p>
          Whew! So sorry you had to be here. Please check your network and try
          again.
        </p>
      </div>
    </>
  );
}
