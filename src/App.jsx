import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import SellForm from './components/sellform/Sellform';
import Home from './pages/home/Home'; // Import your Home component

function App() {
    return (
        <>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Banner and Promo will be part of Home */}
                <Route path="/sell" element={<SellForm />} /> {/* No Banner and Promo here */}
                
            </Routes>
            <Footer />
        </Router>
        </>
    );
}

export default App;
