import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Preloader } from './Preloader'
import { getMealById } from '../api'

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const data = useNavigate();

    useEffect(() => {
        getMealById(id).then((data) => {
            setRecipe(data.meals[0])
        });
        console.log(data);
    }, [id]);

    return (
        <>
            {/* <button className='btn' onClick={goBack}>Go Back</button> */}
            {
                !recipe.idMeal ? <Preloader /> : (
                    <div className="recipe">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <h1>{recipe.strMeal}</h1>
                        <h5>Category: {recipe.strCategory}</h5>
                        {
                            recipe.strArea
                                ? <h5>Area: {recipe.strArea}</h5>
                                : null
                        }
                        <p>{recipe.strInstructions}</p>
                        {
                            recipe.strYoutube
                                ? <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen />
                                : null
                        }
                    </div>
                )
            }
        </>
    )
}

export { Recipe };