export default function SearchWidget() {
  return (
    <div className="search-widget widget-item">
      <h3 className="widget-title">Search</h3>

      <form>
        <input type="text" className="form-control" />
        <button type="submit" className="btn">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
}