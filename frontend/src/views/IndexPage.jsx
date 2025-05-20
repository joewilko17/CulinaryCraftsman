import { Link } from 'react-router-dom';
import '../styles/light.css'
import { Book, Clock, Star } from "lucide-react"
const IndexPage = () => {
    return (
        <>
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">Discover Your Next Culinary Adventure</h1>
                        <p className="hero-description">
                            Find recipes tailored to your taste, create your own collections, and share your culinary creations.
                        </p>
                        <div className="hero-buttons">
                            <button className="button button-primary">Craft a Recipe</button>
                            <button className="button button-outline">Browse Recipes</button>
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
            <section className="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Discover a new way to cook</h2>
                        <p className="section-description">Craft recipes and find your next favorite dish.</p>
                    </div>

                    <div className="card-grid">
                        {/* Craft Recipe Card */}
                        <Link className="card">
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
                                    <span className="card-tag-text">Personalise your experience</span>
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
                                    <span className="card-tag-text">Browse our large collection</span>
                                </div>
                                <h3 className="card-title">Recipe Database</h3>
                                <p className="card-description">Browse and search our delicious recipe collection.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndexPage;