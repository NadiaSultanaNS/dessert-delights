import React from "react";


// creating a component to to show the ingredients instruction and you tube link.
function IngredientCard({ meal }) {
    let ingredList = [];
    for (let i = 1; i < 20; i++) {
        let ingreName = meal["strIngredient" + i];
        let ingreMeasure = meal["strMeasure" + i];
        //Checking if the array contains any empty string or null value.
        if (ingreName && ingreName !== '') {
            ingredList.push(<li key={ingreName}>{ingreName}: {ingreMeasure}</li>)
        }

    }
    return (
        <div style={{ maxWidth: "645px" }}>
            <ol>
                {ingredList}
            </ol>
            <p>{meal.strInstructions}</p>
            <a href={meal.strYoutube}>Watch On Youtube</a>
        </div>
    )
}

export default IngredientCard;