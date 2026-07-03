const ctaImage = "/assets/blog/img/misc/misc-1.webp";

export default function CallToAction() {
  return (
    <section
      id="call-to-action-2"
      className="call-to-action-2 section"
    >
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">

          <div
            className="content-left flex-grow-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="badge text-uppercase mb-2">
              Don't Miss
            </span>

            <h2>
              Revolutionize Your Digital Experience Today
            </h2>

            <p className="my-4">
              Strategia accelerates your business growth
              through innovative solutions and cutting-edge
              technology.
            </p>

            <div className="features d-flex flex-wrap gap-3 mb-4">
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Premium Support</span>
              </div>

              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Cloud Integration</span>
              </div>

              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Real-time Analytics</span>
              </div>
            </div>

            <div className="cta-buttons d-flex flex-wrap gap-3">
              <button className="btn btn-primary">
                Start Free Trial
              </button>

              <button className="btn btn-outline">
                Learn More
              </button>
            </div>
          </div>

          <div
            className="content-right position-relative"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src={ctaImage}
              alt="Digital Platform"
              className="img-fluid rounded-4"
            />

            <div className="floating-card">
              <div className="card-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>

              <div className="card-content">
                <span className="stats-number">
                  245%
                </span>

                <span className="stats-text">
                  Growth Rate
                </span>
              </div>
            </div>
          </div>

          <div className="decoration">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
}