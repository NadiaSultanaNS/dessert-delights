import React from "react";

function NutrientCard({ recipe }) {
    let str = '';
    for (let i = 0; i < recipe.healthLabels.length; i++) {
        str += recipe.healthLabels[i] + ",  ";
    }
    console.log(recipe)
    return (
        <div style={{ maxWidth: "645px" }}>
            <p>Calories: {recipe.calories}</p>
            <p>Health Labels: {str}</p>
            <p>Meal Type: {recipe.mealType}</p>
            <p>Total Nutrients: Carbs: {recipe.totalNutrients.CHOCDF.quantity} {recipe.totalNutrients.CHOCDF.unit}</p>
            <p>Energy: {recipe.totalNutrients.ENERC_KCAL.quantity} {recipe.totalNutrients.ENERC_KCAL.unit}</p>
            <p>Fat: {recipe.totalNutrients.FAT.quantity} {recipe.totalNutrients.FAT.unit}</p>
            <p>Trans: {recipe.totalNutrients.FATRN.quantity} {recipe.totalNutrients.FATRN.unit} </p>
            <p>Protein: {recipe.totalNutrients.PROCNT.quantity} {recipe.totalNutrients.PROCNT.unit} </p>
            <p>Sugar: {recipe.totalNutrients.SUGAR.quantity} {recipe.totalNutrients.SUGAR.unit} </p>


        </div>
    )
}

export default NutrientCard;