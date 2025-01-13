import { useParams } from "react-router-dom";
import { getDiploma } from "../api";
import { Outlet, NavLink } from "react-router-dom";

export default function Diploma() {
  const { dipId } = useParams();
  const diploma = getDiploma(dipId);

  return (
    <>
      <h2>{diploma.name} Modules</h2>

      <ul className="session-list">
        {diploma?.sessions.map(session => (
          <li className="session" key={session.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
              to={session.id}
            >
              <p className="session-name">{session.name}</p>
            </NavLink>
            
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
