import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import AlertDialog from "../components/AlertDialog";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/userRedux";
import Navbar from "../components/Navbar";
import ColorNav from "../components/ColorNav";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import SignUp from "../slider-images/login.jpg";
import logo from "../files/logo.png";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f3f6fb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${mobile({
    padding: "15px",
    boxSizing: "border-box",
  })}
`;

const Card = styled.div`
  width: 950px;
  height: 650px;
  background: white;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  ${mobile({
    width: "92%",
    maxWidth: "360px",
    height: "85vh",
    minHeight: "650px",
    borderRadius: "16px",
  })}
`;

const Left = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;

  scrollbar-width: thin;
  scrollbar-color: rgba(59, 130, 246, 0.4) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.4);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(59, 130, 246, 0.7);
  }

  ${mobile({
    padding: "25px",
  })}
`;

const Right = styled.div`
  flex: 1;
  overflow: hidden;

  ${mobile({
    display: "none",
  })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Logo = styled.img`
  width: 75px;
  height: auto;
  margin: 0 auto 20px;
  display: block;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #1f4fa3;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;

  ${mobile({
    fontSize: "28px",
  })}
`;

const Subtitle = styled.p`
  color: #6b7280;
  font-size: 15px;
  margin-bottom: 25px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  font-size: 15px;
  margin-bottom: 6px;
  margin-top: 14px;
`;

const Input = styled.input`
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  outline: none;
  font-size: 15px;

  &:focus {
    border-color: #3b82f6;
  }
`;
const Forgot = styled.a`
  display: flex;
  justify-content: end;
  align-items: center;
  text-decoration: none;
`;

const Button = styled.button`
  background: #3b82f6;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  margin-top: 24px;

  &:hover {
    background: #2563eb;
  }
`;

const Divider = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #6b7280;
`;

const IsAccount = styled.p`
  text-align: center;
  font-size: 15px;

  a {
    margin-left: 4px;
    color: #2563eb;
    text-decoration: none;
    font-weight: 600;
  }
`;

const EmailHelper = styled.span`
  color: #6b7280;
  font-size: 12px;
  margin-top: 5px;
`;

const Register = () => {
  const userRef = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [onoff, setOnOff] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const url = useSelector((state) => state.user.url);

  const dialogRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onNameChanged = (e) => setName(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onAddressChanged = (e) => setAddress(e.target.value);
  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onDobChanged = (e) => setDob(e.target.value);

  const onRegisterClicked = (e) => {
    e.preventDefault();
    const res = axios
      .post("http://familyuniformapp.medicalworld.com.mm/api/register", {
      // .post("http://192.168.100.163:8000/api/register", {
        username: name,
        dob: dob,
        email: email,
        phone: phone,
        password: password,
        address: address,
      })
      .then(function (response) {
        if (response.data.status === "422") {
          // Handle validation error
          Swal.fire({
            title: "Error!",
            text: response.data.message || "Validation Error!",
            type: "error",
          });
        } else {
          // Handle success
          setShowDialog(true);
          // dispatch(setUserInfo(response.data.id,name,phone,email,address));
          dispatch(
            setUserInfo({
              id: response.data.data,
              name: name,
              phone: phone,
              address: address,
              email: email,
              phone: phone,
            }),
          );
          Swal.fire({
            title: "Success!",
            text: "Registered Successful!",
            type: "success",
          });
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Registration failed. Please try again.",
          type: "error",
        });
      });
  };

  return (
    <div>
      {/* <ColorNav/> */}
      {/* <Container>
        <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        
        <Form>
            <Input type="text" id="name" name="name" placeholder="name" value={name} onChange={onNameChanged} />
            <Input type="text" id="phone" name="phone" placeholder="phone" value={phone} onChange={onPhoneChanged}/>
            <Input type="text" id="email" name="email" placeholder="email" value={email} onChange={onEmailChanged}/>
            <Input type="text" id="address" name="address" placeholder="address" value={address} onChange={onAddressChanged}/>
            <Input type="text" id="username" name="username" placeholder="username" value={username} onChange={onUsernameChanged}/>
            <Input type="password" id="password" name="password" placeholder="password" value={password} onChange={onPasswordChanged}/>
            <Agreement>
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            
        </Form>
        <Button onClick={onRegisterClicked}>CREATE</Button>
        </Wrapper>
       <AlertDialog open={showDialog} close={()=>setShowDialog(false)} title="User Registration" content="Your user account has been successfully registered! Enjoy Shoppping!"/>
    </Container> */}

      <Container>
        <Card>
          <Left>
  <Logo src={logo} alt="Medical World" />

  <Title>Sign Up</Title>

  <Subtitle>
    Create your account to enjoy the features of Medical World.
  </Subtitle>

  <Form>
    <FormGroup>
      <Label>Name</Label>
      <Input
        placeholder="Enter your name"
        value={name}
        onChange={onNameChanged}
      />
    </FormGroup>

    <FormGroup>
      <Label>Date of Birth</Label>
      <Input
        type="date"
        value={dob}
        onChange={onDobChanged}
      />
    </FormGroup>

    <FormGroup>
      <Label>Email</Label>
      <Input
        placeholder="Enter your email"
        value={email}
        onChange={onEmailChanged}
      />
      <EmailHelper>
        You will use this email to sign in later.
      </EmailHelper>
    </FormGroup>

    <FormGroup>
      <Label>Phone</Label>
      <Input
        placeholder="Enter your phone number"
        value={phone}
        onChange={onPhoneChanged}
      />
    </FormGroup>

    <FormGroup>
      <Label>Password</Label>
      <Input
        type="password"
        placeholder="At least 8 characters"
        value={password}
        onChange={onPasswordChanged}
      />
    </FormGroup>

    <FormGroup>
      <Label>Address</Label>
      <Input
        placeholder="Enter your address"
        value={address}
        onChange={onAddressChanged}
      />
    </FormGroup>

    <Button type="submit" onClick={onRegisterClicked}>
      Sign Up
    </Button>

    <Divider>Or</Divider>

    <IsAccount>
      Already have an account?
      <Link to="/login">Sign In</Link>
    </IsAccount>
  </Form>
</Left>

          {/* RIGHT SIDE */}
          <Right>
            <Image src={SignUp} />
          </Right>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
