import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";


export default function Register() {

  const navigate = useNavigate();

  const { register } = useAuth();


  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked
    } = e.target;


    setForm({
      ...form,
      [name]: type === "checkbox"
        ? checked
        : value,
    });

  };


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.agree) {
    toast.error("Please accept terms & privacy");
    return;
  }

  if (form.password !== form.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  setLoading(true);

  try {
    await register({
      fullname: form.fullname,
      email: form.email,
      password: form.password
    });

    toast.success("Account created successfully!");

    navigate("/login");

  } catch (err) {

    toast.error(
      err.response?.data?.message ||
      "Registration failed"
    );

  } finally {
    setLoading(false);
  }
};



  return (
    <div className="account-page">


      <div className="main-wrapper">

        <div className="account-content">

          <div className="login-wrapper register-wrap bg-img">


            <div className="login-content authent-content">


              <form onSubmit={handleSubmit}>


                <div className="login-userset">


                  <div className="login-userheading">

                    <h3>
                      Register
                    </h3>

                    <h4>
                      Create New Blog Account
                    </h4>

                  </div>



                  {error && (

                    <div className="alert alert-danger">

                      {error}

                    </div>

                  )}




                  <div className="mb-3">

                    <label className="form-label">
                      Name
                    </label>


                    <input
                      type="text"
                      name="fullname"
                      value={form.fullname}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter full name"
                      required
                    />

                  </div>





                  <div className="mb-3">

                    <label className="form-label">
                      Email
                    </label>


                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter email"
                      required
                    />

                  </div>





                  <div className="mb-3">

                    <label className="form-label">
                      Password
                    </label>


                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter password"
                      required
                    />

                  </div>





                  <div className="mb-3">

                    <label className="form-label">
                      Confirm Password
                    </label>


                    <input
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Confirm password"
                      required
                    />

                  </div>





                  <div className="mb-3">

                    <label>

                      <input
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                      />

                      {" "}
                      I agree to Terms & Privacy

                    </label>

                  </div>





                  <div className="form-login">


                    <button
                      type="submit"
                      className="btn btn-login w-100"
                      disabled={loading}
                    >

                      {loading
                        ? "Creating..."
                        : "Sign Up"
                      }


                    </button>


                  </div>




                  <div className="signinform">

                    <h4>

                      Already have an account?


                      <Link
                        to="/login"
                      >

                        {" "}
                        Sign In

                      </Link>


                    </h4>


                  </div>




                  <div className="my-4 text-center copyright-text">

                    <p>
                      Copyright © 2026 Blogit
                    </p>

                  </div>



                </div>


              </form>


            </div>


          </div>


        </div>


      </div>


    </div>
  );
}