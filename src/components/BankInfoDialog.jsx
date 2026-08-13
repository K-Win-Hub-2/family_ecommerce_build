import { useState, useEffect } from "react";
import * as React from "react";


import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import kbzbank from "../files/kbzbank.png";
import aya from "../files/aya.png";
import cbpay from "../files/cbpay.jpg";
import kbzpay from "../files/kbzpay.png";
import kbzpayqr from "../files/kbzpayqr.jpg";
import cbpayqr from "../files/cbpayqr.jpg";
import ayasaving from "../files/ayabank.png";
import cbspecial from "../files/cbspecial.jpg";
import axios from "axios";
const Bank = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: space-between;
  flex-direction: row;
`;
const BankLogo = styled.div`
  width: 20%;
  cursor: pointer;
  padding: 25px;
`;
const Imp = styled.span`
  font-weight: bold;
  color: #111111;
`;
const QRBox = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
`;
const QR = styled.img`
  width: 50%;
`;

const getBankQr = (bankName) => {
  switch (bankName) {
    case "K Pay":
      return kbzpayqr;
    case "CB Pay":
      return cbpayqr;
    default:
      return null;
  }
};

export default function BankInfoDialog(props) {
  

  const [getBank, setBank] = useState([]);
  const [bankDetailData, setBankDetailData] = useState(null);
  const url = useSelector((state) => state.user.url);
  // console.log(url);
  useEffect(() => {
    const getBank = () => {
      axios
        .get(url + "/api/bank/list")
        .then((response) => {
          setBank(response.data.data);
          //  console.log("bank  list data is",response.data.data)
        })
        .catch((error) => console.log(error));
    };
    getBank();
  }, [url]);

  const getBankDetail = (id) => {
    axios
      .get(url + "/api/bank/list/" + id)
      .then((response) => {
        setBankDetailData(response.data.data);
        props.setBankId(response.data.data.id);

        console.log("bank detail data is", response.data.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getBankDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log('getBank',getBank);
const updatedResponseArray = getBank.map(item => {
  switch (item.bank_name) {
      case "CB Special":
          return { ...item, bank_logo: cbspecial };
      case "AYA Special":
          return { ...item, bank_logo: ayasaving };
      case "KBZ":
          return { ...item, bank_logo: kbzbank };
      case "CB Pay":
          return { ...item, bank_logo: cbpay };
      case "K Pay":
          return { ...item, bank_logo: kbzpay };
      case "AYA (Current)":
          return { ...item, bank_logo: aya };
      case "AYA (Saving)":
          return { ...item, bank_logo: ayasaving };
      default:
          return item; // Return the item as is if no match is found
  }
});

const bankLogo = getBankQr(bankDetailData?.bank_name);
console.log('bankDetailData',bankDetailData);
console.log(bankLogo,'bankLogo');
  return (
    <div>
      <Dialog open={props.open} onClose={props.close}>
        <DialogTitle>
          <b>User Bank Information</b>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <b>Choose One of the Methods</b>
          </DialogContentText>

          <Bank>
            {
              //  console.log('get bank',getBank)

              updatedResponseArray &&
              updatedResponseArray.map((bank) => (
                  <div>
                    <div>
                      <BankLogo
                        onClick={(e) => {
                          e.preventDefault();
                          getBankDetail(bank.id);
                        }}
                      >
                        <img
                          src={bank.bank_logo}
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </BankLogo>
                    </div>
                    <div style={{ textAlign: "center" }}></div>
                  </div>
                ))
            }
          </Bank>
          <hr />
          {bankDetailData ? (
            <div style={{ paddingLeft: "20px" }}>
              <DialogContent>
                <DialogContentText style={{ marginBottom: "5px" }}>
                  {" "}
                  Account Number: <Imp>{bankDetailData.account_name} </Imp>
                </DialogContentText>
                <DialogContentText style={{ marginBottom: "5px" }}>
                  Bank Account Name:{" "}
                  <Imp>{bankDetailData.account_holder_name} </Imp>
                </DialogContentText>
                <DialogContentText style={{ marginBottom: "5px" }}>
                  Owner: <Imp>{bankDetailData.account_holder_name} </Imp>
                </DialogContentText>
                <QRBox>
                  <QR src={bankLogo} />
                </QRBox>
              </DialogContent>
            </div>
          ) : (
            <p>Loading bank details...</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// phyo
//maymyat
//api binding system by ziizii
