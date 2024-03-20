const Recipe = ({cakeName, cakeIngredients, cakePrice, cakeRating}) => {

    const IngredientsListElements = cakeIngredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)

    return ( 
        <div>
            <h3>{cakeName}</h3>
            <section>
            <h4>Ingredients:</h4>
            <ul>{IngredientsListElements}</ul>

            </section>
            <h4>Price: {cakePrice}</h4>
            <h4>Rating: {cakeRating}</h4>
        </div>
    );
}
 
export default Recipe;