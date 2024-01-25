import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated && !isLoading) {
        navigate("/home");
      }
    },
    [isAuthenticated, navigate, isLoading]
  );

  if (!isAuthenticated) return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
