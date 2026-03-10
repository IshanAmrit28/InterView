import { Outlet, useLocation } from "react-router-dom";
import RecruiterNavbar from "../components/recruiter/RecruiterNavbar.jsx";

const RecruiterLayout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.includes("/login") || location.pathname.includes("/signup");

  return (
    <>
      {!hideNavbar && <RecruiterNavbar />}
      <main className={!hideNavbar ? "main-content" : ""}>
        <Outlet />
      </main>
    </>
  );
};

export default RecruiterLayout;
