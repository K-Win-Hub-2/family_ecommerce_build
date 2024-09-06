import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { resetProduct } from "../redux/cartRedux";
import BankInfoDialog from "./BankInfoDialog";
import PaidInfoDialog from "./PaidInfoDialog";
import PaymentDialog from "./PaymentDialog";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const Lable = styled.label`
  font-size: 15px;
`;

const FilterTitle = styled.span`
  font-size: 15px;
  font-weight: 200;
  margin-bottom: 3px;
`;
const DivF = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: center;
  margin-right: 2px;
`;
const Radio = styled.input`
  display: flex;
  margin-right: 20px;
`;
// hello world

const FilterSelect = styled.select`
  padding: 5px;
`;

const FilterOption = styled.option``;

export default function CheckoutDialog(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [township, setTownship] = useState("");
  const [pickup, setPickup] = useState("");

  const [charges, setCharges] = useState("");
  const [paymenttype, setPaymentType] = useState("");
  const [paymentchannel, setPaymentChannel] = useState("");
  const [remark, setRemark] = useState("");
  const navigate = useNavigate();
  const [bank_id, setBankId] = useState("");
  const [screenshot, setShortenedImageBase64] = useState("");

  const url = useSelector((state) => state.user.url);
 
  
  const username = useSelector((state) => state.user);
 

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  

  console.log(name, phone, address, township, charges);

 
  const onTownshipChanged = (e) => {
    setTownship(e.target.value);
    const selectedTownship = defaultTownships.find(
      (township) => township === e.target.value
    );
    console.log("township", selectedTownship); 
  };
  const [deliveryType, setDeliveryType] = useState("pickup");
  const [showTownshipInput, setShowTownshipInput] = useState(false);

  const onDeliveryTypeChanged = (e) => {
    setDeliveryType(e.target.value);

    if (e.target.value === "township") {
      setShowTownshipInput(true);
    } else {
      setShowTownshipInput(false);
    }
  };

  const onChargesChanged = (e) => setCharges(e.target.value);
  const onPaymentTypeChanged = (e) => setPaymentType(e.target.value);
  const onPaymentChannelChanged = (e) => setPaymentChannel(e.target.value);
  const onRemarkChanged = (e) => setRemark(e.target.value);
  const onPickupChanged = (e) => setPickup(e.target.value);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const maxWidth = 200;
          const maxHeight = 200;
          const width = Math.min(maxWidth, img.width);
          const height = Math.min(maxHeight, img.height);
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          const shortenedBase64 = canvas.toDataURL("image/jpeg");
          console.log("Base 64:", shortenedBase64);
          setShortenedImageBase64(shortenedBase64);
        };
      };
      reader.readAsDataURL(file);
    }
  };
  console.log('cart is the answer',cart);

  const orderSave = async () => {
    try {
      const response = await axios.post(url + "/api/ecommerce_order_store", {
        id: username.id,
        name: username.customer_name,
        phone: username.phone,
        address: username.address,
        township: township,
        pickup: pickup,
        charges: charges,
        paymenttype: paymenttype,
        paymentchannel: paymentchannel,
        remark: remark,
        products: cart.products,
        quantity: cart.total_pcs,
        // quantity: cart.quantity,
        amount: cart.total,
        screenshot: screenshot,
        bank_id: bank_id,
      });
      console.log("order data is", response);
      dispatch(resetProduct());
      navigate("/order_history");
    } catch (error) {
      console.error("Failed to store e-commerce order:", error.message);
      alert("Failed to store e-commerce order. Please try again.");
    }
  };
  const [showBankInfo, setshowBankInfo] = useState(false);
  const [showPaidInfo, setshowPaidInfo] = useState(false);

  const bankInfo = () => {
    setshowBankInfo(true);
  };

  const paidInfo = () => {
    setshowPaidInfo(true);
  };

  const defaultTownships = [
    "Ahlon",
    "Bahan",
    "Botatung",
    "Dagon Seikkan",
    "Dagon",
    "Dala",
    "Dawbon",
    "East Dagon",
    "Hlaing",
    "Hlaingthaya",
    "Insein",
    "Kamayut",
    "Kyauktada",
    "Kyimyingdaing",
    "Lanmadaw",
    "Latha",
    "Mayangon",
    "Mingala Taungnyunt",
    "Mingaladon",
    "North Dagon",
    "North Okkalapa",
    "Pabedan",
    "Pazundaung",
    "Sanchaung",
    "Seikkan",
    "Seikkyi Kanaungto",
    "Shwepyitha",
    "South Dagon",
    "South Okkalapa",
    "Tamwe",
    "Thaketa",
    "Thingangyun",
    "Yankin",
  ];
  console.log("bank id is", bank_id);

  return (
    <div>
      <Dialog open={props.open} onClose={props.close} id="checkout">
        <DialogTitle>
          <b>Delivery and Payment Information</b>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter information to check out!
          </DialogContentText>
          <Form>
            <label>Name</label>

            <Input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={username.name}
            />
            <label>Phone</label>

            <Input
              type="text"
              id="phone"
              name="phone"
              placeholder="phone"
              value={username.phone}
            />
            <label>Address</label>

            <Input
              type="text"
              id="address"
              name="address"
              placeholder="address"
              value={username.address}
            />

            <Filter>
              <DivF>
                {/* <label>Bank Info</label> */}

                {/* <Lable >Pickup</Lable>
                            <Input  type="radio" name="pickup" value={pickup} id='r1' ></Input>
                            <Lable >Township</Lable>
                            <Input  type="radio" name="township" id='r2'></Input> */}
                <label>Pickup</label>
                <Radio
                  type="radio"
                  name="deliveryType"
                  value="pickup"
                  onChange={onDeliveryTypeChanged}
                />

                <label>Township</label>
                <Radio
                  type="radio"
                  name="deliveryType"
                  value="township"
                  checked={showTownshipInput}
                  onChange={onDeliveryTypeChanged}
                />
              </DivF>
            </Filter>
            <Filter>
              {deliveryType === "township" && (
                <FilterSelect
                  showTownshipInput={showTownshipInput}
                  name="township"
                  onChange={onTownshipChanged}
                >
                  <FilterOption>Select Township</FilterOption>
                  {defaultTownships.map((township, index) => (
                    <FilterOption key={index} value={township}>
                      {township}
                    </FilterOption>
                  ))}
                </FilterSelect>
              )}
            </Filter>
            <Filter>
              <FilterTitle>Payment Type</FilterTitle>
              <FilterSelect value={paymenttype} onChange={onPaymentTypeChanged}>
                <FilterOption>Select Payment Type</FilterOption>
                <FilterOption value="2">Prepaid Full</FilterOption>
              </FilterSelect>
            </Filter>
            <Filter>
              <FilterTitle>Payment Channel</FilterTitle>
              <FilterSelect
                value={paymentchannel}
                onChange={onPaymentChannelChanged}
              >
                <FilterOption>Select Payment Channel</FilterOption>
                <FilterOption value="1">Mobile Banking</FilterOption>
              </FilterSelect>
            </Filter>

            {paymentchannel == "1" ? (
              <div>
                <div>
                  <label>Bank Info</label>
                  <Input
                    type="checkbox"
                    value={bank_id ? bank_id : ""}
                    onChange={bankInfo}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            <input type="file" onChange={handleFileChange} />
            <Input
              type="text"
              id="payamount"
              disabled
              placeholder="Pay Amount"
              value={props.total}
            />
            <Input
              type="text"
              id="remark"
              name="remark"
              placeholder="remark"
              onChange={onRemarkChanged}
            />
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
          <Button onClick={orderSave}>Save</Button>
        </DialogActions>
      </Dialog>
      <BankInfoDialog
        open={showBankInfo}
        close={() => setshowBankInfo(false)}
        setBankId={setBankId}
      />
      {/* <PaymentDialog open={showBankInfo}
      close={() => setshowBankInfo(false)}
      setBankId={setBankId}/> */}
      {/* <PaidInfoDialog total={props.total} open={showPaidInfo} close={() => setshowPaidInfo(false)} /> */}
    </div>
  );
}
// phyo
//maymyat
//township,bank data and img-base64 by ziizii
