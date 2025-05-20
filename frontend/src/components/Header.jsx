import { Anvil, Search } from 'lucide-react';
import '../styles/light.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <Anvil className='logo-icon' />
                    <span className='logo-text'>CulinaryCraftsman</span>
                </div>

                <div className="search-container">
                    <Search className="search-icon" />
                    <input type="search" placeholder="Search Recipes..." className="search-input" />
                </div>

                <nav className='main-nav'>
                    <button className='nav-link'> Craft a Recipe </button>
                    <div className='auth-container'>
                        <button className='button button-outline button-small'> Sign In</button>
                        <button className='button button-primary button-small'> Sign Up</button>
                    </div>

                    {/*  reimplement with authentication. visible when logged in.   */}
                    {/* <button className='nav-link'> Profile </button> */}
                    {/* <div className='user-profile'>
                        <span className='welcome-text'>Welcome, Joe2025</span>
                        <div className='avatar'>
                            <span className='avatar-text'>JW</span>
                        </div>
                    </div> */}
                </nav>
            </div>
        </header>
    )
}

export default Header;