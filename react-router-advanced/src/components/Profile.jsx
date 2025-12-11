import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>

      {/* Links for nested routing */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="details" style={{ marginRight: "10px" }}>Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested routes appear here */}
      <Outlet />
    </div>
  );
}

export default Profile;
