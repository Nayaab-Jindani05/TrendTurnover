import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import SellForm from './components/sellform/Sellform';
import Home from './pages/home/Home';
import Listings from './components/listings/Listings';

function App() {
    const [listings, setListings] = useState(() => {
        const savedListings = localStorage.getItem('listings');
        return savedListings ? JSON.parse(savedListings) : [];
    });

    useEffect(() => {
        localStorage.setItem('listings', JSON.stringify(listings));
    }, [listings]);

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sell" element={<SellForm setListings={setListings} />} /> {/* Pass setListings */}
                <Route path="/listings" element={<Listings listings={listings} />} />
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
