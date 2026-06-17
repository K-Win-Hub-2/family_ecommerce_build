// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import styled from "styled-components";
// import { useSelector, useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { resetProduct } from "../redux/cartRedux";
// import BankInfoDialog from "./BankInfoDialog";
// import PaidInfoDialog from "./PaidInfoDialog";
// import PaymentDialog from "./PaymentDialog";
// import { Diversity1 } from "@mui/icons-material";

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;
// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;
// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 5px 0;
//   padding: 10px;
//   border: 1px solid #2f80a5;
//   border-radius: 10px;
//   outline: none;
// `;
// const Filter = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   margin:5px 0;
// `;
// const Lable = styled.label`
//   font-size: 15px;
// `;

// const FilterTitle = styled.span`
//   font-size: 15px;
//   font-weight: 200;
//   margin-bottom: 3px;
// `;
// const DivF = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-item: center;
//   justify-content: center;
//   margin-right: 2px;
// `;
// const Radio = styled.input`
//   display: flex;
//   margin-right: 20px;
// `;
// // hello world

// const FilterSelect = styled.select`
//   padding: 5px;
// `;

// const FilterOption = styled.option``;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #2f80a5;
//   border-radius: 10px;
//   outline: none;

//   &:focus {
//     border: 1px solid #1e5f7a;
//     box-shadow: 0 0 0 2px rgba(47, 128, 165, 0.2);
//   }
// `;

// // const Button = styled(Button)`
// //   margin: 5px 0;
// //   width: 100%;
// //   height: 40px;
// //   border-radius: 5px;
// //   border: none;
// //   cursor: pointer;
// //   background-color: #2f80a5;
// //   color: #fff;
// // `;

// export default function CheckoutDialog(props) {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [township, setTownship] = useState("");
//   const [pickup, setPickup] = useState("");

//   const [charges, setCharges] = useState("");
//   const [paymenttype, setPaymentType] = useState("");
//   const [paymentchannel, setPaymentChannel] = useState("");
//   const [remark, setRemark] = useState("");
//   const navigate = useNavigate();
//   const [banks, setBanks] = useState([]);
//   const [bank_id, setBankId] = useState();
//   const [screenshot, setShortenedImageBase64] = useState("");

//   const url = useSelector((state) => state.user.url);
//   console.log("URL: ", url);
 
  
//   const username = useSelector((state) => state.user);
//   console.log("Username state: ", username);
 

//   const cart = useSelector((state) => state.cart);
//   console.log("Cart: ", cart)
//   const dispatch = useDispatch();

//   // Fetch banks data
//   useEffect(() => {
//     if (!url) return;

//     axios
//       .get(url + "/api/bank/list")
//       .then((res) => {
//         setBanks(res.data.data || []);
//       })
//       .catch((err) => console.log(err));
//   }, [url]);

//   // Initialize form data from props when dialog opens
//   useEffect(() => {
//     if (props.open) {
//       setTownship(props.township || "");
//       setBankId(props.selectedBank || "");
//       setRemark(props.orderNotes || "");
//       setShortenedImageBase64(props.paymentScreenshot || "");
//       setDeliveryType(props.deliveryType || "pickup");
//       setShowTownshipInput(props.deliveryType === "township");
//       setAddress(props.address || username.address || "");
//     }
//   }, [props.open, props.township, props.selectedBank, props.orderNotes, props.paymentScreenshot, props.deliveryType, props.address, username.address]);

//   console.log(name, phone, address, township, charges);

 
//   const onTownshipChanged = (e) => {
//     setTownship(e.target.value);
//     const selectedTownship = defaultTownships.find(
//       (township) => township === e.target.value
//     );
//     console.log("township", selectedTownship); 
//   };
//   const [deliveryType, setDeliveryType] = useState("pickup");
//   const [showTownshipInput, setShowTownshipInput] = useState(false);

//   const onDeliveryTypeChanged = (e) => {
//     setDeliveryType(e.target.value);

//     if (e.target.value === "township") {
//       setShowTownshipInput(true);
//     } else {
//       setShowTownshipInput(false);
//     }
//   };

//   const onChargesChanged = (e) => setCharges(e.target.value);
//   const onPaymentTypeChanged = (e) => setPaymentType(e.target.value);
//   const onPaymentChannelChanged = (e) => setPaymentChannel(e.target.value);
//   const onRemarkChanged = (e) => setRemark(e.target.value);
//   const onPickupChanged = (e) => setPickup(e.target.value);
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const img = new Image();
//         img.src = e.target.result;
//         img.onload = () => {
//           const canvas = document.createElement("canvas");
//           const ctx = canvas.getContext("2d");
//           const maxWidth = 200;
//           const maxHeight = 200;
//           const width = Math.min(maxWidth, img.width);
//           const height = Math.min(maxHeight, img.height);
//           canvas.width = width;
//           canvas.height = height;
//           ctx.drawImage(img, 0, 0, width, height);
//           const shortenedBase64 = canvas.toDataURL("image/jpeg");
//           console.log("Base 64:", shortenedBase64);
//           setShortenedImageBase64(shortenedBase64);
//         };
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   console.log('cart is the answer',cart);

//   // const orderSave = async () => {
//   //   try {
//   //     const response = await axios.post( url + "/api/ecommerce_order_store", {
//   //       id: username.id,
//   //       name: username.customer_name || username.name,
//   //       phone: username.phone,
//   //       address: username.address,
//   //       township: props.township || township,
//   //       pickup: deliveryType === "pickup" ? "pickup" : "",
//   //       charges: charges,
//   //       paymenttype: "2", // Prepaid Full
//   //       paymentchannel: "1", // Mobile Banking
//   //       remark: remark,
//   //       products: cart.products,
//   //       quantity: cart.total_pcs,
//   //       amount: cart.total,
//   //       screenshot: props.paymentScreenshot || screenshot,
//   //       bank_id: props.selectedBank || bank_id,
//   //     });
//   //     console.log("order data is", response);
//   //     dispatch(resetProduct());
//   //     navigate("/order_history");
//   //   } catch (error) {
//   //     console.error("Failed to store e-commerce order:", error.message);
//   //     alert("Failed to store e-commerce order. Please try again.");
//   //   }
//   // };

//   const orderSave = async () => {
//   try {
//     // Debug: Check if username.id exists
//     console.log("Username ID:", username.id);
//     console.log("Username object:", username);
    
//     const payload = {
//       id: username.id || null, 
//       name: username.customer_name || username.name,
//       phone: username.phone,

//       // Delivery logic
//       address: deliveryType === "pickup" ? "" : address,
//       township: deliveryType === "pickup" ? "" : township,
//       pickup: deliveryType === "pickup" ? 1 : 0,

//       charges: charges || 0,

//       remark: remark || "",

//       products: cart.products.map((item) => ({
//         unitid: item.unitid,
//         quantity: item.quantity,
//         price: item.price,
//       })),

//       quantity: cart.total_pcs,
//       amount: cart.total,

//       // Payment proof
//       screenshot: screenshot || props.paymentScreenshot || "",

//       // Bank
//       bank_id: bank_id || props.selectedBank ? Number(bank_id || props.selectedBank) : null,
//     };

//     console.log("Final Payload:", payload);

//     const response = await axios.post(
//       url + "/api/ecommerce_order_store",
//       payload
//     );

//     console.log("order data is", response);

//     dispatch(resetProduct());
//     navigate("/order_list");
//   } catch (error) {
//     console.error("Failed to store e-commerce order:", error.message);
//     alert("Failed to store e-commerce order. Please try again.");
//   }
// };

//   const [showBankInfo, setshowBankInfo] = useState(false);
//   const [showPaidInfo, setshowPaidInfo] = useState(false);

//   const bankInfo = () => {
//     setshowBankInfo(true);
//   };

//   const paidInfo = () => {
//     setshowPaidInfo(true);
//   };

//   const defaultTownships = [
//     "Ahlon",
//     "Bahan",
//     "Botatung",
//     "Dagon Seikkan",
//     "Dagon",
//     "Dala",
//     "Dawbon",
//     "East Dagon",
//     "Hlaing",
//     "Hlaingthaya",
//     "Insein",
//     "Kamayut",
//     "Kyauktada",
//     "Kyimyingdaing",
//     "Lanmadaw",
//     "Latha",
//     "Mayangon",
//     "Mingala Taungnyunt",
//     "Mingaladon",
//     "North Dagon",
//     "North Okkalapa",
//     "Pabedan",
//     "Pazundaung",
//     "Sanchaung",
//     "Seikkan",
//     "Seikkyi Kanaungto",
//     "Shwepyitha",
//     "South Dagon",
//     "South Okkalapa",
//     "Tamwe",
//     "Thaketa",
//     "Thingangyun",
//     "Yankin",
//   ];
//   console.log("bank id is", bank_id);

//   return (
//     <div>
//       <Dialog open={props.open} onClose={props.close} id="checkout">
//         <DialogTitle>
//           <b>Delivery and Payment Information</b>
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Please enter information to check out!
//           </DialogContentText>
//           <Form>
//             <label>Name</label>

//             <Input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="name"
//               value={username.name}
//               readOnly
//             />
//             <label>Phone</label>

//             <Input
//               type="text"
//               id="phone"
//               name="phone"
//               placeholder="phone"
//               value={username.phone}
//               readOnly
//             />
//             <label>Address</label>

//             <Input
//               type="text"
//               id="address"
//               name="address"
//               placeholder="address"
//               value={address}
//               readOnly
//             />

//             <Filter>
//               <div>
//                 <label>Delivery Type: <strong>{deliveryType === "pickup" ? "Pickup" : "Township"}</strong></label>
//               </div>
//             </Filter>
//             <Filter>
//               {deliveryType === "township" && township && (
//                 <div>
//                   <label>Selected Township: <strong>{township}</strong></label>
//                 </div>
//               )}
//             </Filter>
//             <Filter>
//               <label>
//                 Payment: <strong>{props.selectedBankName || 'N/A'}</strong>
//               </label>
//             </Filter>

//             {props.paymentScreenshot && (
//               <div>
//                 <label>Payment Screenshot Uploaded</label>
//                 <img 
//                   src={props.paymentScreenshot} 
//                   alt="Payment Screenshot" 
//                   style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
//                 />
//               </div>
//             )}

//             <label>Pay amount</label>
//             <Input
//               type="text"
//               id="payamount"
//               disabled
//               placeholder="Pay Amount"
//               value={props.total}
//             />
//             <label>Order Notes</label>
//             <TextArea
//               value={remark}
//               onChange={onRemarkChanged}
//               placeholder="Add any additional notes..."
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #2f80a5',
//                 borderRadius: '10px',
//                 outline: 'none',
//                 minHeight: '80px',
//                 resize: 'vertical'
//               }}
//             />
//           </Form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={props.close} className="bg-blue-500">Cancel</Button>
//           <Button onClick={orderSave}>Order</Button>
//         </DialogActions>
//       </Dialog>
//       <BankInfoDialog
//         open={showBankInfo}
//         close={() => setshowBankInfo(false)}
//         setBankId={setBankId}
//       />
//       {/* <PaymentDialog open={showBankInfo}
//       close={() => setshowBankInfo(false)}
//       setBankId={setBankId}/> */}
//       {/* <PaidInfoDialog total={props.total} open={showPaidInfo} close={() => setshowPaidInfo(false)} /> */}
//     </div>
//   );
// }
// // phyo
// //maymyat
// //township,bank data and img-base64 by ziizii


import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { resetProduct } from "../redux/cartRedux";
import BankInfoDialog from "./BankInfoDialog";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #2f80a5;
  border-radius: 10px;
  outline: none;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 5px 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #2f80a5;
  border-radius: 10px;
  outline: none;

  &:focus {
    border: 1px solid #1e5f7a;
    box-shadow: 0 0 0 2px rgba(47, 128, 165, 0.2);
  }
`;

// export default function CheckoutDialog(props) {
//   const [address, setAddress] = useState("");
//   const [township, setTownship] = useState("");
//   const [charges] = useState(0); // Default to 0 if not handled dynamically
//   const [remark, setRemark] = useState("");
//   const [bank_id, setBankId] = useState("");
//   const [screenshot, setShortenedImageBase64] = useState("");
//   const [deliveryType, setDeliveryType] = useState("pickup");
//   const [, setShowTownshipInput] = useState(false);
//   const [showBankInfo, setshowBankInfo] = useState(false);
//   const [banks, setBanks] = useState([]);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // FIXED: Access keys directly from state.user since your data is at the root
//   const user = useSelector((state) => state.user);
//   const url = useSelector((state) => state.user.url);
//   const cart = useSelector((state) => state.cart);

//   // Fetch banks data
//   useEffect(() => {
//     if (!url) return;

//     axios
//       .get(url + "/api/bank/list")
//       .then((res) => {
//         setBanks(res.data.data || []);
//       })
//       .catch((err) => console.log(err));
//   }, [url]);

//   // Initialize form data from props when dialog opens
//   useEffect(() => {
//     if (props.open) {
//       setTownship(props.township || "");
//       setBankId(props.selectedBank || "");
//       setRemark(props.orderNotes || "");
//       setShortenedImageBase64(props.paymentScreenshot || "");
//       setDeliveryType(props.deliveryType || "pickup");
//       setShowTownshipInput(props.deliveryType === "township");
//       setAddress(props.address || user.address || "");
//     }
//   }, [props.open, props.township, props.selectedBank, props.orderNotes, props.paymentScreenshot, props.deliveryType, props.address, user.address]);

//   const onRemarkChanged = (e) => setRemark(e.target.value);

//   const orderSave = async () => {
//     try {
//       const payload = {
//         // FIXED: Grabs the ID accurately (e.g., 4308) directly from the user slice root
//         id: user.id || null, 
//         name: user.name,
//         phone: user.phone || "",

//         // Delivery logic
//         address: deliveryType === "pickup" ? "" : address,
//         township: deliveryType === "pickup" ? "" : township,
//         pickup: deliveryType === "pickup" ? 1 : 0,

//         charges: charges || 0,
//         remark: remark || "",

//         products: cart.products.map((item) => ({
//           unitid: item.unitid,
//           quantity: item.quantity,
//           price: item.price,
//         })),

//         quantity: cart.total_pcs,
//         amount: cart.total,

//         // Payment proof
//         screenshot: screenshot || props.paymentScreenshot || "",

//         // Bank
//         bank_id: bank_id || props.selectedBank ? Number(bank_id || props.selectedBank) : null,
//       };

//       console.log("Final Payload Sent to Server:", payload);

//       const response = await axios.post(
//         url + "/api/ecommerce_order_store",
//         payload
//       );

//       console.log("Order confirmation response:", response);

//       dispatch(resetProduct());
//       navigate("/order_list");
//     } catch (error) {
//       console.error("Failed to store e-commerce order:", error.message);
//       alert("Failed to store e-commerce order. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <Dialog open={props.open} onClose={props.close} id="checkout">
//         <DialogTitle>
//           <b>Delivery and Payment Information</b>
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Please enter information to check out!
//           </DialogContentText>
//           <Form>
//             <label>Name</label>
//             <Input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="name"
//               value={user.name || ""}
//               readOnly
//             />
            
//             <label>Phone</label>
//             <Input
//               type="text"
//               id="phone"
//               name="phone"
//               placeholder="phone"
//               value={user.phone || ""}
//               readOnly
//             />
            
//             <label>Address</label>
//             <Input
//               type="text"
//               id="address"
//               name="address"
//               placeholder="address"
//               value={address}
//               readOnly
//             />

//             <Filter>
//               <div>
//                 <label>Delivery Type: <strong>{deliveryType === "pickup" ? "Pickup" : "Township"}</strong></label>
//               </div>
//             </Filter>
            
//             <Filter>
//               {deliveryType === "township" && township && (
//                 <div>
//                   <label>Selected Township: <strong>{township}</strong></label>
//                 </div>
//               )}
//             </Filter>
            
//             <Filter>
//               <label>
//                 Payment: <strong>{props.selectedBankName || 'N/A'}</strong>
//               </label>
//             </Filter>

//             {props.paymentScreenshot && (
//               <div>
//                 <label>Payment Screenshot Uploaded</label>
//                 <img 
//                   src={props.paymentScreenshot} 
//                   alt="Payment Screenshot" 
//                   style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
//                 />
//               </div>
//             )}

//             <label>Pay amount</label>
//             <Input
//               type="text"
//               id="payamount"
//               disabled
//               placeholder="Pay Amount"
//               value={props.total}
//             />
            
//             <label>Order Notes</label>
//             <TextArea
//               value={remark}
//               onChange={onRemarkChanged}
//               placeholder="Add any additional notes..."
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #2f80a5',
//                 borderRadius: '10px',
//                 outline: 'none',
//                 minHeight: '80px',
//                 resize: 'vertical'
//               }}
//             />
//           </Form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={props.close} className="bg-blue-500">Cancel</Button>
//           <Button onClick={orderSave}>Order</Button>
//         </DialogActions>
//       </Dialog>
      
//       <BankInfoDialog
//         open={showBankInfo}
//         close={() => setshowBankInfo(false)}
//         setBankId={setBankId}
//       />
//     </div>
//   );
// }


// ... styled-components keep exactly the same as your setup ...

export default function CheckoutDialog(props) {
  const [address, setAddress] = useState("");
  const [township, setTownship] = useState("");
  const [charges] = useState(0); 
  const [remark, setRemark] = useState("");
  const [bank_id, setBankId] = useState("");
  const [screenshot, setShortenedImageBase64] = useState("");
  const [deliveryType, setDeliveryType] = useState("pickup");
  const [, setShowTownshipInput] = useState(false);
  const [showBankInfo, setshowBankInfo] = useState(false);
  const [banks, setBanks] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const url = useSelector((state) => state.user.url);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!url) return;
    axios
      .get(url + "/api/bank/list")
      .then((res) => {
        setBanks(res.data.data || []);
      })
      .catch((err) => console.log(err));
  }, [url]);

  // Synchronize dynamic updates directly from props and global Redux user object changes
  useEffect(() => {
    if (props.open) {
      setTownship(props.township || "");
      setBankId(props.selectedBank || "");
      setRemark(props.orderNotes || "");
      setShortenedImageBase64(props.paymentScreenshot || "");
      setDeliveryType(props.deliveryType || "pickup");
      setShowTownshipInput(props.deliveryType === "township");
      setAddress(props.address || user.address || "");
    }
  }, [props.open, props.township, props.selectedBank, props.orderNotes, props.paymentScreenshot, props.deliveryType, props.address, user]);

  const onRemarkChanged = (e) => setRemark(e.target.value);

  const orderSave = async () => {
    try {
      const payload = {
        // Fallback checks will prioritize real-time user object data keys cleanly
        id: user.id || null, 
        name: user.name || "",
        phone: user.phone || "",

        address: deliveryType === "pickup" ? "" : address,
        township: deliveryType === "pickup" ? "" : township,
        pickup: deliveryType === "pickup" ? 1 : 0,

        charges: charges || 0,
        remark: remark || "",

        products: cart.products.map((item) => ({
          unitid: item.unitid,
          quantity: item.quantity,
          price: item.price,
        })),

        quantity: cart.total_pcs,
        amount: cart.total,
        screenshot: screenshot || props.paymentScreenshot || "",
        bank_id: bank_id || props.selectedBank ? Number(bank_id || props.selectedBank) : null,
      };

      console.log("Final Payload Sent to Server:", payload);

      if (!payload.id) {
        alert("User session profile ID missing. Please verify login state.");
        return;
      }

      const response = await axios.post(
        url + "/api/ecommerce_order_store",
        payload
      );

      console.log("Order confirmation response:", response);
      dispatch(resetProduct());
      navigate("/order_list");
    } catch (error) {
      console.error("Failed to store e-commerce order:", error.message);
      alert("Failed to store e-commerce order. Please try again.");
    }
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.close} id="checkout">
        <DialogTitle><b>Delivery and Payment Information</b></DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter information to check out!</DialogContentText>
          <Form>
            <label>Name</label>
            <Input type="text" id="name" name="name" value={user.name || ""} readOnly />
            
            <label>Phone</label>
            <Input type="text" id="phone" name="phone" value={user.phone || ""} readOnly />
            
            <label>Address</label>
            <Input type="text" id="address" name="address" value={address} readOnly />

            <Filter>
              <div>
                <label>Delivery Type: <strong>{deliveryType === "pickup" ? "Pickup" : "Township"}</strong></label>
              </div>
            </Filter>
            
            <Filter>
              {deliveryType === "township" && township && (
                <div><label>Selected Township: <strong>{township}</strong></label></div>
              )}
            </Filter>
            
            <Filter>
              <label>Payment: <strong>{props.selectedBankName || 'N/A'}</strong></label>
            </Filter>

            {props.paymentScreenshot && (
              <div>
                <label>Payment Screenshot Uploaded</label>
                <img src={props.paymentScreenshot} alt="Payment Screenshot" style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} />
              </div>
            )}

            <label>Pay amount</label>
            <Input type="text" id="payamount" disabled value={props.total} />
            
            <label>Order Notes</label>
            <TextArea value={remark} onChange={onRemarkChanged} placeholder="Add any additional notes..." style={{ width: '100%', padding: '10px', border: '1px solid #2f80a5', borderRadius: '10px', outline: 'none', minHeight: '80px', resize: 'vertical' }} />
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
          <Button onClick={orderSave}>Order</Button>
        </DialogActions>
      </Dialog>
      
      <BankInfoDialog open={showBankInfo} close={() => setshowBankInfo(false)} setBankId={setBankId} />
    </div>
  );
}