import React, { useState, useEffect, useRef } from "react";

export default function TableHeader({
    onSearch,
    onStatusFilter,
    activeStatus = "All",
    statusOptions = ["All", "Active", "Inactive"],
    titleRightContent
}) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value) => {
        onStatusFilter?.(value);
        setOpen(false);
    };

    return (
        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">

            {/* SEARCH */}
            <div className="search-set">
                <div className="search-input">

                    <input
                        type="text"
                        className="form-control form-control-sm search-field"
                        placeholder="Search..."
                        onChange={(e) => onSearch?.(e.target.value)}
                    />

                    <span className="btn-searchset">
                        <i className="ti ti-search fs-14 feather-search"></i>
                    </span>

                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="d-flex table-dropdown align-items-center flex-wrap row-gap-3">

                {/* STATUS DROPDOWN (PURE REACT) */}
                <div className="dropdown" ref={dropdownRef}>

                    <button
                        type="button"
                        className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                        onClick={() => setOpen(!open)}
                    >
                        Status
                    </button>

                    <ul
                        className={`dropdown-menu dropdown-menu-end p-3 ${open ? "show" : ""}`}
                        style={{ display: open ? "block" : "none" }}
                    >
                        {statusOptions.map((item) => (
                            <li key={item}>
                                <a
                                    href="javascript:void(0)"
                                    className={`dropdown-item rounded-1 ${activeStatus === item ? "active fw-bold" : ""
                                        }`}
                                    onClick={() => handleSelect(item)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* RIGHT CUSTOM CONTENT */}
                {titleRightContent && (
                    <div className="ms-2">
                        {titleRightContent}
                    </div>
                )}

            </div>
        </div>
    );
}