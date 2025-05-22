import React, { useState, useEffect } from "react";
import { useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ResidentialRentForm = () => {
    const [formData, setFormData] = useState({
        BhkType: "",
        Floor: "",
        HouseType: "",
        Parking: "",
        Terrace: "",
        Hall: "",
        Bedroom: "",
        Bathroom: "",
        District: "",
        Town: "",
        Street: "",
        ExpectedRent: "",
        ExpectedDepositMonths: "",
        ExpectedDeposit: "",
        Maintenance: "",
        PreferredTenants: "",
        Terms: "",
        PrimaryNumber: "",
        SecondaryNumber: "",
    });

    const [errors, setErrors] = useState({});
    const [images, setImages] = useState([]);
    const [zoomedImage, setZoomedImage] = useState(null);
    const fileInputRef = useRef(null);


    const options = {
        bhkTypes: ["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"],
        floors: ["Ground Floor", "1 Floor", "2 Floor", "3 Floor", "4 Floor", "Above 4 Floor"],
        houseTypes: ["Separate House", "Apartment", "Colony", "Joint Houses"],
        yesNo: ["Yes", "No"],
        halls: ["No Hall", "1", "2", "3+"],
        bedrooms: ["No Bedroom", "1", "2", "3+"],
        bathrooms: ["1", "2", "3+"],
        districts: ["Thoothukudi"],
        towns: ["Thoothukudi"],
        streets: ["Meenakshipuram", "Muthamil Nagar", "Periyasamy Colony"],
        depositMonths: Array.from({ length: 13 }, (_, i) => String(i)),
        maintenance: ["Maintenance Include", "Maintenance Extra"],
        preferredTenants: ["Anyone", "Family", "Bachelor(Female)", "Bachelor(Male)"],
    };

    const calculateDeposit = (rent, months) => {
        const r = Number(rent);
        const m = Number(months);
        return !isNaN(r) && !isNaN(m) ? r * m : "";
    };

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            ExpectedDeposit: calculateDeposit(prev.ExpectedRent, prev.ExpectedDepositMonths),
        }));
    }, [formData.ExpectedRent, formData.ExpectedDepositMonths]);

    const validate = (data) => {
        const requiredFields = [
            "BhkType", "Floor", "HouseType", "Parking", "Terrace", "Hall",
            "Bedroom", "Bathroom", "District", "Town", "Street", "ExpectedRent",
            "ExpectedDepositMonths", "Maintenance", "PreferredTenants",
            "PrimaryNumber", "SecondaryNumber"
        ];
        const newErrors = {};

        requiredFields.forEach((field) => {
            if (!data[field]) newErrors[field] = "Required";
        });

        if (data.ExpectedRent && Number(data.ExpectedRent) <= 0)
            newErrors.ExpectedRent = "Must be > 0";

        if (data.ExpectedDepositMonths && (Number(data.ExpectedDepositMonths) < 0 || Number(data.ExpectedDepositMonths) > 12))
            newErrors.ExpectedDepositMonths = "Must be between 0 and 12";

        if (!/^\d{10}$/.test(data.PrimaryNumber)) newErrors.PrimaryNumber = "Enter valid 10-digit number";
        if (!/^\d{10}$/.test(data.SecondaryNumber)) newErrors.SecondaryNumber = "Enter valid 10-digit number";

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...newFiles]);
    };

    const handleImageDelete = (indexToDelete) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== indexToDelete));
    };



    const handleZoom = (src) => setZoomedImage(src);

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length) {
            alert("Please correct the highlighted errors.");
            return;
        }

        console.log("Submitted Data:", formData);
        alert("Form Submitted Successfully ✅");
    };

    const renderSelect = (label, name, list) => (
        <div className="col-md-4 mb-3">
            <label>{label} <span className="text-danger">*</span></label>
            <select
                name={name}
                className={`form-control ${errors[name] ? "is-invalid" : ""}`}
                value={formData[name]}
                onChange={handleChange}
            >
                <option value="">--Select--</option>
                {list.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
        </div>
    );

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <h3 className="alert alert-warning">Residential Rent Form</h3>

                <h4 className="alert alert-primary">Property Details</h4>
                <div className="row">
                    {renderSelect("BHK Type", "BhkType", options.bhkTypes)}
                    {renderSelect("Floor For Rent", "Floor", options.floors)}
                    {renderSelect("House Type", "HouseType", options.houseTypes)}
                    {renderSelect("Parking", "Parking", options.yesNo)}
                    {renderSelect("Terrace", "Terrace", options.yesNo)}
                    {renderSelect("Hall", "Hall", options.halls)}
                    {renderSelect("Bedroom", "Bedroom", options.bedrooms)}
                    {renderSelect("Bathroom", "Bathroom", options.bathrooms)}
                </div>

                <h4 className="alert alert-primary">Locality Details</h4>
                <div className="row">
                    {renderSelect("District", "District", options.districts)}
                    {renderSelect("Town", "Town", options.towns)}
                    {renderSelect("Street", "Street", options.streets)}
                </div>

                <h4 className="alert alert-primary">Rental Details</h4>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Expected Rent <span className="text-danger">*</span></label>
                        <div className="input-group">
                            <span className="input-group-text">₹</span>
                            <input
                                type="number"
                                name="ExpectedRent"
                                className={`form-control ${errors.ExpectedRent ? "is-invalid" : ""}`}
                                value={formData.ExpectedRent}
                                onChange={handleChange}
                            />
                            <span className="input-group-text">/Month</span>
                        </div>
                        {errors.ExpectedRent && <div className="text-danger">{errors.ExpectedRent}</div>}
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>Expected Deposit Months <span className="text-danger">*</span></label>
                        <select
                            name="ExpectedDepositMonths"
                            className={`form-control ${errors.ExpectedDepositMonths ? "is-invalid" : ""}`}
                            value={formData.ExpectedDepositMonths}
                            onChange={handleChange}
                        >
                            <option value="">--Select--</option>
                            {options.depositMonths.map((m) => (
                                <option key={m} value={m}>{m === "0" ? "No Deposit" : `${m} Month(s)`}</option>
                            ))}
                        </select>
                        {errors.ExpectedDepositMonths && <div className="text-danger">{errors.ExpectedDepositMonths}</div>}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Expected Deposit</label>
                        <div className="input-group">
                            <span className="input-group-text">₹</span>
                            <input type="number" className="form-control" value={formData.ExpectedDeposit} readOnly />
                        </div>
                    </div>
                    {renderSelect("Monthly Maintenance", "Maintenance", options.maintenance)}
                </div>

                <h4 className="alert alert-primary">Tenant Requirements</h4>
                <div className="row">
                    {renderSelect("Preferred Tenants", "PreferredTenants", options.preferredTenants)}
                </div>
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label>Terms and Conditions</label>
                        <textarea
                            name="Terms"
                            className="form-control"
                            rows="3"
                            value={formData.Terms}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <h4 className="alert alert-primary">Upload Images</h4>
                <div className="mb-3">
                    <input type="file" className="form-control" multiple accept="image/*" onChange={handleImageChange} />
                </div>
                <div className="mb-3">
                    <label><strong>Upload / Add More Images</strong></label><br />
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => fileInputRef.current.click()}
                    >
                        <i className="bi bi-image"></i> Select Images
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="d-none"
                        multiple
                        accept="image/*"
                        onChange={(e) => {
                            const newFiles = Array.from(e.target.files);
                            setImages((prevImages) => [...prevImages, ...newFiles]);
                            e.target.value = null; // Reset input after selection
                        }}
                    />
                </div>


                <div className="row">
                    {images.map((file, index) => (
                        <div className="col-6 col-md-3 mb-3 position-relative" key={index}>
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`preview-${index}`}
                                className="img-thumbnail"
                                style={{ cursor: "zoom-in", height: "150px", objectFit: "cover", width: "100%" }}
                                onClick={() => handleZoom(URL.createObjectURL(file))}
                            />
                            <button
                                type="button"
                                className="btn btn-sm btn-danger position-absolute top-0 end-0"
                                title="Delete"
                                onClick={() => handleImageDelete(index)}
                                style={{ transform: "translate(30%, -30%)", zIndex: 2 }}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>



                <h4 className="alert alert-primary">Contact Details</h4>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label>Primary Number <span className="text-danger">*</span></label>
                        <input
                            type="tel"
                            name="PrimaryNumber"
                            className={`form-control ${errors.PrimaryNumber ? "is-invalid" : ""}`}
                            value={formData.PrimaryNumber}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                        />
                        {errors.PrimaryNumber && <div className="text-danger">{errors.PrimaryNumber}</div>}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label>Secondary Number <span className="text-danger">*</span></label>
                        <input
                            type="tel"
                            name="SecondaryNumber"
                            className={`form-control ${errors.SecondaryNumber ? "is-invalid" : ""}`}
                            value={formData.SecondaryNumber}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                        />
                        {errors.SecondaryNumber && <div className="text-danger">{errors.SecondaryNumber}</div>}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

                {/* Image Zoom Modal */}
                {zoomedImage && (
                    <div className="modal show d-block" tabIndex="-1" onClick={() => setZoomedImage(null)}>
                        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Zoomed Image</h5>
                                    <button type="button" className="btn-close" onClick={() => setZoomedImage(null)}></button>
                                </div>
                                <div className="modal-body">
                                    <img src={zoomedImage} alt="Zoom" className="img-fluid w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ResidentialRentForm;
