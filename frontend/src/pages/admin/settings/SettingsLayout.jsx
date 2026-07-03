import SettingsHeader from "./components/SettingsHeader";
import SettingsSidebar from "./components/SettingsSidebar";


export default function SettingsLayout({ title, children }) {
  return (
    <>

      {/* HEADER */}
      <SettingsHeader title={title} />

      <div className="row">
        <div className="col-xl-12">

          <div className="settings-wrapper d-flex">

            {/* SIDEBAR */}
            <SettingsSidebar />

            {/* MAIN CONTENT */}
            <div className="card flex-fill mb-0">
              {children}
            </div>

          </div>
        </div>
      </div>

    

    </>
  );
}