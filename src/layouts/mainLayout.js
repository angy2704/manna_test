import React, {useState, useEffect} from "react";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Handle sidebar open/close for mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false); // Closed by default on mobile
      } else {
        setSidebarOpen(true); // Open by default on larger screens
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Set initial state based on current screen size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="d-flex h-100">
        <Sidebar sidebarOpen={sidebarOpen} />
        <div className="content container p-4 inner-content">
          <Outlet context={{ sidebarOpen }}/>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
