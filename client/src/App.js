
import 'assets/css/App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


// import Student from "./pages/forms/Student/Student";

import StudentSignup from "./pages/student/StudentSignup";
import StudentSignin from "./pages/student/StudentSignin";
import ResetPassword from "./pages/ResetPassword"
import Footer from "./components/footer/Footer";
import HeroSection from "./components/HeroSection";
//Student
import StudentHome from "./pages/student/StudentHome";
import Profile from "./pages/student/Profile";
import Resume from "./pages/student/Resume";

//Company 
import Company from "./pages/Company/Company";
import CompanySignin from "./pages/Company/CompanySignin";
import CompanySignup from "./pages/Company/CompanySignup";
////////////////
// Material UI imports

import CompanyHome from './pages/Company/CompanyHome';
import CreateOpportunity from './pages/Company/CreateOpportunity';
import Cinfo from './pages/Company/Cinfo';
import DispalyOpportunities from './pages/student/DispalyOpportunities';
import ManageRequests from './pages/Company/ManageRequests';
import ViewRequests from './pages/student/ViewRequests';
import SelectStudent from './pages/Company/SelectStudent';
import AcceptedStudent from './pages/Company/AcceptedStudent';
import CommentBox from './pages/student/CommentBox';
import DisplayPublished from './pages/Company/DisplayPublished';
import DisplayUnavailable from './pages/Company/DisplayUnavailable';
import DisplayCompleted from './pages/Company/DisplayCompleted';
import ViewCompanyProfile from './pages/Company/ViewCompanyProfile';
import ViewStudentProfile from './pages/student/ViewStudentProfile';
import { Backdrop, Box, CircularProgress } from '@mui/material';
import { useSystemContext } from './contexts/SystemContext';
import Toast from './components/Toast';
import { useEffect } from 'react';
import ViewOppDetails from 'pages/ViewOppDetails';

function App() {
  const { toast, error, isDrawerOpen, handleError, showToast, hideToast, loading } = useSystemContext();


  useEffect(() => {
    if (error) {
      showToast("error", error);
      handleError(null);
    }
  }, [error, handleError, showToast]);

  <HeroSection />

  return (
    <Box paddingInlineStart={isDrawerOpen? 28: 0}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-sign-in" element={<StudentSignin />} />
        <Route path="/student-sign-up" element={<StudentSignup />} />
        {/* <Route path="/student" element={<Student />} /> */}
        <Route path="/company" element={<Company />} />
        <Route path="/company-sign-in" element={<CompanySignin />} />
        <Route path="/company-sign-up" element={<CompanySignup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/student-home" element={<StudentHome />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/company-home" element={<CompanyHome />} />
        <Route path="/create-opportunity" element={<CreateOpportunity />} />
        <Route path="/cinfo" element={<Cinfo />} />
        <Route path="/dispaly-opportunities" element={<DispalyOpportunities />} />
        <Route path="/manage-requests" element={<ManageRequests />} />
        <Route path="/view-requests" element={<ViewRequests />} />
        <Route path="/select-student" element={<SelectStudent />} />
        <Route path="/accepted-student" element={<AcceptedStudent />} />
        <Route path="/display-published" element={<DisplayPublished />} />
        <Route path="/display-unavailable" element={<DisplayUnavailable />} />
        <Route path="/display-completed" element={<DisplayCompleted />} />
        <Route path="/view-company-profile" element={<ViewCompanyProfile />} />
        <Route path="/view-student-profile" element={<ViewStudentProfile />} />
        <Route path="/view-opp-details" element={<ViewOppDetails />} />

        <Route path="/comment-box" element={<CommentBox />} />














      </Routes>
      <Footer />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Toast
        toast={toast}
        hideToast={hideToast}
      />

    </Box>


  );

}




export default App;
