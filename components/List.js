import React, { Component } from 'react';
import ListItem from './ListItem';

export default class App extends Component {
  constructor() {
    super();
    this.onClick  = this.onClick.bind(this);
    this.state = {
      isActive : true
    };
  }

  onClick(e) {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    var props     = this.props,
        state     = this.state,
        isActive  = state.isActive,
        itemData  = props.itemData || {},
        childData = props.childData || {},
        childLen  = childData.length,
        isParent = childLen > 0,
        childClassNames = `child-wrap ${isActive ? 'active' : '' }`;

    return (
      <div className="list">
        <ListItem
          title={itemData.title}
          isParent={isParent}
          onClick={this.onClick}
          isActive={isActive}
        />
        {
          childLen &&
            <div className={childClassNames}>
              {
                childData.map(function(data, i){
                  return <ListItem key={i} title={data.title} />;
                })
              }
            </div>
        }
      </div>
    );
  }
}
