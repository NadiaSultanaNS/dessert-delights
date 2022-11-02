import React, { useContext } from "react";
import FavoriteContext from "./FavoriteContext";

function RecipeHeader({ meal }) {
    const [favorite, dispatch] = useContext(FavoriteContext);
    function addToFavorites() {
        dispatch({
            id: meal.idMeal,
        })
    }
    return (
        <div className="card mb-3" style={{ minWidth: "640px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={meal.strMealThumb} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body ">
                        <h5 className="card-title">{meal.strMeal}</h5>
                        <p className="card-text">{meal.strArea}</p>
                        <button onClick={addToFavorites} type="button" className="btn btn-dark">Add to Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeHeader;
