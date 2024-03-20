import "./Recipe.css"

const Recipe = ({cakeName, cakeIngredients, cakePrice, cakeRating}) => {

    return ( 
        <article id="cake-card">
            <h3 id="cake-name">{cakeName}</h3>
            <section id="cake-info">
                <div>
                    <h4>Ingredients: <span id ="ingredients-list">{cakeIngredients.toString()}</span></h4>
                </div>
            <h4>Price: {cakePrice}</h4>
            <h4>Rating: {cakeRating}</h4>
            </section>

        </article>
    );
}
 
export default Recipe;