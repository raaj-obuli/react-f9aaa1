export default function parse(_data) {
  var data        = _data || [],
      dataCount   = data.length,
      treeMap     = {},
      dataMap     = {},
      categories  = [ 'All' ],
      parsedData  = {};

      for(var index = 0; index < dataCount; index++) {
        var item     = data[index],
            id       = item.id,
            category = item.category,
            parentId = item.parent_objective_id;

        dataMap[id] = item;

        if(categories.indexOf(category) === -1) {
          categories.push(category);
        }

        if(parentId) {
          var parent = treeMap[parentId] || {},
              child  = parent.child || [];
          
          child.push(id);
          parent.child = child;
          treeMap[parentId] = parent;
        }
      }

      parsedData.dataMap = dataMap;
      parsedData.treeMap = treeMap;
      parsedData.categories = categories;

  return parsedData;
}