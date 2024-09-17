import React from 'react';
import './Sellform.css'; // Make sure to link your CSS file

export default function SellForm() {
  return (
    <div className="sell-form-container">
      <h2 className="form-title">Resell Your Product</h2>
      <p className="form-description">
        Fill in the details below to list your product for reselling.
      </p>

      <form>
        <div className="form-group">
          <label htmlFor="emailbox" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="emailbox"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="product-name" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="product-name"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter price in USD"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="textarea" className="form-label">Product Description</label>
          <textarea
            className="form-control"
            id="textarea"
            rows="4"
            placeholder="Enter product details"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="upload" className="form-label">Upload Product Image</label>
          <input type="file" className="form-control" id="upload" accept="image/*" />
        </div>

        <button type="submit" className="submit-button">Submit Listing</button>
      </form>
    </div>
  );
}
