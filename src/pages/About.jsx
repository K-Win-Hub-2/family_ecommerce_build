import React from "react";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import YoutubeSlider from "../components/YoutubeSlider";

import profile from "../slider-images/about.png";
import client from "../slider-images/human.jpg";
import group from "../slider-images/aboutgp.jpg";
import board1 from "../slider-images/UWinKoKo.png";
import board2 from "../slider-images/DawKhinSandarKo.png";
import board3 from "../slider-images/UHtetAung.png";
import board4 from "../slider-images/DawKathyKo.png";
import board5 from "../slider-images/DawShwinPyone.png";

import pho1 from "../files/factory/f1.jpg";
import pho2 from "../files/factory/f2.jpg";
import pho3 from "../files/factory/f3.jpg";
import pho4 from "../files/factory/f4.jpg";
import pho5 from "../files/factory/f5.jpg";
import pho6 from "../files/factory/f6.jpg";
import pho7 from "../files/factory/f7.jpg";
import pho8 from "../files/factory/f8.JPG";
import pho9 from "../files/factory/f9.JPG";
import pho10 from "../files/factory/f10.jpg";
import pho11 from "../files/factory/f11.jpg";
import pho12 from "../files/factory/f12.JPG";
import pho13 from "../files/factory/f13.jpg";
import pho14 from "../files/factory/f14.jpg";
import pho15 from "../files/factory/f15.JPG";
import pho16 from "../files/factory/f16.jpg";
import pho17 from "../files/factory/f17.jpg";
import pho18 from "../files/factory/f18.jpg";
import pho19 from "../files/factory/f19.jpg";
import pho20 from "../files/factory/f20.jpg";
import pho21 from "../files/factory/f21.jpg";
import pho22 from "../files/factory/f22.jpg";
import pho23 from "../files/factory/f23.jpg";
import pho24 from "../files/factory/f24.jpg";
import pho25 from "../files/factory/f25.jpg";
import pho26 from "../files/factory/f26.jpg";
import pho27 from "../files/factory/f27.jpg";
import pho28 from "../files/factory/f28.jpg";
import pho29 from "../files/factory/f29.jpg";
import pho30 from "../files/factory/f30.jpg";
import pho31 from "../files/factory/f31.jpg";
import factoryV from "../files/factory.mp4";

import about from "../slider-images/aboutus.png";
import aboutFactory from "../slider-images/factory.png";

import aryu from "../files/p_logo/aryu_international_hospital.png";
import asiaRoyal from "../files/p_logo/asia_royal.jpg";
import grandHantha from "../files/p_logo/grand_hantha_international.png";
import moh from "../files/p_logo/ministry_of_health.jpg";
import pinlon from "../files/p_logo/pinlon_group_of_hospitality.png";
import victoria from "../files/p_logo/victoria_hospital.png";
import panhlaing from "../files/p_logo/punhlaing_hospital.jpg";
import ssc from "../files/p_logo/ssc_hospital.png";
import ami from "../files/p_logo/ami_life.jpg";
import asiaRoyal2 from "../files/p_logo/asia_royal_2.jpg";
import aungyadana from "../files/p_logo/aung_yadana_hospital.jpg";
import city from "../files/p_logo/city_hospital.png";
import dLux from "../files/p_logo/d_lux_dental_clinic.jpg";
import dagonMedicare from "../files/p_logo/dagon_medicare_hospital.jpg";
import hlaingTW from "../files/p_logo/hlaing_taw_win.jpg";
import ingyinphyu from "../files/p_logo/ingyinphyu_dental_clinic.jpg";
import sos from "../files/p_logo/international_sos.jpg";
import eye from "../files/p_logo/international_specialist_eye_centre.png";
import kankaw from "../files/p_logo/kankaw_hospital.jpg";
import kembangan from "../files/p_logo/kembangan_general_hospital.jpg";
import khaing from "../files/p_logo/khaing_yadanar_hospital.jpg";
import mandalar from "../files/p_logo/mandalar_hospital.png";
import minipal from "../files/p_logo/manipal_sml.jpg";
import moeKaung from "../files/p_logo/moe_kaung_treasure.jpg";
import osc from "../files/p_logo/osc_hospital.png";
import shweLamin from "../files/p_logo/shwe_lamin_hospital.jpg";
import shweYaung from "../files/p_logo/shwe_yaung_lin_hospital.jpg";
import tawwin from "../files/p_logo/tawwin_malikha_hospital.jpg";
import thuka from "../files/p_logo/thukha_kabar_hospital.png";
import violin from "../files/p_logo/violin_health_beauty_clinic.jpg";
import mprivate from "../files/p_logo/myanmar_private_hospital_association.jpg";
import mmedical from "../files/p_logo/myanmar_medical_association_centre.jpg";

import map from "../files/map1.png";

import {
  FaBullseye,
  FaEye,
  FaGem,
  FaIndustry,
  FaLayerGroup,
  FaPalette,
  FaVial,
  FaClock,
  FaUsers,
  FaHandHoldingUsd,
  FaCheckCircle,
  FaShippingFast,
  FaTshirt,
  FaTools,
  FaBuilding,
  FaNetworkWired,
  FaRocket,
} from "react-icons/fa";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

const Section = styled.div`
  width: 100%;
  background: #f7f9fc;
  overflow: hidden;
  margin-top: 10px;
`;

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 100px 40px 100px;
`;

const slideText = keyframes`
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideImage = keyframes`
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Left = styled.div`
  flex: 1;
  animation: ${slideText} 1.2s ease forwards;
`;

const HeroTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #2b57b8;
`;

const HeroDesc = styled.p`
  font-size: 25px;
  margin: 20px 0;
  color: #555;
  line-height: 28px;
  max-width: 500px;
`;

const DoctorWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const DoctorCard = styled.div`
  width: 600px;
  height: 350px;
  background: #1c6ea4;
  border-radius: 25px;
  animation: ${slideImage} 1.4s ease forwards;
  transform: translateY(50px);
`;

const DoctorImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 800px;
  height: auto;
  object-fit: contain;
  z-index: 2;
  animation: ${slideImage} 1.4s ease forwards;
  transform: translateY(50px);
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

const ClientBadge = styled.div`
  position: absolute;
  top: 180px;
  left: -80px;
  background: #1c6ea4;
  color: white;
  padding: 15px 20px;
  border: 1px solid #48f542;
  border-radius: 15px;
  font-size: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  animation: ${slideImage} 1.4s ease forwards;
  transform: translateY(50px);
`;

const ClientWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClientImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #fff;
  margin-left: -20px;

  &:nth-child(1) {
    z-index: 4;
  }
  &:nth-child(2) {
    z-index: 3;
  }
  &:nth-child(3) {
    z-index: 2;
  }
  &:nth-child(4) {
    z-index: 1;
  }

  &:first-child {
    margin-left: 0;
  }
`;

const ContentSection = styled.div`
  position: relative;
  padding: 140px 100px 80px 100px;
  color: white;
  overflow: hidden;
  // background: #156ea8; /* fallback color */
`;

const AboutWave = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;

  z-index: 0;
  pointer-events: none;
`;

const ContentFlex = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  gap: 60px;
`;

const ImageCard = styled.div`
  flex: 1;
  margin-top: -140px;

  img {
    width: 100%;
    max-width: 520px;
    border-radius: 30px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    object-fit: cover;
  }
`;

const TextBox = styled.div`
  flex: 1;
`;

const Flex = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

const ContentTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 25px;
  line-height: 30px;
`;

const Wrapper = styled.div`
    width: 100%
    height: auto;
`;
const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: #2b57b8;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;
// const Content = styled.div`

// `

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DirectorCard = styled.div`
  width: 220px;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  border: 3px solid #1c6ea4;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

const ImageBox = styled.div`
  height: 220px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const InfoBox = styled.div`
  background: #1c6ea4;
  padding: 18px 10px;
  text-align: center;
  color: white;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const Name = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

const Role = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
`;

// const Flex = styled.div`
//     display:  flex;
//     align-items: center;
//     justify-content: center;
// `
// const BoxOne = styled.div`
//     width: 60%;
//     height: 370px;
// `
// const BoxTwo = styled.div`
//     width: 40%;
//     height: 370px;
//     text-align: center;
//     padding: 20px;
//     background-color: #ffffff;
//     overflow: hidden;
// `
// const ContentTitle = styled.h6`
//     font-size: 21px;
//     font-weight: bold;
//     color: #2b57b8;
// `
// const Description = styled.p`
//     font-size: 15px;
//     margin-top:14px;
// `

const Box = styled.div`
  width: 33.33%;
`;
const Circle = styled.div`
  border-radius: 50%;
  border: 4px solid #ffffff;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;
const CBox = styled.div`
  width: 200px;
  height: auto;
  margin: 10px 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  font-weight: bold;
`;
const Ul = styled.ul``;
const Li = styled.li`
  color: #ffffff;
  text-align: left;
  list-style-type: disc;
  font-size: 18px;
  padding: 5px 0px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: contain;
  background-color: #ffffff;
`;
const SmallBox = styled.div`
  width: 45%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  color: #32549b;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
`;
const SmallImgBox = styled.div`
  width: 230px;
  height: auto;
  min-height: 120px;
  margin-left: 20px;
`;
// const Left = styled.div`
//     width: auto;
//     display: flex;
//     align-item: center;
//     justify-content: center;
//     flex-direction: column;
// `
const Center = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  margin-top: 50px;
`;
// const Right = styled.div`
//     width: auto;
//     display: flex;
//     align-item: end;
//     justify-content: end;
//     flex-direction: column;
// `
const ShowP = styled.span`
  color: #32549b;
  background-color: #ffffff;
  padding: 7px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;
const FIbox = styled.div`
  display: flex;
  align-item: center;
  flex-direction: row;
`;
const FImg = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;
  border: 5px solid transparent;
  border-radius: 12px;
`;
const SmallImgBoxP = styled.div`
  width: 150px;
  height: auto;
  min-height: 120px;
  margin-left: 20px;
  padding: 20px;
`;
const DeepBox = styled.div`
  width: 100%;
`;
const PBox = styled.div`
  height: auto;
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 100px;
`;
const MSection = styled.div`
  padding: 60px 0;
  background: #f5f8fc;
`;

const MWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const MTitle = styled.h1`
  font-size: 42px;
  color: #2b57b8;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 320px;
  padding: 40px 25px;
  background: #eaf2f8;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #8bc34a;
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`;

const ActiveCard = styled(Card)`
  background: #0f6ea8;
  color: white;
  border: 2px solid #8bc34a;
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  background: #0f6ea8;
  color: white;
  margin: auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin-bottom: 20px;
`;

const IconBoxWhite = styled(IconBox)`
  background: white;
  color: #0f6ea8;
`;

const CardTitle = styled.h3`
  color: #0f6ea8;
  margin-bottom: 15px;
`;

const CardTitleWhite = styled(CardTitle)`
  color: white;
`;

const CardText = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const CardTextWhite = styled(CardText)`
  color: white;
`;

const RSection = styled.section`
  background: #0b79b7;
  padding: 50px 40px;
  color: white;
  text-align: center;
`;

const RTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 60px;
`;

const Timeline = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Item = styled.div`
  position: relative;
  width: 280px;
`;

const Year = styled.h3`
  margin-bottom: 20px;
  font-weight: 500;
`;

const Line = styled.div`
  width: 2px;
  height: 60px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 auto;
`;

const Icon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #5cc66a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin: -10px auto 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const RCard = styled.div`
  background: #0e8ed0;
  padding: 18px;
  border-radius: 14px;
  text-align: left;
  font-size: 18px;
  line-height: 1.5;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);

  p {
    margin: 6px 0;
  }
`;

const IconCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #5cc66a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin: -10px auto 20px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);

  svg {
    color: white;
  }
`;

const ASection = styled.section`
  padding: 70px 40px;
  background: #1c6ea4;
  display: flex;
  justify-content: center;
`;

const AContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoCard = styled.div`
  flex: 1;
  background: #f0f4f7;
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 28px;
  color: #1e5285;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    background: #cfd2d4;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;

  svg {
    font-size: 24px;
  }

  h2 {
    font-size: 30px;
    margin: 0;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;

  li {
    list-style-type: disc;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  svg {
    margin-top: 3px;
    min-width: 14px;
  }
`;

const clientLogos = [
  aryu,
  asiaRoyal,
  ssc,
  pinlon,
  grandHantha,
  osc,
  panhlaing,
  khaing,
  ami,
  asiaRoyal2,
  aungyadana,
  city,
  dLux,
  dagonMedicare,
  hlaingTW,
  ingyinphyu,
  sos,
  eye,
  kankaw,
  kembangan,
  khaing,
  mandalar,
  minipal,
  moeKaung,
  victoria,
  shweLamin,
  shweYaung,
  tawwin,
  thuka,
  violin,
];

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Slider = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const SlideTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 80s linear infinite;
`;

const LogoBox = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 25px;
  flex-shrink: 0;
`;

const CImage = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;
  opacity: 0.9;
  transition: 1s;

  &:hover {
    opacity: 1;
    transform: scale(1.5);
  }
`;

const PSection = styled.section`
  position: relative;
  padding: 80px 120px;
  // background: white;
  overflow: hidden;
`;

const PWrapper = styled.div`
  max-width: 1600px;
  margin: auto;
  position: relative;
  z-index: 2;
`;

const Top = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

const PLeft = styled.div`
  flex: 1;
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: 500px;
  border-radius: 22px;
  border: 4px solid white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
`;

const PRight = styled.div`
  flex: 1;
  color: #2b57b8;
`;

const PTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const PDescription = styled.p`
  font-size: 24px;
  line-height: 1.8;
  font-weight: 500;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const ThumbnailRow = styled.div`
  display: flex;
  gap: 20px;
  overflow: hidden;
  width: 680px;
`;

const Thumb = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 18px;
  border: 3px solid white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;

const Track = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease; /* animation */
  transform: translateX(${(props) => `-${props.index * 140}px`});
`;

const Button = styled.button`
  color: #2b57b8;
  border: none;
  font-size: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    transform: none;
  }

  &:disabled:hover {
    transform: none;
  }
`;

const BottomCurve = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 360px;

  z-index: 0;
  pointer-events: none;
  }
`;

const About = () => {
  const [partners, setPartners] = useState(false);
  const url = useSelector((state) => state.user.url);

  const [factory, setFactory] = useState(false);
  const [selectedImage, setSelectedImage] = useState(pho7);
  const [clientsExpanded, setClientsExpanded] = useState(false);
  const factoryImages = [
    pho1,
    pho2,
    pho3,
    pho4,
    pho5,
    pho6,
    pho8,
    pho9,
    pho10,
    pho11,
    pho12,
    pho13,
    pho14,
    pho15,
    pho16,
    pho17,
    pho18,
    pho19,
    pho20,
    pho21,
    pho22,
    pho23,
    pho24,
    pho25,
    pho26,
    pho27,
    pho28,
    pho29,
    pho30,
    pho31,
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = factoryImages.slice(startIndex, startIndex + 5);

  const handleNext = () => {
    if (currentIndex < factoryImages.length - 5) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const ShowAllPartners = () => {
    setPartners(true);
  };
  const HideAllPartners = () => {
    setPartners(false);
  };

  const ShowFactory = () => {
    setFactory(true);
  };
  const HideFactory = () => {
    setFactory(false);
  };

  const ShowAllClients = () => {
    setClientsExpanded(true);
  };
  const HideAllClients = () => {
    setClientsExpanded(false);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* Banner */}
      <Section>
        <Wrapper>
          <Hero>
            <Left>
              <HeroTitle>
                We Craft Brand <br />
                and Digital Experiences
              </HeroTitle>

              <HeroDesc>
                We leverage our in-house manufacturing capabilities to deliver
                high-volume production with precision and scale. By optimizing
                our supply chain, we offer a convenient, cost-effective solution
                that saves you both money and energy.
              </HeroDesc>

              {/* <Button>Learn More</Button> */}
            </Left>

            <Right>
              <DoctorWrapper>
                <DoctorImage src={profile} alt="doctor" />

                <DoctorCard />

                <ClientBadge>
                  <h4>250+ Satisfied Clients</h4>

                  <ClientWrapper>
                    <ClientImage src={client} alt="client" />
                    <ClientImage src={client} alt="client" />
                    <ClientImage src={client} alt="client" />
                    <ClientImage src={client} alt="client" />
                  </ClientWrapper>
                </ClientBadge>
              </DoctorWrapper>
            </Right>
          </Hero>

          <ContentSection>
            <AboutWave src={about} />

            <ContentFlex>
              <ImageCard>
                <img src={group} alt="about" />
              </ImageCard>

              <TextBox>
                <ContentTitle>About Our Medical World</ContentTitle>

                <Description>
                  Medical World Co., Ltd, founded in 2015, is a manufacturing
                  and distribution company of uniforms and accessories. Over the
                  past 11 years, Medical World Co. Ltd, has been providing
                  uniforms and accessories for Government Departments and
                  Private Business Sectors. One of our best services,
                  consultation service regarding uniform designs is offered.
                  Customizable service for business logos imprinted on the
                  uniform is also offered using modernized machines.
                </Description>
              </TextBox>
            </ContentFlex>
          </ContentSection>
        </Wrapper>
      </Section>

      {/* Vision */}
      <MSection>
        <MWrapper>
          <MTitle>OUR VISION, MISSION AND OBJECTIVE</MTitle>

          <CardContainer>
            <Card>
              <IconBox>
                <FaBullseye />
              </IconBox>
              <CardTitle>Mission</CardTitle>
              <CardText>Quality is our Virtue.</CardText>
            </Card>

            <ActiveCard>
              <IconBoxWhite>
                <FaEye />
              </IconBoxWhite>
              <CardTitleWhite>Vision</CardTitleWhite>
              <CardTextWhite>Flexibility and Responsibilities.</CardTextWhite>
            </ActiveCard>

            <Card>
              <IconBox>
                <FaGem />
              </IconBox>
              <CardTitle>Objective</CardTitle>
              <CardText>
                Leading in the Local Market and Exporting Abroad.
              </CardText>
            </Card>
          </CardContainer>
        </MWrapper>
      </MSection>

      {/* Director */}
      <Section
        style={{
          padding: "0px 100px",
          // background:
          //   "linear-gradient(to right, rgba(28,73,170,0.5), rgba(5,59,175,0.8))",
          background: "white",
          marginTop: "30px",
        }}
      >
        <Wrapper>
          <Title>BOARD OF DIRECTORS</Title>
          <SubTitle>Medical World Company Limited</SubTitle>

          <CardGrid>
            <DirectorCard>
              <ImageBox src={board1} />
              <InfoBox>
                <Name>U Win Ko Ko</Name>
                <Role>Managing Director</Role>
              </InfoBox>
            </DirectorCard>

            <DirectorCard>
              <ImageBox src={board2} />
              <InfoBox>
                <Name>Daw Khin Sandar KO</Name>
                <Role>Chief Executive Officer</Role>
              </InfoBox>
            </DirectorCard>

            <DirectorCard>
              <ImageBox src={board3} />
              <InfoBox>
                <Name>U Htet Aung</Name>
                <Role>Business Development Director</Role>
              </InfoBox>
            </DirectorCard>

            <DirectorCard>
              <ImageBox src={board4} />
              <InfoBox>
                <Name>Daw Kathy Ko</Name>
                <Role>Director</Role>
              </InfoBox>
            </DirectorCard>

            <DirectorCard>
              <ImageBox src={board5} />
              <InfoBox>
                <Name>Daw Shwin Pyone</Name>
                <Role>Director</Role>
              </InfoBox>
            </DirectorCard>
          </CardGrid>
        </Wrapper>
      </Section>

      {/* Roadmap */}
      <RSection>
        <RTitle>Roadmap</RTitle>

        <Timeline>
          <Item>
            <Year>Before 2015</Year>
            <Line />
            <IconCircle>
              <FaTools />
            </IconCircle>
            <RCard>
              <p>1. SME Business structure and give services</p>
              <p>2. Employee 30–50 OUR</p>
            </RCard>
          </Item>

          <Item>
            <Year>2015–2019</Year>
            <Line />
            <IconCircle>
              <FaBuilding />
            </IconCircle>
            <RCard>
              <p>
                1. Company type and introduces own brand name called Family
                Hospital Uniform
              </p>
              <p>2. Employee 100–150</p>
            </RCard>
          </Item>

          <Item>
            <Year>2020–2025</Year>
            <Line />
            <IconCircle>
              <FaNetworkWired />
            </IconCircle>
            <RCard>
              <p>
                1. Five showrooms, Nine dealers in upper and lower Myanmar, and
                distributes retail and wholesales
              </p>
              <p>2. Employee 160–200</p>
            </RCard>
          </Item>

          <Item>
            <Year>2026–2030</Year>
            <Line />
            <IconCircle>
              <FaRocket />
            </IconCircle>
            <RCard>
              <p>1. Build a centralized operational and branding structure.</p>
              <p>2. Capture 80% of the market share in the industry.</p>
            </RCard>
          </Item>
        </Timeline>
      </RSection>

      {/* Partners */}
      <Section style={{ padding: "50px 100px" }}>
        <Wrapper>
          <Title style={{ textAlign: "center" }}>PARTNER WITH ASSOCIATES</Title>
          <DeepBox>
            <PBox style={{ marginBotton: "20px" }}>
              <SmallImgBoxP style={{ width: "200px" }}>
                <Image src={moh} />
              </SmallImgBoxP>
              <SmallImgBoxP style={{ width: "200px" }}>
                <Image src={mmedical} />
              </SmallImgBoxP>
              <SmallImgBoxP style={{ width: "200px" }}>
                <Image src={mprivate} />
              </SmallImgBoxP>
            </PBox>
          </DeepBox>
        </Wrapper>
      </Section>

      {/* <Section style={{padding: "0px 100px" , background: "linear-gradient(to right, rgba(28, 73, 170, 0.5), rgba(5, 59, 175, 0.8))", marginTop: "50px"}}>
                <Wrapper>
                    <Title style={{padding: "30px 0px 10px 0px", textAlign: "center", color: "#ffffff"}}>BOARD OF DIRECTORS</Title>
                    <SubTitle>Medical World Company Limited</SubTitle>
                    <Content style={{padding: "50px"}}>
                        <Flex>
                            <CBox><Circle style={{ backgroundImage: `url(${board1})`, backgroundSize: "200px 200px" }}></Circle>U HTET AUNG <br/> (MANAGING DIRECTOR)</CBox>
                            <CBox><Circle style={{ backgroundImage: `url(${board2})`, backgroundSize: "200px 200px" }}></Circle>DAW KHIN THANDAR KO <br/> (DIRECTOR)</CBox>
                            <CBox><Circle style={{ backgroundImage: `url(${board3})`, backgroundSize: "200px 200px" }}></Circle>DAW KHIN SANDAR KO <br/> (DIRECTOR)</CBox>
                        </Flex>
                        <Flex>
                            <CBox><Circle style={{ backgroundImage: `url(${board4})`, backgroundSize: "200px 200px" }}></Circle>U WIN KO KO <br/> (DIRECTOR)</CBox>
                            <CBox><Circle style={{ backgroundImage: `url(${board5})`, backgroundSize: "200px 200px" }}></Circle>DR. AYE AYE AUNG <br/> (DIRECTOR)</CBox>
                        </Flex>
                    </Content>
                </Wrapper>
            </Section> */}

      {/* Advantages */}
      <ASection>
        <AContainer>
          <InfoCard>
            <Header>
              <FaIndustry />
              <h2>Competitive Advantage</h2>
            </Header>

            <List>
              <li>- Manufactured by own factory</li>
              <li>- Volume-based production (Quantity)</li>
              <li>- Customer & brand awareness programs</li>
              <li>- Continuous new designs & product development</li>
              <li>- Wash testing & sample making</li>
              <li>- Design consultation & budgeting</li>
              <li>- Quotation submitted within one day</li>
            </List>
          </InfoCard>

          <InfoCard>
            <Header>
              <FaHandHoldingUsd />
              <h2>Customer Benefits</h2>
            </Header>

            <List>
              <li>- Save money & energy</li>
              <li>- Effective time consumption</li>
              <li>- Value & quality service</li>
              <li>- On-time delivery confirmation</li>
              <li>- Easy sizing from XS to 4XL</li>
              <li>- Improved customer trust</li>
              <li>- Best HR solution for management</li>
            </List>
          </InfoCard>
        </AContainer>
      </ASection>

      {/* Client */}
      <Section style={{ padding: "30px 100px", overflow: "hidden" }}>
        <Wrapper>
          <Title style={{ textAlign: "center" }}>Our Clients</Title>

          {clientsExpanded ? (
            <DeepBox>
              <PBox style={{ marginBottom: "20px" }}>
                {clientLogos.map((logo, index) => (
                  <SmallImgBoxP key={index} style={{ width: "200px", padding: "20px" }}>
                    <Image src={logo} />
                  </SmallImgBoxP>
                ))}
              </PBox>
            </DeepBox>
          ) : (
            <Slider>
              <SlideTrack>
                {clientLogos.map((logo, index) => (
                  <LogoBox key={index}>
                    <CImage src={logo} />
                  </LogoBox>
                ))}

                {clientLogos.map((logo, index) => (
                  <LogoBox key={`dup-${index}`}>
                    <CImage src={logo} />
                  </LogoBox>
                ))}
              </SlideTrack>
            </Slider>
          )}

          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "30px" }}>
            {clientsExpanded ? (
              <ShowP onClick={HideAllClients} style={{ backgroundColor: "#32549b", color: "#ffffff", fontWeight: "bold", padding: "10px 20px" }}>
                Hide All Clients
              </ShowP>
            ) : (
              <ShowP onClick={ShowAllClients} style={{ backgroundColor: "#32549b", color: "#ffffff", fontWeight: "bold", padding: "10px 20px" }}>
                Show All Clients
              </ShowP>
            )}
          </div>
        </Wrapper>
      </Section>

      {/* Products */}
      {/* <Section style={{padding: "50px 100px" , background: "linear-gradient(to right, rgba(5, 59, 175, 0.8), rgba(28, 73, 170, 0.5))", marginTop: "50px"}}>
                <Wrapper>
                    <Title style={{color: "#ffffff", textAlign: "center"}}>Our Factory and Production</Title>
                    <Flex>
                        <Left style={{ minWidth: "350px" }}>
                        <SmallImgBox>
                            <Image src={pho1} style={{ minWidth: "300px" }} />
                        </SmallImgBox>
                        <SmallImgBox style={{ marginTop: "10px" }}>
                            <Image src={pho2} style={{ minWidth: "300px" }} />
                        </SmallImgBox>
                        </Left>
                        <Center>
                            <p style={{textAlign: "center",fontSize: "18px", fontWeight: "bold", color: "#ffffff", lineHeight: "35px"}}>
                            Imported highly qualified raw materials are used to
                            manufacture products and manufacturing is done locally.
                            Matching accessories for uniforms are manufactured locally and
                            distributed to both local and oversea market.
                            </p>
                        </Center>
                        <Right style={{ minWidth: "350px" }}>
                        <SmallImgBox>
                            <Image src={pho3} style={{ minWidth: "300px" }} />
                        </SmallImgBox>
                        <SmallImgBox style={{ marginTop: "10px" }}>
                            <Image src={pho4} style={{ minWidth: "300px" }} />
                        </SmallImgBox>
                        </Right>
                    </Flex>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        {factory ? (
                        <ShowP onClick={HideFactory}>Hide Factory Image</ShowP>
                        ) : (
                        <ShowP onClick={ShowFactory}>See All Factory Image</ShowP>
                        )}
                    </div>
                </Wrapper>

                
                
                {factory ? (
                <div style={{marginTop: "50px"}}>
                    <Wrapper style={{width: "100%"}}>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho5} />
                            <FImg src={pho6} />
                            <FImg src={pho7} />
                        </FIbox>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho8} />
                            <FImg src={pho9} />
                            <FImg src={pho10} />
                        </FIbox>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho11} />
                            <FImg src={pho12} />
                            <FImg src={pho13} />
                        </FIbox>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho14} />
                            <FImg src={pho15} />
                            <FImg src={pho16} />
                        </FIbox>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho17} />
                            <FImg src={pho18} />
                            <FImg src={pho19} />
                        </FIbox>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho20} />
                            <FImg src={pho21} />
                            <FImg src={pho22} />
                        </FIbox>
                    </Wrapper>
                </div>
                ) : (
                ""
                )}

                <Wrapper style={{marginTop: "50px"}}>
                    <video
                        src={factoryV}
                        controls
                        style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        border: "2px solid #ffffff",
                        backgroundColor: '#ffffff'
                        }}
                    />
                </Wrapper>
            </Section> */}

      {/* Factory */}
      <PSection>
        <PWrapper>
          <Top>
            <PLeft>
              <MainImage src={selectedImage} />
            </PLeft>

            <PRight>
              <PTitle>Our Factory and Production</PTitle>

              <PDescription>
                Imported highly qualified raw materials are used to manufacture
                products and manufacturing is done locally. Matching accessories
                for uniforms are manufactured locally and distributed to both
                local and oversea market.
              </PDescription>

              <CarouselWrapper>
                <Button onClick={handlePrev} disabled={currentIndex === 0}>
                  <IoMdArrowDropleftCircle />
                </Button>

                <ThumbnailRow>
                  <Track index={currentIndex}>
                    {factoryImages.map((img, index) => (
                      <Thumb
                        key={index}
                        src={img}
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                  </Track>
                </ThumbnailRow>

                <Button
                  onClick={handleNext}
                  disabled={currentIndex >= factoryImages.length - 5}
                >
                  <IoMdArrowDroprightCircle />
                </Button>
              </CarouselWrapper>
            </PRight>
          </Top>
        </PWrapper>

        <BottomCurve src={aboutFactory} />
      </PSection>

      {/* <div style={{marginTop: "50px"}}>
                <YoutubeSlider/>
            </div> */}

      <Section>
        <Wrapper>
          <Title style={{ textAlign: "center" }}>Our Sale Network</Title>

          <Flex
            style={{
              padding: "30px 0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={map} width="500px" />
          </Flex>
        </Wrapper>
      </Section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
