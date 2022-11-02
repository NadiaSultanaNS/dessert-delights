import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "./IngredientCard";
import NutrientCard from "./NutrientCard";
import RecipeHeader from "./RecipeHeader";

const recipeUrl = 'https://api.edamam.com/api/recipes/v2'
function RecipeDetails() {
    const { id } = useParams();
    console.log(id);
    const baseUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    console.log(baseUrl);
    const [nutrientDetails, setNutrientDetails] = useState(null);

    const [recipeDetails, setRecipeDetails] = useState(null);
    const [isRecipeDetailsVisible, setRecipeDetailsVisible] = useState(true);
    const [HeaderComp, setHeaderComp] = useState(null);

    //Calling the second api
    useEffect(() => {

        axios.get(baseUrl).then((response) => {
            let mealDetails = response.data.meals[0];
            console.log(response);
            console.log(mealDetails);
            setRecipeDetails(<DetailsCard meal={mealDetails} />)
            setHeaderComp(<RecipeHeader meal={mealDetails} />)

            const recipeInfo = {
                type: "public",
                q: mealDetails.strMeal,
                app_id: "13adf447",
                app_key: "88f030e812ef188b91d78581e0397793"

            };
            axios.get(recipeUrl, { params: recipeInfo }).then((response) => {
                let data = response.data.hits[0].recipe;
                setNutrientDetails(<NutrientCard recipe={data} />);
            })
        })


            .catch(error => {
                console.log(error);
            })


    }, [])
    //Cheking if recipe detais is true or false
    function toggleVisibility() {
        setRecipeDetailsVisible(!isRecipeDetailsVisible);
    };

    return (
        //includes conditional rendering
        <div>
            <div className="d-flex justify-content-center">{HeaderComp}</div>
            <div className="d-flex justify-content-center" >
                {isRecipeDetailsVisible ? recipeDetails : nutrientDetails}
            </div>
            <button onClick={toggleVisibility} type="button" className="btn btn-dark">Check {isRecipeDetailsVisible ? 'Nutritions' : 'Recipe Details'}</button>
        </div>
    )
}
export default RecipeDetails;