import DashboardContent from "./DashboardContent";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    // remove template preloaders if any
    const preloader = document.getElementById("global-loader");
    if (preloader) preloader.remove();

    // optional scroll reset
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <DashboardContent/>
    </>
  );
}