import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { removeProduct, updateQuantity } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import CheckoutDialog from "../components/CheckoutDialog";
import { FaTrash } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import BankCard from "../components/BankInformation";
import Footer from "../components/Footer";
import axios from "axios";

const Container = styled.div`
  margin-top: 80px;
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

const CartColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const CartContainer = styled.div`
  width: 100%;
`;

const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 15px;
  background: #1f4f8b;
  color: white;
  font-weight: 600;
  border-radius: 8px;

  ${mobile({
    gridTemplateColumns: "2fr 1fr 1fr 1fr 0.8fr",
    fontSize: "14px",
    padding: "12px 10px",
  })}
`;

const CartRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 15px;
  margin-top: 10px;
  border: 1px solid #2f80a5;
  border-radius: 10px;

  ${mobile({
    gridTemplateColumns: "2fr 1fr 1fr 1fr 0.8fr",
    padding: "12px 10px",
    gap: "5px",
  })}
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;

  ${mobile({
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
    textAlign: "center",
  })}

  div {
    font-size: 15px;
    ${mobile({ fontSize: "14px" })}
  }

  small {
    font-size: 13px;
    ${mobile({ fontSize: "12px" })}
  }
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;

  ${mobile({
    width: "65px",
    height: "65px",
  })}
`;

const QtyBox = styled.div`
  display: flex;
  width: 90px;
  align-items: center;
  justify-content: center;
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

  ${mobile({ width: "80px" })}
`;

const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  color: red;
  font-size: 20px;
  cursor: pointer;

  ${mobile({ fontSize: "18px" })}
`;

const CartRowTotal = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 15px;
  margin-top: 10px;

  ${mobile({
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    textAlign: "center",
  })}
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

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const DivF = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 2px;
  margin-bottom: 5px;
`;

const Radio = styled.input`
  display: flex;
  margin-right: 10px;
  margin-left: 5px;
`;

const FilterOption = styled.option``;

const OrderButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #1f4f8b;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const url = useSelector((state) => state.user.url);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [deliveryType, setDeliveryType] = useState("pickup");
  const [, setShowTownshipInput] = useState(false);
  const [township, setTownship] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [address, setAddress] = useState("");

  // Sync internal address cleanly when user logs in dynamically on this page
  useEffect(() => {
    if (user && user.address) {
      setAddress(user.address);
    }
  }, [user]);

  const defaultTownships = [
    "Ahlon", "Bahan", "Botatung", "Dagon Seikkan", "Dagon", "Dala", "Dawbon",
    "East Dagon", "Hlaing", "Hlaingthaya", "Insein", "Kamayut", "Kyauktada",
    "Kyimyingdaing", "Lanmadaw", "Latha", "Mayangon", "Mingala Taungnyunt",
    "Mingaladon", "North Dagon", "North Okkalapa", "Pabedan", "Pazundaung",
    "Sanchaung", "Seikkan", "Seikkyi Kanaungto", "Shwepyitha", "South Dagon",
    "South Okkalapa", "Tamwe", "Thaketa", "Thingangyun", "Yankin",
  ];

  useEffect(() => {
    if (!url) return;

    axios
      .get(url + "/api/bank/list")
      .then((res) => {
        setBanks(res.data.data || []);
      })
      .catch((err) => console.log(err));
  }, [url]);

  const onTownshipChanged = (e) => setTownship(e.target.value);

  const selectedBankObj = banks.find(
    (bank) => bank.id.toString() === selectedBank.toString()
  );

  const onDeliveryTypeChanged = (e) => {
    setDeliveryType(e.target.value);
    setShowTownshipInput(e.target.value === "township");
  };

  const onOrderNotesChanged = (e) => setOrderNotes(e.target.value);

  const onPaymentScreenshotChanged = (e) => {
    const file = e.target.files[0];
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
          setPaymentScreenshot(shortenedBase64);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const onAddressChanged = (e) => setAddress(e.target.value);

  const handleQuantityInc = (cartId) => {
    const product = cart.products.find((p) => p.cartId === cartId);
    if (product) {
      dispatch(updateQuantity({ id: cartId, quantity: product.quantity + 1 }));
    }
  };

  const handleQuantityDec = (cartId) => {
    const product = cart.products.find((p) => p.cartId === cartId);
    if (product) {
      if (product.quantity > 1) {
        dispatch(updateQuantity({ id: cartId, quantity: product.quantity - 1 }));
      } else {
        dispatch(removeProduct(cartId));
      }
    }
  };

  const removeCart = (cartId) => dispatch(removeProduct(cartId));

  const onCheckOutClicked = () => {
    // Check if user is authenticated reliably via the name property
    if (!user || !user.name) {
      Swal.fire({
        title: "Warning!",
        text: "You need to login first.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    } else {
      setShowDialog(true);
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Bottom>
          <CartColumn>
            <Title>Your Cart</Title>
            <CartContainer>
            <CartHeader>
              <div>Products</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
              <div>Action</div>
            </CartHeader>

            {cart.products.map((product) => (
              <CartRow key={product.cartId}>
                <ProductInfo>
                  <ProductImg 
                    src={
                      product?.unitimg?.startsWith("http") 
                        ? product.unitimg 
                        : product?.unitimg?.startsWith("/ecommerce") || product?.unitimg?.startsWith("ecommerce")
                          ? url + (product?.unitimg?.startsWith("/") ? "" : "/") + product.unitimg
                          : url + `/ecommerce/items/${product.unitimg}`
                    } 
                    alt={product.unitname} 
                  />
                  <div>
                    <div>{product.unitname}</div>
                    <small>Size: {product.size}</small>
                    <br />
                    <small className="capitalize">Color: {product.color}</small>
                  </div>
                </ProductInfo>
                <div>${product.price}</div>
                <div>
                  <QtyBox>
                    <button onClick={() => handleQuantityDec(product.cartId)}>
                      <Remove fontSize="small" />
                    </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleQuantityInc(product.cartId)}>
                      <Add fontSize="small" />
                    </button>
                  </QtyBox>
                </div>
                <div>${product.price * product.quantity}</div>
                <div>
                  {product.isMatchParent === false ? (
                    <small style={{ color: "#2f80a5", fontSize: "13px" }}>
                      Match item
                    </small>
                  ) : (
                    <RemoveBtn onClick={() => removeCart(product.cartId)}>
                      <FaTrash />
                    </RemoveBtn>
                  )}
                </div>
              </CartRow>
            ))}

            <CartRowTotal>
              <div></div>
              <div></div>
              <div style={{ fontSize: "24px", fontWeight: "bold", marginRight: "5px", whiteSpace: "nowrap" }}>
                Sub Total Price:
              </div>
              <div style={{ fontSize: "24px" }}>${cart.total}</div>
              <div></div>
            </CartRowTotal>
            </CartContainer>
          </CartColumn>

          <CheckoutContainer>
            <Section>
              <SectionTitle>Your Information</SectionTitle>
              <div>
                <Label>Name</Label>
                <Input placeholder="Name" value={user.name || ""} readOnly />
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input placeholder="Phone Number" value={user.phone || ""} readOnly />
              </div>
            </Section>

            <Section>
              <SectionTitle>Address</SectionTitle>
              <Filter>
                <DivF>
                  <Radio
                    type="radio"
                    name="deliveryType"
                    value="pickup"
                    checked={deliveryType === "pickup"}
                    onChange={onDeliveryTypeChanged}
                  />
                  <label>Pickup</label>
                  <Radio
                    type="radio"
                    name="deliveryType"
                    value="township"
                    checked={deliveryType === "township"}
                    onChange={onDeliveryTypeChanged}
                  />
                  <label>Township</label>
                </DivF>
              </Filter>
              <Filter>
                {deliveryType === "township" && (
                  <Select name="township" value={township} onChange={onTownshipChanged}>
                    <option value="" disabled>Select Township</option>
                    {defaultTownships.map((t, index) => (
                      <FilterOption key={index} value={t}>{t}</FilterOption>
                    ))}
                  </Select>
                )}
              </Filter>
              <div>
                <Label>Address</Label>
                <Input placeholder="Address" value={address} onChange={onAddressChanged} />
              </div>
            </Section>

            <Section>
              <SectionTitle>Payment</SectionTitle>
              <BankCard />
              <div>
                <Label>Payment</Label>
                <Select value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)}>
                  <option value="" disabled>Select payment</option>
                  {banks.map((bank) => (
                    <option key={bank.id} value={bank.id}>{bank.bank_name}</option>
                  ))}
                </Select>
                {selectedBank && (
                  <div style={{ marginTop: '5px', fontSize: '14px', color: '#2f80a5' }}>
                    Selected: <strong>{selectedBankObj?.bank_name}</strong>
                  </div>
                )}
              </div>
              <div>
                <Label>Payment Screenshot</Label>
                <Input type="file" onChange={onPaymentScreenshotChanged} />
              </div>
              <div>
                <Label>Order Notes</Label>
                <TextArea placeholder="Order notes..." value={orderNotes} onChange={onOrderNotesChanged} />
              </div>
            </Section>
            <OrderButton onClick={onCheckOutClicked}>Place Order</OrderButton>
          </CheckoutContainer>
        </Bottom>
      </Wrapper>

      <CheckoutDialog
        total={cart.total}
        open={showDialog}
        close={() => setShowDialog(false)}
        deliveryType={deliveryType}
        township={township}
        selectedBank={selectedBank}
        selectedBankName={selectedBankObj?.bank_name}
        orderNotes={orderNotes}
        paymentScreenshot={paymentScreenshot}
        address={address}
      />
      <Footer />
    </Container>
  );
};

export default Cart;