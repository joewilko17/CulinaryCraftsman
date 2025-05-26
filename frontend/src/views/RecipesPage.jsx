import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/recipes.css'
import { fetchAllRecipes } from '../api/RecipeApi';
import { Clock, Search, ChevronLeft } from 'lucide-react';


const RecipesPage = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRecipes = searchQuery
        ? allRecipes.filter((recipe) => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : allRecipes

    const getAllRecipes = async () => {
        try {
            const data = await fetchAllRecipes();
            setAllRecipes(data);
        } catch (error) {
            console.log("Error fetching all recipes: ", error)
        }

    }

    const openRecipeModal = (recipe) => {
        setSelectedRecipe(recipe);
    }

    const closeRecipeModal = () => {
        setSelectedRecipe(null);
    }

    useEffect(() => {
        getAllRecipes();
    }, [allRecipes])


    return (
        <main className="main">
            <section className='recipes-section'>
                <div className='container '>
                    <div className='breadcrumb'>
                        <Link to="/" className="breadcrumb-link">
                            <ChevronLeft className='icon-sm' />
                            Back to Home
                        </Link>
                    </div>
                </div>
                <div className='section-header'>
                    <h2 className='section-title'>Browse All Recipes</h2>
                    <p className='section-description'>View all of our amazing recipes that we have in our collection</p>
                    <div className='search-container recipe-search'>
                        <Search className="search-icon" />
                        <input type='search' placeholder='Search Recipes...' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                </div>

                {/* All Recipes Grid */}
                <div className='recipes-layout'>
                    <div className='recipes-grid'>
                        {filteredRecipes.map((recipe) => (
                            <div key={recipe.id} className='recipe-card' onClick={() => openRecipeModal(recipe)}>
                                <div className='recipe-card-image'>
                                    <img
                                        src='https://placehold.co/200x300'
                                        alt={recipe.name}
                                        width={300}
                                        height={200}></img>
                                </div>
                                <div className='recipe-card-content'>
                                    <h2 className='recipe-title'>{recipe.name}</h2>
                                    <div className="recipe-meta">
                                        <div className="meta-item">
                                            <Clock className="meta-icon" />
                                            <span>{recipe.timeToMake}</span>
                                        </div>
                                    </div>
                                    <div className='recipe-ingredients-preview'>
                                        <p className='ingredients-label'>Ingredients</p>
                                        <p className='ingredients-text'>
                                            {recipe.ingredients
                                                .slice(0, 3)
                                                .map((ing) => ing.name)
                                                .join(", ")}
                                            {recipe.ingredients.length > 3 && ` +${recipe.ingredients.length - 3} more`}
                                        </p>
                                    </div>
                                    <button className="button button-view-recipe">View Full Recipe</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default RecipesPage;