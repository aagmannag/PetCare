import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
    return (
        <div className="services">
            <h1>Our Services</h1>
            <div className="service-cards">
                <div className="service-card">
                    <img src="/src/assets/images/PetAccessories.png" alt="Pet Accessories" className="service-image" />
                    <h2>Pet Accessories</h2>
                    <p>
                        Discover a wide range of quality accessories for your pet, including collars, toys, clothing, and more. Our products are designed to ensure comfort, safety, and style for your furry friends.
                    </p>
                    <Link to="/pet-accessories" className="service-link">Learn More</Link>
                </div>
                <div className="service-card">
                    <img src="/src/assets/images/PetCaretaker.png" alt="Caretaker Service" className="service-image" />
                    <h2>Caretaker Service</h2>
                    <p>
                        Find trusted and reliable caretakers for your pets. Our caretakers are trained to provide the best care and attention, ensuring your pet is in safe hands whenever you need assistance.
                    </p>
                    <Link to="/pet-caretaker" className="service-link">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
