export default function SettingsHeader({ title = "Settings" }) {
  return (
    <div className="page-header settings-pg-header">

      <div className="add-item d-flex">
        <div className="page-title">
          <h4>{title}</h4>
          <h6>Manage your settings on portal</h6>
        </div>
      </div>

      <ul className="table-top-head">
        <li>
          <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh">
            <i className="ti ti-refresh"></i>
          </a>
        </li>

        <li>
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Collapse"
            id="collapse-header"
          >
            <i className="ti ti-chevron-up"></i>
          </a>
        </li>
      </ul>

    </div>
  );
}