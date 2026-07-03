import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import AddTagModal from "./components/AddTagModal";
import EditTagModal from "./components/EditTagModal";
import DeleteTagModal from "./components/DeleteTagModal";
import TableHeader from "../TableHeader";

import {
  getTags,
  createTag,
  updateTag,
  deleteTag
} from "../../../api/tag.api";

export default function AllTags() {

  const [tags, setTags] = useState([]);
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

  // =========================
  // FILTERED TAGS
  // =========================
  const filteredTags = tags.filter((tag) => {

    const matchesSearch =
      tag.name.toLowerCase().includes(search.toLowerCase()) ||
      tag.slug.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All"
        ? true
        : statusFilter === "Active"
          ? tag.status === true
          : tag.status === false;

    return matchesSearch && matchesStatus;
  });

  // =========================
  // FETCH TAGS
  // =========================
  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      setLoading(true);

      const res = await getTags();
      setTags(res.data);

    } catch (error) {
      console.log("Fetch tags error:", error);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // SELECT HANDLERS
  // =========================
  const toggleAll = () => {
    if (selected.length === tags.length) {
      setSelected([]);
    } else {
      setSelected(tags.map(t => t._id));
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
  // FORM HANDLER
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

 

  // =========================
  // OPEN EDIT
  // =========================
  const openEdit = (tag) => {
    setEditId(tag._id);

    setForm({
      name: tag.name,
      slug: tag.slug,
      status: tag.status === true
    });
  };

  // =========================
  // UPDATE TAG
  // =========================
  const updateTagHandler = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: form.name,
        slug: form.slug,
        status: form.status
      };

      const res = await updateTag(editId, payload);

      setTags(prev =>
        prev.map(t =>
          t._id === editId ? res.data : t
        )
      );

      setEditId(null);

      toast.success("Tag updated successfully");

    } catch (error) {
      console.log(error);
      toast.error("Update failed");
    }
  };

  // =========================
  // DELETE TAG
  // =========================
  const deleteTagHandler = async () => {
    try {
      await deleteTag(deleteId);

      setTags(prev =>
        prev.filter(t => t._id !== deleteId)
      );

      setDeleteId(null);

      toast.success("Tag deleted successfully");

    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  // =========================
  // UI
  // =========================
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <div className="page-title">
          <h4 className="fw-bold">Tags</h4>
          <h6>Manage your tags</h6>
        </div>

        <div className="page-btn">
          <a
            href="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-tag"
          >
            <i className="ti ti-circle-plus me-1" />
            Add Tag
          </a>
        </div>
      </div>

      {/* TABLE */}
      <div className="card">

        <TableHeader
          onSearch={setSearch}
          onStatusFilter={setStatusFilter}
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
                      checked={selected.length === tags.length && tags.length > 0}
                      onChange={toggleAll}
                    />
                  </th>

                  <th>Tag</th>
                  <th>Slug</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                {filteredTags.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No tags found
                    </td>
                  </tr>
                ) : (

                  filteredTags.map(tag => (
                    <tr key={tag._id}>

                      <td>
                        <input
                          type="checkbox"
                          checked={selected.includes(tag._id)}
                          onChange={() => toggleOne(tag._id)}
                        />
                      </td>

                      <td>{tag.name}</td>
                      <td>{tag.slug}</td>

                      <td>
                        <span className={`badge ${tag.status ? "bg-success" : "bg-danger"}`}>
                          {tag.status ? "Active" : "Inactive"}
                        </span>
                      </td>

                      <td>
                        <div className="edit-delete-action">

                          <a
                            className="me-2 p-2"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-tag"
                            onClick={() => openEdit(tag)}
                          >
                            <i className="ti ti-edit" />
                          </a>

                          <a
                            className="p-2"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-tag-modal"
                            onClick={() => setDeleteId(tag._id)}
                          >
                            <i className="ti ti-trash" />
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
      <AddTagModal
        form={form}
        setForm={setForm}
        onSuccess={(newTag) =>
          setTags(prev => [...prev, newTag])
        }
      />
      <EditTagModal form={form} handleChange={handleChange} updateTag={updateTagHandler} />
      <DeleteTagModal deleteTag={deleteTagHandler} />
    </>
  );
}