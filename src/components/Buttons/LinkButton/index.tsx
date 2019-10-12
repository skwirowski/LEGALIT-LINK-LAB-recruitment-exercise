import React from 'react';
import { Link } from 'react-router-dom';
import './css/styles.css';

interface ButtonProps {
  content: string,
  route: string,
  customCssClass: string,
}

const Button: React.FC<ButtonProps> = ({ content, route, customCssClass }) => {

  return (
    <Link
      className={`link-button${customCssClass ? ` ${customCssClass}` : ''}`}
      to={route}
    >
      {content}
    </Link>
  )
}

export default Button;
