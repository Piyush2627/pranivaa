import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  role: string;
  exp: number;
}

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const publicRoutes = ["/", "/home", "/login", "/signup"];

    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);

        // Optional: token expiration check
        if (decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          setLoading(false);
          return;
        }

        if (publicRoutes.includes(location.pathname)) {
          if (decodedToken.role === "admin") {
            navigate("/admin/dashboard", { replace: true });
          } else if (decodedToken.role === "user") {
            navigate("/user/dashboard", { replace: true });
          }
          return;
        }
      } catch {
        localStorage.removeItem("token");
      }
    }

    // IMPORTANT: always end loading
    setLoading(false);
  }, [navigate, location.pathname]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Outlet />;
}

export default MainLayout;
