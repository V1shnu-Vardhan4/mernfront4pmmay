
import React from 'react';

const Icon = ({ name, size = 24, className = '' }) => {
  try {
    const icon = require(`../../assets/icons/${name}.svg`);
    return <img src={icon} alt={`${name} icon`} width={size} height={size} className={className} />;
  } catch {
    return null;
  }
};

export default Icon;
