import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-number">404</div>

      <h1>Page Not Found</h1>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <button
        className="btn btn-primary"
        onClick={() => navigate("/")}
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default NotFound;