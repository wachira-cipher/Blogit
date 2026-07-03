import React from "react";

export default function BasicInformationSection({ form, handleChange }) {
  return (
    <>
      <div className="card-title-head">
        <h6 className="fs-16 fw-bold mb-3">
          <span className="fs-16 me-2">
            <i className="ti ti-user"></i>
          </span>
          Basic Information
        </h6>
      </div>

      <div className="row mb-3">

        {/* FULL NAME (HYDRATED) */}
        <div className="col-md-4">
          <div className="mb-3">
            <label className="form-label">
              Full Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter full name"
            />
          </div>
        </div>

        {/* USERNAME */}
        <div className="col-md-4">
          <div className="mb-3">
            <label className="form-label">
              Username <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter username"
            />
          </div>
        </div>

        {/* PHONE */}
        <div className="col-md-4">
          <div className="mb-3">
            <label className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter phone number"
            />
          </div>
        </div>

        {/* EMAIL (HYDRATED - READONLY OPTIONAL) */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
}