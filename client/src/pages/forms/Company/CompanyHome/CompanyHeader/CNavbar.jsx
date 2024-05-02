import { Link } from 'react-router-dom';

const CNavbar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} className="Cnavbar">
      <ul className="Cnav-links">
        <li >
          <Link className="Cnav-link" to="/ManageRequests" onClick={() => setToggle(false)}>إدارة الطلبات</Link>
        </li>
        <li >
          <Link  className="Cnav-link" to="/CreateOpportunity" onClick={() => setToggle(false)}>إنشاء فرصة</Link>
        </li>
      </ul>


      
    </nav>
  );
};

export default CNavbar;
