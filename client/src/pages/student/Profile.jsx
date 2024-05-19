import React, { useEffect } from 'react';
import StudentHeader from 'components/student/StudentHeader';
import Test from './Test';
import ProfileHeroSection from 'components/student/ProfileHeroSection'
import { useAuthContext } from 'contexts/AuthContext';
import { useSystemContext } from 'contexts/SystemContext';
const Profile = () => {
  const { hasLogin } = useAuthContext();
  const { goToPage } = useSystemContext();
  useEffect(() => {
    if (!hasLogin) {
      goToPage("/");
    }
  }, [goToPage, hasLogin]);


  return (<div>
    <StudentHeader />
    <ProfileHeroSection />


    <Test />
  </div>);
}

export default Profile;