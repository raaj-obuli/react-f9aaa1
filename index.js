import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import parser from './parser';
import Tree from './components/Tree'
import Filter from './components/Filter'
import './style.css';

var DATA_API = 'https://okrcentral.github.io/sample-okrs/db.json';

class App extends Component {
  constructor() {
    super();
    this.onFilterChange = this.onFilterChange.bind(this);
    this.state = {
      treeMap :  {},
      dataMap :  {},
      filter  : 'All'
    };
  }

  fetchData() {
    fetch(DATA_API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var rawData = data.data;
        var parsedData = parser(rawData);
        this.setState(parsedData);
      });
  }

  onFilterChange(e) {
    var filterValue = e.target.value;
    this.setState({
      filter : filterValue
    })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    var state      = this.state,
        dataMap    = state.dataMap,
        treeMap    = state.treeMap,
        categories = state.categories,
        filter     = state.filter;

    return (
      <div>
        <div>
          <Filter options={categories} onChange={this.onFilterChange}/>
        </div>
        <Tree dataMap={dataMap} treeMap={treeMap} filter={filter} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
