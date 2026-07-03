export default function Contact() {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <section id="contact" className="contact section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        {/* INFO CARDS */}
        <div className="row gy-4 mb-5">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="info-card">
              <div className="icon-box">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h3>Our Address</h3>
              <p>Kerugoya, Kirinyaga, Kenya</p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="info-card">
              <div className="icon-box">
                <i className="bi bi-telephone"></i>
              </div>
              <h3>Contact Number</h3>
              <p>
                Mobile: +254 (714) 015 950 <br />
                Email: tysonwachira123@gmail.com
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="info-card">
              <div className="icon-box">
                <i className="bi bi-clock"></i>
              </div>
              <h3>Opening Hour</h3>
              <p>
                Monday - Fri: 9:00 - 18:00<br />
                Sunday: Closed
              </p>
            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="row">
          <div className="col-lg-12">

            <div
              className="form-wrapper"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >

                {/* ROW 1 */}
                <div className="row">

                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name*"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address*"
                        required
                      />
                    </div>
                  </div>

                </div>

                {/* ROW 2 */}
                <div className="row mt-3">

                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-phone"></i>
                      </span>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone number*"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 form-group">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-list"></i>
                      </span>
                      <select
                        name="subject"
                        className="form-control"
                        required
                      >
                        <option value="">Select service*</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Support">Support</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* MESSAGE */}
                <div className="form-group mt-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-chat-dots"></i>
                    </span>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="6"
                      placeholder="Write a message*"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* STATUS MESSAGES */}
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="text-center">
                  <button type="submit">Submit Message</button>
                </div>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
    </>
  );
}