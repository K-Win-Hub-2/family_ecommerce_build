// import React from 'react'
// import styled from 'styled-components'
// import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
// import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
// import { useState } from 'react';
// import {sliderItems} from "../data";
// import {mobile} from "../responsive";
// import { Navigate, useNavigate  } from 'react-router-dom';

// const Container = styled.div`
//     width: 100%;
//     height: 95vh;
//     display:flex;
//     position: relative;
//     overflow: hidden;
//     background-attachment:fixed ;
//     background-position: 0px 80px;
//     background-size:100% 130%;

//     ${mobile({display: "none"})}
// `

// const Wrapper = styled.div`
//     height: 95vh;
//     display: flex;
//     transition: all 1.5s ease;
//     transform: translateX(${props=> props.slideIndex * -100}vw);
// `

// const Arrow = styled.div`
//     width: 50px;
//     height: 50px;
//     background-color: #fff7f7;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: ${props=> props.direction === "left" && "10px"};
//     right: ${props=> props.direction === "right" && "10px"};
//     margin: auto;
//     cursor: pointer;
//     opacity: 0.5;
//     z-index: 2;
// `
// const Slide = styled.div`
//     width: 100vw;
//     height: 95vh;
//     display: flex;
//     align-items: center;
//     background-color: #${props=>props.bgc};
// `;

// const ImgContainer = styled.div`
//     height: 95vh;
//     width: 100vw;
//     flex: 1;
//     position: absolute;
// `;

// const InfoContainer = styled.div`
//     left:50%;
//     top: 30%;
//     transform: translate(-50%, -50%);
//     position: relative;
//     text-align: center;
//     text-shadow: 0px 0px 2px rgba(2,127,157,1);
// `;

// const Title = styled.h1`
//     font-size: 50px;
//     color: #2b57b8;
// `;

// const Description = styled.p`
//     font-size: 17px;
//     color: #2b57b8;
//     letter-spacing: 3px;
// `;

// const Button = styled.button`
//     padding: 7px;
//     font-size: 20px;
//     background-color: #2b57b8;
//     cursor: pointer;
//     border-radius: 5px;
//     border:none;
//     color: #ffffff;
//     box-shadow: 2px 1px 2px #777777;
// `;

// const Image = styled.img`
//     width: 100vw;
//     object-fit: cover;
// `;

// const Slider = () => {
//     const [slideIndex,setSlideIndex] = useState(0);
//     const handleClick = (direction) => {
//         if(direction === "left"){
//             setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
//         }else if(direction === "left"){
//             setSlideIndex(slideIndex < 2 ? slideIndex-1: 4)
//         }else if(direction === "left"){
//             setSlideIndex(slideIndex < 4 ? slideIndex-1: 6)
//         }else{
//             setSlideIndex(slideIndex < 6 ? slideIndex+1: 0)
//         }
//     }

//     const navigate = useNavigate();

//     const productline = () =>{
//         navigate("/products/1/family%20hospital");
//     }

//   return (
//     <Container>
//         <Arrow direction="left" onClick={()=> handleClick("left")}>
//             <ArrowLeftOutlinedIcon/>
//         </Arrow>
//         <Wrapper slideIndex={slideIndex}>
//             {sliderItems.map((item)=>(
//                 <Slide bgc={item.bg} key={item.id}>
//                     <ImgContainer>
//                     {
//                         item.img.split(".").pop() === "mp4" ? (
//                         <video
//                             playsInline
//                             autoPlay
//                             muted
//                             poster=""
//                             style={{width: '100%'}}
//                             >
//                             <source
//                                 src={item.img}
//                                 type="video/mp4"
//                             />
//                         </video>
//                         ) : (
//                             <Image src={item.img} />
//                         )
//                     }

//                     </ImgContainer>
//                     <InfoContainer>
//                         {
//                             item.img.split(".").pop() !== "mp4" ? (
//                                <div>
//                                 <Title>{item.title}</Title>
//                                 <Description>{item.desc}</Description>
//                                 <Button onClick={productline}>Shop Now</Button>
//                                </div>
//                             ):''
//                         }
//                     </InfoContainer>
//                 </Slide>
//             ))}

//             {/* <Slide bgc="fcf1ed"> */}
//             {/* <InfoContainer>
//                 <Title>Doctor Coats</Title>
//                 <Description>New Arrival Design</Description>
//                 <Button>Shop Now</Button>
//             </InfoContainer>
//             <ImgContainer>
//                 <Image src="http://medicalworldinvpos.kwintechnologykw09.com/files/attachments/slider_photo2.jpg"/>
//             </ImgContainer>

//             </Slide>

//             <Slide bgc="fbf0f4">
//             <ImgContainer>
//                 <Image src="http://medicalworldinvpos.kwintechnologykw09.com/files/attachments/slider_photo3.jpg"/>
//             </ImgContainer>
//             <InfoContainer>
//                 <Title>Surgeon Gowns</Title>
//                 <Description>New Arrival Design</Description>
//                 <Button>Shop Now</Button>
//             </InfoContainer>
//             </Slide> */}

//         </Wrapper>
//         <Arrow direction="right" onClick={()=> handleClick("right")}>
//             <ArrowRightOutlinedIcon/>
//         </Arrow>
//     </Container>
//   )
// }

// export default Slider

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import slider1 from "../slider-images/slider7.jpg";
import slider2 from "../slider-images/slider5.jpg";
import slider3 from "../slider-images/slider6.jpg";


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

const floatBlob = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  ${mobile({ display: "none" })}
`;


// const Blob = styled.div`
//   position: absolute;
//   right: -150px;
//   top: 60px;
//   width: 650px;
//   height: 650px;
//   background: #156ea8;

//   border-radius:
//     55% 45% 60% 40% /
//     60% 40% 60% 40%;

//   animation: ${floatBlob} 7s ease-in-out infinite;
//   z-index: 1;
// `;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
`;

const InfoContainer = styled.div`
  flex: 1;
  animation: ${slideText} 1.2s ease forwards;
`;

const Badge = styled.div`
  display: inline-block;
  padding: 8px 18px;
  border-radius: 30px;
  border: 1px solid #156ea8;
  color: #156ea8;
  margin-bottom: 20px;
  font-weight: 500;
`;

const Title = styled.h1`
  font-size: 56px;
  color: #1c4faa;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 34px;
  color: #1c4faa;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #4b6cb7;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 500px;
`;

const Button = styled.button`
  padding: 14px 30px;
  border-radius: 30px;
  border: 1px solid #156ea8;
  background: transparent;
  color: #156ea8;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #156ea8;
    color: white;
  }
`;


const DotsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? "#156ea8" : "#ccc"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? "#156ea8" : "#999"};
  }
`;

const Arrow = styled.div`
  color: #78a8df;
  border: none;
  font-size: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    transform: translateY(-50%);
  }

  &:disabled:hover {
    transform: translateY(-50%);
  }

  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
`;

const slides = [
  {
    id: 1,
    image: slider1,
    title: "Step into Style:",
    subtitle: "Your Ultimate Fashion Destination",
    description: "Medical World Co., Ltd, founded in 2015, is a manufacturing and distribution company of uniforms and accessories."
  },
  {
    id: 2,
    image: slider2,
    title: "Quality Products:",
    subtitle: "Premium Uniforms & Accessories",
    description: "Discover our extensive collection of high-quality uniforms and accessories designed for comfort and durability."
  },
  {
    id: 3,
    image: slider3,
    title: "Professional Excellence:",
    subtitle: "Trusted by Thousands",
    description: "Join thousands of satisfied customers who rely on our premium products for their professional needs."
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const productline = () => {
    navigate("/products");
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container backgroundImage={slides[currentSlide].image}>
      <Arrow direction="left" onClick={prevSlide}>
        <IoMdArrowDropleftCircle />
      </Arrow>
      
      <Arrow direction="right" onClick={nextSlide}>
        <IoMdArrowDroprightCircle />
      </Arrow>

      <Wrapper>
        <InfoContainer>
          <Title>{slides[currentSlide].title}</Title>
          <Subtitle>{slides[currentSlide].subtitle}</Subtitle>
          <Description>{slides[currentSlide].description}</Description>
          {/* <Button onClick={productline}>Shop Now →</Button> */}
        </InfoContainer>
      </Wrapper>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </Container>
  );
};

export default Slider;
