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
                    <h1>About Blogit</h1>

                    <p>
                        Blogit is a modern blogging platform built for writers,
                        creators, and readers to share knowledge, discover ideas,
                        and grow through meaningful content.
                    </p>
                </div>
            </div>

            {/* About Section */}

            <section id="about" className="about section">

                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >

                    <span className="section-badge">
                        <i className="bi bi-info-circle"></i> About Us
                    </span>

                    <div className="row">

                        <div className="col-lg-6">

                            <h2 className="about-title">
                                Empowering creators to publish stories that inspire
                                and educate the world.
                            </h2>

                            <p className="about-description">
                                Blogit provides an intuitive publishing experience
                                where bloggers, businesses, and content creators can
                                write, organize, and share articles with readers
                                across different topics and communities.
                            </p>

                        </div>

                        <div className="col-lg-6">

                            <p className="about-text">
                                Our mission is to simplify content publishing while
                                helping authors build an audience through beautiful,
                                fast, and accessible blogging experiences.
                            </p>

                            <p className="about-text">
                                Whether you're documenting tutorials, sharing
                                experiences, publishing news, or building your
                                personal brand, Blogit gives you the tools to turn
                                ideas into engaging stories.
                            </p>

                        </div>

                    </div>

                    {/* Features */}

                    <div className="row features-boxes gy-4 mt-3">

                        <div
                            className="col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >

                            <div className="feature-box">

                                <div className="icon-box">
                                    <i className="bi bi-pencil-square"></i>
                                </div>

                                <h3>Easy Publishing</h3>

                                <p>
                                    Create, edit, and publish blog posts effortlessly
                                    with a clean writing experience designed for
                                    modern creators.
                                </p>

                            </div>

                        </div>

                        <div
                            className="col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >

                            <div className="feature-box">

                                <div className="icon-box">
                                    <i className="bi bi-people"></i>
                                </div>

                                <h3>Growing Community</h3>

                                <p>
                                    Connect readers with quality content through
                                    categories, tags, search, and personalized
                                    discovery.
                                </p>

                            </div>

                        </div>

                        <div
                            className="col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >

                            <div className="feature-box">

                                <div className="icon-box">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </div>

                                <h3>Content Insights</h3>

                                <p>
                                    Monitor views, publishing activity, and audience
                                    engagement to understand how your content
                                    performs over time.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Video */}

                    <div className="row mt-5">

                        <div
                            className="col-lg-12"
                            data-aos="zoom-in"
                        >

                            <div className="video-box">

                                <img
                                    src="/assets/blog/img/about/about-wide-1.webp"
                                    className="img-fluid"
                                    alt="About Blogit"
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

            <section
                id="team"
                className="team section light-background"
            >

                <div
                    className="container section-title"
                    data-aos="fade-up"
                >

                    <h2>Team</h2>

                    <div>
                        <span>Meet The</span>{" "}
                        <span className="description-title">
                            People Behind Blogit
                        </span>
                    </div>

                </div>

                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >

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

                                    <h4>James Carter</h4>

                                    <span>Founder & Lead Developer</span>

                                    <p>
                                        Leads the platform architecture while building
                                        reliable tools that help creators publish with
                                        confidence.
                                    </p>

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

                                    <h4>Emily Watson</h4>

                                    <span>Content Strategist</span>

                                    <p>
                                        Oversees editorial quality and helps shape
                                        engaging content experiences for readers and
                                        writers alike.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Member 3 */}

                        <div className="col-lg-6">

                            <div className="team-member d-flex">

                                <div className="member-img">

                                    <img
                                        src="/assets/blog/img/person/person-m-9.webp"
                                        className="img-fluid"
                                        alt=""
                                    />

                                </div>

                                <div className="member-info flex-grow-1">

                                    <h4>Michael Brooks</h4>

                                    <span>Backend Engineer</span>

                                    <p>
                                        Develops secure APIs, manages data, and ensures
                                        Blogit delivers fast and reliable performance.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Member 4 */}

                        <div className="col-lg-6">

                            <div className="team-member d-flex">

                                <div className="member-img">

                                    <img
                                        src="/assets/blog/img/person/person-f-10.webp"
                                        className="img-fluid"
                                        alt=""
                                    />

                                </div>

                                <div className="member-info flex-grow-1">

                                    <h4>Sophia Miller</h4>

                                    <span>UI/UX Designer</span>

                                    <p>
                                        Crafts intuitive interfaces that make reading,
                                        writing, and discovering stories enjoyable on
                                        every device.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}