
import React  from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ColorNav from '../components/ColorNav';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import { useSelector} from 'react-redux'

const Div = styled.div`
    margin-top: 65px;
`
const Wrapper = styled.div`
    widtr: 100vw;
    height: auto;
    min-height: 100vh;
    padding: 50px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({padding: '50'})}
`
const Title = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`
const Description = styled.div`
    width: 70%;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({textAlign: "center"})}
`
const Form = styled.form`
    width: 400px;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    min-height: 30px;
    margin: 10px 0px;
    padding: 5px;
`
const Message = styled.textarea`
    flex: 1;
    min-width: 40%;
    min-height: 130px;
    margin: 10px 0px;
    padding: 5px;
`
const Check = styled.input`
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-top: 20px;
    margin-right: 10px;
`
const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    background-color: #32549b;
    color: white;
    cursor: pointer;
    margin-top: 20px;
`

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subscribe, setSubscribe] = useState('');
    const url= useSelector(state => state.user.url);

    const didSubscribe = subscribe == 'checked' ? '1' : '0';

    const data = {
        name: name,
        email :email,
        message: message,
        subscribe_flag: didSubscribe
    }


    const SendMessage = (e) => {
        e.preventDefault();
        axios.post(url+'/api/contact_message', data)

        emailjs.sendForm('service_79e361n', 'template_pt919ms', e.target, 'plkqX8v0BRW5x7pd8')
            .then((result) => {
                alert('Email sent successfully');
                setName('');
                setEmail('');
                setMessage('');
                setSubscribe('');
            }, (error) => {
                alert('Fail to send email');
            });
    }

    return (

        <div>
            <div>
                <ColorNav/>
            </div>
            <Div>
                <Wrapper>
                    <div className="min-vh-100 py-5">
                        <div className="container">
                            <div className="mx-auto p-4 p-md-5 bg-white shadow rounded" style={{ maxWidth: "768px" }}>

                                <h1 className="h3 text-center fw-bold text-dark mb-4">
                                    Family Uniform Ecommerce Privacy Policy
                                </h1>
                                <p className="text-muted mb-3">
                                    This Privacy Policy describes how your personal information is collected, used, and
                                    shared when you visit or make a purchase from (www.medicalworld.com.mm).
                                </p>

                                <section className="mb-5">
                                    <h2 className="h5 fw-semibold text-dark border-bottom pb-2 mb-3">
                                        WHAT PERSONAL INFORMATION WE COLLECT
                                    </h2>
                                    <p className="text-muted mb-3">
                                        When you visit the Site, we automatically collect certain information
                                        about your device, including information about your web browser, IP
                                        address, time zone, and some of the cookies that are installed on your
                                        device.
                                    </p>
                                    <p className="text-muted mb-3">
                                        Additionally, as you browse the Site, we collect information about the
                                        individual web pages or products that you view, what websites or search
                                        terms referred you to the Site, and information about how you interact
                                        with the Site. We refer to this automatically collected information as
                                        <strong> Device Information</strong>.
                                    </p>
                                    <p className="text-muted mb-3">
                                        We collect Device Information using the following technologies:
                                    </p>
                                    <ul className="ms-3">
                                        <li className="mb-2">
                                            <strong>Cookies</strong> are data files that are placed on your device or
                                            computer and often include an anonymous unique identifier.
                                        </li>
                                        <li className="mb-2">
                                            <strong>Log files</strong> track actions occurring on the Site and collect
                                            data, including your IP address, browser type, Internet service provider,
                                            referring/exit pages, and date/time stamps.
                                        </li>
                                    </ul>
                                    <p className="text-muted mb-3">
                                        Also, when you make a purchase or attempt to make a purchase through the Site,
                                        we
                                        collect certain information from you, including your name, billing address,
                                        shipping
                                        address, payment information (including credit card numbers Mention all types of
                                        accepted payments, email address, and phone number. This is
                                        called <strong>Order Information</strong>.
                                    </p>
                                    <p className="fst-italic">
                                        Make sure you mention all other information that you collect.
                                    </p>
                                    <p className="text-muted">
                                        By <strong>Personal Information</strong> in this Privacy Policy, we are talking
                                        both about Device
                                        Information and Order Information.
                                    </p>
                                </section>

                                <section className="mb-5">
                                    <h2 className="h5 fw-semibold text-dark border-bottom pb-2 mb-3">
                                        HOW DO WE USE YOUR PERSONAL INFORMATION
                                    </h2>
                                    <p className="text-muted mb-3">
                                        We use the Order Information that we collect generally to fulfill any
                                        orders placed through the Site (including processing your payment
                                        information, arranging for shipping, and providing you with invoices
                                        and/or order confirmations).
                                    </p>
                                    <p className="text-muted mb-3">
                                        Additionally, we use this Order Information to:
                                    </p>
                                    <ul className="ps-3">
                                        <li>Communicate with you.</li>
                                        <li>Screen our orders for potential risk or fraud.</li>
                                        <li>
                                            When in line with the preferences you have shared with us, provide you with
                                            information or advertising relating to our products or services.
                                        </li>
                                    </ul>
                                    <p className="text-muted mb-3">
                                        We use the Device Information that we collect to help us screen for potential
                                        risk
                                        and fraud (in particular, your IP address), and more generally to improve and
                                        optimize our Site.
                                    </p>
                                </section>

                                <section className="mb-5">
                                    <h2 className="h5 fw-semibold text-dark border-bottom pb-2 mb-3">
                                        SHARING YOUR PERSONAL INFORMATION
                                    </h2>
                                    <p className="text-muted mb-3">
                                        We share your Personal Information with third parties who help us
                                        fulfill order transactions, online payments, etc., as described above.
                                    </p>
                                    <p className="text-muted">
                                        Finally, we may also share your Personal Information to comply with applicable
                                        laws
                                        and regulations, to respond to a subpoena, search warrant or other lawful
                                        requests
                                        for information we receive, or to otherwise protect our rights.
                                    </p>
                                </section>

                                <section className="mb-5">
                                    <h2 className="h5 fw-semibold text-dark border-bottom pb-2 mb-3">
                                        DATA RETENTION
                                    </h2>
                                    <p className="text-muted">
                                        When you place an order through the Site, we will maintain your Order
                                        Information for our records unless and until you ask us to delete this
                                        information.
                                    </p>
                                </section>

                                <section className="mb-5">
                                    <h2 className="h5 fw-semibold text-dark border-bottom pb-2 mb-3">
                                        CHANGES
                                    </h2>
                                    <p className="text-muted mb-3">
                                        We may update this privacy policy from time to time in order to reflect, for
                                        example, changes to our practices or for other operational, legal or regulatory
                                        reasons.
                                    </p>
                                    <p className="text-muted">
                                        If you have questions and/or require more information, do not hesitate to contact us
                                        (<a
                                            href="mailto:information.medicalworld@gmail.com"
                                            className="text-decoration-underline text-primary p-lg-2"
                                        >
                                            information.medicalworld@gmail.com
                                        </a>
                                         or +95 9 44 88 33 457).
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>


                </Wrapper>
            </Div>
            <div>
                <Footer/>
            </div>
        </div>

    );

}

export default Contact;
