import { createBrowserRouter } from "react-router-dom";
import Login from "./components/loginSignup/login/Login";
import Signup from "./components/loginSignup/signup/Signup";
import LandingPage from "./components/landingPage/LandingPage";
import { PrivateRoutes } from "./components/privateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/landingPage",
    element: (
      <PrivateRoutes>
        <LandingPage />
      </PrivateRoutes>
    ),
  },
]);
