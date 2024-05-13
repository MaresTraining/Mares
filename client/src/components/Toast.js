import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Box } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({ type, text, open,  hideToast=()=>{} }) {
  const [isOpen, setIsOpen] = React.useState(false)

  function handleToast(){
    setIsOpen(false)
  }
  React.useEffect(() => {
      setIsOpen(open)
  }, [open])

  return (
    <Box rowGap={4} sx={{ width: "100%" }}>
      <Snackbar
        sx={{ mb: 0 }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => { handleToast() }}>
        <Alert onClose={() => { handleToast() }} severity={type} sx={{ width: "100%" }}>
          {text}
        </Alert>
      </Snackbar>
    </Box>
  );
}
