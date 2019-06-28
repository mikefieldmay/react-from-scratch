import React from 'react';

import PizzaImg from '../../assets/pizza.jpg'
import classes from './PizzaImage.css';

export const PizzaImage = () => (
    <div className={classes.PizzaImage}>
        <h1>Pizza Fuck</h1>
        <img src={PizzaImg} className={classes.PizzaImg}/>
    </div>
)