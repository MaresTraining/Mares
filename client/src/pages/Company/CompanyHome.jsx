import CompanyHeader from "components/company/CompanyHeader";
import CompanyHeroSection from "components/company/CompanyHeroSection";
import { useAuthContext } from "contexts/AuthContext";
import { useSystemContext } from "contexts/SystemContext";
import { useEffect } from "react";
const CompanyHome = () => {
    const { hasLogin} = useAuthContext();
    const {goToPage} = useSystemContext();
    useEffect(() => {
      if(!hasLogin){
        goToPage("/");
      }
    }, [goToPage, hasLogin]);
  
  
    return ( 
        <div>
 <CompanyHeader/>               
<CompanyHeroSection/>


        </div>
        )
        
}
 
export default CompanyHome;