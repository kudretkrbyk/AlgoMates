import { Navigate } from "react-router-dom";
//import { useDispatch } from "react-redux";

export default function ProtectedRoute({ children, redirectTo = "/Login" }) {
  //const dispatch = useDispatch();
  const isLoggedIn = Boolean(localStorage.getItem("user"));
  console.log("isLoggedIn:", isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
