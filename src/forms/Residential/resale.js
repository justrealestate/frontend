import React, { useState, useEffect } from 'react';


const ResidentialResaleForm = ({ districtData }) => {
  const [formData, setFormData] = useState({
    BhkType: '',
    TotalFloor: '',
    PropertyAge: '',
    HouseLength: '',
    HouseWidth: '',
    HousePlotArea: '',
    HouseCent: '',
    LandLength: '',
    LandWidth: '',
    LandPlotArea: '',
    LandCent: '',
    Parking: '',
    Terrace: '',
    Hall: '',
    Bedroom: '',
    Bathroom: '',
    District: '',
    Town: '',
    Street: '',
    ExpectedPrice: '',
    Description: '',
    PrimaryNumber: '',
    images: []
  });

  const calculateArea = () => {
    const houseArea = (parseFloat(formData.HouseLength) || 0) * (parseFloat(formData.HouseWidth) || 0);
    const houseCent = houseArea / 435.6;
    const landArea = (parseFloat(formData.LandLength) || 0) * (parseFloat(formData.LandWidth) || 0);
    const landCent = landArea / 435.6;

    setFormData(prev => ({
      ...prev,
      HousePlotArea: houseArea.toFixed(2),
      HouseCent: houseCent.toFixed(2),
      LandPlotArea: landArea.toFixed(2),
      LandCent: landCent.toFixed(2)
    }));
  };

  useEffect(() => {
    calculateArea();
  }, [formData.HouseLength, formData.HouseWidth, formData.LandLength, formData.LandWidth]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({ ...prev, images: files }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'images') {
        for (let i = 0; i < value.length; i++) {
          data.append('images', value[i]);
        }
      } else {
        data.append(key, value);
      }
    });
    // Send data using fetch or axios
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
        <h3 className="alert alert-warning">Residential Resale</h3>

        <h4 className="alert alert-primary">Property Details</h4>
        <h6 className="alert alert-info">House</h6>
        <hr />
        <div className="row">
          {/* BHK Type */}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="BhkType">BHK Type <span className="text-danger">*</span></label>
              <select name="BhkType" id="BhkType" className="form-control" value={formData.BhkType} onChange={handleChange}>
                <option disabled>Select</option>
                {['1 RK','1 BHK','2 BHK','3 BHK','4 BH','4+ BH'].map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Total Floor */}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="TotalFloor">Total Floor<span className="text-danger">*</span></label>
              <select name="TotalFloor" id="TotalFloor" className="form-control" value={formData.TotalFloor} onChange={handleChange}>
                <option disabled>Select</option>
                {['No Floor','1','2','3','4+'].map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Property Age */}
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="PropertyAge">Property Age<span className="text-danger">*</span></label>
              <select name="PropertyAge" id="PropertyAge" className="form-control" value={formData.PropertyAge} onChange={handleChange}>
                <option disabled>Select</option>
                {['Less than a Year','1 to 3 Years','3 to 5 Years','5 to 10 Years','More than 10 Years'].map(val => (
                  <option key={val} value={val}>{val}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* House dimensions */}
        <div className="row">
          {['HouseLength','HouseWidth'].map((field, idx) => (
            <div className="col-md-4" key={field}>
              <div className="form-group">
                <label htmlFor={field}>{field.replace('House', 'House ')}<span className="text-danger">*</span></label>
                <div className="input-group">
                  <input
                    type="number"
                    name={field}
                    id={field}
                    className="form-control"
                    placeholder={field.includes('Length') ? 'Length' : 'Width'}
                    min="1"
                    step="0.01"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                  <span className="input-group-text">ft.</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="HousePlotArea">Plot Area</label>
              <div className="input-group mb-3">
                <input type="number" className="form-control" id="HousePlotArea" name="HousePlotArea" value={formData.HousePlotArea} readOnly />
                <span className="input-group-text">sq.ft</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="HouseCent">Cent</label>
              <div className="input-group mb-3">
                <input type="number" className="form-control" id="HouseCent" name="HouseCent" value={formData.HouseCent} readOnly />
              </div>
            </div>
          </div>
        </div>

        {/* Repeat same structure for Land, Amenities, Locality, Resale, and Contact sections */}

        <h4 className="alert alert-primary">Upload Images</h4>
        <div className="input-group mb-3">
          <input type="file" className="form-control" name="images" id="imageInput" multiple accept="image/*" onChange={handleChange} />
          <label className="input-group-text btn btn-primary" htmlFor="imageInput">Upload</label>
        </div>

        <hr />
        <h4 className="alert alert-primary">Contact Details</h4>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="PrimaryNumber">Primary Number<span className="text-danger">*</span></label>
              <input
                type="tel"
                name="PrimaryNumber"
                id="PrimaryNumber"
                className="form-control"
                placeholder="Enter Mobile Number"
                pattern="[0-9]{10}"
                value={formData.PrimaryNumber}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ResidentialResaleForm;