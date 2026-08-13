// import React from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import EmailIcon from '@mui/icons-material/Email';
// import RoomIcon from '@mui/icons-material/Room';
// import PhoneIcon from '@mui/icons-material/Phone';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import { mobile } from "../responsive";
// import kbzbank from '../files/kbzbank.png'
// import aya from '../files/aya.jpg'
// import cbpay from '../files/cbpay.jpg'
// import kbzpay from '../files/kbzpay.png'
// import wave from '../files/wave.png'
// import master from '../files/master.png'
// import visa from '../files/visa.jpg'

// const Container = styled.div`
//     display: flex;
//     background-color: #dddddd;
//     ${mobile({ flexDirection: "column" })}
// `
// const Logo = styled.h2`
// `
// const Left = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//     background-color: #dddddd;
// `
// const Description = styled.p`
//     margin: 20px 0px;
// `
// const SocialContainer = styled.div`
//     display: flex;
// `
// const SocialIcon = styled.div`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     color: white;
//     background-color: #${props => props.bgc};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 20px;
// `
// const Center = styled.div`
//     flex: 1;
//     padding: 20px;
//     background-color: #dddddd;
//     ${mobile({ display: "none" })}
// `
// const Title = styled.h3`
//     margin-bottom: 30px;
// `
// const List = styled.ul`
//     list-style: none;
//     margin: 0px;
//     padding: 0px;
//     display: flex;
//     flex-wrap: wrap;
// `
// const ListItem = styled.li`
//     width: 50%;
//     margin-bottom: 10px;
//     text-align: left;
// `
// const Right = styled.div`
//     flex: 1;
//     padding: 20px;
//     background-color: #dddddd;
//     ${mobile({ backgroundColor: "#dddddd" })}
// `
// const ContactItem = styled.div`
//     margin-bottom: 20px;
//     display: flex;
//     align-items: center;
//     font-size: 15px;
// `
// const Payment = styled.img`
//     width: 50%;
// `
// const PaymentContainer = styled.div`
//     display: flex;
//     align-item: center;
//     justify-content: space-between;
//     flex-direction: row;
// `
// const PaymentBox = styled.div`
//     width: 40px;
// `
// const Logop = styled.img`
//   width: 100%;
// `

// const Footer = () => {
//     return (
//         <Container  style={{padding: '0px 20px'}}>
//             <Left>
//                 <Logo>Medical World</Logo>
//                 <Description>
//                 Medical World Co., Ltd, founded in 2015, is a manufacturing and distribution company of uniforms 
//                 and accessories. Over the past 7 years, Medical World Co., Ltd, has been providing uniforms and 
//                 accessories for Government Departments and Private Business Sectors.
//             </Description>
//                 <SocialContainer>
//                     <SocialIcon bgc="3B5999">
//                         <a href='https://www.facebook.com/FamilyHospitalUniform' style={{ color: 'white' }}><FacebookIcon /></a>
//                     </SocialIcon>
//                     <SocialIcon bgc="E60023">
//                         <a href='#' style={{ color: 'white' }}><YouTubeIcon /></a>
//                     </SocialIcon>
//                     <SocialIcon bgc="E4405F">
//                         <a href='#' style={{ color: 'white' }}><InstagramIcon /></a>
//                     </SocialIcon >
//                     <SocialIcon bgc="55ACEE">
//                         <a href='#' style={{ color: 'white' }}><TwitterIcon /></a>
//                     </SocialIcon>
//                 </SocialContainer>
//             </Left>

//             <Center>
//                 <Title>Useful Links</Title>
//                 <List>
//                     <ListItem><Link to="/" style={{textDecoration: 'none', color: '#32549b'}}>Home</Link></ListItem>
//                     <ListItem><Link to="/about-us" style={{textDecoration: 'none', color: '#32549b'}}>About Us</Link></ListItem>
//                     <ListItem><Link to="/contact-us" style={{textDecoration: 'none', color: '#32549b'}}>Contact Us</Link></ListItem>
//                     <ListItem><Link to="/login" style={{textDecoration: 'none', color: '#32549b'}}>Login</Link></ListItem>
//                     <ListItem><Link to="/register" style={{textDecoration: 'none', color: '#32549b'}}>Regitster</Link></ListItem>
//                     <ListItem><Link to="/cart" style={{textDecoration: 'none', color: '#32549b'}}>My Cart</Link></ListItem>
//                     <ListItem><Link to="/user-profile" style={{textDecoration: 'none', color: '#32549b'}}>My Account</Link></ListItem>
//                     <ListItem><Link to="/privacy-policy" style={{textDecoration: 'none', color: '#32549b'}}>Privacy & Policy</Link></ListItem>
//                 </List>
//             </Center>
//             <Right>
//                 <Title>Contact</Title>
//                 <ContactItem>
//                     <RoomIcon style={{ marginRight: "10px" }} />
//                     No.28, Hlaing Yadanar Mon 3rd Street, Hlaing Yadanar Mon Avenue, Hlaing Township, Yangon
//                 </ContactItem>

//                 <ContactItem>
//                     <PhoneIcon style={{ marginRight: "10px" }} />
//                     +95 9 44 88 33 457 , + 95 9 44 88 33 467 , 09 777005863, 09 777005864
//                 </ContactItem>

//                 <ContactItem>
//                     <EmailIcon style={{ marginRight: "10px" }} />
//                     <a href="mailto:information.medicalworld@gmail.com">information.medicalworld@gmail.com</a>
//                 </ContactItem>
//                 <PaymentContainer>
//                     <PaymentBox style={{width: '60px'}}><Logop src={master}/></PaymentBox>
//                     <PaymentBox style={{width: '60px', marginRight: '30px'}}><Logop src={visa}/></PaymentBox>
//                     <PaymentBox><Logop src={kbzbank}/></PaymentBox>
//                     <PaymentBox><Logop src={aya}/></PaymentBox>
//                     <PaymentBox><Logop src={cbpay}/></PaymentBox>
//                     <PaymentBox><Logop src={kbzpay}/></PaymentBox>
//                     <PaymentBox><Logop src={wave}/></PaymentBox>
//                 </PaymentContainer>
//             </Right>
//         </Container>
//     )
// }

// export default Footer




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
            +95 9 44 88 33 457 , +95 9 44 88 33 467
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
