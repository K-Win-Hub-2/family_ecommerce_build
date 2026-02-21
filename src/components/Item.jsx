import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

// const Info = styled.div`
//     opacity: 0;
//     width: 100%;
//     height:100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: rgba(0,0,0,0.2);
//     z-index: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: all 0.5s ease;
//     cursor: pointer;
// `
// const MainContainer = styled.div`
//     display: flex;
//     flex-direction: column;
// `
// // min-width: 225px;
// const Container = styled.div`
//   background: #eef2f6;
//   border-radius: 16px;
//   padding: 15px;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   position: relative;
//   transition: 0.3s;
//   cursor: pointer;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const ImageWrapper = styled.div`
//   height: 200px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;


// const Circle = styled.div`
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     background-color: white;
//     position: absolute;
//     top: 50px;
// `
// const Image = styled.img`
//     width: 100%;
//     max-height: 300px;
//     z-index:0;
// `
// const Icon = styled.div`
//     width: 40px;
//     height: 40px; 
//     border-radius: 50%;
//     background-color: white;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 10px;
//     transition: all 0.5s ease;

//     &:hover{
//        background-color: #e9f5f5;
//     transform: scale(1.1);
//     }
// `

// // const ProductLineTitle = styled.h2`
// //     font-weight: bold;
// //     font-size:20px;
// //     text-align:center;
// //     padding-top: 10px;
// // `

// const ProductLineTitle = styled.p`
//   font-weight: 500;
//   color: #2b57b8;
//   text-align: left;
//   margin-top: 10px;
// `;
// // const ProductLinePromo = styled.h2`
// //     font-weight: normal;
// //     font-size:20px;
// //     text-align:center;
// // `

// const ProductLinePromo = styled.h2`
//   font-size: 14px;
//   color: #666;
// `;

// const SelectedIcon = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background-color: #6cc04a;
//   padding: 4px;
//   border-radius: 50%;
//   color: #ffff;
//   z-index: 100;
// `;

// const Span = styled.span`
// text-decoration: line-through;
// `

const Card = styled.div`
  background: #f4f6f8;
  border-radius: 20px;
  border: 2px solid #cfd8dc;
  overflow: hidden;
  transition: 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
  }
`;

const ImageSection = styled.div`
  background: #e9eef2;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

const Content = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  color: #0b6fa4;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #0b6fa4;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: gray;
`;

const Discount = styled.span`
  background: red;
  color: white;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 12px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const CartBtn = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 25px;
  border: 2px solid #0b6fa4;
  background: transparent;
  color: #0b6fa4;
  cursor: pointer;
`;

const BuyBtn = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 25px;
  border: none;
  background: #0b6fa4;
  color: white;
  cursor: pointer;
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #7ac943;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Warm = styled.span`
`
const Date = styled.span`
`

const defaultImageUrl = 'http://familyuniformapp.medicalworld.com.mm/ecommerce/items/default.png'; // Update this to your default image path

const Item = ({ item, title }) => {
    const url = useSelector(state => state.user.url);
    const [orderprice, setOrderPrice] = useState();
    const [promoprice, setPromoPrice] = useState();

    useEffect(() => {
        fetchOrderPrice()
    }, []);

    const handleImageError = (event) => {
        event.target.src = defaultImageUrl;
      };

    const fetchOrderPrice = async () => {

        await axios.get(`${url}/api/orderprice_api/${item.id}`)

            .then(res => {
                // alert(res.data.order_price);
                setOrderPrice(res.data.order_price);
            });
    }

    useEffect(() => {
        fetchPromoPrice()
    }, []);

    const fetchPromoPrice = async () => {

        await axios.get(`${url}/api/promoprice_api/${item.id}`)

            .then(res => {
                setPromoPrice(res.data);
                console.log("promoprice data is", promoprice)
            });
    }

    const date = typeof item.arrival_date == 'string' ? item.arrival_date.split('-') : '';
    console.log('arrival date is',date);
    const month = date[0];
    var mon;
    switch (month) {
        case "1":
            mon = "January";
            break;
        case "2":
            mon = "February";
            break;
        case "3":
            mon = "March";
            break;
        case "4":
            mon = "April";
            break;
        case "5":
            mon = "May";
            break;
        case "6":
            mon = "June";
            break;
        case "7":
            mon = "July";
            break;
        case "8":
            mon = "August";
            break;
        case "9":
            mon = "September";
            break;
        case "10":
            mon = "October";
            break;
        case "11":
            mon = "November";
            break;
        case "12":
            mon = "December";
            break;
        default:
            mon = "";
    }

    return (

        // <Container>
        //     <Circle />
        //     <Image src={url + `/ecommerce/items/${item.photo_path}`} onError={handleImageError}
        //     />
        //     <Info>

        //         <Icon>
        //             <ShoppingCartOutlined />
        //         </Icon>

        //         <Icon>
        //             <Link to={`/product/${item.id}`}>
        //                 <SearchOutlined />
        //             </Link>
        //         </Icon>

        //         <Icon>
        //             <FavoriteBorderOutlined />
        //         </Icon>
        //     </Info>

        //     <ProductLineTitle style={{ marginTop: '0px' }}>{item.item_name}&nbsp;
        //         {
        //             title == 'Promotion' ? <Warm style={{ color: 'tomato' }}>({item.discount_price}%)</Warm> : ''
        //         }
        //     </ProductLineTitle>
        //     {/* {
        //         title == 'Promotion' ?
        //             <ProductLinePromo>
                        
        //                 <Span>{orderprice}</Span><small>MMK</small>&nbsp;&nbsp;&nbsp;{promoprice}<small>MMK</small>
            

        //             </ProductLinePromo> : ''
                    
        //     } */}
        //     {
        //         // console.log(item.arrival_date);
        //         title == 'New Arrival' ?
        //             <ProductLinePromo>
        //                 <Date>
        //                     <small>{item.arrival_date}</small>
        //                 </Date>
        //             </ProductLinePromo> : ''
        //     }

        // </Container>
        <Card>

            <HeartIcon>
                <FavoriteBorderIcon />
            </HeartIcon>

            <ImageSection>
                <ProductImage
                src={url + `/ecommerce/items/${item.photo_path}`}
                onError={handleImageError}
                />
            </ImageSection>

            <Content>
                <Title>{item.item_name}</Title>

                <Description>
                {/* Easy to clean–This uniform nurse set dependable,
                fade resistant and washable making it comfortable. */}
                {item.description}
                </Description>

                <PriceRow>
                <Price>${promoprice || orderprice}</Price>

                {promoprice && (
                    <>
                    <OldPrice>${orderprice}</OldPrice>
                    <Discount>-{item.discount_price}%</Discount>
                    </>
                )}
                </PriceRow>

                <ButtonRow>
                <CartBtn>Add to Cart</CartBtn>
                <BuyBtn>Buy Now</BuyBtn>
                </ButtonRow>
            </Content>

        </Card>


    )
}

export default Item