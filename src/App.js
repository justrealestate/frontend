import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LoginForm from './registration/login';
import SignUpForm from './registration/signup';
import PropertyListings from './pages/PostProperty';
import ResidentialRentForm from './forms/Residential/rent';
import ResidentialResaleForm from './forms/Residential/resale';
import ResidentialLeaseForm from './forms/Residential/lease';
import LandResaleForm from './forms/Land/resale';
import PropertyListOut from './main/PropertyListOut';
import IndexSearch from './components/IndexSearch';
import Search from './assets/js/search/IndexSearch'

function Home() {
  return (
    <>
      <h3 className='text-center text-info'>World's Largest NoBrokerage Property Site</h3>
      <IndexSearch />
      <div className="mt-3" id="tabContent">
        <p>Currently viewing: <strong>Buy</strong></p>
      </div>
      <PropertyListOut />
      <div className='text-center'>
        <button className='btn btn-success'>Show More</button>
      </div>
    </>
  );
}

function App() {
  return (
    <div className='container-fluid'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/property_post" element={<PropertyListings />} />
        <Route path="/residential/rent_form" element={<ResidentialRentForm />} />
        <Route path="/residential/resale_form" element={<ResidentialResaleForm />} />
        <Route path="/residential/lease_form" element={<ResidentialLeaseForm />} />
        <Route path="/land/resale_form" element={<LandResaleForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
