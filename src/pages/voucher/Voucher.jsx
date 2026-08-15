import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import html2pdf from "html2pdf.js";
import Spinner from "../../common/Spinner";
import Logo from "../../files/logo.png";

const PrintGlobalStyle = createGlobalStyle`
  @page {
    size: A4 portrait;
    margin: 0;
  }

  @media print {
    html,
    body {
      margin: 0;
      padding: 0;
      width: 210mm;
      height: 297mm;
    }

    body * {
      visibility: hidden;
    }

    #voucher-print,
    #voucher-print * {
      visibility: visible;
    }

    #voucher-print {
      position: absolute;
      left: 0;
      top: 0;
      width: 210mm;
      min-height: 297mm;
      overflow: hidden;
    }
  }
`;

const VoucherContainer = styled.div`
  width: 210mm;
  height: auto;
  margin: 20px auto;
  padding: 18px 20px;
  background: #fff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;

  @media print {
    margin: 0;
    border: none;
    width: 210mm;
    min-height: 297mm;
    padding: 12mm;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: auto;
    margin: 0;
    padding: 15px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

// const logo = styled.div`
//   width: 20px;
//   height: 20px;
//   margin: 0 auto 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 10px;
// `;

const CompanyName = styled.h1`
  margin: 0;
  color: #18a8df;
  font-size: 28px;
  font-weight: 700;
`;

const Address = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.5px;
`;

const Phone = styled.div`
  font-size: 12px;
  margin-top: 2px;
  letter-spacing: 0.5px;
`;

const VoucherTitle = styled.h2`
  text-align: center;
  margin: 8px 0 12px;
  font-size: 20px;
  font-weight: 900;
  color: #555;
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 30px;
  font-size: 12px;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
`;

const InfoRow = styled.div`
  display: flex;
  line-height: 1.5;
`;

const Label = styled.span`
  min-width: 95px;
  color: #666;
`;

const Value = styled.span`
  color: #222;
  font-weight: 600;
`;

const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  margin-top: 5px;

  th,
  td {
    border: 1px solid #777;
    padding: 3px 4px;
    text-align: center;
    vertical-align: middle;
  }

  th {
    font-weight: 600;
    background: #fafafa;
  }
`;

const LeftCell = styled.td`
  text-align: left !important;
`;

const ProductName = styled.div`
  font-size: 12px;
`;

const ProductCode = styled.div`
  color: #777;
  font-size: 12px;
  margin-top: 1px;
`;

const Remarks = styled.div`
  font-size: 12px;
  padding-top: 8px;
  letter-spacing: 0.5px;
`;

const RemarkTitle = styled.div`
  margin-bottom: 8px;
`;

const CustomerAddress = styled.div`
  margin-top: 5px;
`;

const SummaryLabel = styled.td`
  text-align: right;
  font-weight: 600;
`;

const SummaryValue = styled.td`
  text-align: right;
`;

const SummaryEmptyCell = styled.td`
  border: none !important;
`;

const TotalRow = styled.tr`
  font-weight: 700;

  td {
    font-weight: 700;
    text-transform: capitalize;
  }
`;

const SignatureSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 20px;
  letter-spacing: 0.5px;
`;

const SignatureBox = styled.div`
  font-size: 12px;
`;

const SignatureTitle = styled.div`
  font-weight: 700;
  margin-bottom: 16px;
`;

const SignatureRow = styled.div`
  margin-top: 10px;
  letter-spacing: 0.5px;
`;

const PrintButton = styled.button`
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  background: #18a8df;
  color: white;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: #0d91c5;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media print {
    display: none;
  }
`;

const PrintWrap = styled.div`
  width: 210mm;
  margin: 0 auto;
  text-align: right;
  padding: 0 20px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Breadcrumb = styled.nav`
  width: 210mm;
  margin: 20px auto 0;
  padding: 0 20px;
  font-size: 14px;
  color: #666;
  letter-spacing: 0.5px;

  a {
    color: #18a8df;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    margin: 0 6px;
    color: #999;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
  }

  @media print {
    display: none;
  }
`;

const Toolbar = styled.div`
  width: 210mm;
  margin: 20px auto 0;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Breadcrumb} {
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media print {
    display: none;
  }
`;

const BackButton = styled.button`
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  background: #18a8df;
  color: white;
  cursor: pointer;
  font-size: 13px;
  white-space: nowrap;

  &:hover {
    background: #0d91c5;
  }

  @media print {
    display: none;
  }
`;

const Voucher = () => {
  const url = useSelector((state) => state.user.url);
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("id");

  const [voucher, setVoucher] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const fetchVoucher = async () => {
      if (!orderId) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const res = await axios.get(url + "/api/ecommerce_orders/" + orderId);
        const order =
          res.data?.data?.order || res.data?.order || res.data;
        const rawItems =
          res.data?.data?.items || order?.items || [];

        const items = rawItems.map((item, index) => ({
          no: index + 1,
          itemCode:
            item.unit_code ||
            item.item_code ||
            String(item.counting_unit_id || "-"),
          itemName:
            item.item_name || item.unit_name || "Order Item",
          design: item.design_name || "-",
          fabric: item.fabric_name || "-",
          colour: item.colour_name || "-",
          size: item.size_name ? item.size_name.toUpperCase() : "-",
          gender: item.gender_name || "-",
          quantity: Number(item.quantity) || 0,
          price: Number(item.price) || 0,
          discount: Number(item.discount_value) || 0,
        }));

        const orderItems = items.length
          ? items
          : [
              {
                no: 1,
                itemCode: "-",
                itemName: "-",
                design: "-",
                fabric: "-",
                colour: "-",
                size: "-",
                gender: "-",
                quantity: 0,
                price: 0,
                discount: 0,
              },
            ];

        setVoucher({
          invoiceNo: order.order_code || "#UNKNOWN",
          date: order.order_date || "",
          customerName: order.customer_name || "",
          customerPhone: order.customer_phone || "",
          customerOwner: order.customer_name || "",
          orderStatus: order.order_status || "",
          paymentType: order.payment_type || "",
          paymentChannel: order.payment_channel || "",
          bankName: order.bank?.bank_name || "",
          bankAccount:
            order.bank?.account_name || order.bank?.bank_name || "",
          township: order.township || "",
          remark:
            order.screenshot?.remark ||
            order.remark ||
            "",
          customerAddress:
            order.deliver_address || order.address || "",
          billingAddress: order.billing_address || "",
          advance: Number(order.advance) || 0,
          collectAmount: Number(order.collect_amount) || 0,
          deliveryFee: Number(order.delivery_fee) || 0,
          orderId: order.id,
          items: orderItems,
        });
      } catch (error) {
        console.error("Error fetching voucher:", error);
        setVoucher(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVoucher();
  }, [url, orderId]);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
        <Spinner />
      </div>
    );
  }

  if (!voucher) {
    return (
      <p style={{ textAlign: "center", padding: "50px", fontSize: "16px" }}>
        No voucher data found.
      </p>
    );
  }

  const amount = voucher.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = voucher.items.reduce(
    (total, item) => total + item.discount,
    0
  );

  console.log("Amount:", amount);
  console.log("Discount:", discount);

  const netAmount = amount - discount;

  const paidAmount = voucher.advance;
  const change = Math.max(0, paidAmount - netAmount);

  const formatMoney = (number) =>
    Number(number).toLocaleString("en-US");

  const handleDownloadPDF = async () => {
    const element = document.getElementById("voucher-print");
    if (!element) return;

    setIsDownloading(true);
    try {
      const options = {
        margin: [0, 0, 0, 0],
        filename: `Sale_Voucher_${voucher.invoiceNo || "voucher"}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          windowWidth: 794,
        },
        jsPDF: {
          unit: "px",
          format: [794, 1123],
          orientation: "portrait",
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      await html2pdf().set(options).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <PrintGlobalStyle />
      <Toolbar>
        <Breadcrumb>
          <Link to="/order_list">Order List</Link>
          <span>&gt;</span>
          <span>Voucher</span>
        </Breadcrumb>

        <Link to="/order_list" style={{ textDecoration: "none" }}>
          <BackButton>Back to Order List</BackButton>
        </Link>
      </Toolbar>
      <VoucherContainer id="voucher-print">
        {/* ================= HEADER ================= */}
        <Header>

          <img src={Logo} className="w-[150px] h-[150px] m-auto" alt="Logo" />

          <CompanyName>
            Medical World Co., Ltd
          </CompanyName>

          <Address>
            No.28,Hlaing Yadanar Mon 3rd Street, Hlaing Yadanar Mon Avenue, Hlaing Township,
            Yangon
          </Address>

          <Phone>
            ☎ 09777005861, 09777005862
          </Phone>
        </Header>

        <VoucherTitle>Sale Voucher</VoucherTitle>

        {/* ================= CUSTOMER INFO ================= */}
        <InfoSection>
          <InfoRow>
            <Label>Invoice No:</Label>
            <Value>{voucher.invoiceNo}</Value>
          </InfoRow>

          <InfoRow>
            <Label>Customer Name:</Label>
            <Value>{voucher.customerName}</Value>
          </InfoRow>

          <InfoRow>
            <Label>Invoice Date:</Label>
            <Value>{voucher.date}</Value>
          </InfoRow>

          <InfoRow>
            <Label>Customer Phone:</Label>
            <Value>{voucher.customerPhone}</Value>
          </InfoRow>

          <InfoRow>
            <Label>Cashier:</Label>
            <Value>{voucher.customerOwner}</Value>
          </InfoRow>
        </InfoSection>

        <ItemsTable>
          <thead>
            <tr>
              <th>No</th>
              <th>Item</th>
              <th>Color</th>
              <th>Size</th>
              <th>QTY</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Total Charge</th>
            </tr>
          </thead>

          <tbody>
            {voucher.items.map((item) => {
              const total =
                item.price * item.quantity - item.discount;

              return (
                <tr key={item.no}>
                  <td>{item.no}</td>

                  <LeftCell>
                    <ProductName>
                      {item.itemName}
                    </ProductName>

                    <ProductCode>
                      {item.itemCode}
                    </ProductCode>
                  </LeftCell>

                  <td>{item.colour.toUpperCase()}</td>

                  <td>{item.size}</td>

                  <td>{item.quantity}</td>

                  <td>{formatMoney(item.price)}</td>

                  <td>{formatMoney(item.discount)}</td>

                  <td>{formatMoney(total)}</td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <SummaryEmptyCell colSpan={5} />
              <SummaryLabel colSpan={2}>Amount</SummaryLabel>
              <SummaryValue>{formatMoney(amount)}</SummaryValue>
            </tr>

            <tr>
              <SummaryEmptyCell colSpan={5} />
              <SummaryLabel colSpan={2}>Discount</SummaryLabel>
              <SummaryValue>{formatMoney(discount)}</SummaryValue>
            </tr>

            <TotalRow>
              <SummaryEmptyCell colSpan={5} />
              <SummaryLabel colSpan={2}>Net Amount</SummaryLabel>
              <SummaryValue>{formatMoney(netAmount)}</SummaryValue>
            </TotalRow>

            <tr>
              <SummaryEmptyCell colSpan={5} />
              <SummaryLabel colSpan={2}>Pay</SummaryLabel>
              <SummaryValue>{formatMoney(paidAmount)}</SummaryValue>
            </tr>

            <tr>
              <SummaryEmptyCell colSpan={5} />
              <SummaryLabel colSpan={2}>Change</SummaryLabel>
              <SummaryValue>{formatMoney(change)}</SummaryValue>
            </tr>
          </tfoot>
        </ItemsTable>

        {/* ================= REMARK + ADDRESS ================= */}
        <Remarks>
          <RemarkTitle>
            <strong>Remark :</strong> {voucher.remark}
          </RemarkTitle>

          <CustomerAddress>
            <strong>Customer Address:</strong> {voucher.township} , {voucher.customerAddress}
          </CustomerAddress>
        </Remarks>

        {/* ======================== Thank ================= */}
        <div style={{ textAlign: "center", marginTop: "20px", fontSize: "14px", fontWeight: "600" }}>
          Thank you for your shopping!
        </div>

        {/* ================= SIGNATURES ================= */}
        {/* <SignatureSection> */}
          {/* PAID BY */}
          {/* <SignatureBox>
            <SignatureTitle>PAID BY</SignatureTitle>

            <SignatureRow>
              Signature:
            </SignatureRow>

            <SignatureRow>
              Name:
            </SignatureRow>

            <SignatureRow>
              Position:
            </SignatureRow>
          </SignatureBox> */}

          {/* RECEIVED BY */}
          {/* <SignatureBox>
            <SignatureTitle>RECEIVED BY</SignatureTitle>

            <SignatureRow>
              Signature:
            </SignatureRow>

            <SignatureRow>
              Name:
            </SignatureRow>

            <SignatureRow>
              Position:
            </SignatureRow>
          </SignatureBox> */}

          {/* APPROVED BY */}
          {/* <SignatureBox>
            <SignatureTitle>APPROVED BY</SignatureTitle>

            <SignatureRow>
              Signature:
            </SignatureRow>

            <SignatureRow>
              Name:
            </SignatureRow>

            <SignatureRow>
              Position:
            </SignatureRow>
          </SignatureBox> */}
        {/* </SignatureSection> */}
      </VoucherContainer>

      <PrintWrap>
        <PrintButton onClick={handleDownloadPDF} disabled={isDownloading}>
          {isDownloading ? "Downloading..." : "Download PDF Voucher"}
        </PrintButton>
      </PrintWrap>
    </>
  );
};

export default Voucher;