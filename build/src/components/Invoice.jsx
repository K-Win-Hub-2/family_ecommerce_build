import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
//  import html2pdf from "..//html2pdf.node";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

const Img = styled.img`
  width: 400px;
`;
export default function Invoice() {
  let total_amount = 0;

  const path = useLocation();
  const [name, setName] = useState("");
  const [order_date, setOrderDate] = useState("");
  const [discount, setDiscountAmount] = useState("");

  const [advance_pay, setAdvanceAmount] = useState("");

  const [phone, setPhone] = useState("");
  const [invoice, setInvoice] = useState("");

  const [address, setAddress] = useState("");
  const [countingunit, setCountingUnit] = useState({});
  const [ecounting, setEcounting] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [, setAttachs] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = useSelector((state) => state.user.url);
  // console.log("daaaa",path);
  const id = path.pathname.split("/order_invoice/")[1];
  // console.log("id",id);

  useEffect(() => {
    axios
      .get(url + "/api/ecommerce_order_detail/" + id)
      .then((res) => {
        console.log("Invoice Count data is", res.data.counting_units);
        console.log("Main data are", res.data);

        setName(res.data.orders.customer_name);
        setOrderDate(res.data.orders.order_date);
        setDiscountAmount(res.data.orders.discount_amount);
        setAdvanceAmount(res.data.orders.advance);

        setPhone(res.data.orders.customer_phone);
        setInvoice(res.data.orders.order_code);

        setAddress(res.data.orders.deliver_address);
        setAttachs(res.data.attachs);
        console.log("attach data ", res.data.attachs);

        setCountingUnit(res.data.counting_units);
        setEcounting(res.data.units);
        console.log("encoundign units", res.data.units);
        setColor(res.data.color);
        setSize(res.data.size);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching invoice data:", error);
        setLoading(false);
      });
  }, [url, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <>
      <Navbar/> <br /> <br /> <br />
         <div className="card printableArea px-5 container mt-10">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="col-md-12 text-center">
              <div>
                <Img src={url + "/image/medicalWorld.png"} />
              </div>
              <div>
                <p className="mt-2" style={{ fontSize: 15 }}>
                  No.28, Hlaing Yadanar Mon 3rd Street, Hlaing Yadanar Mon
                  Avenue, Hlaing Township, Yangon
                  <br />
                  <i
                    className="fas fa-mobile-alt"
                    style={{ fontSize: 15 }}
                  />{" "}
                  09 777 00 5861, 09 777 00 5862
                </p>
              </div>
              <div>
                <h2 className="text-center text-secondary font-weight-bold">
                  Ecommerce Order Invoice
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-end">
                <div className="text-left">
                  <h3 className="text-black mt-3" style={{ fontSize: 15 }}>
                    Invoice No :{invoice}
                  </h3>
                  <h3 className="text-black mt-3" style={{ fontSize: 15 }}>
                    Order Date :{order_date}
                  </h3>
                  <h3 className="text-black mt-3" style={{ fontSize: 15 }}>
                    Order Voucher:{invoice}
                  </h3>
                </div>
                <div className="text-left">
                  <h3 className="text-black mt-3" style={{ fontSize: 15 }}>
                    Customer Name :{name}
                  </h3>
                  <h3 className="text-black mt-3" style={{ fontSize: 15 }}>
                    Customer Phone :{phone}
                  </h3>
                  <h3 className="text-black mt-3" style={{ fontSize: 15 }}>
                    Customer Address :{address}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      fontSize: 17,
                      fontWeight: "normal",
                      height: 15,
                      border: "1px solid black",
                    }}
                    className="text-center"
                  >
                    No
                  </th>
                  <th
                    style={{
                      fontSize: 17,
                      fontWeight: "normal",
                      height: 15,
                      border: "1px solid black",
                    }}
                    className="text-center"
                  >
                    Item
                  </th>
                  <th
                    style={{
                      fontSize: 17,
                      fontWeight: "normal",
                      height: 15,
                      border: "1px solid black",
                    }}
                    className="text-center"
                  >
                    Colour
                  </th>
                  <th
                    style={{
                      fontSize: 17,
                      fontWeight: "normal",
                      height: 15,
                      border: "1px solid black",
                    }}
                    className="text-center"
                  >
                    Size
                  </th>
                  <th
                    style={{
                      fontSize: 17,
                      fontWeight: "normal",
                      height: 15,
                      border: "1px solid black",
                    }}
                    className="text-center"
                  >
                    Qty
                  </th>
                  <th
                    style={{
                      fontSize: 17,
                      fontWeight: "normal",
                      height: 15,
                      border: "1px solid black",
                    }}
                    className="text-center"
                  >
                    Price
                  </th>
                  <th
                    style={{
                      fontSize: 17,
                      fontWeight: "normal",
                      height: 15,
                      border: "1px solid black",
                    }}
                    className="text-center"
                  >
                    Discount
                  </th>
                  <th
                    style={{
                      fontSize: 17,
                      fontWeight: "normal",
                      height: 15,
                      border: "1px solid black",
                    }}
                    className="text-center"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {countingunit.map((unit, index) =>
                  ecounting.map((ec, i) =>
                    unit.id === ec.counting_unit_id ? (
                      
                      <tr key={unit.id}>
                        <td
                          className="text-center"
                          style={{
                            fontSize: 13,
                            height: 45,
                            border: "1px solid black",
                          }}
                        >
                          {" "}
                          {++index}{" "}
                        </td>

                        <td
                          className="text-center"
                          style={{
                            fontSize: 13,
                            height: 45,
                            border: "1px solid black",
                          }}
                        >
                          {unit.unit_name}{" "}
                        </td>

                        <td
                          className="text-center"
                          style={{
                            fontSize: 13,
                            height: 45,
                            border: "1px solid black",
                          }}
                        >
                          {color[i]}
                        </td>
                        <td
                          className="text-center"
                          style={{
                            fontSize: 13,
                            height: 45,
                            border: "1px solid black",
                          }}
                        >
                          {size[i]}
                        </td>
                        <td
                          className="text-center"
                          style={{
                            fontSize: 13,
                            height: 45,
                            border: "1px solid black",
                          }}
                        >
                          {ec.quantity}
                        </td>
                        <td
                          className="text-center"
                          style={{
                            fontSize: 13,
                            height: 45,
                            border: "1px solid black",
                          }}
                        >
                          {ec.price}
                        </td>

                        <td
                          className="text-center"
                          style={{
                            fontSize: 13,
                            height: 45,
                            border: "1px solid black",
                          }}
                        >
                          {discount}
                        </td>

                        <td
                          className="text-center"
                          style={{
                            fontSize: 13,
                            height: 45,
                            border: "1px solid black",
                          }}
                        >
                          {" "}
                          {(total_amount += ec.quantity * ec.price)}
                        </td>
                      </tr>
                    ) : //  ............
                    null
                  )
                )}

                <tr>
                  <td style={{ border: "none" }} colSpan={4}></td>
                  <td
                    className="text-center"
                    colSpan={2}
                    style={{
                      fontSize: 15,
                      height: 45,
                      border: "1px solid black",
                    }}
                  >
                    Total Amount
                  </td>
                  <td
                    className="text-center"
                    colSpan={2}
                    style={{
                      fontSize: 15,
                      height: 45,
                      border: "1px solid black",
                    }}
                  >
                    {total_amount}
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} style={{ border: "none" }} />
                  <td
                    className="text-center"
                    colSpan={2}
                    style={{
                      fontSize: 15,
                      height: 45,
                      border: "1px solid black",
                    }}
                  >
                    Discount
                  </td>
                  <td
                    className="text-center"
                    colSpan={2}
                    style={{
                      fontSize: 15,
                      height: 45,
                      border: "1px solid black",
                    }}
                  >
                    {discount}{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} style={{ border: "none" }} />
                  <td
                    className="text-center"
                    colSpan={2}
                    style={{
                      fontSize: 15,
                      height: 45,
                      border: "1px solid black",
                    }}
                  >
                    Net Amount
                  </td>
                  <td
                    className="text-center"
                    colSpan={2}
                    style={{
                      fontSize: 15,
                      height: 45,
                      border: "1px solid black",
                    }}
                  >
                    {total_amount - discount ?? 0}{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    className="text-left"
                    style={{ fontSize: 15, height: 45, border: "none" }}
                  ></td>
                  <td
                    className="text-left"
                    colSpan={2}
                    style={{ fontSize: 15, height: 45, border: "none" }}
                  ></td>
                  <td
                    className="text-center"
                    colSpan={2}
                    style={{
                      fontSize: 15,
                      height: 45,
                      border: "1px solid black",
                    }}
                  >
                    Advance
                  </td>
                  <td
                    colSpan={2}
                    className="text-center"
                    style={{
                      fontSize: 15,
                      height: 10,
                      border: "1px solid black",
                    }}
                  >
                    {advance_pay ?? 0}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    className="text-left"
                    style={{ fontSize: 15, height: 45, border: "none" }}
                  ></td>
                  <td
                    className="text-left"
                    colSpan={2}
                    style={{ fontSize: 15, height: 45, border: "none" }}
                  ></td>
                  <td
                    className="text-center"
                    colSpan={2}
                    style={{
                      fontSize: 15,
                      height: 45,
                      border: "1px solid black",
                    }}
                  >
                    Balance
                  </td>
                  <td
                    colSpan={2}
                    className="text-center"
                    style={{
                      fontSize: 15,
                      height: 45,
                      border: "1px solid black",
                    }}
                  >
                   
                    {(total_amount - discount) - (advance_pay) ?? 0}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-left my-5 px-3">
              <div className="">
                <h4 className="font-weight-bold">Payment Details</h4>

                <table className="table table-borderless">
                  <thead>
                    <tr>
                      {/* <th>No.</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Remark</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td style={{ fontSize: 15 }}> </td>
                      <td style={{ fontSize: 15 }}> </td>
                      <td style={{ fontSize: 15 }}> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-5 px-3">
              <div className="">
                <h4 className="font-weight-bold">PAID BY</h4>
                <p style={{ textAlign: "left", fontSize: 15 }}>Sign :</p>
                <p style={{ textAlign: "left", fontSize: 15 }}>Name :</p>
                <p style={{ textAlign: "left", fontSize: 15 }}>Position :</p>
              </div>
              <div className="">
                <h4 className="font-weight-bold">RECEIVED BY</h4>
                <p style={{ textAlign: "left", fontSize: 15 }}>Sign :</p>
                <p style={{ textAlign: "left", fontSize: 15 }}>Name : </p>
                <p style={{ textAlign: "left", fontSize: 15 }}>Position :</p>
              </div>
              <div className="">
                <h4 className="font-weight-bold">APPROVED BY</h4>
                <p style={{ textAlign: "left", fontSize: 15 }}>Sign :</p>
                <p style={{ textAlign: "left", fontSize: 15 }}>Name : </p>
                <p style={{ textAlign: "left", fontSize: 15 }}>Position :</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <button
            id="print"
            className="btn btn-sm rounded btn-outline-info mr-2"
          >
            <i className="fas fa-print mr-1" />
            Print
          </button>
          {/* <a href="" className="btn btn-sm rounded btn-outline-primary">
            <i className="fas fa-arrow-circle-right mr-1" />
            Go to Deliver Order
          </a> */}
        </div>
       
  
      
        <Footer/>
      </>
    </>
  );
}
