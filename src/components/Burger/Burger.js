import React from 'react';
import "./Burger.css";
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
};

export default Burger;