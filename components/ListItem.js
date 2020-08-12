import React from 'react';

export default function ListItem(_props){
  var props     = _props || {},
      title     = props.title || '',
      isParent  = props.isParent || false,
      isActive  = props.isActive,
      iconClass = isActive ? 'open' : '',
      onClick   = props.onClick;

  return (
    <a href="#" className="list-item" onClick={onClick}>
      { isParent &&
          <i className={iconClass}>
            <span className="plus">+</span>
            <span className="minus">-</span>
          </i>
      }
      <span>{title}</span>
    </a>
  );
};
