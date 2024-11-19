import React from 'react';
import './ProductsPage.css';

const ProductsPage = () => {
    const accessories = [
        { id: 1, name: 'Pet Bed', image: 'https://m.media-amazon.com/images/I/61oYAWxk0UL._AC_UF1000,1000_QL80_.jpg' },
        { id: 2, name: 'Pet Toy', image: 'https://m.media-amazon.com/images/I/514ofVN5KpL.jpg' },
        { id: 3, name: 'Pet Collar', image: 'https://m.media-amazon.com/images/I/61gHQPvtLOL._AC_UF1000,1000_QL80_.jpg' },
        { id: 4, name: 'Pet Food', image: '/src/assets/images/PetFood.png' },
        { id: 5, name: 'Pet Leash', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEBiqwqXP7sPKiqOLqudTGpJMX4U48s2kpg&s' },
        { id: 6, name: 'Pet Shampoo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8xP3phRWadLFhH0upQOBNg9Vi5s5qz4tIj2jan2XVDEZit96XTaRGpq18SA-xP-UHKA&usqp=CAU' }
    ];

    return (
        <div className="products-page">
            <h1>Our Pet Accessories</h1>
            <div className="accessories-list">
                {accessories.map(accessory => (
                    <div key={accessory.id} className="accessory-card">
                        <img src={accessory.image} alt={accessory.name} className="accessory-image" />
                        <p>{accessory.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
