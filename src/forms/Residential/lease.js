import React, { useState } from "react";

const ResidentialLeaseForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (e.target.type === "file") {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      if (key === "images") {
        Array.from(formData[key]).forEach((file) => data.append("images", file));
      } else {
        data.append(key, formData[key]);
      }
    }
    fetch("/api/submit-residential-lease", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
        <h3 className="alert alert-warning">Residential Lease</h3>

        <h4 className="alert alert-primary">Property Details</h4>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <label>BHK Type <span className="text-danger">*</span></label>
            <select name="BhkType" className="form-control" onChange={handleChange} required>
              <option value="">Select</option>
              {['1 RK','1 BHK','2 BHK','3 BHK','4 BH','4+ BH'].map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label>Floor For Rent <span className="text-danger">*</span></label>
            <select name="Floor" className="form-control" onChange={handleChange} required>
              <option value="">Select</option>
              {['Ground Floor','1 Floor','2 Floor','3 Floor','4 Floor','Above 4 Floor'].map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div><br />

        <div className="row">
          <div className="col-md-4">
            <label>House Type <span className="text-danger">*</span></label>
            <select name="HouseType" className="form-control" onChange={handleChange} required>
              <option value="">Select</option>
              {['Separate House','Apartment','Colony','Join Houses'].map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label>Parking <span className="text-danger">*</span></label>
            <select name="Parking" className="form-control" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-md-4">
            <label>Terrace <span className="text-danger">*</span></label>
            <select name="Terrace" className="form-control" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="row">
          {['Hall','Bedroom','Bathroom'].map((label) => (
            <div className="col-md-4" key={label}>
              <label>{label} <span className="text-danger">*</span></label>
              <select name={label} className="form-control" onChange={handleChange} required>
                <option value="">--Select--</option>
                {label === 'Hall' || label === 'Bedroom' ? ["No Hall","1","2","3+"].map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                )) : ["1","2","3+"].map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <hr />
        <h4 className="alert alert-primary">Locality Details</h4>
        <div className="row">
          <div className="col-md-6">
            <label>City <span className="text-danger">*</span></label>
            <select name="District" className="form-control" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Thoothukudi">Thoothukudi</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Town <span className="text-danger">*</span></label>
            <select name="Town" className="form-control" onChange={handleChange} required>
              <option value="">--Choose--</option>
              {["ALWARTHIRUNAGARI","KARUNGULAM","KAYATHAR","KOVILPATTI","OTTAPIDARAM","PUDUR","SATTANKULAM","SRIVAIKUNDAM","THOOTHUKUDI","TIRUCHENDUR","UDANGUDI","VILATHIKULAM"].map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Landmark / Street <span className="text-danger">*</span></label>
            <input type="text" name="Street" className="form-control" placeholder="KVK Nagar" onChange={handleChange} required />
          </div>
        </div>

        <hr />
        <h4 className="alert alert-primary">Lease Details</h4>
        <div className="row">
          <div className="col-md-6">
            <label>Expected Lease Amount <span className="text-danger">*</span></label>
            <div className="input-group mb-3">
              <span className="input-group-text">₹</span>
              <input type="number" name="ExpectedLease" className="form-control" min="1" placeholder="Enter Amount" onChange={handleChange} required />
              <span className="input-group-text">/Month</span>
            </div>
          </div>
          <div className="col-md-6">
            <label>Expected Lease Duration <span className="text-danger">*</span></label>
            <select name="ExpectedLeaseDuration" className="form-control" onChange={handleChange} required>
              <option value="">--Select--</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={`${i + 1} Year`}>{i + 1} Year</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Monthly Maintenance</label>
            <select name="Maintenance" className="form-control" onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Maintenance Include">Maintenance Include</option>
              <option value="Maintenance Extra">Maintenance Extra</option>
            </select>
          </div>
        </div>

        <hr />
        <h4 className="alert alert-primary">Tenant Requirements</h4>
        <div className="form-group">
          <label>Terms and Conditions</label>
          <textarea name="Terms" rows="3" className="form-control" onChange={handleChange} required></textarea>
        </div>

        <hr />
        <h4 className="alert alert-primary">Upload Images</h4>
        <input type="file" name="images" className="form-control" multiple accept="image/*" onChange={handleChange} />

        <hr />
        <h4 className="alert alert-primary">Contact Details</h4>
        <div className="row">
          <div className="col-md-6">
            <label>Primary Number <span className="text-danger">*</span></label>
            <input type="tel" name="PrimaryNumber" className="form-control" pattern="[0-9]{10}" placeholder="Enter Mobile Number" onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Secondary Number <span className="text-danger">*</span></label>
            <input type="tel" name="SecondaryNumber" className="form-control" pattern="[0-9]{10}" placeholder="Enter Secondary Mobile Number" onChange={handleChange} required />
          </div>
        </div>

        <hr />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ResidentialLeaseForm;