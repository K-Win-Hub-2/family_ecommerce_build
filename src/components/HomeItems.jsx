// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import { mobile } from "../responsive";
// import axios from 'axios';
// import { useSelector} from 'react-redux'
// import { ArrowLeft, ArrowRight } from 'lucide-react'
// import New from './New';

// const MainContainer = styled.div`
//   align-items: center;
//   justify-content: center;
//   max-width: 100%;
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
//   width: 100%;
//   box-sizing: border-box;
  
//   ${mobile({
//     padding: "0 10px",
//     marginBottom: "10px"
//   })}
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
  
//   ${mobile({
//     width: "32px",
//     height: "32px"
//   })}
// `;

// // const Container = styled.div`
// //   display: flex;
// //   gap: 20px;
// //   padding: 20px;
// //   overflow: hidden;
// //   position: relative;
// //   width: 100%;
// //   box-sizing: border-box;

// //   ${mobile({
// //     padding: "1px",
// //     gap: "3px"
// //   })}
// // `;

// const Container = styled.div`
//   width: 100%;
//   overflow: hidden;
//   position: relative;
//   padding: 20px;
//   box-sizing: border-box;

//   ${mobile({
//     padding: "0",
//     overflow: "hidden"
//   })}
// `;

// const ItemsWrapper = styled.div`
//   display: flex;
//   gap: 20px;
//   transition: transform 0.3s ease;

//   ${mobile({
//     gap: "0px"
//   })}
// `;

// const ItemContainer = styled.div`
//   flex: 0 0 300px;
//   min-width: 300px;

//   ${mobile({
//     flex: "0 0 100%",
//     minWidth: "100%",
//     width: "100%"
//   })}
// `;


// const SectionTitle = styled.h2`
//     font-weight: bold;
//     font-size:30px;
//     // margin-top: 20px;
//     // margin-left: 20px;
//     text-align: center;
//     color: #2b57b8;
//     margin: 0;
    
//     ${mobile({
//       fontSize: "18px"
//     })}
// `

// const NewItems = ({ title, url }) => {

//   const [items, setItems] = useState([]);
//   const url1= useSelector(state => state.user.url);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [containerWidth, setContainerWidth] = useState(300);
//   const containerRef = React.useRef(null);

//   console.log('this is items',items);

//   useEffect(() => {
//     const updateWidth = () => {
//       if (containerRef.current) {
//         setContainerWidth(containerRef.current.offsetWidth);
//       }
//       setIsMobile(window.innerWidth <= 768);
//     };
    
//     updateWidth();
//     window.addEventListener('resize', updateWidth);
//     return () => window.removeEventListener('resize', updateWidth);
//   }, []);

//   const scrollLeft = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const scrollRight = () => {
//     const visibleItems = isMobile ? 1 : 5;
//     if (currentIndex < items.length - visibleItems) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const cardWidth = isMobile ? containerWidth : 320;

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
//               <ArrowLeft size={isMobile ? 16 : 20} />
//             </ArrowButton>
//             <ArrowButton onClick={scrollRight} disabled={currentIndex >= items.length - (isMobile ? 1 : 5)}>
//               <ArrowRight size={isMobile ? 16 : 20} />
//             </ArrowButton>
//           </div>
//         </HeaderContainer>
//         <Container ref={containerRef}>
//           <ItemsWrapper
//   style={{
//     transform: `translateX(-${currentIndex * cardWidth}px)`
//   }}
// >
//             {items.map(item => (
//               <ItemContainer key={item.id}>
//                 <New item={item} title={title} />
//               </ItemContainer>
//             ))
//             }
//           </ItemsWrapper>
//         </Container>
//       </MainContainer>
//     </div>
//   )
// }

// export default NewItems


import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import axios from 'axios';
import { useSelector } from 'react-redux'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Item from './Item';

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

  ${mobile({
    padding: "10px 5px",
    overflow: "hidden"
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
    boxBoxing: "border-box"
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

  useEffect(() => {
    const updateWidth = () => {
      const mobileCheck = window.innerWidth <= 768;
      setIsMobile(mobileCheck);
      if (containerRef.current) {
        // dynamic offset layout logic matching the paddings
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

  // 320 represents original Desktop Card width (300px) + Gap (20px)
  // 15 represents the exact Mobile layout gap
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
        
        <Container ref={containerRef}>
          <ItemsWrapper style={{ transform: `translateX(-${translationOffset}px)` }}>
            {items.map(item => (
              <ItemContainer key={item.id}>
                <Item item={item} title={title} />
              </ItemContainer>
            ))}
          </ItemsWrapper>
        </Container>
      </MainContainer>
    </div>
  )
}

export default NewItems;