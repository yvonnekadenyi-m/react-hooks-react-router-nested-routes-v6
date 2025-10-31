
// src/pages/UserProfile.js
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const users = useOutletContext();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <h2>Loading...</h2>;

  return (
    <aside>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </aside>
  );
}

export default UserProfile;