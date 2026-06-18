// // import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
// // import React from 'react'
// // import { Link } from 'react-router-dom'
// // import styled from 'styled-components'
// // import { useSelector} from 'react-redux'

// // const Info = styled.div`
// //     opacity: 0;
// //     width: 100%;
// //     height:100%;
// //     position: absolute;
// //     top: 0;
// //     left: 0;
// //     background-color: rgba(0,0,0,0.2);
// //     z-index: 3;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     transition: all 0.5s ease;
// //     cursor: pointer;
// // `
// // const MainContainer = styled.div`
// //     display: flex;
// //     flex-direction: column;
// // `

// // const Container = styled.div`
// //     flex: 1;
// //     margin: 5px;
// //     width: 360px;
// //     height: 550px;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     background-color: #f5fbfd;
// //     position: relative;

// //     &:hover ${Info}{
// //         opacity: 1;
// //     }
// // `

// // const Circle = styled.div`
// //     width: 200px;
// //     height: 200px;
// //     border-radius: 50%;
// //     background-color: white;
// //     position: absolute;
// // `
// // const Image = styled.img`
// //     width: 100%;
// //     z-index:2;
// //     object-fit:contain;
// // `

// // const Icon = styled.div`
// //     width: 40px;
// //     height: 40px;
// //     border-radius: 50%;
// //     background-color: white;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     margin: 10px;
// //     transition: all 0.5s ease;

// //     &:hover{
// //        background-color: #e9f5f5;
// //     transform: scale(1.1);
// //     }
// // `

// // const ProductLineTitle = styled.h2`
// //     font-weight: bold;
// //     font-size:20px;
// //     margin-left:50px;
// //     position: absolute;
// // bottom: 0;
    
// // `

// // const ItemOne = ({item}) => {
// //     const url= useSelector(state => state.user.url);
// //   return (
// //     <Container>
// //         <Circle/>
// //         <Image src={url+`/ecommerce/items/${item.photo_path}`}/>
// //         <Info>
            
// //             <Icon>
// //                <ShoppingCartOutlined/>          
// //             </Icon>

// //             <Icon>
// //                 <Link to={`/product/${item.id}`}>
// //                     <SearchOutlined/>
// //                 </Link>
                
// //             </Icon>

// //             <Icon>
// //                 <FavoriteBorderOutlined/>
// //             </Icon>
            
// //         </Info>
// //         <ProductLineTitle>{item.item_name}</ProductLineTitle>
// //     </Container>
    
    
// //   )
// // }

// // export default ItemOne


// // import React, { useEffect, useState } from "react";
// // import {
// //   FavoriteBorderOutlined,
// //   SearchOutlined,
// //   ShoppingCartOutlined,
// // } from "@mui/icons-material";
// // import { Link } from "react-router-dom";
// // import styled from "styled-components";
// // import { useSelector } from "react-redux";
// // import axios from "axios";

// // const Card = styled.div`
// //   background: #f4f6f8;
// //   border-radius: 20px;
// //   border: 2px solid #cfd8dc;
// //   overflow: hidden;
// //   transition: 0.3s;
// //   position: relative;
// //   display: flex;
// //   flex-direction: column;
// //   min-height: 100%;

// //   &:hover {
// //     transform: translateY(-6px);
// //   }
// // `;

// // const HeartIcon = styled.div`
// //   position: absolute;
// //   top: 12px;
// //   right: 12px;
// //   background: #7ac943;
// //   width: 38px;
// //   height: 38px;
// //   border-radius: 50%;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   color: white;
// //   z-index: 5;
// // `;

// // const ImageSection = styled.div`
// //   background: #e9eef2;
// //   height: 260px;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   position: relative;
// //   padding: 16px;

// //   &:hover .overlay {
// //     opacity: 1;
// //   }
// // `;

// // const ProductImage = styled.img`
// //   max-width: 100%;
// //   max-height: 100%;
// //   object-fit: contain;
// // `;

// // const Info = styled.div`
// //   opacity: 0;
// //   width: 100%;
// //   height: 100%;
// //   position: absolute;
// //   inset: 0;
// //   background-color: rgba(0, 0, 0, 0.2);
// //   z-index: 3;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   transition: all 0.4s ease;
// //   cursor: pointer;
// // `;

// // const Icon = styled.div`
// //   width: 42px;
// //   height: 42px;
// //   border-radius: 50%;
// //   background-color: white;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   margin: 10px;
// //   transition: all 0.3s ease;
// //   color: #0b6fa4;

// //   &:hover {
// //     background-color: #e9f5f5;
// //     transform: scale(1.1);
// //   }

// //   a {
// //     color: #0b6fa4;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //   }
// // `;

// // const Content = styled.div`
// //   padding: 18px;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 8px;
// //   flex: 1;
// // `;

// // const ProductLineTitle = styled.h3`
// //   color: #0b6fa4;
// //   font-weight: 700;
// //   font-size: 18px;
// //   margin: 0;
// //   text-transform: capitalize;
// // `;

// // const Description = styled.p`
// //   font-size: 14px;
// //   color: #6b7280;
// //   margin: 0;
// //   min-height: 40px;
// // `;

// // const PriceRow = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 10px;
// //   flex-wrap: wrap;
// // `;

// // const Price = styled.span`
// //   font-size: 20px;
// //   font-weight: bold;
// //   color: #0b6fa4;
// // `;

// // const OldPrice = styled.span`
// //   text-decoration: line-through;
// //   color: gray;
// //   font-size: 14px;
// // `;

// // const Discount = styled.span`
// //   background: red;
// //   color: white;
// //   padding: 3px 10px;
// //   border-radius: 20px;
// //   font-size: 12px;
// // `;

// // const ButtonRow = styled.div`
// //   display: flex;
// //   gap: 10px;
// //   margin-top: auto;
// //   padding-top: 12px;
// // `;

// // const CartBtn = styled.button`
// //   flex: 1;
// //   padding: 10px;
// //   border-radius: 25px;
// //   border: 2px solid #0b6fa4;
// //   background: transparent;
// //   color: #0b6fa4;
// //   cursor: pointer;
// //   font-weight: 600;
// // `;

// // const BuyBtn = styled.button`
// //   flex: 1;
// //   padding: 10px;
// //   border-radius: 25px;
// //   border: none;
// //   background: #0b6fa4;
// //   color: white;
// //   cursor: pointer;
// //   font-weight: 600;
// // `;

// // const defaultImageUrl =
// //   "http://familyuniformapp.medicalworld.com.mm/ecommerce/items/default.png";

// // const ItemOne = ({ item }) => {
// //   const url = useSelector((state) => state.user.url);
// //   const [orderprice, setOrderPrice] = useState("");
// //   const [promoprice, setPromoPrice] = useState("");
// //   const hasPromoPrice = Number(promoprice) > 0;
// //   console.log("Promoprice : ",hasPromoPrice);

// //   const handleImageError = (e) => {
// //     e.target.src = defaultImageUrl;
// //   };

// //   useEffect(() => {
// //     fetchOrderPrice();
// //     fetchPromoPrice();
// //   }, [item.id]);

// //   const fetchOrderPrice = async () => {
// //     try {
// //       const res = await axios.get(`${url}/api/orderprice_api/${item.id}`);
// //       setOrderPrice(res.data.order_price);
// //     } catch (err) {
// //       console.log("order price error", err);
// //     }
// //   };

// //   const fetchPromoPrice = async () => {
// //     try {
// //       const res = await axios.get(`${url}/api/promoprice_api/${item.id}`);
// //       setPromoPrice(res.data);
// //     } catch (err) {
// //       console.log("promo price error", err);
// //     }
// //   };

// //   return (
// //     <Card>
// //       <HeartIcon>
// //         <FavoriteBorderOutlined />
// //       </HeartIcon>

// //       <ImageSection>
// //         <ProductImage
// //           src={url + `/ecommerce/items/${item.photo_path}`}
// //           onError={handleImageError}
// //           alt={item.item_name}
// //         />

// //         <Info className="overlay">
// //           <Icon>
// //             <ShoppingCartOutlined />
// //           </Icon>

// //           <Icon>
// //             <Link to={`/product/${item.id}`}>
// //               <SearchOutlined />
// //             </Link>
// //           </Icon>

// //           <Icon>
// //             <FavoriteBorderOutlined />
// //           </Icon>
// //         </Info>
// //       </ImageSection>

// //       <Content>
// //         <ProductLineTitle>{item.item_name}</ProductLineTitle>

// //         {/* <Description>
// //           {item.description || "No description available."}
// //         </Description> */}

// //         <PriceRow>
// //             <Price>{hasPromoPrice ? promoprice : orderprice} MMK</Price>

// //             {hasPromoPrice && (
// //                 <>
// //                 <OldPrice>{orderprice} MMK</OldPrice>
// //                 <Discount>-{item.discount_price || 0}%</Discount>
// //                 </>
// //             )}
// //         </PriceRow>

// //         <ButtonRow>
// //           <CartBtn>Add to Cart</CartBtn>
// //           <BuyBtn>Buy Now</BuyBtn>
// //         </ButtonRow>
// //       </Content>
// //     </Card>
// //   );
// // };

// // export default ItemOne;

// import React, { useEffect, useState } from "react";
// import {
//   FavoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { addWishlist } from "../redux/wishlistRedux";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";


// const Card = styled.div`
//   background: #f4f6f8;
//   border-radius: 20px;
//   border: 2px solid #cfd8dc;
//   overflow: hidden;
//   transition: 0.3s;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   min-height: 100%;

//   &:hover {
//     transform: translateY(-6px);
//   }
// `;

// const Discount = styled.div`
//   position: absolute;
//   top: 12px;
//   right: 12px;
//   background: red;
//   border-radius: 20px;
//   padding: 3px 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   z-index: 5;
// `;

// const ImageSection = styled.div`
//   background: #e9eef2;
//   height: 260px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   padding: 16px;

//   &:hover .overlay {
//     opacity: 1;
//   }
// `;

// const ProductImage = styled.img`
//   max-width: 100%;
//   max-height: 100%;
//   object-fit: contain;
// `;

// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   inset: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.4s ease;
//   cursor: pointer;
// `;

// const Icon = styled.div`
//   width: 42px;
//   height: 42px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   transition: all 0.3s ease;
//   color: #0b6fa4;

//   &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }

//   a {
//     color: #0b6fa4;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const Content = styled.div`
//   padding: 18px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   gap: 8px;
//   flex: 1;
// `;

// const ProductLineTitle = styled.h3`
//   color: #0b6fa4;
//   font-weight: 700;
//   font-size: 18px;
//   margin: 0;
//   text-transform: capitalize;
// `;

// const PriceRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   flex-wrap: wrap;
// `;

// const Price = styled.span`
//   font-size: 20px;
//   font-weight: bold;
//   color: #0b6fa4;
// `;

// const OldPrice = styled.span`
//   text-decoration: line-through;
//   color: gray;
//   font-size: 14px;
// `;

// // const Discount = styled.span`
// //   background: red;
// //   color: white;
// //   padding: 3px 10px;
// //   border-radius: 20px;
// //   font-size: 12px;
// // `;

// const ButtonRow = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-top: auto;
//   padding-top: 12px;
// `;

// const CartBtn = styled.button`
//   flex: 1;
//   padding: 10px;
//   border-radius: 25px;
//   border: 2px solid #0b6fa4;
//   background: transparent;
//   color: #0b6fa4;
//   cursor: pointer;
//   font-weight: 600;
// `;

// const BuyBtn = styled.button`
//   flex: 1;
//   padding: 10px;
//   border-radius: 25px;
//   border: none;
//   background: #0b6fa4;
//   color: white;
//   cursor: pointer;
//   font-weight: 600;
// `;

// const defaultImageUrl =
//   "http://familyuniformapp.medicalworld.com.mm/ecommerce/items/default.png";

// const ItemOne = ({ item }) => {
//   const url = useSelector((state) => state.user.url);

//   const [orderprice, setOrderPrice] = useState(0);
//   const [promoprice, setPromoPrice] = useState(0);

//   const hasDiscount = Number(promoprice) > 0 && Number(promoprice) < Number(orderprice);

//   const handleImageError = (e) => {
//     e.target.src = defaultImageUrl;
//   };

//   useEffect(() => {
//     fetchOrderPrice();
//     fetchPromoPrice();
//   }, [item.id]);

//   const fetchOrderPrice = async () => {
//     try {
//       const res = await axios.get(`${url}/api/orderprice_api/${item.id}`);
//       setOrderPrice(Number(res.data?.order_price) || 0);
//     } catch (err) {
//       console.log("order price error", err);
//       setOrderPrice(0);
//     }
//   };

//   const fetchPromoPrice = async () => {
//     try {
//       const res = await axios.get(`${url}/api/promoprice_api/${item.id}`);
//       setPromoPrice(Number(res.data) || 0);
//     } catch (err) {
//       console.log("promo price error", err);
//       setPromoPrice(0);
//     }
//   };

//   const dispatch = useDispatch();
//   const wishlist = useSelector((state) => state.wishlist.products);

//   const isInWishlist = wishlist.find(
//     (p) => p.unitid === item.unitid
//   );

//   const handleWishlist = () => {
//     dispatch(
//       addWishlist({
//         unitid: item.unitid,
//         unitname: item.unitname,
//         unitimg: item.unitimg,
//         price: item.price,
//       })
//     );
//   };

//   return (
//     <Card>
//       {/* <HeartIcon>
//         <FavoriteBorderOutlined />
//       </HeartIcon> */}
//       {hasDiscount && (
//         <>
//           <Discount>{item.discount_price || 0}%</Discount>
//         </>
//       )}

//       <ImageSection>
//         <ProductImage
//           src={url + `/ecommerce/items/${item.photo_path}`}
//           onError={handleImageError}
//           alt={item.item_name}
//         />

//         <Info className="overlay">
//           {/* <Icon>
//             <ShoppingCartOutlined />
//           </Icon> */}

//           <Icon>
//             <Link to={`/product/${item.id}`}>
//               <SearchOutlined />
//             </Link>
//           </Icon>

//           {/* <Icon onClick={handleWishlist}>
//             {isInWishlist ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
//           </Icon> */}
//         </Info>
//       </ImageSection>

//       <Content>
//         <ProductLineTitle>{item.item_name}</ProductLineTitle>

//         <PriceRow>
//           <Price>{hasDiscount ? promoprice : orderprice} MMK</Price>

//           {hasDiscount && (
//             <>
//               <OldPrice>{orderprice} MMK</OldPrice>
//               <Discount>{item.discount_price || 0}%</Discount>
//             </>
//           )}
//         </PriceRow>

//         {/* <ButtonRow>
//           <CartBtn>Add to Cart</CartBtn>
//           <BuyBtn>Buy Now</BuyBtn>
//         </ButtonRow> */}
//       </Content>
//     </Card>
//   );
// };

// export default ItemOne;


import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addWishlist } from "../redux/wishlistRedux";

const Card = styled.div`
  background: #f4f6f8;
  border-radius: 20px;
  border: 2px solid #cfd8dc;
  overflow: hidden;
  transition: 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Discount = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: red;
  border-radius: 20px;
  padding: 3px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 5;
  font-size: 12px;
  font-weight: bold;
`;

const ImageSection = styled.div`
  background: #e9eef2;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 16px;

  &:hover .overlay {
    opacity: 1;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;
  color: #0b6fa4;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }

  a {
    color: #0b6fa4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Content = styled.div`
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const ProductLineTitle = styled.h3`
  color: #0b6fa4;
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  text-transform: capitalize;
  text-align: center;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #0b6fa4;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: gray;
  font-size: 14px;
`;

const defaultImageUrl =
  "http://familyuniformapp.medicalworld.com.mm/ecommerce/items/default.png";

const ItemOne = ({ item }) => {
  const url = useSelector((state) => state.user.url);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.products);

  // 1. Locally access base price from the array matrix structure
  const firstUnit = item.counting_units && item.counting_units[0];
  const orderprice = firstUnit ? Number(firstUnit.order_price) : 0;
  const discountPercent = Number(item.discount_price) || 0;

  // 2. Compute promotional active values layout flags 
  let promoprice = 0;
  if (orderprice > 0 && discountPercent > 0) {
    promoprice = orderprice - (orderprice * (discountPercent / 100));
  }

  const hasDiscount = promoprice > 0 && promoprice < orderprice;

  const handleImageError = (e) => {
    e.target.src = defaultImageUrl;
  };

  const isInWishlist = wishlist.find((p) => p.unitid === item.unitid);

  const handleWishlist = () => {
    dispatch(
      addWishlist({
        unitid: item.unitid,
        unitname: item.unitname,
        unitimg: item.unitimg,
        price: item.price,
      })
    );
  };

  return (
    <Card>
      {hasDiscount && (
        <Discount>-{discountPercent}%</Discount>
      )}

      <ImageSection>
        <ProductImage
          src={`${url}/ecommerce/items/${item.photo_path}`}
          onError={handleImageError}
          alt={item.item_name}
        />

        <Info className="overlay">
          <Icon>
            <Link to={`/product/${item.id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
        </Info>
      </ImageSection>

      <Content>
        <ProductLineTitle>{item.item_name}</ProductLineTitle>

        <PriceRow>
          <Price>{hasDiscount ? promoprice.toFixed(0) : orderprice.toFixed(0)} MMK</Price>
          {hasDiscount && (
            <OldPrice>{orderprice.toFixed(0)} MMK</OldPrice>
          )}
        </PriceRow>
      </Content>
    </Card>
  );
};

export default ItemOne;