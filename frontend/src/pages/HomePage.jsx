import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    // Define click handlers for each image
    const goToPetAccessories = () => navigate('/pet-accessories');
    const goToPetCaretaker = () => navigate('/pet-caretaker');

    return (
        <div className="home-page">
            <div className="image-container">
                {/* Left Image - Pet Accessories */}
                <div>
                    <h1 className='left-img'>PET ACCESSORIES</h1>
                    <img
                        src="/src/assets/images/PetAccessories.png"
                        alt="Pet Accessories"
                        className="small-image1"
                        onClick={goToPetAccessories}
                        style={{ cursor: 'pointer' }} // Add pointer cursor for interactivity
                    />
                </div>

                {/* Center Image - Home Dog (non-clickable) */}
                <img
                    src="/src/assets/images/HomeDog.png"
                    alt="Home Dog"
                    className="main-image"
                />

                {/* Right Image - Pet Caretaker */}
                <div>
                    <h1 className='right-img'>PET CARETAKER</h1>
                    <img
                        src="/src/assets/images/PetCaretaker.png"
                        alt="Pet Caretaker"
                        className="small-image2"
                        onClick={goToPetCaretaker}
                        style={{ cursor: 'pointer' }} // Add pointer cursor for interactivity
                    />
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;
