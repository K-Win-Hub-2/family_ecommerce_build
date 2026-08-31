import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AlertDialog from "../components/AlertDialog";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/userRedux";
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
  ${mobile({ padding: "15px", boxSizing: "border-box" })}
`;

const Card = styled.div`
  width: 950px;
  height: 650px;
  background: white;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  ${mobile({ width: "92%", maxWidth: "360px", height: "85vh", minHeight: "650px", borderRadius: "16px" })}
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

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.4); border-radius: 20px; }
  &::-webkit-scrollbar-thumb:hover { background: rgba(59, 130, 246, 0.7); }
  ${mobile({ padding: "25px" })}
`;

const Right = styled.div`
  flex: 1;
  overflow: hidden;
  ${mobile({ display: "none" })}
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #1f4fa3;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
  ${mobile({ fontSize: "28px" })}
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
  &:focus { border-color: #3b82f6; }
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
  &:hover { background: #2563eb; }
`;

const Divider = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #6b7280;
`;

const IsAccount = styled.p`
  text-align: center;
  font-size: 15px;
  a { margin-left: 4px; color: #2563eb; text-decoration: none; font-weight: 600; }
`;

const EmailHelper = styled.span`
  color: #6b7280;
  font-size: 12px;
  margin-top: 5px;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  
  const url = useSelector((state) => state.user.url);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onNameChanged = (e) => setName(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onAddressChanged = (e) => setAddress(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onDobChanged = (e) => setDob(e.target.value);

  const onRegisterClicked = (e) => {
    e.preventDefault();

    // Basic Validation Check
    if (!name || !email || !password || !phone) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill out all mandatory fields.",
        icon: "warning",
      });
      return;
    }

    // const apiUrl = url ? `${url}/api/register` : "http://192.168.100.27:8000/api/register";
    const apiUrl = url ? `${url}/api/register` : "https://familyuniformapp.medicalworld.com.mm/api/register";

    axios
      .post(apiUrl, {
        username: name,
        dob: dob,
        email: email,
        phone: phone,
        password: password,
        address: address,
      })
      .then(function (response) {
        console.log("Registration Server Response: ", response.data);

        if (response.data.status === "422") {
          Swal.fire({
            title: "Error!",
            text: response.data.message || "Validation Error!",
            icon: "error",
          });
        } else {
          // SAFE EXTRACTION: Fallback checks to find the correct ID target inside your API design
          const registeredId = 
            response.data.user?.id || 
            response.data.id || 
            response.data.data?.id || 
            response.data.data;

          // 1. Dispatch profile structure clean to store FIRST
          dispatch(
            setUserInfo({
              id: registeredId,
              name: name,
              phone: phone,
              address: address,
              email: email,
            })
          );

          setShowDialog(true);

          // 2. Alert confirms, state writes, then smoothly changes views
          Swal.fire({
            title: "Success!",
            text: "Registered Successfully!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
            navigate("/cart");
          });
        }
      })
      .catch(function (error) {
        console.error("Registration error details:", error);
        Swal.fire({
          title: "Error!",
          text: "Registration failed. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <Container>
        <Card>
          <Left>
            <Logo src={logo} alt="Medical World" />
            <Title>Sign Up</Title>
            <Subtitle>Create your account to enjoy the features of Medical World.</Subtitle>

            <Form onSubmit={onRegisterClicked}>
              <FormGroup>
                <Label>Name</Label>
                <Input placeholder="Enter your name" value={name} onChange={onNameChanged} />
              </FormGroup>

              <FormGroup>
                <Label>Date of Birth</Label>
                <Input type="date" value={dob} onChange={onDobChanged} />
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input placeholder="Enter your email" type="email" value={email} onChange={onEmailChanged} />
                <EmailHelper>You will use this email to sign in later.</EmailHelper>
              </FormGroup>

              <FormGroup>
                <Label>Phone</Label>
                <Input placeholder="Enter your phone number" value={phone} onChange={onPhoneChanged} />
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="At least 8 characters" value={password} onChange={onPasswordChanged} />
              </FormGroup>

              <FormGroup>
                <Label>Address</Label>
                <Input placeholder="Enter your address" value={address} onChange={onAddressChanged} />
              </FormGroup>

              <Button type="submit">Sign Up</Button>

              <Divider>Or</Divider>

              <IsAccount>
                Already have an account? <Link to="/login">Sign In</Link>
              </IsAccount>
            </Form>
          </Left>
          <Right>
            <Image src={SignUp} alt="Sign Up Side Artwork" />
          </Right>
        </Card>
      </Container>
      <AlertDialog 
        open={showDialog} 
        close={() => setShowDialog(false)} 
        title="User Registration" 
        content="Your user account has been successfully registered! Enjoy Shopping!"
      />
    </div>
  );
};

export default Register;