import classes from"./notFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={classes.not_found_container}>
      <h1 className={classes.not_found_title}>404</h1>
      <p className={classes.not_found_message}>Oops! This page doesn’t exist.</p>
      <Link to="/" className={classes.not_found_link}>
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;