import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchPosts } from "../../../api/post.api";
import "./SearchWidget.css";

export default function SearchWidget() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  useEffect(() => {

    const timeout = setTimeout(async () => {

      const text = query.trim();

      if (!text) {
        setResults([]);
        setOpen(false);
        return;
      }

      try {

        setLoading(true);

        const res = await searchPosts(text);

        if (res.data.success) {
          setResults(res.data.posts.slice(0, 5));
          setOpen(true);
        }

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }, 300);

    return () => clearTimeout(timeout);

  }, [query]);

  useEffect(() => {

    const handleClick = (e) => {

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {

        setOpen(false);

      }

    };

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);

  }, []);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);

    setOpen(false);

  };

  return (
    <div
      className="search-widget widget-item"
      ref={wrapperRef}
    >

      <h3 className="widget-title">
        Search
      </h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="form-control"
          placeholder="Search posts..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
        />

        <button
          className="btn"
          type="submit"
        >
          <i className="bi bi-search"></i>
        </button>

      </form>

      {open && (
        <div className="search-results">

          {loading && (
            <p className="small text-muted p-2 mb-0">
              Searching...
            </p>
          )}

          {!loading &&
            results.length === 0 && (
              <p className="small text-muted p-2 mb-0">
                No matching posts
              </p>
            )}

          {!loading &&
            results.map((post) => (

              <Link
                key={post._id}
                to={`/blog-details/${post.slug}`}
                className="search-result-item"
                onClick={() => setOpen(false)}
              >

                <strong>
                  {post.title}
                </strong>

                <small>

                  {post.category?.name}

                </small>

              </Link>

            ))}

          {!loading &&
            results.length > 0 && (

              <Link
                className="search-view-all"
                to={`/search?q=${encodeURIComponent(query)}`}
              >

                View all results →

              </Link>

            )}

        </div>
      )}

    </div>
  );
}