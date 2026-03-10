import { Outlet, useLocation } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar.jsx";

const AdminLayout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.includes("/login") || location.pathname.includes("/signup");

  return (
    <>
      {!hideNavbar && <AdminNavbar />}
      <main className={!hideNavbar ? "main-content" : ""}>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
