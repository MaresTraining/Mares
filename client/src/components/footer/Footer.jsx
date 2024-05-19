import React from 'react';
import { useAuthContext } from 'contexts/AuthContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const {hasLogin}= useAuthContext();
  if(!hasLogin){
    return <></>
  }
  return (
      <footer style={styles}>
        <div >
        <span style={{  marginRight: "500px"}}>جميع الحقوق محفوظة لشركة مارس التقنيه 2024</span>
        </div>
        <div className="followus">
          <Link to="#" className="bi bi-facebook " />
          <Link href="#" className="bi bi-twitter-x "></Link>
          <Link href="#" className="bi bi-instagram "></Link>
        </div>
        
      </footer>
  );
};

const styles = {
  color: "var(--dark-color)",
  fontSize: "15px",
  backgroundColor: "var(--green-color)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "50px",
  padding: "40px", // Added padding for spacing between icons and text

};

export default Footer;




  
