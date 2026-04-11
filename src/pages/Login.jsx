import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/userRedux";
import AuthContext from "../redux/AuthProvider";
import axios from "axios";
import { red } from "@mui/material/colors";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ColorNav from "../components/ColorNav";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import loginImg from "../slider-images/signin.png";
import Navbar from "../components/Navbar";

// url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;

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
  height: 500px;
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
  justify-content: center;
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
  font-size: 16px;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
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

const SocialBtn = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const A = styled.a``;

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const [navi, setNavi] = useState("");
  const [successmsg, setSuccessmsg] = useState(false);
  const dispatch = useDispatch();
  const url = useSelector((state) => state.user.url);
  const navigate = useNavigate();

  const background = {
    backgroundColor: "red",
    color: "white",
    align: "center",
  };
  // const {isFetching,error} = useSelector((state)=>state.user)
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrmsg("");
  }, [email, password]);

  const handleClick = (e) => {
    e.preventDefault();

    const response = axios
      .post(url + "/api/Login", {
      // .post("http://192.168.1.54:8000/api/Login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.status != 200) {
          setErrmsg(" Missing Email Or Password! ");
          errRef.current.focus();
        } else {
          // alert('error');
          const access_token = response?.data?.access_token;
          setAuth({ email, password, access_token });
          setEmail("");
          setPassword("");
          setSuccessmsg(true);
          navigate("/");
          dispatch(
            setUserInfo({
              id: response.data.user.id,
              name: response.data.user.name,
              phone: response.data.user.phone,
              address: response.data.user.address,
              email: response.data.user.email,
            }),
          );
          Swal.fire({
            title: "Success!",
            text: "Login Successful!",
            type: "success",
          });
        }
      });

    // login(dispatch,{email,password});
  };

  return (
    <>
      {successmsg ? (
        ""
      ) : (
        <>
          {/* <ColorNav/> */}
          <Container>
            <Card>
              <Left>
                <Title>Welcome Back</Title>

                <Subtitle>Please enter your details</Subtitle>

                <Form>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      placeholder="Example@gmail.com"
                      ref={userRef}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="At least 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <Forgot>Forgot Password?</Forgot>

                  <Button onClick={handleClick}>Sign in</Button>

                  <Divider>Or</Divider>

                  {/* <SocialBtn>Sign in with Google</SocialBtn>
                <SocialBtn>Sign in with Facebook</SocialBtn> */}

                  <IsAccount>
                    Don't have an account?
                    <Link to="/register"> Sign up</Link>
                  </IsAccount>
                </Form>
              </Left>

              {/* RIGHT SIDE */}
              <Right>
                <Image src={loginImg} />
              </Right>
            </Card>
          </Container>
        </>
      )}
    </>
  );
};

export default Login;
