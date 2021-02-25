import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = props => {
    // const transformedIngredients = Object.keys(props.ingredient)
    //     .map(ingredientKey => [...Array(props.ingredients[ingredientKey])]
    //     .map((_, i) => BurgerIngredient>));
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;