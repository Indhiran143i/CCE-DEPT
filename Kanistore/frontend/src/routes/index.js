import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home'; 
import Login from '../pages/Login'; 
import ForgotPassword from '../pages/ForgotPassword'; 
import SignUP from '../pages/SignUP'; 
import Attendance from '../pages/Attendence';
import BookClub from '../pages/BookClub';
import CommunicationClub from '../pages/CommunicationClub';
import CodingClub from '../pages/CodingClub';
import FineArtsClub from '../pages/FineArtsClub';
import Imposition from '../pages/imposition';
import Assignment from '../pages/Assignment';
import AllEvents from "../pages/AllEvents";

const router = createBrowserRouter([
  {
    path: "*", // This will match all paths
    element: <App />, // Main app component
    children: [
      {
        path: "", // Root path
        element: <Home /> // Home component
      },
      {
        path: "login", // Login path
        element: <Login />
      },
      {
        path: "forgot-password", // Forgot password path
        element: <ForgotPassword />
      },
      {
        path: "sign-up", // Sign up path
        element: <SignUP />
      },
      {
        path: "attendance", // Attendance path
        element: <Attendance />
      },
      {
        path: "events", // Events path
        element: <AllEvents />
      },
      {
        path: "book-club", // Book Club path
        element: <BookClub />
      },
      {
        path: "communication-club", // Communication Club path
        element: <CommunicationClub />
      },
      {
        path: "coding-club", // Coding Club path
        element: <CodingClub />
      },
      {
        path: "fine-arts-club", // Fine Arts Club path
        element: <FineArtsClub />
      },
      {
        path: "imposition", // Imposition path
        element: <Imposition />
      },
      {
        path: "assignment", // Assignment path
        element: <Assignment />
      },
    ]
  }
]);

export default router;
