export default function Footer() {
  return (
    <div className="copyright-footer d-flex align-items-center justify-content-between border-top bg-white gap-3 flex-wrap p-3">

      <p className="fs-13 mb-0">
        2014 - 2026 © Blogit. All Rights Reserved
      </p>

      <p className="mb-0">
        Designed & Developed By{" "}
        <a
          href="https://www.cyberspheresystems.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-primary fw-medium"
        >
          CyberSphereSystems
        </a>
      </p>

    </div>
  );
}