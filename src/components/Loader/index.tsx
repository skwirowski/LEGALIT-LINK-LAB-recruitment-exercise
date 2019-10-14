import React from 'react';
import './css/styles.css';

interface LoaderProps {
  customCssClass: string,
}

const Loader: React.FC<LoaderProps> = ({ customCssClass }) => (
  <div className={`loader-roller${customCssClass ? ` ${customCssClass}` : ''}`}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
