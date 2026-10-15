import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
};

export default function Button({
  to,
  href,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) {
  const classes = `${VARIANTS[variant] || VARIANTS.primary} ${className}`;
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={props.type || 'button'} className={classes} {...props}>
      {content}
    </button>
  );
}
