import React, { useState } from "react";
import axios from "axios";
import DessertCard from "./DessertCard";

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';
function DessertList() {
    const [itemList, setList] = useState(null); //declaring useState

    React.useEffect(() => { //Calling  one api using async axios request function; also using useEffect.
        axios.get(baseUrl).then((response) => {
            const dessertCards = (response.data.meals.map((meal) => {
                //Creating a dessert card for each meal using the map function.
                return (
                    <div key={meal.strMeal}>
                        <DessertCard title={meal.strMeal}
                            url={meal.strMealThumb}
                            id={meal.idMeal} />
                    </div>


                )
            }))

            setList(dessertCards);

            console.log(response.data.meals);
        }
        )

    }, [])
    return (
        <div className="d-flex justify-content-center p-5">

            <div className="row row-cols-auto d-flex justify-content-center ">{itemList}</div>
        </div>
    )

}

export default DessertList;