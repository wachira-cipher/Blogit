import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
    useEffect(() => {
        // AOS refresh (important after route load)
        if (window.AOS) {
            window.AOS.refresh();
        }

        // GLightbox init (safe check)
        if (window.GLightbox) {
            window.GLightbox({
                selector: ".glightbox",
            });
        }
    }, []);

    return (
        <>
            <br />
            <br />
            <br />
            {/* Page Title */}
            <div className="page-title">
                <div className="breadcrumbs">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">

                            <li>
                                <Link to="/">
                                    <i className="bi bi-house"></i> Home/
                                </Link>
                            </li>

                            <li>
                                <Link to="/category">Category</Link>
                            </li>

                            <li className="breadcrumb-item active" aria-current="page">
                                About
                            </li>

                        </ol>
                    </nav>
                </div>

                <div className="title-wrapper">
                    <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis.
                    </p>
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <span className="section-badge">
                        <i className="bi bi-info-circle"></i> About Us
                    </span>

                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="about-title">
                                Nemo enim ipsam voluptatem quia voluptas
                            </h2>

                            <p className="about-description">
                                Temporibus autem quibusdam et aut officiis debitis...
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <p className="about-text">
                                Itaque earum rerum hic tenetur a sapiente delectus...
                            </p>
                            <p className="about-text">
                                Amet eos ut. Officiis soluta ab id dolor non sint...
                            </p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="row features-boxes gy-4 mt-3">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="feature-box">
                                <div className="icon-box">
                                    <i className="bi bi-bullseye"></i>
                                </div>
                                <h3>At vero eos</h3>
                                <p>Nam libero tempore...</p>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="feature-box">
                                <div className="icon-box">
                                    <i className="bi bi-person-check"></i>
                                </div>
                                <h3>Sed ut perspiciatis</h3>
                                <p>At vero eos et accusamus...</p>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="feature-box">
                                <div className="icon-box">
                                    <i className="bi bi-clipboard-data"></i>
                                </div>
                                <h3>Nemo enim ipsam</h3>
                                <p>Neque porro quisquam est...</p>
                            </div>
                        </div>
                    </div>

                    {/* Video */}
                    <div className="row mt-5">
                        <div className="col-lg-12" data-aos="zoom-in">
                            <div className="video-box">
                                <img
                                    src="/assets/blog/img/about/about-wide-1.webp"
                                    className="img-fluid"
                                    alt="About video"
                                />

                                <a
                                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                    className="glightbox pulsating-play-btn"
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="team section light-background">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Team</h2>
                    <div>
                        <span>Check Our</span>{" "}
                        <span className="description-title">Team</span>
                    </div>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        {/* Member 1 */}
                        <div className="col-lg-6">
                            <div className="team-member d-flex">
                                <div className="member-img">
                                    <img
                                        src="/assets/blog/img/person/person-m-7.webp"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div className="member-info flex-grow-1">
                                    <h4>Walter White</h4>
                                    <span>CEO</span>
                                    <p>Aliquam iure quaerat voluptatem...</p>
                                </div>
                            </div>
                        </div>

                        {/* Member 2 */}
                        <div className="col-lg-6">
                            <div className="team-member d-flex">
                                <div className="member-img">
                                    <img
                                        src="/assets/blog/img/person/person-f-8.webp"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>

                                <div className="member-info flex-grow-1">
                                    <h4>Sarah Johnson</h4>
                                    <span>Product Manager</span>
                                    <p>Labore ipsam sit consequatur...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}