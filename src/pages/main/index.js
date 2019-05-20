import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component{
    state = {
        restaurant: [],
        restaurantInfo: [],
        page: 1,
    };

    
    //executa componente assim que exibir em tela
        componentDidMount(){
        this.loadRestaurants();
    }

   loadRestaurants = async (page = 1) => {
    const response = await api.get(`/restaurants?page=${page}`);
     const { docs, ...restaurantInfo} = response.data;
    this.setState({ restaurant: docs, restaurantInfo, page}) ;
    
   };


   prevPage = () => {
    const { page } = this.state;
    if (page === 1) return;

    const pageNumber = page - 1;
    this.loadRestaurants(pageNumber);

   }

    nextPage = () => {
        const { page, restaurantInfo} = this.state;
        if (page === restaurantInfo.pages) return;

        const pageNumber = page + 1;
        this.loadRestaurants(pageNumber);
    }
    

    render(){
        const { restaurant, page, restaurantInfo } = this.state;
        return (
            <div className="restaurant-list">
            {restaurant.map(restaurant =>(
                <article key={restaurant._id}>
                <strong>{restaurant.name}</strong>
                <h1>{restaurant.description}</h1>
                <p>{restaurant.address}</p>
                <Link to={`/restaurants/${restaurant._id}`}>Ver cardápio</Link>
                </article>
            ))}
                <div className="actions">
                <button disabled={page ===1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page === restaurantInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>

            </div>
        )
    }
}