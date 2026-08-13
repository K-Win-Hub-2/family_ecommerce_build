import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom'


export default function LoginAlert(props) {

  return (
    <div>
  <Dialog 
    open={props.open} 
    onClose={props.close} 
    id="preorder" 
    maxWidth="sm" 
    fullWidth 
    PaperProps={{
      style: { borderRadius: 15 } // This adds rounded corners to the dialog
    }}
  >
    <DialogTitle className="text-center">
      <b>Pls Login First</b>
    </DialogTitle>
    <div className="d-flex justify-content-center my-3">
    <Link to="/login">
      <button className="btn btn-primary">Login</button> {/* Primary styled button */}
      </Link>
    </div>
    <DialogActions>
      <Button onClick={props.close}>Cancel</Button>
    </DialogActions>
  </Dialog>
</div>

  );
}
// phyo
//maymyat