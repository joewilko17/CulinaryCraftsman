import axios from "axios";

const API_URL = "http://localhost:8080/api/ingredients";

export async function fetchIngredientsByCategory(category) {
    try {
        const response = await axios.get(`${API_URL}/${category}`);
        console.log("Fetched ingredients: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving ingredients by category:", error);
        throw error;
    }
}

export async function fetchIngredients() {
    try {
        const response = await axios.get(API_URL);
        console.log("Fetched ingredients: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving ingredients", error);
        throw error;
    }
}