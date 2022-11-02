import React, { useContext, useState } from "react";
import FavoriteContext from "./FavoriteContext";
import axios from "axios";
import DessertCard from "./DessertCard";

function Favourites() {
    const [favorite, dispatch] = useContext(FavoriteContext);
    console.log(favorite.favorites);
    const [list, setList] = useState(null);

    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';
        //calling another api
    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            const dessertCards = (response.data.meals.map((meal) => {
                if (favorite.favorites.includes(meal.idMeal)) {
                    return (
                        <div key={meal.strMeal}>
                            <DessertCard title={meal.strMeal}
                                url={meal.strMealThumb}
                                id={meal.idMeal} />
                        </div>
                    )
                }

            }))
            let tempList = [];
            for (let i = 0; i < dessertCards.length; i++) {
                if (dessertCards[i]) {
                    tempList.push(dessertCards[i]);
                }
            }


            setList(tempList);
        }
        )

    }, [])
    return (
        <div>
            {(list === null || list.length === 0) ? (<p>You Have NO Favorites Added</p>) : (<ul>
                {list}
            </ul>)}
        </div>
    )
}

export default Favourites;