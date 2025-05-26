import { Anvil, Search } from 'lucide-react';
import { use, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserModal from './UserModal';

const Header = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (modal) => {
        setActiveModal(modal);
    }

    const closeModal = () => {
        setActiveModal(null);
        setShowModal(false);
    }

    useEffect(() => {
        console.log("active modal: ", activeModal);


        if (activeModal === 'login' || activeModal === 'signup') {
            setShowModal(true);
        }
    }, [activeModal])

    return (
        <>
            {/* Reusable Modal */}
            {activeModal && showModal && (
                <UserModal type={activeModal} onClose={closeModal} />
            )}
            <header className="header">
                <div className="container header-container">
                    <Link to={"/"} className="logo">
                        <Anvil className='logo-icon' />
                        <span className='logo-text'>CulinaryCraftsman</span>
                    </Link>

                    {/* <div className="search-container">
                    <Search className="search-icon" />
                    <input type="search" placeholder="Search Recipes..." className="search-input" />
                </div> */}

                    <nav className='main-nav'>
                        <Link to={"/craft"} className='nav-link'> Craft a Recipe </Link>
                        <Link to={"/recipes"} className='nav-link'>View All Recipes </Link>
                        <div className='auth-container'>
                            <button className='button button-outline button-small' onClick={() => openModal('login')}> Login</button>
                            <button className='button button-primary button-small' onClick={() => openModal('signup')}> Sign Up</button>
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
        </>
    )
}

export default Header;