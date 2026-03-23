import styles from "./Button.module.css";

const Button = ({ children, className = "", type = "button", href, ...rest }) => {
  const classes = [styles.btn, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;