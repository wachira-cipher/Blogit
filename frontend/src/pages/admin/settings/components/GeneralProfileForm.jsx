import { useEffect, useState } from "react";
import ProfileImageSection from "./ProfileImageSection";
import BasicInformationSection from "./BasicInformationSection";
import AddressInformationSection from "./AddressInformationSection";
import { updateProfile } from "../../../../api/user.api";
import { toast } from "react-toastify";

export default function GeneralProfileForm({ user, setUser }) {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  // hydrate form from backend user
  useEffect(() => {
    if (user) {
      setForm({
        fullname: user.fullname || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        country: user.country || "",
        state: user.state || "",
        city: user.city || "",
        postalCode: user.postalCode || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await updateProfile(form);

      // sync UI instantly
      setUser(res.data.user || res.data);

      toast.success("Profile updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }
  };

  return (
    <div className="card flex-fill mb-0">
      <div className="card-header">
        <h4 className="fs-18 fw-bold">Profile</h4>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>

          {/* PROFILE IMAGE */}
          <ProfileImageSection
            user={user}
            setUser={setUser}
          />

          {/* BASIC INFO */}
          <BasicInformationSection
            form={form}
            handleChange={handleChange}
          />

          {/* ADDRESS */}
          <AddressInformationSection
            form={form}
            handleChange={handleChange}
            setForm={setForm}
          />

          {/* ACTIONS */}
          <div className="text-end settings-bottom-btn mt-0">
            <button type="button" className="btn btn-secondary me-2">
              Cancel
            </button>

            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}