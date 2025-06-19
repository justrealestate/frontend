import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function PropertyListOut() {
    return (
        <div className='container-fluid' >
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" className="card-img-top" alt="Property" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <Link to="#" className="card-link">Card link</Link>
                            <Link to="#" className="card-link">Another link</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" className="card-img-top" alt="Property" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <Link to="#" className="card-link">Card link</Link>
                            <Link to="#" className="card-link">Another link</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" className="card-img-top" alt="Property" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <Link to="#" className="card-link">Card link</Link>
                            <Link to="#" className="card-link">Another link</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className="card">
                        <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" className="card-img-top" alt="Property" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <Link to="#" className="card-link">Card link</Link>
                            <Link to="#" className="card-link">Another link</Link>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default PropertyListOut;
