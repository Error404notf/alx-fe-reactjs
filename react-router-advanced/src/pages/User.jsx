import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();

  return <h2>User ID: {userId}</h2>;
}

export default User;
