export default function UserMenu() {
  const containerStyle = {
    position: "relative",
    display: "inline-block",
  };

  const dropdownStyle = {
    position: "absolute",
    right: "0",
    top: "100%",
    backgroundColor: "#fff",
    minWidth: "140px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    borderRadius: "6px",
    padding: "8px 0",
    zIndex: 999,
    display: "none",
  };

  const linkStyle = {
    display: "block",
    padding: "8px 12px",
    textDecoration: "none",
    color: "#333",
    fontSize: "14px",
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector(".dropdown").style.display = "block";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector(".dropdown").style.display = "none";
      }}
    >
      <a href="#" style={{ fontSize: "20px" }}>
        <i className="bi bi-person"></i>
      </a>

      <div className="dropdown" style={dropdownStyle}>
        <a href="/login" style={linkStyle}>Login</a>
        <a href="/register" style={linkStyle}>Register</a>
      </div>
    </div>
  );
}