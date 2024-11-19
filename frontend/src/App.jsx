import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import PetAccessoriesPage from './pages/PetAccessoriesPage';
import PetCaretakerPage from './pages/PetCaretakerPage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ContactUsPage from './pages/ContactUsPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/pet-accessories" element={<PetAccessoriesPage />} />
                <Route path="/pet-caretaker" element={<PetCaretakerPage />} />
            </Routes>
        </Router>
    );
};

export default App;
