import { useState, useEffect } from "react";
import * as React from "react";
import { useLocation, Link } from "react-router-dom";

import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import kbzbank from "../files/kbzbank.png";
import aya from "../files/aya.jpg";
import cbpay from "../files/cbpay.jpg";
import kbzpay from "../files/kbzpay.png";
import wave from "../files/wave.png";
import waveqr from "../files/waveqr.jpg";
import kbzpayqr from "../files/kbzpayqr.jpg";
import cbpayqr from "../files/cbpayqr.jpg";
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
const Logo = styled.img`
  width: 100%;
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

export default function BankInfoDialog(props) {
  const [KBZBank, isKBZBank] = useState(false);
  const [AYABank, isAYABank] = useState(false);
  const [CBPay, isCBPay] = useState(false);
  const [KBZPay, isKBZPay] = useState(false);
  const [Wave, isWave] = useState(false);
  const [getBank, setBank] = useState();
  const [bankDetailData, setBankDetailData] = useState(null);
  const url = useSelector((state) => state.user.url);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
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
  }, []);

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
  }, []);

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

              getBank &&
                getBank.map((bank) => (
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
                  <QR src={bankDetailData.qr_photo} />
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
