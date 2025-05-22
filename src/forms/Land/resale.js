import React, { useState } from 'react';

const LandResaleForm = () => {
  const [formData, setFormData] = useState({
    Length: '',
    Width: '',
    PlotArea: '',
    Cent: '',
    Acre: '',
    District: '',
    Town: '',
    Street: '',
    PricePerCent: '',
    TotalPrice: '',
    PricePerSquareFeet: '',
    Description: '',
    PrimaryNumber: '',
    SecondaryNumber: '',
    images: []
  });

  const calculate = () => {
    const length = parseFloat(formData.Length) || 0;
    const width = parseFloat(formData.Width) || 0;
    const area = length * width;
    const cent = area / 435.6;
    const acre = area / 43560;
    const pricePerCent = parseFloat(formData.PricePerCent) || 0;
    const totalPrice = cent * pricePerCent;
    const pricePerSqFt = pricePerCent / 435.6;

    setFormData({
      ...formData,
      PlotArea: area.toFixed(2),
      Cent: cent.toFixed(2),
      Acre: acre.toFixed(2),
      TotalPrice: totalPrice.toFixed(2),
      PricePerSquareFeet: pricePerSqFt.toFixed(2)
    });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      if (key === 'images') {
        for (let i = 0; i < formData.images.length; i++) {
          data.append('images', formData.images[i]);
        }
      } else {
        data.append(key, formData[key]);
      }
    }
    // Use fetch or axios to send form data to your backend
    console.log("Submitting form data", formData);
  };

  return (
    <div className="container">
      <h3 className="alert alert-warning text-center">Land Resale</h3>
      <form className="form-inline" onSubmit={handleSubmit} encType="multipart/form-data">
        <h2 className="alert alert-primary">Property Details</h2>
        <div className="row">
          <div className="col-md-3">
            <label>Length<span className="text-danger">*</span></label>
            <div className="input-group mb-3">
              <input type="number" className="form-control" name="Length" value={formData.Length} onChange={handleChange} onKeyUp={calculate} required />
              <span className="input-group-text">ft.</span>
            </div>
          </div>
          <div className="col-md-3">
            <label>Width<span className="text-danger">*</span></label>
            <div className="input-group mb-3">
              <input type="number" className="form-control" name="Width" value={formData.Width} onChange={handleChange} onKeyUp={calculate} required />
              <span className="input-group-text">ft.</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label>Plot Area</label>
            <div className="input-group mb-3">
              <input type="number" className="form-control" value={formData.PlotArea} disabled />
              <span className="input-group-text">sq.ft</span>
            </div>
          </div>
          <div className="col-md-3">
            <label>Cent</label>
            <input type="number" className="form-control" value={formData.Cent} disabled />
          </div>
          <div className="col-md-3">
            <label>Acre</label>
            <input type="number" className="form-control" value={formData.Acre} disabled />
          </div>
        </div>

        <h4 className="alert alert-primary">Locality Details</h4>
        <div className="row">
          <div className="col-6">
            <label>District Name <span className="text-danger">*</span></label>
            <select name="District" className="form-control" onChange={handleChange} required>
              <option value="">--Choose--</option>
              <option value="Thoothukudi">Thoothukudi</option>
            </select>
          </div>
          <div className="col-6">
            <label>Town <span className="text-danger">*</span></label>
            <select name="Town" className="form-control" onChange={handleChange} required>
              <option value="">--Choose--</option>
              {["ALWARTHIRUNAGARI", "KARUNGULAM", "KAYATHAR", "KOVILPATTI", "OTTAPIDARAM", "PUDUR", "SATTANKULAM", "SRIVAIKUNDAM", "THOOTHUKUDI", "TIRUCHENDUR", "UDANGUDI", "VILATHIKULAM"].map(town => (
                <option key={town} value={town}>{town}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-6">
          <label>Landmark / Street <span className="text-danger">*</span></label>
          <input type="text" name="Street" className="form-control" placeholder="e.g. Toovipuram street" value={formData.Street} onChange={handleChange} required />
        </div>

        <h4 className="alert alert-primary">Resale Details</h4>
        <div className="row">
          <div className="col-6">
            <label>Price Per Cent<span className="text-danger">*</span></label>
            <input type="number" name="PricePerCent" className="form-control" value={formData.PricePerCent} onChange={handleChange} onKeyUp={calculate} required />
          </div>
          <div className="col-6">
            <label>Total Price</label>
            <input type="number" className="form-control" value={formData.TotalPrice} disabled />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <label>Price Per Square Feet</label>
            <input type="text" className="form-control" value={formData.PricePerSquareFeet} disabled />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <label>Description</label>
            <textarea name="Description" className="form-control" value={formData.Description} onChange={handleChange} rows="3" required></textarea>
          </div>
        </div>

        <h4 className="alert alert-primary">Property Images</h4>
        <input type="file" name="images" multiple accept="image/*" className="form-control" onChange={handleChange} />

        <h4 className="alert alert-primary">Contact Details</h4>
        <div className="row">
          <div className="col-6">
            <label>Primary Number<span className="text-danger">*</span></label>
            <input type="tel" name="PrimaryNumber" className="form-control" pattern="[0-9]{10}" value={formData.PrimaryNumber} onChange={handleChange} required />
          </div>
          <div className="col-6">
            <label>Secondary Number<span className="text-danger">*</span></label>
            <input type="tel" name="SecondaryNumber" className="form-control" pattern="[0-9]{10}" value={formData.SecondaryNumber} onChange={handleChange} required />
          </div>
        </div>

        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default LandResaleForm;