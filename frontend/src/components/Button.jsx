import styles from "./Button.module.css";

const Button = ({ children, className = "", type = "button", ...rest }) => {
  const classes = [styles.btn, className].filter(Boolean).join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;