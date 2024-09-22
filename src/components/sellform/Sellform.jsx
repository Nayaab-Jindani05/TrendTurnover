import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sellform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faTag, faDollarSign, faFileImage } from '@fortawesome/free-solid-svg-icons';

function Sellform({ setListings }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productName: '',
    price: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result // Store base64 string of the image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setListings((prevListings) => [...prevListings, formData]);
    navigate('/listings');
  };

  return (
    <div className="main-block">
      <div className="left-part">
        <h1>Resell Your Product</h1>
        <p>Enter your details and let us know which product you are reselling.</p>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="namebox" className="form-label">
            <FontAwesomeIcon icon={faUser} className="form-icon" /> Name
          </label>
          <input
            type="text"
            id="namebox"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailbox" className="form-label">
            <FontAwesomeIcon icon={faEnvelope} className="form-icon" /> Email Address
          </label>
          <input
            type="email"
            id="emailbox"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="product-name" className="form-label">
            <FontAwesomeIcon icon={faTag} className="form-icon" /> Product Name
          </label>
          <input
            type="text"
            id="product-name"
            name="productName"
            className="form-control"
            placeholder="Enter product name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            <FontAwesomeIcon icon={faDollarSign} className="form-icon" /> Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
            placeholder="Enter price in USD"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea" className="form-label">
            <FontAwesomeIcon icon={faFileImage} className="form-icon" /> Product Description
          </label>
          <textarea
            id="textarea"
            name="description"
            className="form-control"
            rows="4"
            placeholder="Enter product details"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="upload" className="form-label">
            <FontAwesomeIcon icon={faFileImage} className="form-icon" /> Upload Product Image
          </label>
          <input
            type="file"
            id="upload"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit Listing</button>
      </form>
    </div>
  );
}

export default Sellform;
