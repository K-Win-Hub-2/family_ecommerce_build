import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import axios from 'axios';
import { useSelector } from 'react-redux'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import New from './New';

const MainContainer = styled.div`
  align-items: center;
  justify-content: center;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  box-sizing: border-box;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  
  ${mobile({
    padding: "0 10px",
    marginBottom: "15px"
  })}
`;

const ArrowButton = styled.button`
  background: #2b57b8;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: background 0.3s;

  &:hover {
    background: #1e4098;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  
  ${mobile({
    width: "32px",
    height: "32px"
  })}
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  touch-action: pan-y; /* Permits vertical scrolling but handles swipe horizontally */

  ${mobile({
    padding: "10px 5px"
  })}
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease;

  ${mobile({
    gap: "15px"
  })}
`;

const ItemContainer = styled.div`
  flex: 0 0 300px;
  min-width: 300px;

  ${mobile({
    flex: "0 0 100%",
    minWidth: "100%",
    width: "100%",
    boxSizing: "border-box" /* Fixed typo from boxBoxing */
  })}
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  color: #2b57b8;
  margin: 0;
  
  ${mobile({
    fontSize: "20px"
  })}
`

const NewItems = ({ title, url }) => {
  const [items, setItems] = useState([]);
  const url1 = useSelector(state => state.user.url);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [containerWidth, setContainerWidth] = useState(300);
  const containerRef = useRef(null);

  // Touch States
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const updateWidth = () => {
      const mobileCheck = window.innerWidth <= 768;
      setIsMobile(mobileCheck);
      if (containerRef.current) {
        const paddingOffset = mobileCheck ? 10 : 40;
        setContainerWidth(containerRef.current.offsetWidth - paddingOffset);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    const visibleItems = isMobile ? 1 : 4;
    if (currentIndex < items.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      scrollRight();
    } else if (isRightSwipe) {
      scrollLeft();
    }
  };

  const translationOffset = isMobile 
    ? currentIndex * (containerWidth + 15) 
    : currentIndex * 320;

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get(url1 + "/api/" + url);
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching items:", err);
      }
    };
    if (url1 && url) getItems();
  }, [url1, url]);

  return ( 
    <div>
      <MainContainer>
        <HeaderContainer>
          <SectionTitle>{title}</SectionTitle>
          <div style={{ display: 'flex', gap: '10px' }}>
            <ArrowButton onClick={scrollLeft} disabled={currentIndex === 0}>
              <ArrowLeft size={isMobile ? 16 : 20} />
            </ArrowButton>
            <ArrowButton onClick={scrollRight} disabled={currentIndex >= items.length - (isMobile ? 1 : 4)}>
              <ArrowRight size={isMobile ? 16 : 20} />
            </ArrowButton>
          </div>
        </HeaderContainer>
        
        <Container 
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <ItemsWrapper style={{ transform: `translateX(-${translationOffset}px)` }}>
            {items.map(item => (
              <ItemContainer key={item.id}>
                <New item={item} title={title} />
              </ItemContainer>
            ))}
          </ItemsWrapper>
        </Container>
      </MainContainer>
    </div>
  )
}

export default NewItems;