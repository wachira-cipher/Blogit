import React, { useMemo } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

export default function AddressInformationSection({
  form,
  handleChange,
  setForm,
}) {
  // =========================
  // COUNTRY OPTIONS
  // =========================
  const countryOptions = useMemo(() => {
    return Country.getAllCountries().map((c) => ({
      label: c.name,
      value: c.isoCode,
    }));
  }, []);

  // =========================
  // STATE OPTIONS
  // =========================
  const stateOptions = useMemo(() => {
    if (!form.country) return [];

    return State.getStatesOfCountry(form.country).map((s) => ({
      label: s.name,
      value: s.isoCode,
    }));
  }, [form.country]);

  // =========================
  // CITY OPTIONS
  // =========================
  const cityOptions = useMemo(() => {
    if (!form.country || !form.state) return [];

    return City.getCitiesOfState(form.country, form.state).map((c) => ({
      label: c.name,
      value: c.name,
    }));
  }, [form.country, form.state]);

  return (
    <>
      <div className="card-title-head">
        <h6 className="fs-16 fw-bold mb-3">
          <span className="fs-16 me-2">
            <i className="ti ti-map-pin"></i>
          </span>
          Address Information
        </h6>
      </div>

      <div className="row">

        {/* ADDRESS */}
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              value={form.address || ""}
              onChange={handleChange}
              className="form-control"
              placeholder="Street, building, area..."
            />
          </div>
        </div>

        {/* COUNTRY */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Country</label>

            <Select
              options={countryOptions}
              value={
                countryOptions.find(
                  (c) => c.value === form.country
                ) || null
              }
              onChange={(selected) =>
                setForm((prev) => ({
                  ...prev,
                  country: selected?.value || "",
                  state: "",
                  city: "",
                }))
              }
              placeholder="Search country..."
              isClearable
            />
          </div>
        </div>

        {/* STATE */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">State</label>

            <Select
              options={stateOptions}
              value={
                stateOptions.find(
                  (s) => s.value === form.state
                ) || null
              }
              onChange={(selected) =>
                setForm((prev) => ({
                  ...prev,
                  state: selected?.value || "",
                  city: "",
                }))
              }
              placeholder="Search state..."
              isDisabled={!form.country}
              isClearable
            />
          </div>
        </div>

        {/* CITY */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">City</label>

            <Select
              options={cityOptions}
              value={
                cityOptions.find(
                  (c) => c.value === form.city
                ) || null
              }
              onChange={(selected) =>
                setForm((prev) => ({
                  ...prev,
                  city: selected?.value || "",
                }))
              }
              placeholder="Search city..."
              isDisabled={!form.state}
              isClearable
            />
          </div>
        </div>

        {/* POSTAL CODE */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Postal Code</label>

            <input
              type="text"
              name="postalCode"
              value={form.postalCode || ""}
              onChange={handleChange}
              className="form-control"
              placeholder="Postal / ZIP code"
            />
          </div>
        </div>

      </div>
    </>
  );
}