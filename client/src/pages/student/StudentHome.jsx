import React, { useEffect } from 'react';
import 'assets/css/StudentHome.css'
import StudentHeader from 'components/student/StudentHeader'
import StudentHeroSection from 'components/student/StudentHeroSection';
import { useAuthContext } from 'contexts/AuthContext';
import { useSystemContext } from 'contexts/SystemContext';



const StudentHome = () => {
  const { hasLogin} = useAuthContext();
  const {goToPage} = useSystemContext();
  useEffect(() => {
    if(!hasLogin){
      goToPage("/");
    }
  }, [goToPage, hasLogin]);

  return (
    <div >
      
      <StudentHeader />
      <StudentHeroSection />
    
    
      <br></br>
      <br></br>
    </div>
  );
}
export default StudentHome;