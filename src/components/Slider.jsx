import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { sliderItems } from "../data";
import slider1 from "../slider-images/banner1.jpg";
import slider2 from "../slider-images/banner2.jpg";
import slider3 from "../slider-images/banner3.jpg";

const DesktopContainer = styled.div`
  width: 100%;
  height: 95vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const MobileContainer = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;
`;

const DesktopWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const DesktopSlide = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
`;

const DesktopInfoContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  text-align: center;
  z-index: 5;
  padding: 0 20px;
`;

const DesktopTitle = styled.h1`
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  margin-bottom: 10px;
`;

const DesktopDescription = styled.p`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  margin-bottom: 20px;
`;

const MobileWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const MobileSlide = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #${props => props.bg};
  position: relative;
  flex-shrink: 0;
`;

const MobileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MobileVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MobileInfoContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  text-align: center;
  z-index: 5;
  padding: 0 15px;
  width: 100%;
`;

const MobileTitle = styled.h1`
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  margin-bottom: 10px;
`;

const MobileSubtitle = styled.p`
  font-size: 18px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  margin-bottom: 10px;
`;

const MobileDescription = styled.p`
  font-size: 14px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  margin-bottom: 20px;
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
  background: ${props => props.active ? "white" : "#ccc"};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  
  &:hover {
    background: ${props => props.active ? "white" : "#999"};
  }
`;

const Arrow = styled.div`
  color: white;
  border: none;
  font-size: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  text-shadow: 0 0 8px rgba(0,0,0,0.5);

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
`;

const MobileDotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;

const MobileDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? "white" : "#ccc"};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  
  &:hover {
    background: ${props => props.active ? "white" : "#999"};
  }
`;

const MobileArrow = styled.div`
  color: white;
  border: none;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  text-shadow: 0 0 8px rgba(0,0,0,0.5);

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
`;

const desktopSlides = [
  {
    id: 1,
    image: slider1,
    title: "Professional Excellence",
    desc: "Trusted by Thousands"
  },
  {
    id: 2,
    image: slider2,
    title: "Quality Products",
    desc: "Premium Uniforms & Accessories"
  },
  {
    id: 3,
    image: slider3,
    title: "Medical Scrubs",
    desc: "New Arrival And Design"
  }
];

const DesktopSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : desktopSlides.length - 1);
    } else {
      setSlideIndex(slideIndex < desktopSlides.length - 1 ? slideIndex + 1 : 0);
    }
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % desktopSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DesktopContainer>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <IoMdArrowDropleftCircle />
      </Arrow>
      
      <DesktopWrapper slideIndex={slideIndex}>
        {desktopSlides.map((item) => (
          <DesktopSlide bgImage={item.image} key={item.id}>
            {/* <DesktopInfoContainer>
              <DesktopTitle>{item.title}</DesktopTitle>
              <DesktopDescription>{item.desc}</DesktopDescription>
            </DesktopInfoContainer> */}
          </DesktopSlide>
        ))}
      </DesktopWrapper>
      
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <IoMdArrowDroprightCircle />
      </Arrow>

      <DotsContainer>
        {desktopSlides.map((_, index) => (
          <Dot
            key={index}
            active={index === slideIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </DesktopContainer>
  );
};

const MobileSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % sliderItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MobileContainer>
      <MobileArrow direction="left" onClick={() => handleClick("left")}>
        <IoMdArrowDropleftCircle />
      </MobileArrow>
      
      <MobileWrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <MobileSlide bg={item.bg} key={item.id}>
            {item.img.split(".").pop() === "mp4" ? (
              <MobileVideo
                playsInline
                autoPlay
                muted
                loop
              >
                <source
                  src={item.img}
                  type="video/mp4"
                />
              </MobileVideo>
            ) : (
              <MobileImage src={item.img} alt={item.title} />
            )}
            {item.img.split(".").pop() !== "mp4" && (
              <MobileInfoContainer>
                <MobileTitle>{item.title}</MobileTitle>
                <MobileSubtitle>{item.subtitle}</MobileSubtitle>
                <MobileDescription>{item.desc}</MobileDescription>
              </MobileInfoContainer>
            )}
          </MobileSlide>
        ))}
      </MobileWrapper>
      
      <MobileArrow direction="right" onClick={() => handleClick("right")}>
        <IoMdArrowDroprightCircle />
      </MobileArrow>

      <MobileDotsContainer>
        {sliderItems.map((_, index) => (
          <MobileDot
            key={index}
            active={index === slideIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </MobileDotsContainer>
    </MobileContainer>
  );
};

const Slider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileSlider /> : <DesktopSlider />;
};

export default Slider;
