import axios from "axios";

const API_URL = "http://localhost:8080/api/recipes";


export async function fetchRecommendedRecipes(selectedIngredients) {
    try {
        console.log(selectedIngredients);
        const response = await axios.post(`${API_URL}/recommend`, selectedIngredients);
        console.log("Fetched recipes: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving recommended recipes:", error);
        throw error;
    }
}

export async function fetchAllRecipes() {
    try {
        const response = await axios.get(`${API_URL}/`);
        console.log("Fetched recipes ", response.data);
        return response.data;
    } catch (error) {
        console.log("Error retrieving all recipes", error);
        throw error;
    }
}