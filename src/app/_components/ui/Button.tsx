import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'active';

interface ButtonProps {
  children: React.ReactNode;
  variant: ButtonVariant;
  onClick?: () => void;
  asLink?: string;
  type?: 'button' | 'submit';
}

export default function Button({ children, variant, onClick, asLink, type = 'button' }: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (asLink) {
    return <a href={asLink} className={className}>{children}</a>;
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}