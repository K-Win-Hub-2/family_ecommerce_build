// import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import { useSelector } from 'react-redux'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { mobile } from "../responsive";


// const Card = styled.div`
//   background: #fff;
//   border-radius: 20px;
//   border: 2px solid #e0e7ff;
//   overflow: hidden;
//   width: 100%;
//   box-sizing: border-box;
  

//   ${mobile({
//     width: "100%",
//     borderRadius: "12px"
//   })}
// `;

// const ImageSection = styled.div`
//   height: 260px;

//   ${mobile({
//     height: "160px",
//     padding: "10px"
//   })}
// `;

// const ProductImage = styled.img`
//   height: 100%;
//   object-fit: contain;
// `;

// const Content = styled.div`
//   padding: 18px;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
  
//   ${mobile({
//     padding: "10px",
//     gap: "6px"
//   })}
// `;

// const Title = styled.h3`
//   color: #0b6fa4;
//   font-weight: 700;
//   margin: 0;
//   font-size: 16px;
  
//   ${mobile({
//     fontSize: "14px"
//   })}
// `;

// const Description = styled.p`
//   font-size: 14px;
//   color: #6b7280;
//   margin: 0;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
  
//   ${mobile({
//     fontSize: "11px",
//     display: "none"
//   })}
// `;

// const PriceRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
  
//   ${mobile({
//     gap: "6px"
//   })}
// `;

// const Price = styled.span`
//   font-size: 20px;
//   font-weight: bold;
//   color: #0b6fa4;
  
//   ${mobile({
//     fontSize: "16px"
//   })}
// `;

// const OldPrice = styled.span`
//   text-decoration: line-through;
//   color: gray;
// `;

// const Discount = styled.span`
//   background: red;
//   color: white;
//   padding: 5px;
//   border-radius: 20px;
//   font-size: 16px;
// `;

// const ButtonRow = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-top: 10px;
// `;

// const CartBtn = styled.button`
//   flex: 1;
//   padding: 10px;
//   border-radius: 25px;
//   border: 2px solid #0b6fa4;
//   background: transparent;
//   color: #0b6fa4;
//   cursor: pointer;
// `;

// const BuyBtn = styled.button`
//   flex: 1;
//   padding: 12px 20px;
//   border-radius: 8px;
//   border: none;
//   background: #0b6fa4;
//   color: white;
//   cursor: pointer;
//   font-size: 14px;
//   font-weight: 500;
//   width: 100%;
  
//   ${mobile({
//     padding: "10px 16px",
//     fontSize: "13px",
//     borderRadius: "6px"
//   })}
// `;

// const NewBadge = styled.div`
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   background: #ff0000;
//   color: white;
//   padding: 8px 16px;
//   border-radius: 50px;
//   font-size: 16px;
//   font-weight: bold;
//   z-index: 10;
  
//   ${mobile({
//     padding: "6px 12px",
//     fontSize: "14px",
//     top: "12px",
//     right: "12px"
//   })}
// `;

// const Warm = styled.span`
// `
// const Date = styled.span`
// `

// const defaultImageUrl = 'http://familyuniformapp.medicalworld.com.mm/ecommerce/items/default.png'; 

// const New = ({ item, title }) => {
//     const url = useSelector(state => state.user.url);
//     const [orderprice, setOrderPrice] = useState();
//     const [promoprice, setPromoPrice] = useState();

//     useEffect(() => {
//         fetchOrderPrice()
//     }, []);

//     const handleImageError = (event) => {
//         event.target.src = defaultImageUrl;
//       };

//     const fetchOrderPrice = async () => {

//         await axios.get(`${url}/api/orderprice_api/${item.id}`)

//             .then(res => {
//                 // alert(res.data.order_price);
//                 setOrderPrice(res.data.order_price);
//             });
//     }

//     useEffect(() => {
//         fetchPromoPrice()
//     }, []);

//     const fetchPromoPrice = async () => {

//         await axios.get(`${url}/api/promoprice_api/${item.id}`)

//             .then(res => {
//                 setPromoPrice(res.data);
//                 console.log("promoprice data is", promoprice)
//             });
//     }

//     const date = typeof item.arrival_date == 'string' ? item.arrival_date.split('-') : '';
//     console.log('arrival date is',date);
//     const month = date[0];
//     var mon;
//     switch (month) {
//         case "1":
//             mon = "January";
//             break;
//         case "2":
//             mon = "February";
//             break;
//         case "3":
//             mon = "March";
//             break;
//         case "4":
//             mon = "April";
//             break;
//         case "5":
//             mon = "May";
//             break;
//         case "6":
//             mon = "June";
//             break;
//         case "7":
//             mon = "July";
//             break;
//         case "8":
//             mon = "August";
//             break;
//         case "9":
//             mon = "September";
//             break;
//         case "10":
//             mon = "October";
//             break;
//         case "11":
//             mon = "November";
//             break;
//         case "12":
//             mon = "December";
//             break;
//         default:
//             mon = "";
//     }

//     return (
//         <Card>

//             <NewBadge>New</NewBadge>

//             <ImageSection>
//                 <ProductImage
//                 src={url + `/ecommerce/items/${item.photo_path}`}
//                 onError={handleImageError}
//                 />
//             </ImageSection>

//             <Content>
//                 <Title>{item.item_name}</Title>

//                 <PriceRow>
//                 <Price>${promoprice || orderprice}</Price>
//                 </PriceRow>

//                 <ButtonRow>
//                 <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
//                     <BuyBtn style={{ width: '100%' }}>Add to Cart</BuyBtn>
//                 </Link>
//                 </ButtonRow>
//             </Content>

//         </Card>


//     )
// }

// export default New


import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { mobile } from "../responsive";

const Card = styled.div`
  background: #f4f6f8;
  border-radius: 20px;
  border: 2px solid #cfd8dc;
  overflow: hidden;
  transition: 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-6px);
  }
  
  @media (max-width: 768px) {
    border-radius: 16px;
    &:hover {
      transform: none; /* Turn off translation bounce on touch screens */
    }
  }
`;
const ImageSection = styled.div`
  height: 260px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 15px;
  box-sizing: border-box;
`;

const Content = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
  
  ${mobile({
    padding: "12px",
    gap: "6px"
  })}
`;

const Title = styled.h3`
  color: #0b6fa4;
  font-weight: 700;
  margin: 0;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  ${mobile({
    fontSize: "14px"
  })}
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  ${mobile({
    gap: "6px"
  })}
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #0b6fa4;
  
  ${mobile({
    fontSize: "16px"
  })}
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const BuyBtn = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  border: none;
  background: #0b6fa4;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: #08557f;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;


const NewBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #ff0000;
  color: white;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: bold;
  z-index: 5;
  
  ${mobile({
    padding: "4px 10px",
    fontSize: "11px",
    top: "10px",
    right: "10px"
  })}
`;

const defaultImageUrl = 'http://familyuniformapp.medicalworld.com.mm/ecommerce/items/default.png'; 

const New = ({ item, title }) => {
  const url = useSelector(state => state.user.url);
  const [orderprice, setOrderPrice] = useState();
  const [promoprice, setPromoPrice] = useState();

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const orderRes = await axios.get(`${url}/api/orderprice_api/${item.id}`);
        setOrderPrice(orderRes.data.order_price);
      } catch (err) {}

      try {
        const promoRes = await axios.get(`${url}/api/promoprice_api/${item.id}`);
        setPromoPrice(promoRes.data);
      } catch (err) {}
    };

    if (url && item?.id) {
      fetchPrices();
    }
  }, [url, item.id]);

  const handleImageError = (event) => {
    event.target.src = defaultImageUrl;
  };

  return (
    <Card>
      <NewBadge>New</NewBadge>

      <ImageSection>
        <ProductImage
          src={url + `/ecommerce/items/${item.photo_path}`}
          onError={handleImageError}
          alt={item.item_name}
        />
      </ImageSection>

      <Content>
        <Title>{item.item_name}</Title>

        <PriceRow>
          <Price>${promoprice || orderprice || "0.00"}</Price>
        </PriceRow>

        <ButtonRow>
          <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
            <BuyBtn>Add to Cart</BuyBtn>
          </Link>
        </ButtonRow>
      </Content>
    </Card>
  )
}

export default New;