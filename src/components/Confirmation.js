import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const location = useLocation();
  //access location to get state

  const {name, email, course} = location.state || {};

  return (
    <div className="container">
      <h1>Thank You, {name}</h1>
      <p>You're now registered for {course}.</p>
      <p>We'll email to {email}</p>
    </div>
  );
}
