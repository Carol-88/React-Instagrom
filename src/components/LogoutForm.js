import React from "react";
import { Navigate } from "react-router-dom";

function LogoutForm() {
  const handleSubmit = async (e) => {
    localStorage.clear();
  };

  <Navigate to="/login" />;

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Cerrar sesión</button>
    </form>
  );
}

export default LogoutForm;
