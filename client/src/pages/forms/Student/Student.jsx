
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
