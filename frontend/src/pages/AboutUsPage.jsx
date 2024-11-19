import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <div className="about-content">
                <div className="about-image">
                    <img src="https://usacustomsclearance.com/wp-content/uploads/2021/12/the-complete-guide-to-importing-pet-food-to-the-us-1.jpg" alt="Our Team with Pets" />
                </div>
                <p>
                    Welcome to <span className="highlight">PETIFY</span>! We are a passionate team dedicated to providing the best
                    accessories and caretaking services for your pets. Our mission is to enhance the
                    lives of pets and their owners by offering high-quality, stylish, and functional
                    products.
                </p>
                <p>
                    At <span className="highlight">PETIFY</span>, we believe that pets are family. We carefully curate our products to
                    ensure they are safe, comfortable, and tailored to your pet's needs. Whether you
                    are looking for accessories, grooming, or reliable caretaking, we’re here to
                    support you and your beloved pets.
                </p>
            </div>
        </div>
    );
};

export default AboutUsPage;
