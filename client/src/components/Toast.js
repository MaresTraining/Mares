import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { VBox, HBox } from "./BoxesLT";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({ type, text, ...props}) {
  const [open, setOpen]= React.useState(props.open)
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   hideToast();
  // };

  return (
    <VBox rowGap={4} sx={{ width: "100%" }}>
        <Snackbar
          sx={{ mb: 0 }}
          open={open}
          autoHideDuration={6000}
          onClose={()=>{setOpen(false)}}
        >
          <Alert onClose={()=>{setOpen(false)}} severity={type} sx={{ width: "100%" }}>
            {text}
          </Alert>
        </Snackbar>
        
    </VBox>
  );
}
