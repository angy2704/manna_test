import React, {useState} from "react";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    // <div className="main-layout">
    //   <Header />

    //   <div className="d-flex h-100">
    //   <Sidebar />
    //     <div className="content flex-grow-1">
          
    //       <div className="container p-4 inner-content">
    //         <Outlet />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="main-layout">
      <Header toggleSidebar={toggleSidebar} />
      <div className="d-flex h-100">
        <Sidebar sidebarOpen={sidebarOpen} />
        <div className="content container p-4 inner-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
