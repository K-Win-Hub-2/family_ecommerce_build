import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaBars } from "react-icons/fa";
import { LogoutProcess } from "../redux/userRedux";
import { showSearch } from "../redux/designRedux";
import PreDialog from "../components/PreDialog";
import LoginAlert from "./LoginAlert";
import axios from "axios";
import LogoPhoto from "../files/logo.png";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  background-color: transparent;
`;

const Wrapper = styled.div`
  height: 70px;
  background-color: #2b57b8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: relative;
  box-sizing: border-box;

  ${mobile({ 
    height: "60px", 
    padding: "0 15px" 
  })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  
  ${mobile({ display: "none !important" })} 
`;

const Logo = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  
  ${mobile({ fontSize: "18px" })}
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  
  ${mobile({ width: "35px !important", height: "35px !important" })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  ${mobile({ gap: "15px" })}
`;

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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 30px;
  padding: 6px 15px;
  width: 280px;
  
  ${mobile({ display: "none !important" })}
`;

const SInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
`;

const LoginButton = styled.button`
  background: transparent;
  border: 1.5px solid white;
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s ease;
  
  ${mobile({ display: "none !important" })}
  
  &:hover {
    background: white;
    color: #2b57b8;
  }
`;

const AccountMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  z-index: 1000;
  display: ${props => props.show ? 'block' : 'none'};
  
  ${mobile({ display: "none !important" })}
`;

const AccountMenuItem = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  color: #333;
  font-size: 14px;
  
  &:hover {
    background: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const AccountMenuHeader = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  background: #f8f9fa;
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

const DesktopAccountWrapper = styled.div`
  display: flex;
  align-items: center;
  
  ${mobile({ display: "none !important" })}
`;

const BurgerButton = styled.div`
  display: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  user-select: none;
  align-items: center;
  justify-content: center;
  
  ${mobile({ display: "flex" })}
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #2b57b8; 
  z-index: 100;
  max-height: ${props => props.isOpen ? '600px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  display: none;
  
  ${mobile({ display: "block" })}
`;

const MobileMenuItem = styled.div`
  color: white;
  font-size: 15px;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  letter-spacing: 0.3px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const MobileLoginWrapper = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileLoginButton = styled.button`
  background: white;
  border: none;
  color: #2b57b8;
  padding: 12px 0;
  border-radius: 25px;
  cursor: pointer;
  font-size: 15px;
  width: 100%;
  text-align: center;
  transition: 0.2s ease;
  font-weight: 600;
  
  &:active {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state) => state.user.name);
  const pcs = useSelector((state) => state.cart.total_pcs);
  const url = useSelector((state) => state.user.url);

  const [isUser, setIsUser] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [itemsS, setItems] = useState([]);
  const [ok, setOk] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (username && username !== "") setIsUser(true);
    else setIsUser(false);
  }, [username]);

  const logout = () => {
    dispatch(LogoutProcess());
    setIsUser(false);
    setShowAccountMenu(false);
    setIsMobileMenuOpen(false);
    navigate('/login');
  };

  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAccountMenu && !event.target.closest('.account-menu-container')) {
        setShowAccountMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAccountMenu]);

  const SearchItems = () => {
    if (search !== "") {
      axios
        .post(url + "/api/searchitem", { item: search })
        .then((res) => {
          setItems(res.data);
          setOk(true);
        })
        .catch((err) => console.log(err));
    }
  };

  if (ok) {
    dispatch(showSearch());
    navigate("/products", { state: { itemsS, click: true } });
  }

  return (
    <Container className="fixed-top">
      <Wrapper>
        <Left>
          <LogoImage src={LogoPhoto} alt="Logo" />
          <Logo>Medical World</Logo>
        </Left>

        <Center>
          <StyledNavLink to="/">
            <MenuItem>Home</MenuItem>
          </StyledNavLink>
          <StyledNavLink to="/about-us">
            <MenuItem>About Us</MenuItem>
          </StyledNavLink>
          <StyledNavLink to="/products">
            <MenuItem>Shop</MenuItem>
          </StyledNavLink>
          <StyledNavLink to="/contact-us">
            <MenuItem>Contact Us</MenuItem>
          </StyledNavLink>
        </Center>

        <Right>
          <SearchContainer>
            <SInput
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && SearchItems()}
            />
            <SearchIcon
              style={{ color: "#888", cursor: "pointer" }}
              onClick={SearchItems}
            />
          </SearchContainer>

          <Link to="/cart" style={{ color: "white", position: "relative", display: "flex", alignItems: "center" }}>
            <ShoppingCartIcon style={{ fontSize: "24px" }} />
            {pcs > 0 && (
              <span
                style={{
                  background: "red",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "11px",
                  padding: "1px 5px",
                  position: "absolute",
                  top: -6,
                  right: -8,
                }}
              >
                {pcs}
              </span>
            )}
          </Link>

          {isUser ? (
            <DesktopAccountWrapper className="account-menu-container" style={{ position: 'relative' }}>
              <AccountCircleIcon 
                style={{ color: "white", cursor: "pointer" }} 
                onClick={toggleAccountMenu}
              />
              <AccountMenu show={showAccountMenu}>
                <AccountMenuHeader>{username || "User"}</AccountMenuHeader>
                <AccountMenuItem onClick={() => { navigate('/order_list'); setShowAccountMenu(false); }}>
                  Order History
                </AccountMenuItem>
                <AccountMenuItem onClick={() => { navigate('/wish'); setShowAccountMenu(false); }}>
                  Wishlist
                </AccountMenuItem>
                <AccountMenuItem onClick={logout}>
                  Logout
                </AccountMenuItem>
              </AccountMenu>
            </DesktopAccountWrapper>
          ) : (
            <LoginButton onClick={() => navigate("/login")}>LogIn</LoginButton>
          )}
          
          <BurgerButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <>&times;</> : <FaBars />}
          </BurgerButton>
        </Right>
      </Wrapper>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <StyledNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <MobileMenuItem>Home</MobileMenuItem>
        </StyledNavLink>
        
        <StyledNavLink to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
          <MobileMenuItem>About Us</MobileMenuItem>
        </StyledNavLink>
        
        <StyledNavLink to="/products" onClick={() => setIsMobileMenuOpen(false)}>
          <MobileMenuItem>Shop</MobileMenuItem>
        </StyledNavLink>
        
        <StyledNavLink to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
          <MobileMenuItem>Contact Us</MobileMenuItem>
        </StyledNavLink>

        {isUser ? (
          <>
            <MobileMenuItem onClick={() => { navigate('/order_list'); setIsMobileMenuOpen(false); }}>
              Order History
            </MobileMenuItem>
            <MobileMenuItem onClick={() => { navigate('/wish'); setIsMobileMenuOpen(false); }}>
              Wishlist
            </MobileMenuItem>
            <MobileMenuItem onClick={logout} style={{ color: "#ff8b8b" }}>
              Logout ({username || "Profile"})
            </MobileMenuItem>
          </>
        ) : (
          <MobileLoginWrapper>
            <MobileLoginButton onClick={() => { navigate("/login"); setIsMobileMenuOpen(false); }}>
              Login
            </MobileLoginButton>
          </MobileLoginWrapper>
        )}
      </MobileMenu>

      {showDialog && (
        isUser ? (
          <PreDialog open={showDialog} close={() => setShowDialog(false)} />
        ) : (
          <LoginAlert open={showDialog} close={() => setShowDialog(false)} />
        )
      )}
    </Container>
  );
};

export default Navbar;
