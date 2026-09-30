import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import LogoPhoto from '../files/logo.png';

import kbzbank from "../files/kbzbank.png";
import aya from "../files/aya.png";
import kbzpay from "../files/kbzpay.png";
import master from "../files/master.png";
import visa from "../files/visa.png";

const Container = styled.div`
  background-color: #1f4f8b;
  color: white;
  padding: 40px 60px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 15px;
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  font-size: 16px;
`;

const IconBox = styled.div`
  margin-right: 10px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const SocialIcon = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: white;
  color: #1f4f8b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const PaymentImg = styled.img`  
  height: 40px;
  background: white;
  padding: 3px;
  border-radius: 4px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>

        {/* LEFT */}
        <Column>
          {/* <Logo>Medical World</Logo>
          <Description>
            Medical World Co., Ltd provides uniforms and accessories
            for Government Departments and Private Business sectors.
          </Description> */}

          <img src={LogoPhoto} width="200" height="200" alt=""/>
        </Column>

        {/* CENTER */}
        <Column>
          <Title>Medical World</Title>
          <List>
            <ListItem><Link to="/">Home</Link></ListItem>
            <ListItem><Link to="/login">Login</Link></ListItem>
            <ListItem><Link to="/contact-us">Contact Us</Link></ListItem>
            <ListItem><Link to="/shop">Shop</Link></ListItem>
            <ListItem><Link to="/about-us">About Us</Link></ListItem>
            <ListItem><Link to="/privacy-policy">Privacy & Policy</Link></ListItem>
          </List>
        </Column>

        {/* RIGHT */}
        <Column>
          <Title>Contact Us</Title>

          <ContactItem>
            <IconBox><RoomIcon fontSize="small" /></IconBox>
            No.28, Hlaing Yadanar Mon 3rd Street,
            Hlaing Township, Yangon
          </ContactItem>

          <ContactItem>
            <IconBox><PhoneIcon fontSize="small" /></IconBox>
            +95 9 777005856, +95 9777005862, +95 9777005863
          </ContactItem>

          <ContactItem>
            <IconBox><EmailIcon fontSize="small" /></IconBox>
            information.medicalworld@gmail.com
          </ContactItem>
        </Column>

        <Column>
            <PaymentContainer>
                <PaymentImg src={visa} />
                <PaymentImg src={master} />
                <PaymentImg src={kbzbank} />
                <PaymentImg src={aya} />
                {/* <PaymentImg src={cbpay} /> */}
                <PaymentImg src={kbzpay} />
                {/* <PaymentImg src={wave} /> */}
            </PaymentContainer>

            <SocialContainer>
                <SocialIcon href="#">
                    <FacebookIcon fontSize="small" />
                </SocialIcon>

                <SocialIcon href="#">
                    <YouTubeIcon fontSize="small" />
                </SocialIcon>

                <SocialIcon href="#">
                    <InstagramIcon fontSize="small" />
                </SocialIcon>

                <SocialIcon href="#">
                    <LinkedInIcon fontSize="small" />
                </SocialIcon>
          </SocialContainer>
        </Column>

      </Wrapper>
    </Container>
  );
};

export default Footer;
