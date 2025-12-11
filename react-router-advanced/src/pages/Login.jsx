import { useNavigate } from "react-router-dom";
import { login } from "../auth";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/profile");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
