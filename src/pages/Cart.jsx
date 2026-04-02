// import React, { useState } from 'react'
// import styled from 'styled-components'
// import ColorNav from '../components/ColorNav'
// import Slider from '../components/Slider'
// import Announcement from '../components/Announcement'
// import Footer from '../components/Footer'
// import { Add, Remove } from '@mui/icons-material'
// import {mobile} from "../responsive"
// import { addProduct,
//     removeProduct,
//     updateQuantity,
//     resetPcs } from "../redux/cartRedux"
// import { useDispatch,useSelector } from 'react-redux'
// import axios from 'axios'
// import CheckoutDialog from '../components/CheckoutDialog'
// import { Link } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import Paidinfodialog from '../components/PaidInfoDialog';


// const Container = styled.div``
// const Wrapper = styled.div`
//     padding: 20px;
//     ${mobile({padding:"10px"})}
// `
// const Title = styled.h1`
//     font-weight: 300;
//     text-align: center;
// `
// const Top = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 20px;
// `
// const TopButton = styled.button`
//     padding: 10px;
//     font-weight: 600;
//     cursor: pointer;
//     border: ${props=> props.type === "filled" && "none"};
//     background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
//     color: ${props=> props.type === "filled" && "white"};
// `

// const TopTexts = styled.div`
// ${mobile({display:"none"})}
// `

// const TopText = styled.span`
//     text-decoration: underline;
//     cursor: pointer;
//     margin: 0px 10px;
// `

// const Bottom = styled.div`
//     display: flex;
//     justify-content: space-between;
//     ${mobile({flexDirection:"column"})}
// `
// const Info = styled.div`
//     flex: 3;
// `

// const Product = styled.div`
//     display: flex;
//     justify-content: space-between;
//     ${mobile({flexDirection:"column"})}
// `
// const ProductDetail = styled.div`
//     flex: 2;
//     display: flex;
// `
// const Image = styled.img`
//     width: 200px;
// `
// const Details = styled.div`
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
// `
// const ProductName = styled.span`
// font-size: 18px;
// margin-bottom:5px;`
// const ProductId = styled.span`
// font-size: 18px;
// margin-bottom:5px;`
// // const ProductColor = styled.div`
// //     width: 20px;
// //     height: 20px;
// //     border-radius: 50%;
// //     background-color: ${props=> props.color};
// // `
// const ProductSize = styled.span`
//     font-size: 18px;
//     margin-bottom:5px;
// `
// const ProductColor = styled.span`
// font-size: 18px;
// margin-bottom:5px;`
// const ProductFabric = styled.span`
// font-size: 18px;
// margin-bottom:5px;`

// const PriceDetail = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `

// const ProductAmountContainer = styled.div`
//     display: flex;
//     align-items: center;
//     margin-bottom: 5px;
// `
// const Button = styled.button`
// width: 25%;
// padding: 1px;
// background-color: red;
// color: white;
// border : none;
// border-radius: 9px;
// margin-top : 5px;
// `
// const ProductAmount = styled.div`
//     font-size: 22px;
//     margin: 5px;
//     ${mobile({margin:"5px 15px"})}
// `
// const ProductPrice = styled.div`
//     font-size: 22px;
//     font-weight:200;
//     ${mobile({marginBottom:"20px"})}
// `
// const Hr = styled.hr`
//     background-color: #eee;
//     border: none;
//     height: 2px;
// `
// const Summary = styled.div`
//     flex: 1;
//     border: 0.5px solid lightgray;
//     border-radius: 10px;
//     padding: 20px;
//     height: 80vh;
// `
// const SummaryTitle = styled.h1`
//     font-weight: 200;
// `
// const SummaryItem = styled.div`
//     margin: 30px 0px;
//     display: flex;
//     justify-content: space-between;
//     font-weight: ${props=> props.type === "total" && "500"};
//     font-size: ${props=> props.type === "total" && "24px"};

// `
// const SummaryItemText = styled.span``
// const SummaryItemPrice = styled.span``
// const SummaryButton = styled.button`
//     width: 100%;
//     padding: 10px;
//     background-color: black;
//     color: white;
//     font-weight: 600;
// `



// const Cart = () => {
//     const cart = useSelector(state=>state.cart);
//     console.log("Cart data",cart);
//     const[deliveryfee,setDeliveryFee] = useState(0);
//     const[discount,setDiscount] = useState(0);
//     const [showDialog, setShowDialog] = useState(false);
//     const url= useSelector(state => state.user.url);
//     const username = useSelector(state => state.user);
//     const dispatch = useDispatch();
//     const onCheckOutClicked =() => {
//         if(username.name == ''){
//             Swal.fire({
//                 title:  'Warning!',
//                 text: "You need to make register or sign in first.",
//                 type: 'success',    
//               });
//         }else{
//             setShowDialog(true);
//         }
 
//     }

//     // const handleQuantityInc = (id) =>{   
//     //     const qty = parseInt(document.getElementById('qty'+id).innerHTML) + 1;
//     //     document.getElementById('qty'+id).innerHTML = qty;
//     //     const price = parseInt(document.getElementById('pri'+id).value) * qty;
//     //     document.getElementById('price'+id).innerHTML = price;
//     //     const total_pcs = parseInt(document.getElementById('total_pcs').innerHTML) + 1;
//     //     const subtotal = parseInt(document.getElementById('subtotal').innerHTML) + parseInt(document.getElementById('pri'+id).value);
//     //     const total = subtotal;
//     //     document.getElementById('total_pcs').innerHTML = total_pcs;
//     //     document.getElementById('subtotal').innerHTML = subtotal;
//     //     document.getElementById('total').innerHTML = total;
//     //     dispatch(resetPcs({total_pcs : total_pcs,total : total}));
//     // };

//     // const handleQuantityDec = (id) =>{
        
//     //     const qty = parseInt(document.getElementById('qty'+id).innerHTML) - 1;
//     //     if(qty == 0){
//     //         const total_pcs = parseInt(document.getElementById('total_pcs').innerHTML) - 1;
//     //         const subtotal = parseInt(document.getElementById('subtotal').innerHTML) - parseInt(document.getElementById('pri'+id).value);
//     //         const total = subtotal;
//     //         document.getElementById('total_pcs').innerHTML = total_pcs;
//     //         document.getElementById('subtotal').innerHTML = subtotal;
//     //         document.getElementById('total').innerHTML = total;
//     //         dispatch(resetPcs({total_pcs : total_pcs,total : total}));
//     //         dispatch(removeProduct({id}));
//     //     }else{
//     //         document.getElementById('qty'+id).innerHTML = qty;
//     //         const price = parseInt(document.getElementById('pri'+id).value) * qty;
//     //         document.getElementById('price'+id).innerHTML = price;
//     //         const total_pcs = parseInt(document.getElementById('total_pcs').innerHTML) - 1;
//     //         const subtotal = parseInt(document.getElementById('subtotal').innerHTML) - parseInt(document.getElementById('pri'+id).value);
//     //         const total = subtotal;
//     //         document.getElementById('total_pcs').innerHTML = total_pcs;
//     //         document.getElementById('subtotal').innerHTML = subtotal;
//     //         document.getElementById('total').innerHTML = total;
//     //         dispatch(resetPcs({total_pcs : total_pcs,total : total}));
//     //     }
//     // };

//     // const removeCart = (id) => {
//     //         const total_pcs = parseInt(document.getElementById('total_pcs').innerHTML) - document.getElementById('qty'+id).innerHTML;
//     //         const subtotal = parseInt(document.getElementById('subtotal').innerHTML) - document.getElementById('price'+id).innerHTML;
//     //         const total = subtotal;
//     //         document.getElementById('total_pcs').innerHTML = total_pcs;
//     //         document.getElementById('subtotal').innerHTML = subtotal;
//     //         document.getElementById('total').innerHTML = total;
//     //         dispatch(resetPcs({total_pcs : total_pcs,total : total}));
//     //     dispatch(removeProduct({id}));
//     // }

//     // const handleQuantityInc = (id) => {
//     //     // Get current quantity and price per item
//     //     const currentQty = parseInt(document.getElementById('qty' + id).innerHTML);
//     //     const pricePerItem = parseInt(document.getElementById('pri' + id).value);

//     //     // Calculate the new quantity and price
//     //     const newQty = currentQty + 1;
//     //     const newPrice = pricePerItem * newQty;

//     //     // Update the DOM
//     //     document.getElementById('qty' + id).innerHTML = newQty;
//     //     document.getElementById('price' + id).innerHTML = newPrice;

//     //     // Update total pieces and subtotal
//     //     const total_pcs = parseInt(document.getElementById('total_pcs').innerHTML) + 1;
//     //     const subtotal = parseInt(document.getElementById('subtotal').innerHTML) + pricePerItem;
//     //     document.getElementById('total_pcs').innerHTML = total_pcs;
//     //     document.getElementById('subtotal').innerHTML = subtotal;
//     //     document.getElementById('total').innerHTML = subtotal;

//     //     // Dispatch the updated totals to Redux
//     //     dispatch(resetPcs({ total_pcs, total: subtotal }));
//     // };


//     // const handleQuantityDec = (id) => {
//     //     const currentQty = parseInt(document.getElementById('qty' + id).innerHTML);
//     //     const pricePerItem = parseInt(document.getElementById('pri' + id).value);

//     //     if (currentQty > 1) {
//     //         // Decrease quantity and update the price
//     //         const newQty = currentQty - 1;
//     //         const newPrice = pricePerItem * newQty;

//     //         // Update the DOM
//     //         document.getElementById('qty' + id).innerHTML = newQty;
//     //         document.getElementById('price' + id).innerHTML = newPrice;

//     //         // Update total pieces and subtotal
//     //         const total_pcs = parseInt(document.getElementById('total_pcs').innerHTML) - 1;
//     //         const subtotal = parseInt(document.getElementById('subtotal').innerHTML) - pricePerItem;
//     //         document.getElementById('total_pcs').innerHTML = total_pcs;
//     //         document.getElementById('subtotal').innerHTML = subtotal;
//     //         document.getElementById('total').innerHTML = subtotal;

//     //         // Dispatch the updated totals to Redux
//     //         dispatch(resetPcs({ total_pcs, total: subtotal }));
//     //     } else {
//     //         // If quantity reaches 0, remove the item from the cart
//     //         handleRemoveProduct(id);
//     //     }
//     // };

//     // const handleRemoveProduct = (id) => {
//     //     const qty = parseInt(document.getElementById('qty' + id).innerHTML);
//     //     const price = parseInt(document.getElementById('price' + id).innerHTML);

//     //     // Update the totals after removing the product
//     //     const total_pcs = parseInt(document.getElementById('total_pcs').innerHTML) - qty;
//     //     const subtotal = parseInt(document.getElementById('subtotal').innerHTML) - price;

//     //     // Update the DOM
//     //     document.getElementById('total_pcs').innerHTML = total_pcs;
//     //     document.getElementById('subtotal').innerHTML = subtotal;
//     //     document.getElementById('total').innerHTML = subtotal;

//     //     // Dispatch the removal to Redux
//     //     dispatch(resetPcs({ total_pcs, total: subtotal }));
//     //     dispatch(removeProduct({ id }));
//     // };



//     const handleQuantityInc = (id) => {
//         const currentQty = cart.products.find(product => product.unitid === id)?.quantity || 0;
//         dispatch(updateQuantity({ id, quantity: currentQty + 1 }));
//     };

//     const handleQuantityDec = (id) => {
//         const currentQty = cart.products.find(product => product.unitid === id)?.quantity || 0;
//         if (currentQty > 1) {
//             dispatch(updateQuantity({ id, quantity: currentQty - 1 }));
//         } else {
//             dispatch(removeProduct(id));
//         }
//     };


//       const removeCart = (id) => {
//         const product = cart.products.find(product => product.unitid === id);
//         if (product) {
//           dispatch(removeProduct(id));
//           // No need to update total_pcs and total directly; it's handled by the reducer
//         }
//       };


//     console.log('cart is ',cart);
//   return (
//     <Container>
//         <ColorNav/>
        
//         {/* <Announcement/> */}
//         <Wrapper>
//             <Title>YOUR CART</Title>
//             <Top>
//                 <Link to='/products/1/family%20hospital'><TopButton>CONTINUE SHOPPING</TopButton></Link>
//                 <TopTexts>

//                     <TopText>Shopping Cart({cart.total_pcs})</TopText>
//                     <TopText>Your Wishlist(0)</TopText>

//                 </TopTexts>

//                 {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
//             </Top>
//             <Bottom>
//                 <Info>
//                     {cart.products.map((product)=>(
//                         <Product>
//                         <ProductDetail>
//                             <Image src={url+`/ecommerce/items/${product.unitimg}`}/>
//                             <Details>
//                                 <ProductName><b>Product: </b> {product.unitname}</ProductName>
//                                 <ProductId><b>ID: </b> {product.unitcode}</ProductId>
//                                 <ProductColor><b>Color: </b> {product.color}</ProductColor>
//                                 <ProductFabric><b>Fabric: </b> {product.fabric}</ProductFabric>
//                                 <ProductSize><b>Size: </b> {product.size}</ProductSize>
//                             </Details>
//                         </ProductDetail>

//                         <PriceDetail>
//                             <ProductAmountContainer>
//                                 <Add onClick={() => handleQuantityInc(product.unitid)} />
//                                 <ProductAmount id={`qty`+product.unitid}>{product.quantity}</ProductAmount>
//                                 <Remove onClick={() => handleQuantityDec(product.unitid)} />
//                             </ProductAmountContainer>
//                             <input type="hidden" id={`pri`+product.unitid} value={product.price}/>
//                             <ProductPrice id={`price`+product.unitid}>{product.price*product.quantity}</ProductPrice>
//                             {/* <button className='btn btn-sm btn-danger'>Remove</button> */}
//                             <Button onClick={() => removeCart(product.unitid)}>Remove</Button>
//                         </PriceDetail>
//                     </Product>
//                     ))}
                    
//                     <Hr/>
                    
//                 </Info>
//                 <Summary>
//                     <SummaryTitle>ORDER SUMMARY</SummaryTitle>

//                     <SummaryItem>
//                         <SummaryItemText>Total Quantity</SummaryItemText>
//                         <SummaryItemPrice id="total_pcs">{cart.total_pcs}</SummaryItemPrice>
//                     </SummaryItem>
                    
//                     <SummaryItem>
//                         <SummaryItemText>Sub Total</SummaryItemText>
//                         <SummaryItemPrice id="subtotal">{cart.total}</SummaryItemPrice>
//                     </SummaryItem>

//                     <SummaryItem>
//                         <SummaryItemText>Estimated Shipping</SummaryItemText>
//                         <SummaryItemPrice>{deliveryfee}</SummaryItemPrice>
//                     </SummaryItem>

//                     <SummaryItem>
//                         <SummaryItemText>Discount</SummaryItemText>
//                         <SummaryItemPrice>{discount}</SummaryItemPrice>
//                     </SummaryItem>

//                     <SummaryItem type="total">
//                         <SummaryItemText >Total</SummaryItemText>
//                         <SummaryItemPrice id="total">{cart.total}</SummaryItemPrice>
//                     </SummaryItem>
//                     <SummaryButton onClick={onCheckOutClicked}>CHECKOUT</SummaryButton>
//                 </Summary>
//             </Bottom>
//         </Wrapper>
        
//         <CheckoutDialog total={cart.total} open={showDialog} close={()=>setShowDialog(false)}/>
//         <Footer/>
//     </Container>
//   )
// }

// export default Cart


import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ColorNav from "../components/ColorNav";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import {
  removeProduct,
  updateQuantity,
} from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CheckoutDialog from "../components/CheckoutDialog";
import { FaTrash } from "react-icons/fa6";
import kbzbank from "../files/kbzbank.png";
import aya from "../files/aya.png";
import cbpay from "../files/cbpay.jpg";
import kbzpay from "../files/kbzpay.png";
import wave from "../files/wave.png";
import Navbar from "../components/Navbar";
import BankCard from "../components/BankInformation";
import axios from "axios";

const Container = styled.div`
    margin-top:80px;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #2f80a5;
`;

const Bottom = styled.div`
  display: flex;
  gap: 30px;
  ${mobile({ flexDirection: "column" })}
`;

const CartContainer = styled.div`
  flex: 2;
`;

const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 15px;
  background: #2f80a5;
  color: white;
  font-weight: 600;
  border-radius: 8px;
`;

const CartRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 15px;
  margin-top: 10px;
  border: 1px solid #2f80a5;
  border-radius: 10px;
`;

const CartRowTotal = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 15px;
  margin-top: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

const QtyBox = styled.div`
  display: flex;
  width: 90px;
  align-items: center;
  border: 1px solid #2f80a5;
  border-radius: 6px;
  overflow: hidden;

  span {
    padding: 5px 10px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
  }
`;

const RemoveBtn = styled.button`
  margin-top: 5px;
  padding: 10px;
  font-size: 20px;
  color: red;
  cursor: pointer;
`;

const CheckoutContainer = styled.div`
  flex: 1;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  color: #2f80a5;
`;


const Label = styled.label`
  color: #2f80a5;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #2f80a5;
  border-radius: 10px;
  outline: none;

  &:focus {
    border: 1px solid #1e5f7a;
    box-shadow: 0 0 0 2px rgba(47, 128, 165, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #2f80a5;
  border-radius: 10px;
  outline: none;

  &:focus {
    border: 1px solid #1e5f7a;
    box-shadow: 0 0 0 2px rgba(47, 128, 165, 0.2);
  }
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

const OrderButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #2f80a5;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

const SubTotal = styled.h3`
  margin-top: 20px;
  text-align: right;
`;

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    console.log("Cart : ",cart);
    const url = useSelector((state) => state.user.url);
    const username = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState(false);
    const [banks, setBanks] = useState([]);
    const [selectedBank, setSelectedBank] = useState("");

    useEffect(() => {
    if (!url) return;

    axios
        .get(url + "/api/bank/list")
        .then((res) => {
        setBanks(res.data.data || []);
        })
        .catch((err) => console.log(err));
    }, [url]);


    const handleQuantityInc = (id) => {
        const product = cart.products.find((p) => p.unitid === id);
        dispatch(updateQuantity({ id, quantity: product.quantity + 1 }));
    };

    const handleQuantityDec = (id) => {
        const product = cart.products.find((p) => p.unitid === id);
        if (product.quantity > 1) {
        dispatch(updateQuantity({ id, quantity: product.quantity - 1 }));
        } else {
        dispatch(removeProduct(id));
        }
    };

    const removeCart = (id) => {
        dispatch(removeProduct(id));
    };

    const onCheckOutClicked = () => {
        if (username.name === "") {
        Swal.fire({
            title: "Warning!",
            text: "You need to login first.",
            icon: "warning",
        });
        } else {
        setShowDialog(true);
        }
    };

    return (
        <Container>
        {/* <ColorNav /> */}
        <Navbar/>

        <Wrapper>
            <Title>Your Cart</Title>

            <Bottom>
            <CartContainer>
                <CartHeader>
                <div>Products</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div>Action</div>
                </CartHeader>

                {cart.products.map((product) => (
                <CartRow key={product.unitid}>
                    <ProductInfo>
                    <ProductImg
                        src={url + `/ecommerce/items/${product.unitimg}`}
                    />
                    <div>
                        <div>{product.unitname}</div>
                        <small>Size: {product.size}</small>
                        <br/>
                        <small className="capitalize">Color: {product.color}</small>
                    </div>
                    </ProductInfo>

                    <div>${product.price}</div>

                    <div>
                    <QtyBox>
                        <button onClick={() => handleQuantityDec(product.unitid)}>
                        <Remove fontSize="small" />
                        </button>
                        <span>{product.quantity}</span>
                        <button onClick={() => handleQuantityInc(product.unitid)}>
                        <Add fontSize="small" />
                        </button>
                    </QtyBox>
                    </div>

                    <div>${product.price * product.quantity}</div>

                    <div>
                        <RemoveBtn
                            onClick={() => removeCart(product.unitid)}
                        >
                        <FaTrash />
                        </RemoveBtn>
                    </div>
                </CartRow>
                ))}

                <CartRowTotal>
                  <div></div>
                  <div></div>
                  <div style={{ fontSize: "24px", fontWeight: "bold" , marginRight: "5px"}}>Sub Total Price:</div>
                  <div style={{ fontSize: "24px" }}>${cart.total}</div>
                  <div></div>
                </CartRowTotal>
            </CartContainer>

            <CheckoutContainer>
                <Section>
                    <SectionTitle>Your Information</SectionTitle>
                    <div>
                        <Label>First Name</Label>
                        <Input placeholder="First Name" />
                    </div>
                    <div>
                        <Label>Last Name</Label>
                        <Input placeholder="Last Name" />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input placeholder="Email" />
                    </div>
                    <div>
                        <Label>Phone Number</Label>
                        <Input placeholder="Phone Number" />
                    </div>
                </Section>

                <Section>
                    <SectionTitle>Shipping Address</SectionTitle>
                    <div>
                        <Label>Country</Label>
                        <Select>
                            <option>Choose a country</option>
                        </Select>
                    </div>
                    <div>
                        <Label>City</Label>
                        <Input placeholder="City" />
                    </div>
                    <div>
                        <Label>Address</Label>
                        <Input placeholder="Address" />
                    </div>
                </Section>

                <Section>
                    <SectionTitle>Payment</SectionTitle>

                    <BankCard />

                    <div>
                        <Label>Payment</Label>
                        <Select
                            value={selectedBank}
                            onChange={(e) => setSelectedBank(e.target.value)}
                        >
                            <option value="" disabled>Select payment</option>

                            {banks.map((bank) => (
                            <option key={bank.id} value={bank.id}>
                                {bank.bank_name}
                            </option>
                            ))}
                        </Select>
                    </div>

                    <div>
                        <Label>Payment Screenshot</Label>
                        <Input type="file" />
                    </div>
                    <div>
                        <Label>Order Notes</Label>
                        <TextArea placeholder="Order notes..." />
                    </div>
                </Section>

                <OrderButton onClick={onCheckOutClicked}>
                Place Order
                </OrderButton>
            </CheckoutContainer>
            </Bottom>
        </Wrapper>

        <CheckoutDialog
            total={cart.total}
            open={showDialog}
            close={() => setShowDialog(false)}
        />

        <Footer />
        </Container>
    );
};

export default Cart;