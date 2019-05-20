import React, { Component } from 'react';
import api from '../../services/api'; 

import './styles.css';

export default class  Restaurant extends Component{
state = {
        cardapio: [],
        restInfo: [],
    };

async componentDidMount(){
    const { id } = this.props.match.params;
    const response = await api.get(`/restaurants/${id}`);
  
    const { menu, ...infos } = response.data;
    
    this.setState({ cardapio: menu, restInfo: infos });
    console.log(menu);
}



render(){
    const { cardapio , restInfo } = this.state;
    
    return ( <div className="restaurant-info">
    <article key={restInfo._id}><strong>{restInfo.name}</strong>
    <h1>{restInfo.description}</h1>
    <h2>
    URL: <a href={restInfo.url}>{restInfo.url}</a>
    </h2>
    <p>{restInfo.address}</p>
    
    </article>
  <div className="cardapio-info">
    {cardapio.map(cardapio =>(
                <article key={cardapio._id}>
                <strong>{cardapio.recipe}</strong>
                <p>{cardapio.ingredients}</p>
                <p>{cardapio.price}</p>
                
                </article>
    ))}
    
    </div>
    </div>
    );
}
}