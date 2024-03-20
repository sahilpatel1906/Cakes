import { useState } from "react";
import Recipe from "../components/Recipe";
import "./CakesContainer.css"

const CakesContainer = () => {
    const [cakes, SetCakes] = useState(
        [
            // Victora Sponge
            {
                cakeName: "Victoria Sponge",
                ingredients: [
                    "eggs",
                    "butter",
                    "sugar",
                    "self-raising flour",
                    "baking powder",
                    "milk"
                ],
                price: 5,
                rating: 5
            },
        
            // Tea Loaf
            {
                cakeName: "Tea Loaf",
                ingredients: [
                    "eggs",
                    "oil",
                    "dried fruit",
                        "sugar",
                    "self-raising flour",
                    "strong tea",
                ],
                price: 2,
                rating: 3
            },  
            // Carrot Cake
            {
                cakeName: "Carrot Cake",
                ingredients: [
                    "carrots",
                    "walnuts",
                    "oil",
                    "cream cheese",
                    "flour",
                    "sugar",
                ],
                price: 8,
                rating: 5
            }
        ]
    ) 

    const cakeElements= cakes.map((cake, index) => {               
        return <Recipe cakeName={cake.cakeName} cakeIngredients={cake.ingredients} cakePrice={cake.price} cakeRating={cake.rating} key={index}/>   
    }) 

    return ( 
        <>
            <h2 id="cake-title">Cakes</h2>
            <div id="cakes">{cakeElements}</div>          
        </>
    );
}
 
export default CakesContainer;