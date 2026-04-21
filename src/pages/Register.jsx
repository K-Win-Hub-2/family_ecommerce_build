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
import SignUp from "../slider-images/signin.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f3f6fb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 900px;
  height: 550px;
  background: white;
  border-radius: 12px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  ${mobile({
    flexDirection: "column",
    width: "95%",
    height: "auto",
  })}
`;

const Left = styled.div`
  flex: 1;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  max-height: 100%;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(59, 130, 246, 0);
    border-radius: 10px;
    transition: background-color 0.3s;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(59, 130, 246, 0.6); /* blue thumb on hover */
  }

  &:hover {
    scrollbar-color: rgba(59, 130, 246, 0.6) transparent;
  }
`;

const Right = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  font-size: 28px;
  font-weight: 600;
`;

const Subtitle = styled.p`
  color: #6b7280;
  font-size: 16px;
  margin-bottom: 25px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  margin-top: 20px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  outline: none;
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
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;

  &:hover {
    background: #2563eb;
  }
`;

const Divider = styled.div`
  text-align: center;
  margin: 20px 0;
  color: gray;
`;

const IsAccount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailHelper = styled.span`
  color: #6b7280;
  font-size: 12px;
  font-style: italic;
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
      // .post("http://familyuniformapp.medicalworld.com.mm/api/register", {
      .post("http://192.168.100.163:8000/api/register", {
        username: name,
        dob: dob,
        email: email,
        phone: phone,
        password: password,
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
            <Title>Sign up</Title>

            <Subtitle>Sign up to enjoy the feature of Medical World!</Subtitle>

            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  placeholder="Enter your name"
                  ref={userRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  ref={userRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <EmailHelper>You need to use this email to login.</EmailHelper>
              </FormGroup>

              <FormGroup>
                <Label>Phone</Label>
                <Input
                  placeholder="Enter your phone"
                  ref={userRef}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>

              <Button onClick={onRegisterClicked}>Sign Up</Button>

              <Divider>Or</Divider>

              {/* <SocialBtn>Sign in with Google</SocialBtn>
                    <SocialBtn>Sign in with Facebook</SocialBtn> */}

              <IsAccount>
                Already have an account?
                <Link to="/login"> Sign In</Link>
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
