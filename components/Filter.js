import React from 'react';

export default function Filter(_props) {
  var props    = _props || {},
      id       = props.id || 'filter',
      options  = props.options || [],
      onChange = props.onChange;

  return (
    <select id={id} onChange={onChange}>
      {
        options.map(function(opt, i){
          return <option key={i} value={opt}>{opt}</option>
        })
      }
    </select>
  );
}
