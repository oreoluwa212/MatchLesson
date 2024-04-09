import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TutorOverview from "./pages/TutorOverview";
import Subjects from "./pages/Subjects";
import DashboardPage from "./pages/Dashboard";
import TutorBookings from "./pages/TutorBookings";
import Login from "./components/Login";
import Onboard from "./components/Onboard";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import VerifyMail from "./components/VerifyMail";
import ClassesUpcoming from "./pages/ClassesUpcoming";
import ResourcesPage from "./pages/ResourcesPage";
import ProfilePage from "./pages/ProfilePage";
import WalletPage from "./pages/WalletPage";
import AllTransactions from "./pages/AllTransactions";
import ClassesUpcomingOpen from "./pages/ClassesUpcomingOpen";
import Tutor from "./pages/Tutor.page";
import LandingPage from "./pages/website/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/verify-mail" element={<VerifyMail />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/onboarding" element={<Onboard />} />
      <Route path="/tutors" element={<Tutor />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route path="/wallet/transactions" element={<AllTransactions />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/tutors/tutor/overview" element={<TutorOverview />} />
      <Route path="/tutors/tutor/book-a-session" element={<TutorBookings />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/classes" element={<ClassesUpcoming/>} />
    </Routes>
  );
}

export default App;
