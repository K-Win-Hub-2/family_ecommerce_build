import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Card = styled.div`
  border: 1px solid #2f80a5;
  border-radius: 10px;
  padding: 20px;
  background: #fff;
  width: 100%;
  margin: 10px 0;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #f3f4f6;
  }

  ${(props) =>
    props.active &&
    `
    border: 1px solid #2f80a5;
    background: #e6f4fa;
  `}
`;

const PaymentImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const BankText = styled.div`
  font-size: 14px;

  div {
    margin-bottom: 4px;
  }
`;

const BankCardItem = ({ bank }) => {
  return (
    <Row>
      <PaymentImg src={bank.image} alt={bank.bank_name} />

      <BankText>
        <div>
          <b>Account Name :</b> {bank.account_holder_name}
        </div>
        <div>
          <b>Account No :</b> {bank.account_name}
        </div>
      </BankText>
    </Row>
  );
};

const BankCard = () => {
  const [banks, setBanks] = useState([]);
  const url = useSelector((state) => state.user.url);

  useEffect(() => {
    if (!url) return;

    axios
      .get(url + "/api/bank/list")
      .then((res) => {
        setBanks(res.data.data || []);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <Card>
      <Title>Bank Information</Title>

      {banks.length > 0 ? (
        banks.map((bank) => (
          <BankCardItem key={bank.id} bank={bank} />
        ))
      ) : (
        <div style={{ textAlign: "center", color: "#999" }}>
          No bank data available
        </div>
      )}
    </Card>
  );
};

export default BankCard;