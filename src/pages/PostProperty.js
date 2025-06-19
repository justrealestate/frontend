import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import residentialImg from '../assets/images/residential.png';
import commercialImg from '../assets/images/commercial.png';
import landImg from '../assets/images/land.png';

const PropertyListings = () => {
  const [selected, setSelected] = useState('residential');

  return (
    <div className="container-fluid">
      <h3 className="alert alert-primary text-center">Property Listings</h3>
      <div className="btn-group" role="group" aria-label="Property Type Options">
        <input type="radio" className="btn-check" name="option" id="residential_option" autoComplete="off"
          checked={selected === 'residential'} onChange={() => setSelected('residential')} />
        <label className="btn btn-outline-primary" htmlFor="residential_option">Residential</label>

        <input type="radio" className="btn-check" name="option" id="commercial_option" autoComplete="off"
          checked={selected === 'commercial'} onChange={() => setSelected('commercial')} />
        <label className="btn btn-outline-primary" htmlFor="commercial_option">Commercial</label>

        <input type="radio" className="btn-check" name="option" id="land_option" autoComplete="off"
          checked={selected === 'land'} onChange={() => setSelected('land')} />
        <label className="btn btn-outline-primary" htmlFor="land_option">Land</label>
      </div>

      {/* Residential Section */}
      {selected === 'residential' && (
        <div id="residential">
          <div className="row">
            <h3 className="alert alert-warning text-center">Residential</h3>
            {['Rent', 'Resale', 'Lease'].map((type, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card">
                  <img src={residentialImg} className="card-img-top" alt="Residential" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Residential - {type}</h5>
                    <Link to={`/residential/${type.toLowerCase()}_form`} className="btn btn-primary">
                      Start Posting Your Ad For Free
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Commercial Section */}
      {selected === 'commercial' && (
        <div id="commercial">
          <div className="row">
            <h4 className="alert alert-warning text-center">Commercial</h4>
            {['Rent', 'Sale'].map((type, idx) => (
              <div className="col-md-6 mb-4" key={idx}>
                <div className="card">
                  <img src={commercialImg} className="card-img-top" alt="Commercial" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Commercial - {type}</h5>
                    <Link to={`/commercial/${type.toLowerCase()}_form`} className="btn btn-primary">
                      Start Posting Your Ad For Free
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Land Section */}
      {selected === 'land' && (
        <div id="land">
          <div className="row">
            <h3 className="alert alert-warning text-center">Land/Plot</h3>
            {['Rent', 'Resale', 'Lease'].map((type, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card">
                  <img src={landImg} className="card-img-top" alt="Land" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Land/Plot - {type}</h5>
                    <Link to={`/land/${type.toLowerCase()}_form`} className="btn btn-primary">
                      Start Posting Your Ad For Free
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyListings;
