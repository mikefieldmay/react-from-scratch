import React from 'react';

import PizzaImg from '../../assets/pizza.jpg'
import classes from './PizzaImage.css';

export const PizzaImage = () => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImg} className={classes.PizzaImg}/>
    </div>
)