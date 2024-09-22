import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Listings.css';

export default function Listings({ listings }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product Listings</h2>
      <div className="row tm-row">
        {listings.length === 0 ? (
          <p>No listings available</p>
        ) : (
          listings.map((listing, index) => (
            <article key={index} className="col-12 col-md-6 tm-post">
              <hr className="tm-hr-primary" />
              <div className="tm-post-link-inner">
                <h5 className="tm-pt-30 tm-color-primary tm-post-title">{listing.productName}</h5>
                <p className="tm-pt-30">
                  <strong>Seller:</strong> {listing.name} <br />
                  <strong>Email:</strong> {listing.email} <br />
                  <strong>Price:</strong> ${listing.price} <br />
                  <strong>Description:</strong> {listing.description}
                </p>
              </div>
              <hr />
            </article>
          ))
        )}
      </div>
      <div className="row tm-row tm-mt-100 tm-mb-75">
        <div className="tm-prev-next-wrapper"></div>
        <div className="tm-paging-wrapper">
          <nav className="tm-paging-nav d-inline-block">
            <ul></ul>
          </nav>
        </div>
      </div>
      <footer className="row tm-row">
        <hr className="col-12" />
        <div className="col-md-6 col-12 tm-color-gray"></div>
      </footer>
    </div>
  );
}
