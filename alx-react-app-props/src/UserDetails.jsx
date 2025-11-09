import { useContext } from 'react';
import UserContext from './components/UserContext';

function UserDetails() {
  // Get userData directly from the Context "portal"!
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;