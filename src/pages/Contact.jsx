
// import React  from 'react';
// import styled from 'styled-components';
// import {mobile} from "../responsive";
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import ColorNav from '../components/ColorNav';
// import Footer from '../components/Footer';
// import emailjs from '@emailjs/browser'; 
// import { useSelector} from 'react-redux'

// const Div = styled.div`
//     margin-top: 65px;
// `
// const Wrapper = styled.div`
//     widtr: 100vw;
//     height: auto;
//     min-height: 100vh;
//     padding: 50px;
//     background-color: #ffffff;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     ${mobile({padding: '50'})}
// `
// const Title = styled.h2`
//     margin-bottom: 20px;
//     text-align: center;
// `
// const Description = styled.div`
//     width: 70%;
//     font-size: 24px;
//     font-weight: 300;
//     margin-bottom: 20px;
//     text-align: center;
//     ${mobile({textAlign: "center"})}
// `
// const Form = styled.form`
//     width: 400px;
//     display: flex;
//     align-item: center;
//     justify-content: center;
//     flex-direction: column;
// `
// const Input = styled.input`
//     flex: 1;
//     min-width: 40%;
//     min-height: 30px;
//     margin: 10px 0px;
//     padding: 5px;
// `
// const Message = styled.textarea`
//     flex: 1;
//     min-width: 40%;
//     min-height: 130px;
//     margin: 10px 0px;
//     padding: 5px;
// `
// const Check = styled.input`
//     display: inline-block;
//     width: 18px;
//     height: 18px;
//     margin-top: 20px;
//     margin-right: 10px;
// `
// const Button = styled.button`
//     width: 100%;
//     height: 40px;
//     border: none;
//     background-color: #32549b;
//     color: white;
//     cursor: pointer;
//     margin-top: 20px;
// `

// const Contact = () => {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [subscribe, setSubscribe] = useState('');
//     const url= useSelector(state => state.user.url);

//     const didSubscribe = subscribe == 'checked' ? '1' : '0';

//     const data = {
//         name: name,
//         email :email,
//         message: message,
//         subscribe_flag: didSubscribe
//     }


//     const SendMessage = (e) => {
//         e.preventDefault();
//         axios.post(url+'/api/contact_message', data)

//         emailjs.sendForm('service_79e361n', 'template_pt919ms', e.target, 'plkqX8v0BRW5x7pd8')
//         .then((result) => {
//             alert('Email sent successfully');
//             setName('');
//             setEmail('');
//             setMessage('');
//             setSubscribe('');
//         }, (error) => {
//             alert('Fail to send email');
//         });
//     }
 
//     return (
        
//         <div>
//             <div>
//                 <ColorNav/>
//             </div>
//             <Div>
//                 <Wrapper>
//                     <Title>Contact Us</Title>
//                     <Description>Feels free to ask anything...</Description>
//                     <Form onSubmit={SendMessage}>
//                         <Input type="text" name='name' placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
//                         <Input type="text" name='email' placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//                         <Message name='message' placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
//                         <div>
//                             <Check id="check" type="checkbox" onChange={(e)=>setSubscribe('checked')} style={{display: 'inline-block'}}/>
//                             <label for="check" style={{cursor: 'pointer'}}>Subscribe for Update News</label>
//                         </div>
//                         <Button>Send Message</Button>
//                     </Form>
//                 </Wrapper>
//             </Div>
//             <div>
//                 <Footer/>
//             </div>
//         </div>

//     );

// }

// export default Contact;

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { mobile } from "../responsive";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Page = styled.div`
  margin-top: 65px;
  background: #f5f7fb;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
`;

const Card = styled.div`
  background: white;
  border-radius: 14px;
  margin-top: 10px;
  padding: 30px;
  display: flex;
  gap: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.08);
  }

  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 2;
  ${mobile({ order: 1 })}
`;

const Right = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #0d4ea6, #083b7f);
  color: white;
  border-radius: 14px;
  padding: 25px;
  ${mobile({ order: 2 })}
`;

const RightBottom = styled.div`
  flex: 1;
  background: white;
  color: white;
  border-radius: 14px;
  padding: 25px;
  ${mobile({ order: 1 })}
`;

const AppointmentLeft = styled.div`
  flex: 2;
  ${mobile({ order: 2 })}
`;

const SectionTitle = styled.h4`
  margin-bottom: 18px;
  font-weight: 600;
`;

const SectionSubTitle = styled.p`
  margin-bottom: 30px;
`


const Row = styled.div`
  display: flex;
  gap: 15px;
  ${mobile({ flexDirection: "column" })}
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  font-size: 16px;
`

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  transition: 0.2s;

  &:focus {
    outline: none;
    border-color: #0d4ea6;
    box-shadow: 0 0 0 3px rgba(13, 78, 166, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 110px;
  padding: 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    border-color: #0d4ea6;
    box-shadow: 0 0 0 3px rgba(13, 78, 166, 0.1);
  }
`;

const Button = styled.button`
  background: #0d4ea6;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    background: #083b7f;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 18px;
  font-size: 14px;
  padding: 10px;
  background-color: white;
  color: #0d4e78;
  border-radius: 10px;

  svg {
    font-size: 18px;
  }
`;


const Detail = styled.div`
  font-weight: 900;
`;

const Line = styled.hr`
  border: none;
  height: 2px; 
  background-color: white;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 15px;
`;


const SocialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    font-size: 22px;
    margin-bottom: 6px;
    transition: 0.2s;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 220px;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
`;

const Contact = () => {
  const url = useSelector((state) => state.user.url);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const SendMessage = (e) => {
    e.preventDefault();

    axios.post(url + "/api/contact_message", form);

    emailjs
      .sendForm(
        "service_79e361n",
        "template_pt919ms",
        e.target,
        "plkqX8v0BRW5x7pd8"
      )
      .then(
        () => {
          alert("Email sent successfully");
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        () => alert("Fail to send email")
      );
  };

  return (
    <>
      {/* <ColorNav /> */}
      <Navbar/>

      <Page>
        <Container>
          <Title>Contact Us</Title>

          <Card>
            <Left>
              <SectionTitle>Send us a message</SectionTitle>

              <SectionSubTitle>Do you have a question? A complaint? Or need any help to choose the right product. Feel free to contact us.</SectionSubTitle>

              <form onSubmit={SendMessage}>
                <Row>
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input
                      name="firstname"
                      placeholder="Enter your first name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                      name="lastname"
                      placeholder="Enter your last name"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      name="email"
                      placeholder="Enter your email address"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Contact Detail</Label>
                    <Input
                      name="phone"
                      placeholder="Enter your contact number"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Row>

                <Label>Message</Label>
                <TextArea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                />

                <Button>Send Message</Button>
              </form>
            </Left>

            <Right>
              <SectionTitle>Hi! We are always here to help you.</SectionTitle>

              <InfoRow>
                <FiPhone />
                <div>
                  <Detail>Hotline</Detail>
                  <div>+95 9777005856</div> 
                  <div>+95 9777005862</div>
                  <div>+95 9777005863</div>
                </div>
              </InfoRow>

              <InfoRow>
                <FiMail />
                <div>
                  <Detail>Email</Detail>
                  <div>information.medicalworld@gmail.com</div> 
                </div>
              </InfoRow>

              <InfoRow>
                <FiMapPin />
                <div>
                  <Detail>Address</Detail>
                  <div>Yangon, Myanmar</div>
                </div>
              </InfoRow>


              <Line/>

              <SectionSubTitle>Follow Us</SectionSubTitle>

              <SocialRow>
                <SocialItem>
                  <FaFacebookF />
                  <span>Facebook</span>
                </SocialItem>

                <SocialItem>
                  <FaYoutube />
                  <span>Youtube</span>
                </SocialItem>

                <SocialItem>
                  <FaInstagram />
                  <span>Instagram</span>
                </SocialItem>

                <SocialItem>
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </SocialItem>
              </SocialRow>
            </Right>
          </Card>

          <Card>
           <AppointmentLeft>
             <SectionTitle>Book a meeting with our team</SectionTitle>

            <Row>
              <FormGroup>
                <Label>Appointment Date</Label>
                <Input
                  type="date"
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Appointment Time</Label>
                <Input
                  type="time"
                  onChange={handleChange}
                />
              </FormGroup>
            </Row>

            <Label>Description</Label>
            <TextArea placeholder="Description" />

            <Button>Request Appointment</Button>
           </AppointmentLeft>

            <RightBottom>
              <Map
              src="https://maps.google.com/maps?q=yangon&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
            </RightBottom>
          </Card>
        </Container>
      </Page>

      <Footer />
    </>
  );
};

export default Contact;
