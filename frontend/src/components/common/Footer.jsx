import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">

        <div className="container footer-top">
          <div className="row gy-4">

            {/* About */}
            <div className="col-lg-4 col-md-6 footer-about">

              <Link to="/" className="logo d-flex align-items-center">
                <span className="sitename">Blogit</span>
              </Link>

              <div className="footer-contact pt-3">
                <p>Kerugoya</p>
                <p>Kirinyaga, Kenya</p>

                <p className="mt-3">
                  <strong>Phone:</strong>{" "}
                  <span>+254 714 015 950</span>
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <span>tysonwachira123@gmail.com</span>
                </p>
              </div>


              <div className="social-links d-flex mt-4">

                <a href="#" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>

              </div>

            </div>


            {/* Links */}
            <div className="col-lg-2 col-md-3 footer-links">

              <h4>Useful Links</h4>

              <ul>

                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/terms">Terms</Link>
                </li>

                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>

              </ul>

            </div>



            {/* Services */}
            <div className="col-lg-2 col-md-3 footer-links">

              <h4>Services</h4>

              <ul>

                <li><Link to="/services/web-design">Web Design</Link></li>
                <li><Link to="/services/development">Development</Link></li>
                <li><Link to="/services/marketing">Marketing</Link></li>
                <li><Link to="/services/seo">SEO</Link></li>
                <li><Link to="/services/ui-ux">UI/UX</Link></li>

              </ul>

            </div>



            {/* Company */}
            <div className="col-lg-2 col-md-3 footer-links">

              <h4>Company</h4>

              <ul>

                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/help">Help</Link></li>

              </ul>

            </div>



            {/* Resources */}
            <div className="col-lg-2 col-md-3 footer-links">

              <h4>Resources</h4>

              <ul>

                <li><Link to="/docs">Docs</Link></li>
                <li><Link to="/api">API</Link></li>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/status">Status</Link></li>
                <li><Link to="/community">Community</Link></li>

              </ul>

            </div>


          </div>
        </div>


        {/* Bottom */}
        <div className="container copyright text-center mt-4">

          <p>
            © <strong>Blogit</strong> All Rights Reserved
          </p>

        </div>

      </footer>



      {/* Template scroll button */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >

        <i className="bi bi-arrow-up-short"></i>

      </a>



      {/* Template preloader */}
      <div id="preloader"></div>

    </>
  );
}