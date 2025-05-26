import '../styles/craft.css'
import { useEffect, useState } from 'react'
import { Search, CircleArrowRight, LightbulbIcon, ChevronLeft } from 'lucide-react'
import { fetchIngredients, fetchIngredientsByCategory } from '../api/IngredientApi'
import { Navigate, useNavigate, Link } from 'react-router-dom'

const CraftPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("Dairy");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [currentIngredients, setCurrentIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const filteredIngredients = searchQuery
        ? currentIngredients.filter((ingredient) => ingredient.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : currentIngredients

    const categories = ["Dairy", "Grains", "Fruits", "Proteins", "Vegetables"];

    const fetchCategoryIngredients = async (category) => {
        try {

            const data = await fetchIngredientsByCategory(category.toLowerCase());
            setCurrentIngredients(data)

        } catch (error) {
            console.error(error);
        }
    }

    const clearSelectedIngredients = () => {
        setSelectedIngredients([]);
    }

    // const addIngredient = (ingredient) => {
    //     if (!selectedIngredients.some((item) => item.id === ingredient.id)) {
    //         setSelectedIngredients([...selectedIngredients, ingredient]);
    //     } else {
    //         removeIngredient(ingredient);
    //     }
    // }

    const toggleIngredient = (ingredient) => {
        if (selectedIngredients.some(item => item.id === ingredient.id)) {
            setSelectedIngredients(selectedIngredients.filter(item => item.id !== ingredient.id));
        } else {
            setSelectedIngredients([...selectedIngredients, ingredient]);
        }
    };

    const removeIngredient = (ingredient) => {
        setSelectedIngredients(selectedIngredients.filter((item) => item.id !== ingredient.id))
    }

    function handleRecipeRecommendation() {
        navigate("/recommend", { state: { selectedIngredients: selectedIngredients } });
    }

    const checkValidRecommend = () => {
        return selectedIngredients.length >= 4;
    }

    useEffect(() => {
        fetchCategoryIngredients(selectedCategory);
    }, [selectedCategory])

    return (
        <main className='main'>
            {/* Ingredient Selection Section */}
            <section className="craft-section">
                <div className='container'>

                    <div className='container '>
                        <div className='breadcrumb'>
                            <Link to="/" className="breadcrumb-link">
                                <ChevronLeft className='icon-sm' />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                    <div className='section-header'>
                        <h1 className='section-title'>Choose your Ingredients</h1>
                        <p className='section-description'>Select the ingredients you have and we'll recommend recipes you can make.</p>
                    </div>

                    <div className='ingredients-layout'>
                        <div className='ingredients-panel'>
                            <div className='panel-header'>
                                <h2 className='panel-title'>Available Ingredients</h2>
                                <div className='search-container'>
                                    <Search className="search-icon" />
                                    <input type='search' placeholder='Search Category...' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                </div>
                            </div>

                            {/* Category Button Panel */}
                            <div className='panel-tab-group'>
                                {categories.map((category) => (
                                    <button
                                        className={`category-button ${selectedCategory === category ? "active" : ""}`}
                                        onClick={() => {
                                            setSelectedCategory(category)
                                            setSearchQuery("")
                                        }}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>



                            {/* Ingredients Panel */}
                            {filteredIngredients.length > 0 ? (
                                <div className='ingredient-grid-wrapper'>
                                    <div className='ingredient-grid'>
                                        {filteredIngredients.map((ingredient) => (
                                            <div className={`ingredient-card ${selectedIngredients.some(item => item.id === ingredient.id) ? 'selected' : ''}`} key={ingredient.id} onClick={() => toggleIngredient(ingredient)}>
                                                <img className='ingredient-card-image' src='https://placehold.co/64x64' />
                                                <p className='ingredient-card-text'>{ingredient.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className='ingredients-no-results'>
                                    <img src='https://placehold.co/248x248' />
                                    <h2 className='section-title'>No Ingredients Found</h2>
                                    <p className='section-description'>Try searching in a different category.</p>
                                </div>
                            )}
                        </div>

                        {/* Selected Ingredients Panel */}
                        <div className='selected-panel'>
                            <div className='panel-header'>
                                <h2 className='panel-title'>Selected Ingredients</h2>
                                <button className='button-selected-panel-clear' onClick={() => clearSelectedIngredients()}>Clear All</button>
                            </div>
                            <div className='selected-scrollbox-wrapper'>
                                <div className='selected-scrollbox'>
                                    {!checkValidRecommend() ?
                                        <div className='selected-tooltip'><LightbulbIcon className='tooltip-icon' /><span>Select 4 or more ingredients to craft a recipe!</span></div>
                                        : <div className='selected-tooltip'><LightbulbIcon className='tooltip-icon valid' /><span>Select 4 or more ingredients to craft a recipe!</span></div>}
                                    {selectedIngredients.map((ingredient) => (
                                        <div className='selected-card' key={ingredient.id} onClick={() => removeIngredient(ingredient)}>
                                            <img src='https://placehold.co/32x32' />
                                            <span>{ingredient.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='selected-panel-button-group'>
                                <button className='button button-primary button-craft' disabled={!checkValidRecommend()} onClick={() => handleRecipeRecommendation()}>
                                    <span>Find Recipes</span>
                                    <CircleArrowRight className='icon-sm' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CraftPage;