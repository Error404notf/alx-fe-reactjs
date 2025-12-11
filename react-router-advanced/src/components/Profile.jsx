import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="details" style={{ marginRight: "10px" }}>Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested routing inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default Profile;
