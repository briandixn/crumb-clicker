import React from './react';

export default class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cards = []
    }
    this.addCard = this.addCard.bind(this);
  }
/////we have to bind this in order to use it outside the object
addCard(text) {
  this.setState ({
    cards: {text}
  })
}
render(){

const cards = this.state.cards.map((card, index) =>
  <li key ={index}>
    <Card {...card}/>
  </li>

);

  return(
        <div>
          <h2> {this.props.title}</h2>
          <ul className="list">
                    {cards}
                    <li>
                        <AddForm
                            type="card"
                            onAdd={text => this.addCard(text)}
                        />
                    </li>
                </ul>
        </div>
  )
}

}
