import { Link } from 'react-router-dom';
import '../styles/index.css'
import { Book, Clock, Star } from "lucide-react"
const IndexPage = () => {
    return (
        <main className='main'>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">Discover Your Next Culinary Adventure</h1>
                        <p className="hero-description">
                            Craft recipes tailored to your taste, create your own collections, and share your culinary creations.
                        </p>
                        <div className="hero-buttons">
                            <Link to={"/craft"} className="button button-primary">Craft a Recipe</Link>
                            <Link to={"/recipes"} className="button button-outline">Browse Recipes</Link>
                        </div>
                    </div>
                    <div className="hero-image-container">
                        <div className="hero-image">
                            <img
                                src="resources/hero-food.jpg"
                                alt="Delicious food"
                                className="image"
                                width={400}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Discover a New Way to Cook</h2>
                        <p className="section-description">Craft recipes and find your next favorite dish.</p>
                    </div>

                    <div className="card-grid">
                        {/* Craft Recipe Card */}
                        <Link to={"/craft"} className="card">
                            <div className="card-image">
                                <img src="resources/card-anvil-food.png" alt="Craft a Recipe" fill className="image" />
                            </div>
                            <div className="card-content">
                                <div className="card-tag">
                                    <Clock className="card-tag-icon" />
                                    <span className="card-tag-text">Quick & Easy</span>
                                </div>
                                <h3 className="card-title">Craft a Recipe</h3>
                                <p className="card-description">Discover quality recipes based on the ingredients in your kitchen, no account required!</p>
                            </div>
                        </Link>

                        {/* Create Account Card */}
                        <Link className="card">
                            <div className="card-image">
                                <img src="resources/card-create-account.png" alt="Create an account" fill className="image" />
                            </div>
                            <div className="card-content">
                                <div className="card-tag">
                                    <Star className="card-tag-icon" />
                                    <span className="card-tag-text">Personalise Your Experience</span>
                                </div>
                                <h3 className="card-title">Create an account</h3>
                                <p className="card-description">Register a new user account to access personalised features.</p>
                            </div>
                        </Link>

                        {/* Browse Recipes Card */}
                        <Link className="card">
                            <div className="card-image">
                                <img src="resources/card-recipe-database.png" alt="Browse Recipe Database" fill className="image" />
                            </div>
                            <div className="card-content">
                                <div className="card-tag">
                                    <Book className="card-tag-icon" />
                                    <span className="card-tag-text">Browse Our Large Collection</span>
                                </div>
                                <h3 className="card-title">Recipe Database</h3>
                                <p className="card-description">View our delicious collection of recipes.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default IndexPage;