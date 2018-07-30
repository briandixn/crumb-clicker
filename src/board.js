import React from 'react';

import List from './list';
import AddForm from './add-form';

import './board.css';

export default class Board extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        lists: []
    }
    this.addList = this.addList.bind(this);
  }

addList(title){
  this.setState({
    lists: [...this.state.lists, {title}]
  });
}

render(){

  const list = this.state.lists.map((list, index) =>(
  <li classname = "list-item" key={index}>
    <List {...list}/>
  </li>
));
  return(
    <div className="board">
      <h3>Trello app</h3>
      <h2>{this.props.title}</h2>
      <ul className="full-list">
        {list}
        <li className= "namespot">
          <AddForm onAdding={text => this.addList(text)} />
        </li>
      </ul>
    </div>
  )
}
}
Board.defaultProps = {
    title: 'Board'
};
