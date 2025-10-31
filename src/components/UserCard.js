
// src/components/UserCard.js
import { Link, useOutletContext } from "react-router-dom";

function UserCard({ user }) {
  const users = useOutletContext();
  console.log(users);

  return (
    <article>
      <h3>{user.name}</h3>
      <Link to={`/profile/${user.id}`}>View Profile</Link>
    </article>
  );
}

export default UserCard;
