import { useParams } from "react-router-dom";
import { getDetails } from "../api";

export default function DiplomaDetails() {
  const { modId } = useParams();
  const details = getDetails(modId);

  return (
    <>
      <h2>Module Overview - {details.moduleName}</h2>

      <ul className="session-list">
        <li>
            <p>{details.name} | {details.title}</p>
            <p>{details.desc}</p>
        </li>
      </ul>
    </>
  );
}
