import "assets/css/CompanyHeader.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import CompanySidebar from "./CompanySidebar";
import { Avatar } from "@mui/material";


const CompanyHeader = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="header">
            <CompanySidebar />
            <nav style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} className="Cnavbar">
                <ul className="Cnav-links">
                    <li >
                        <Link className="Cnav-link" to="/manage-requests" onClick={() => setToggle(false)}>إدارة الطلبات</Link>
                    </li>
                    <li >
                        <Link className="Cnav-link" to="/create-opportunity" onClick={() => setToggle(false)}>إنشاء فرصة</Link>
                    </li>
                </ul>
            </nav>
            <div className="header-logo" > </div>
        </div>


    );
}

export default CompanyHeader;