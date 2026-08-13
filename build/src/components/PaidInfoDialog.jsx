import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 500px;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`


export default function BankInfoDialog(props) {
  const [file, setFile] = useState(null);
  const [remark, setRemark] = useState('');
  const [payamount] = useState('');
  const url= useSelector(state => state.user.url);

  const onFileChange = (event) => {  
    // Update the state
    setFile(event.target.files[0]);
   
  };
// console.log('props are',props)
   const savefilename = () =>{
    // alert(file.name);
    let formdata={
      file:file,
      remark:remark,
      payamount: payamount,    
    }
    axios.post(url+'/api/storescreenshot', formdata,
    {
        headers: {
        'Content-Type': 'multipart/form-data'
    }
    }).then(res=>
        {
          Swal.fire({
            title:  "Success!",
            text: "Your Payment Screenshot is sent.",
            type: 'success',    
            });
        }
        ).catch(err =>{
          console.log('error');
        });
    document.getElementById('hidedialog').style.visibility = "hidden";
   }
  return (
    <div>
      
      <Dialog open={props.open} onClose={props.close} id="hidedialog">
        <DialogTitle><b>User Paid Information</b></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Paid Info
          </DialogContentText>
            <Form>
              <Input type="file" id='myFile' onChange={onFileChange}/>
              <Input type="text" id="payamount" name="" placeholder="Pay Amount" value={props.total}/>
              <Input type="text" id="remark" name="" placeholder="Remark" onChange={(e)=>setRemark(e.target.value)}/>
            </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancle</Button>
          <Button onClick={savefilename}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// phyo
//maymyat
//ziizii