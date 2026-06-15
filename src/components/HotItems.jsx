// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import CategoryItem from './CategoryItem';
// import { mobile } from "../responsive";
// import axios from 'axios';
// import Item from './Item';
// import { useSelector} from 'react-redux'
// import { ArrowLeft, ArrowRight } from 'lucide-react'
// import HotItem from './HotItem';

// const MainContainer = styled.div`
//   align-item: center;
//   justify-content: center;
//   max-width: 110%;
//   display: flex;
//   flex-direction: column;
//   margin-top: 30px;
// `

// // const Container = styled.div`
// //     display: flex;
// //     padding: 20px;
// //     justify-content: space-between;
// //     ${mobile({ padding: "0px", flexDirection: "column" })}
// // `

// const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
//   padding: 0 20px;
// `;

// const ArrowButton = styled.button`
//   background: #2b57b8;
//   border: none;
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   color: white;
//   transition: background 0.3s;

//   &:hover {
//     background: #1e4098;
//   }

//   &:disabled {
//     background: #ccc;
//     cursor: not-allowed;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   gap: 20px;
//   padding: 20px;
//   overflow: hidden;
//   position: relative;

//   ${mobile({
//     padding: "10px"
//   })}
// `;

// const ItemsWrapper = styled.div`
//   display: flex;
//   gap: 20px;
//   transition: transform 0.3s ease;
// `;

// const ItemContainer = styled.div`
//   flex: 0 0 300px;
//   min-width: 300px;

//   ${mobile({
//     flex: "0 0 150px",
//     minWidth: "150px"
//   })}
// `;


// const SectionTitle = styled.h2`
//     font-weight: bold;
//     font-size:30px;
//     // margin-top: 20px;
//     // margin-left: 20px;
//     text-align: center;
//     color: #2b57b8;
//     ${mobile({ fontSize: "14px" })}
// `

// const HotItems = ({ title, url }) => {

//   const [items, setItems] = useState([]);
//   const url1= useSelector(state => state.user.url);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   console.log('this is items',items);

//   const scrollLeft = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const scrollRight = () => {
//     if (currentIndex < items.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   useEffect(() => {
//     const getItems = async () => {
//       try {
//         // const res = await axios.get("http://localhost:8000/api/" + url,);
//         const res = await axios.get(url1+"/api/" + url,);
//         setItems(res.data);
//         // console.log("res data data is",res.data);
//       } catch (err) { }
//     };
//     getItems();
//   },[]);


//   return ( 
//     <div>
//       <MainContainer>
//         <HeaderContainer>
//           <SectionTitle>{title}</SectionTitle>
//           <div style={{ display: 'flex', gap: '10px' }}>
//             <ArrowButton onClick={scrollLeft} disabled={currentIndex === 0}>
//               <ArrowLeft size={20} />
//             </ArrowButton>
//             <ArrowButton onClick={scrollRight} disabled={currentIndex >= items.length - 5}>
//               <ArrowRight size={20} />
//             </ArrowButton>
//           </div>
//         </HeaderContainer>
//         <Container>
//           <ItemsWrapper style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
//             {items.map(item => (
//               <ItemContainer key={item.id}>
//                 <HotItem item={item} title={title} />
//               </ItemContainer>
//             ))
//             }
//           </ItemsWrapper>
//         </Container>
//       </MainContainer>
//     </div>
//   )
// }

// export default HotItems


import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import HotItem from './HotItem'

const MainContainer = styled.div`
  width: 100%;
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

  @media (max-width: 768px) {
    padding: 0 10px;
    margin-bottom: 15px;
  }
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

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 20px;
  overflow: hidden;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const ItemContainer = styled.div`
  flex: 0 0 300px;
  min-width: 300px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    min-width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  color: #2b57b8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const HotItems = ({ title, url }) => {
  const [items, setItems] = useState([]);
  const url1 = useSelector(state => state.user.url);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(300);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobileCheck = window.innerWidth <= 768;
      setIsMobile(mobileCheck);
      if (containerRef.current) {
        // Grab real padding box width to offset the card transition accurately
        setContainerWidth(containerRef.current.clientWidth - (mobileCheck ? 20 : 40));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get(url1 + "/api/" + url);
        setItems(res.data);
      } catch (err) { }
    };
    getItems();
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
        <Container ref={containerRef}>
          <ItemsWrapper 
            style={{ 
              transform: `translateX(-${currentIndex * (isMobile ? (containerWidth + 15) : 320)}px)` 
            }}
          >
            {items.map(item => (
              <ItemContainer key={item.id}>
                <HotItem item={item} title={title} />
              </ItemContainer>
            ))}
          </ItemsWrapper>
        </Container>
      </MainContainer>
    </div>
  )
}

export default HotItems;