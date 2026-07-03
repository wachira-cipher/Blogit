import { Outlet,useLocation } from "react-router-dom";

import Header from "../pages/admin/Header";
import Sidebar from "../pages/admin/Sidebar";
import HorizontalSidebar from "../pages/admin/HorizontalSidebar";
import TwoColSidebar from "../pages/admin/TwoColSidebar";
import Footer from "../pages/admin/Footer";


export default function AdminLayout() {
      const location = useLocation();

  const isSettings = location.pathname.startsWith("/settings");

return (
<div className="main-wrapper">

  
        <Header />
 


    <div className="sidebar">
        <Sidebar />
    </div>


    <div className="page-wrapper">

        <div className={isSettings ? "content settings-content" : "content"}>

            <Outlet />

        </div>

        <Footer />

    </div>

</div>
)

}