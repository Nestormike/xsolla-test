import React from 'react';
import './App.css';
import { data } from './data';
import { TransactonData } from './model/transaction-data';
import { Table } from './components/table/table';
import { Filter } from './components/filter/filter';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      filterFunction: tData => true
    }
  }

  render() {

    //console.log(data)

    const parsedData = data.map(obj => TransactonData.parse(obj));
    const filtredData = parsedData.filter(tData => this.state.filterFunction(tData))
    
    //console.log(parsedData)

    return(
      <div className="app">
        <Filter data={parsedData} 
                onChange={filterFunction => this.setState({filterFunction})}/>
        <Table data={filtredData} />
      </div>
    )
  }
}
