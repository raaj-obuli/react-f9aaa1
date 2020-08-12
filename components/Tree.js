import React from 'react';
import List from './List'

var EMPTY_OBJ = {};

export default function Tree(_props){
  var props    = _props || EMPTY_OBJ,
      dataMap  = props.dataMap || EMPTY_OBJ,
      treeMap  = props.treeMap  || EMPTY_OBJ,
      filter   = props.filter,
      render   = [];

  for(var key in treeMap){
    var item      = treeMap[key] || EMPTY_OBJ,
        itemData  = dataMap[key]  || EMPTY_OBJ,
        category  = itemData.category,
        child     = item.child || [],
        childData = [],
        showItem  = (filter === 'All') || (filter === category),
        listRender,
        childData;

    if(showItem && itemData.title) {
      childData = child.map(function(childId){
          var childData = dataMap[childId] || EMPTY_OBJ;
          return childData;
      });

      listRender = (
        <div>
          <List key={key} itemData={itemData} childData={childData} />
        </div>
      );
    }

    render.push(listRender);
  }

  return (
    <div>
      {render}
    </div>
  );

};
