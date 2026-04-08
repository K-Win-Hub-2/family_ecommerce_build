import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { mobile } from "../responsive";
import { LogoutProcess } from "../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ColorNav from "./ColorNav";
import PreDialog from "../components/PreDialog";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { showSearch } from "../redux/designRedux";
import LoginAlert from "./LoginAlert";
// import ClipLoader from 'react-spinners/ClipLoader';
import LogoPhoto from "../files/logo.png";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  transition: 1s ease;
  background: #fff;
  text-shadow:
    -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
  background-color: transparent;
  ${mobile({ height: "50px" })}
`;
// const Wrapper = styled.div`
//     padding: 10px 20px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     transition: 0.7s ease;
//     background: rgb(255,255,255);
//     background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.18953518907563027) 100%);
//     ${mobile({ padding: "10px 0px" })}
// `

const Wrapper = styled.div`
  height: 70px;
  background-color: #2b57b8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

const WrapperOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(2, 127, 157, 1);
  ${mobile({ padding: "10px 0px" })}
`;

// const Left = styled.div`
//     flex: 1;
//     display: flex;
//     align-items: center;
//     margin-bottom: 40px;
// `

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LeftOne = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
  ${mobile({ display: "none" })}
`;

// const SearchContainer = styled.div`
//     border: 1px solid lightgray;
//     display: flex;
//     align-items: center;
//     margin-left: 25px;
//     padding: 5px;
// `

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 30px;
  padding: 6px 15px;
  width: 280px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

// const Center = styled.div`
//     flex: 1;
//     display: inline;
//     text-align: center;
// `

const Center = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

// const Logo = styled.h1`
//     font-weight: bold;
//     font-size:30px;
//     color : white;
//     display: block;
//     text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5), 2px 2px 2px rgba(206,89,55,0);
//     ${mobile({ fontSize: "24px" })}
// <<<<<<< Tabnine <<<<<<<
// /**//+
//  * A dialog component for pre-ordering products.//+
//  * It displays a list of brands with their images and allows users to make pre-orders.//+
//  * //+
//  * @param {Object} props - The properties passed to the component.//+
//  * @param {boolean} props.open - Indicates whether the dialog is open or closed.//+
//  * @param {function} props.close - A function to close the dialog.//+
//  * //+
//  * @returns {JSX.Element} - The PreDialog component with the specified properties.//+
//  *///+
// export default function PreDialog(props) {//+
//     // ... existing code ...//+
// }//+
// >>>>>>> Tabnine >>>>>>>
// `

const Logo = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

// const Right = styled.div`
//     flex: 1;
//     display: flex;
//     align-items: ;
//     justify-content: flex-end;
//     margin-bottom: 40px;
//     margin-left : 20px;
//     ${mobile({ flex: 2, justifyContent: "center" })}
// `

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RightOne = styled.div`
  flex: 1;
  display: flex;
  align-items:;
  justify-content: flex-end;
  padding: 20px;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

// const MenuItem = styled.div`
//     font-size: 19px;
//     color: #2b57b8;
//     cursor: pointer;
//     display: inline;
//     margin-left : 20px;
//     ${mobile({ fontSize: "12px" })}
// `

const MenuItem = styled.div`
  color: white;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  padding-bottom: 6px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: white;
    transition: 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active ${MenuItem}::after {
    width: 100%;
  }
`;

const A = styled.a``;

const NavbarDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    display: block;
    > div {
      display: block;
    }
  }
`;

const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
`;

// const SInput = styled.input`
//     width: 230px;
//     height: 35px;
//     background-color: #eeeeee;
//     border: 1px solid #2b57b8;
//     outline:none;
//     border-radius: 4px;
//     margin-right: 10px;
// `

const SInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
`;

const SSubmit = styled.button`
  color: white;
  height: 35px;
  border: 1px solid #2b57b8;
  outline: none;
  border-radius: 4px;
`;
const Searchbox = styled.div`
  display: inline-block;
`;
const Sm = styled.small`
  font-size: 11px;
  font-weight: bold;
`;

const LoginButton = styled.button`
  background: transparent;
  border: 1.5px solid white;
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background: white;
    color: #2b57b8;
  }
`;

const Navbar = (props) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);
  const pcs = useSelector((state) => state.cart.total_pcs);

  const userName = useSelector((state) => state.user.name);

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);

  const username = useSelector((state) => state.user.name);

  useEffect(() => {
    if (username != "") {
      setIsUser(true);
    }
  }, []);
  // if(username != ''){
  //     setIsUser(true);
  // }
  const logout = () => {
    dispatch(LogoutProcess());
    setIsUser(false);
  };

  const showPreorder = () => {
    setShowDialog(true);
  };

  const link = {
    textDecoration: "none",
    fontSize: "17px",
    color: "#2b57b8",
  };
  const link1 = {
    textDecoration: "none",
    color: "white",
  };

  const [search, setSearch] = useState("");
  const [itemsS, setItems] = useState([]);
  const [showsearch, setShowSearch] = useState(false);
  const [ok, setOk] = useState(false);

  const ShowSearch = () => {
    setShowSearch(true);
  };

  const navigate = useNavigate();

  const url = useSelector((state) => state.user.url);

  const SearchItems = () => {
    if (search != "") {
      axios
        .post(url + "/api/searchitem", {
          item: search,
        })
        .then((res) => {
          // console.log(res.data);
          setItems(res.data);
          setOk(true);
        })
        .catch((err) => {
          console.log("error");
        });
    } else {
      // alert('fail');
      setShowSearch(false);
    }
  };

  if (ok == true) {
    console.log(itemsS);
    dispatch(showSearch());
    navigate("/products/1/family hospital", {
      state: { itemsS: itemsS, click: true },
    });
  }

  return (
    <Container className="fixed-top">
      {isScroll ? (
        // <ColorNav />
        <Wrapper>
          <Left>
            <img src={LogoPhoto} width="90" height="90" />
            <Logo>Medical World</Logo>
          </Left>

          <Center>
            <StyledNavLink to="/">
              <MenuItem>Home</MenuItem>
            </StyledNavLink>

            <StyledNavLink to="/about-us">
              <MenuItem>About Us</MenuItem>
            </StyledNavLink>

            <StyledNavLink to="/shop">
              <MenuItem>Shop</MenuItem>
            </StyledNavLink>

            <StyledNavLink to="/preorder">
              <MenuItem>Preorder</MenuItem>
            </StyledNavLink>

            <StyledNavLink to="/contact-us">
              <MenuItem>Contact Us</MenuItem>
            </StyledNavLink>
          </Center>

          <Right>
            <SearchContainer>
              <SInput placeholder="Search for products..." />
              <SearchIcon style={{ color: "#888" }} />
            </SearchContainer>

            <Link to="/cart">
              <ShoppingCartIcon style={{ color: "white" }} />
            </Link>

            <Link to="/user-profile">
              <AccountCircleIcon style={{ color: "white" }} />
            </Link>

            <Link to="/login">
              <LoginButton>LogIn</LoginButton>
            </Link>
          </Right>
        </Wrapper>
      ) : (
        <Wrapper>
          <Left>
            <img src={LogoPhoto} width="90" height="90" />
            <Logo>Medical World</Logo>
          </Left>

          <Center>
            <StyledNavLink to="/">
              <MenuItem>Home</MenuItem>
            </StyledNavLink>

            <StyledNavLink to="/about-us">
              <MenuItem>About Us</MenuItem>
            </StyledNavLink>

            <StyledNavLink to="/shop">
              <MenuItem>Shop</MenuItem>
            </StyledNavLink>

            <StyledNavLink to="/preorder">
              <MenuItem>Preorder</MenuItem>
            </StyledNavLink>

            <StyledNavLink to="/contact-us">
              <MenuItem>Contact Us</MenuItem>
            </StyledNavLink>
          </Center>

          <Right>
            <SearchContainer>
              <SInput placeholder="Search for products..." />
              <SearchIcon style={{ color: "#888" }} />
            </SearchContainer>

            <Link to="/cart">
              <ShoppingCartIcon style={{ color: "white" }} />
            </Link>

            <Link to="/user-profile">
              <AccountCircleIcon style={{ color: "white" }} />
            </Link>

            <Link to="/login">
              <LoginButton>LogIn</LoginButton>
            </Link>
          </Right>
        </Wrapper>
      )}
      {isUser ? (
        <PreDialog open={showDialog} close={() => setShowDialog(false)} />
      ) : (
        <LoginAlert open={showDialog} close={() => setShowDialog(false)} />
      )}
    </Container>
  );
};

export default Navbar;
