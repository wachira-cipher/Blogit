import React from "react";

import { Link } from "react-router-dom";

export default function BlogHeader() {
    return (
        <div className="page-header">

            {/* Title */}
            <div className="add-item d-flex">
                <div className="page-title">
                    <h4>Blogs</h4>
                    <h6>Manage your blogs</h6>
                </div>
            </div>


            {/* Top actions */}
            <ul className="table-top-head">

                <li>
                    <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Pdf"
                    >
                        <img
                            src="/assets/auth/img/icons/pdf.svg"
                            alt="pdf"
                        />
                    </a>
                </li>


                <li>
                    <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Excel"
                    >
                        <img
                            src="/assets/auth/img/icons/excel.svg"
                            alt="excel"
                        />
                    </a>
                </li>


                <li>
                    <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Refresh"
                    >
                        <i className="ti ti-refresh"></i>
                    </a>
                </li>


                <li>
                    <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Collapse"
                        id="collapse-header"
                    >
                        <i className="ti ti-chevron-up"></i>
                    </a>
                </li>


            </ul>



            {/* Add Blog Button */}
            <div className="page-btn">
                <Link to="/posts/create-post" className="btn btn-primary">
                    <i className="ti ti-circle-plus me-1"></i>
                    Add Blog
                </Link>
            </div>


        </div>
    );
}