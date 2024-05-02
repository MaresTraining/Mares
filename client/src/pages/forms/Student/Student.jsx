import StudentSignin from "./StudentSignin";
import StudentSignup from "./StudentSignup";
import Header from "../../../components/header/header";

import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const Student = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
    </div>
  
  
  );
};

export default Student;
