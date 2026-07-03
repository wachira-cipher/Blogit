import React, { useState } from "react";
import { toast } from "react-toastify";

import { createCategory } from "../../../../api/category.api";

export default function AddCategoryModal({
    form,
    setForm,
    onSuccess
}) {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // frontend validation
        if (!form.name || !form.slug) {
            toast.warn("Please fill all required fields *");
            return;
        }

        try {
            setLoading(true);

            const payload = {
                name: form.name,
                slug: form.slug,
                status: form.status
            };

            const res = await createCategory(payload);

            // success toast
            toast.success("Category created successfully");

            // update parent state
            if (onSuccess) {
                onSuccess(res.data);
            }

            // reset form
            setForm({
                name: "",
                slug: "",
                status: true,
            });

            // close modal safely
            const modalEl = document.getElementById("add-category");

            const modalInstance =
                window.bootstrap?.Modal.getOrCreateInstance(modalEl);

            modalInstance?.hide();

            // cleanup stuck backdrop (IMPORTANT)
            setTimeout(() => {
                document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
                document.body.classList.remove("modal-open");
                document.body.style.removeProperty("padding-right");
            }, 300);

        } catch (error) {

            // SAFE error handling
            const message =
                error?.response?.data?.message ||
                error?.message ||
                "Failed to create category";

            toast.error(message);

            console.log("Create category error:", error);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal fade" id="add-category">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    {/* HEADER */}
                    <div className="modal-header">
                        <div className="page-title">
                            <h4>Add Category</h4>
                        </div>

                        <button
                            type="button"
                            className="close bg-danger text-white fs-16"
                            data-bs-dismiss="modal"
                        >
                            <span>&times;</span>
                        </button>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">

                            <div className="mb-3">
                                <label className="form-label">
                                    Category <span className="text-danger ms-1">*</span>
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Category Slug <span className="text-danger ms-1">*</span>
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={form.slug}
                                    onChange={(e) =>
                                        setForm({ ...form, slug: e.target.value })
                                    }
                                />
                            </div>

                            <div className="mb-0">
                                <div className="status-toggle modal-status d-flex justify-content-between align-items-center">

                                    <span className="status-label">
                                        Status <span className="text-danger ms-1">*</span>
                                    </span>

                                    <input
                                        type="checkbox"
                                        id="user2"
                                        className="check"
                                        checked={form.status}
                                        onChange={(e) =>
                                            setForm({ ...form, status: e.target.checked })
                                        }
                                    />

                                    <label htmlFor="user2" className="checktoggle" />

                                </div>
                            </div>

                        </div>

                        {/* FOOTER */}
                        <div className="modal-footer">

                            <button
                                type="button"
                                className="btn me-2 btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {loading ? "Saving..." : "Add Category"}
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}