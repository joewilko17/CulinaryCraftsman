import { useLocation, Link } from 'react-router-dom'
import '../styles/recommendation.css'
import { ChevronLeft, Clock, X, CarrotIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { fetchRecommendedRecipes } from '../api/RecipeApi'

const RecommendationPage = () => {
    const [recommendedRecipes, setRecommendedRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const { state } = useLocation();
    const { selectedIngredients } = state;

    useEffect(() => {
        getRecommendedRecipes(selectedIngredients);
    }, [selectedIngredients])

    const getRecommendedRecipes = async (selectedIngredients) => {
        try {
            const data = await fetchRecommendedRecipes(selectedIngredients);
            setRecommendedRecipes(data);
        } catch (error) {
            console.log("Error fetching recommended recipes: ", error);
            throw error;
        }
    }

    const openRecipeModal = (recipe) => {
        setSelectedRecipe(recipe);
    }

    const closeRecipeModal = () => {
        setSelectedRecipe(null);
    }

    return (
        <main className='main'>
            <section className='recommend-section'>
                {/* Section Header */}
                <div className='container '>
                    <div className='breadcrumb'>
                        <Link to="/craft" className="breadcrumb-link">
                            <ChevronLeft className='icon-sm' />
                            Back to Ingredients
                        </Link>
                    </div>
                </div>
                <div className='section-header'>
                    <h1 className='section-title'> Crafted Recipes</h1>
                    <p className='section-description'>Based on your ingredient selection, here is what you could make.</p>
                </div>


                {/* Recommended Recipes Grid */}
                <div className='recommendation-layout'>
                    <div className='recommendation-grid'>
                        {recommendedRecipes.map((recipe) => (
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

            {/* Recipe Selection Modal */}
            {selectedRecipe && (
                <div className='modal-overlay' onClick={closeRecipeModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <div className='modal-header'>
                            <h2 className='modal-title'>{selectedRecipe.name}</h2>
                            <button className="modal-close" onClick={closeRecipeModal}>
                                <X className="icon" />
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="recipe-image-large">
                                <img
                                    src={'https://placehold.co/200x300'}
                                    alt={selectedRecipe.name}
                                    width={500}
                                    height={300}
                                />
                            </div>

                            <div className="recipe-details">
                                <div className="recipe-meta-large">
                                    <div className="meta-item-large">
                                        <Clock className="meta-icon-large" />
                                        <span>Cook Time: {selectedRecipe.timeToMake}</span>
                                    </div>
                                    <div className="meta-item-large">
                                        <CarrotIcon className="meta-icon-large" />
                                        <span>{selectedRecipe.ingredients.length} Ingredients</span>
                                    </div>
                                </div>

                                <div className="recipe-sections">
                                    <div className="ingredients-section">
                                        <h3 className="modal-section-title">Ingredients</h3>
                                        <ul className="ingredients-list">
                                            {selectedRecipe.ingredients.map((ingredient) => (
                                                <li key={ingredient.id} className="ingredient-item">
                                                    {ingredient.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="instructions-section">
                                        <h3 className="modal-section-title">Instructions</h3>
                                        <ol className="instructions-list">
                                            {selectedRecipe.instructions
                                                .sort((a, b) => a.stepNumber - b.stepNumber)
                                                .map((instruction) => (
                                                    <li key={instruction.id} className="instruction-item">
                                                        <span className="step-number">Step {instruction.stepNumber}</span>
                                                        <p className="instruction-text">{instruction.instruction}</p>
                                                    </li>
                                                ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="button button-outline" onClick={closeRecipeModal}>
                                Close
                            </button>
                            <button className="button button-primary">Save Recipe</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default RecommendationPage;