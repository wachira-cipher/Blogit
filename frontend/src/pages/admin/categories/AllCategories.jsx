import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import AddCategoryModal from "./components/AddCategoryModal";
import EditCategoryModal from "./components/EditCategoryModal";
import DeleteCategoryModal from "./components/DeleteCategoryModal";
import TableHeader from "../TableHeader";

import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} from "../../../api/category.api";

export default function AllCategories() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [selected, setSelected] = useState([]);

    const [form, setForm] = useState({
        name: "",
        slug: "",
        status: true
    });

    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const filteredCategories = categories.filter((cat) => {
        const matchesSearch =
            cat.name.toLowerCase().includes(search.toLowerCase()) ||
            cat.slug.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "All"
                ? true
                : statusFilter === "Active"
                    ? cat.status === true
                    : cat.status === false;

        return matchesSearch && matchesStatus;
    });

    // =========================
    // FETCH CATEGORIES (DB)
    // =========================
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            setLoading(true);

            const res = await getCategories();

            setCategories(res.data);

        } catch (error) {
            console.log("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // CHECKBOX HANDLERS
    // =========================
    const toggleAll = () => {
        if (selected.length === categories.length) {
            setSelected([]);
        } else {
            setSelected(categories.map(item => item._id));
        }
    };

    const toggleOne = (id) => {
        setSelected(prev =>
            prev.includes(id)
                ? prev.filter(x => x !== id)
                : [...prev, id]
        );
    };

    // =========================
    // FORM HANDLER (FIXED)
    // =========================
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // =========================
    // ADD CATEGORY (API)
    // =========================
    const addCategory = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                name: form.name,
                slug: form.slug,
                status: form.status
            };

            const res = await createCategory(payload);

            setCategories(prev => [...prev, res.data]);

            setForm({
                name: "",
                slug: "",
                status: true
            });

        } catch (error) {
            console.log("Add error:", error);
        }
    };

    // =========================
    // OPEN EDIT
    // =========================
    const editCategory = (category) => {
        setEditId(category._id);

        setForm({
            name: category.name,
            slug: category.slug,
            status: category.status === "Active"
        });
    };

    // =========================
    // UPDATE CATEGORY (API)
    // =========================
    const updateCategoryHandler = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                name: form.name,
                slug: form.slug,
                status: form.status
            };

            const res = await updateCategory(editId, payload);

            setCategories(prev =>
                prev.map(item =>
                    item._id === editId ? res.data : item
                )
            );

            setEditId(null);

        } catch (error) {
            console.log("Update error:", error);
        }
    };

    // =========================
    // DELETE CATEGORY (API)
    // =========================
    const deleteCategoryHandler = async () => {
        try {
            await deleteCategory(deleteId);

            setCategories(prev =>
                prev.filter(item => item._id !== deleteId)
            );

            setDeleteId(null);

            toast.success("Category deleted successfully");

        } catch (error) {
            console.log("Delete error:", error);

            const message =
                error?.response?.data?.message ||
                error?.message ||
                "Failed to delete category";

            toast.error(message);
        }
    };

    // =========================
    // UI
    // =========================
    return (
        <>
            {/* HEADER */}
            <div className="page-header">

                <div className="add-item d-flex">
                    <div className="page-title">
                        <h4 className="fw-bold">Category</h4>
                        <h6>Manage your categories</h6>
                    </div>
                </div>
                <ul className="table-top-head">
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="/assets/auth/img/icons/pdf.svg" alt="img" /></a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="/assets/auth/img/icons/excel.svg" alt="img" /></a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i className="ti ti-refresh"></i></a>
                    </li>
                    <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"><i className="ti ti-chevron-up"></i></a>
                    </li>
                </ul>
                <div className="page-btn">
                    <a
                        href="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add-category"
                    >
                        <i className="ti ti-circle-plus me-1" />
                        Add Category
                    </a>
                </div>

            </div>

            {/* TABLE */}
            <div className="card">
                <TableHeader
                    onSearch={(value) => setSearch(value)}
                    onStatusFilter={(status) => setStatusFilter(status)}
                    statusOptions={["All", "Active", "Inactive"]}
                />

                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table datatable">

                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            checked={
                                                selected.length === categories.length &&
                                                categories.length > 0
                                            }
                                            onChange={toggleAll}
                                        />
                                    </th>

                                    <th>Category</th>
                                    <th>Slug</th>
                                    <th>Status</th>
                                    <th>Created at</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {categories.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4">
                                            <span className="text-muted">
                                                No categories found.
                                            </span>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredCategories.map(category => (
                                        <tr key={category._id}>

                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={selected.includes(category._id)}
                                                    onChange={() => toggleOne(category._id)}
                                                />
                                            </td>

                                            <td>{category.name}</td>
                                            <td>{category.slug}</td>

                                            <td>
                                                <span
                                                    className={`badge fw-medium fs-10 ${category.status ? "bg-success" : "bg-danger"
                                                        }`}
                                                >
                                                    {category.status ? "Active" : "Inactive"}
                                                </span>
                                            </td>

                                            {/* CREATED AT */}
                                            <td>
                                                {new Date(category.createdAt).toLocaleDateString()}
                                            </td>

                                            <td className="action-table-data">
                                                <div className="edit-delete-action">

                                                    {/* EDIT */}
                                                    <a
                                                        className="me-2 p-2"
                                                        href="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#edit-category"
                                                        onClick={() => editCategory(category)}
                                                    >
                                                        <i data-feather="edit" className="bi bi-pencil-square"></i>
                                                    </a>

                                                    {/* DELETE */}
                                                    <a
                                                        className="p-2"
                                                        href="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#delete-modal"
                                                        onClick={() => setDeleteId(category._id)}
                                                    >
                                                        <i data-feather="trash-2" className="bi bi-trash3"></i>
                                                    </a>

                                                </div>
                                            </td>

                                        </tr>
                                    ))
                                )}
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

            {/* MODALS */}
            <AddCategoryModal
                form={form}
                setForm={setForm}
                onSuccess={(newCat) =>
                    setCategories(prev => [...prev, newCat])
                }
            />

            <EditCategoryModal
                form={form}
                setForm={setForm}
                editId={editId}
                updateCategory={updateCategoryHandler}
            />

            <DeleteCategoryModal
                deleteCategory={deleteCategoryHandler}
            />
        </>
    );
}