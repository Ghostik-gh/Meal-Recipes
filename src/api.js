import { API_URL } from './config'

const getMealById = async (id) => {
    // www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    const response = await fetch(API_URL + 'lookup.php?i=' + id);
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}

const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName);
    return await response.json();
}

export { getMealById, getFilteredCategory, getAllCategories };