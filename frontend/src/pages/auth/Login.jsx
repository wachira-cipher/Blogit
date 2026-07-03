import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";


export default function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await login(formData);

      toast.success("Login successful!");
      navigate("/dashboard");

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Login failed"
      );

    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="account-page">


      <div className="main-wrapper">

        <div className="account-content">

          <div className="login-wrapper bg-img">


            <div className="login-content authent-content">


              <form onSubmit={handleSubmit}>


                <div className="login-userset">


                  <div className="login-logo logo-normal">

                    <img
                      src="/assets/img/logo.svg"
                      alt="Logo"
                    />

                  </div>



                  <div className="login-userheading">

                    <h3>
                      Sign In
                    </h3>

                    <h4 className="fs-16">
                      Access the blog admin panel using
                      your email and password.
                    </h4>

                  </div>



                  {error && (

                    <div className="alert alert-danger">

                      {error}

                    </div>

                  )}



                  <div className="mb-3">


                    <label className="form-label">

                      Email

                    </label>


                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
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
                      className="form-control"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />


                  </div>




                  <div className="form-login">


                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >

                      {loading
                        ? "Signing in..."
                        : "Sign In"
                      }


                    </button>


                  </div>




                  <div className="signinform">


                    <h4>

                      New on our platform?


                      <Link
                        to="/register"
                        className="hover-a"
                      >

                        {" "}
                        Create an account

                      </Link>


                    </h4>


                  </div>



                  <div className="my-4 d-flex justify-content-center align-items-center copyright-text">

                    <p>

                      Copyright &copy; 2026 Blogit

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