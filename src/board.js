import React from 'react';


export default class Board extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        lists: []
    }
    this.add.List = this.addList.bind(this);
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
    <div>
      <h3>Trello app</h3>
      <ul classNmae="full-list">
        {list}
        <li className= "namespot">
          <Addform onAdding={text => this.addList(text)} />
        </li>
      </ul>
    </div>
  )
}




}
