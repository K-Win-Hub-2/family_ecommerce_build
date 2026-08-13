import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { useSelector} from 'react-redux'

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    color: #555555;
`
const DialogTitle = styled.div`
    padding: 8px 0px;
`
const Div = styled.div`
     width: 150px;
     height: 150px;
`

const CheckColor = (props) => {
  // console.log('this is the props',props);
  const design = useSelector(state=>state.design);
  const color = props.name;
  const checkColor = design.colors[color];
  // console.log('item',props.item);
  const url= useSelector(state => state.user.url);
  const imageUrl = url+`/ecommerce/color/defaultcolor.jpg`;
  const colorUrl = url+`/ecommerce/color/${props.name}.png`;
  // console.log('imageUrl',imageUrl);
  console.log(`Color Check ${checkColor}`);
  // console.log('props.name',props.name);
  // console.log('colorurl',colorUrl);
    
  const handleImageError = (e) => {
    e.target.src = imageUrl;
  };

  return (
    <div>
        <Dialog open={props.open} onClose={props.close}>
        <DialogTitle className='text-center'><Title>Check Color</Title></DialogTitle>

        <DialogContent >
        {colorUrl ? (
            <Div>
            <img src={colorUrl} alt={props.item?.name} style={{ width: '100%', height: 'auto' }} onError={handleImageError} 
 />
            </Div>
          ) : (
            <Div>
              <img src={imageUrl} alt={props.item.name} style={{ width: '100%', height: 'auto' }} />
            </Div>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={props.close} style={{backgroundColor: '#79a6fa', color: 'white'}}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CheckColor;