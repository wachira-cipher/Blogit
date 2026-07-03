import React, { useRef, useState, useEffect } from "react";
import { updateAvatar } from "../../../../api/user.api";
import { toast } from "react-toastify";


export default function ProfileImageSection({
  user,
  setUser,
}) {
  const fileRef = useRef(null);

  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);

  // Sync preview whenever user changes
  useEffect(() => {
    if (!user?.avatar) {
      setPreview("");
      return;
    }

    // Avatar returned from backend
    if (user.avatar.startsWith("http")) {
      setPreview(user.avatar);
    } else {
      setPreview(
        `${import.meta.env.VITE_API_URL}/${user.avatar.replace(/^\/+/, "")}`
      );
    }
  }, [user]);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Validate type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    // Validate size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be below 2 MB.");
      return;
    }

    // Temporary preview
    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("avatar", file);

      const { data } = await updateAvatar(formData);

      // Keep parent user synchronized
      setUser((prev) => ({
        ...prev,
        avatar: data.avatar,
      }));

      // Display uploaded avatar
      const avatarUrl = data.avatar.startsWith("http")
        ? data.avatar
        : `${import.meta.env.VITE_API_URL}/${data.avatar.replace(/^\/+/, "")}`;

      setPreview(avatarUrl);

      // Release browser object URL
      URL.revokeObjectURL(localPreview);
    } catch (err) {
      setPreview(
        user?.avatar
          ? user.avatar.startsWith("http")
            ? user.avatar
            : `${import.meta.env.VITE_API_URL}/${user.avatar.replace(/^\/+/, "")}`
          : ""
      );

      toast.error(err.response?.data?.message || "Avatar upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
   <div className="profile-pic-upload">
<div
className="profile-pic"
onClick={handleClick}
style={{
cursor: "pointer",
overflow: "hidden",
}}
>
{preview ? (
<img
src={preview}
alt="Profile"
style={{
width: "100%",
height: "100%",
objectFit: "cover",
}}
/>
) : (
<span>
<i className="ti ti-circle-plus mb-1 fs-16"></i>{" "}
Add Image
</span>
)}
</div>

<div className="new-employee-field">
<div className="mb-0">
<div className="image-upload mb-0">
<input
ref={fileRef}
type="file"
accept="image/png,image/jpeg,image/jpg"
onChange={handleFileChange}
/>

<div
className="image-uploads"
onClick={handleClick}
style={{ cursor: "pointer" }}
>
<h4>{uploading ? "Uploading..." : "Upload Image"}</h4>
</div>
</div>

<span className="fs-13 fw-medium mt-2">
Upload an image below 2 MB, Accepted File format JPG, PNG
</span>
</div>
</div>
</div>
);
}