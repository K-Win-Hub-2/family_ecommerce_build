import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
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
      transform: none;
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
  text-transform: capitalize;
  
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

const OldPrice = styled.span`
  text-decoration: line-through;
  color: gray;
  font-size: 14px;
  
  ${mobile({
    fontSize: "12px"
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

  // 1. Get the baseline price from the first unit array element
  const firstUnit = item.counting_units && item.counting_units[0];
  const orderprice = firstUnit ? firstUnit.order_price : null;

  // 2. Calculate promotional reduction programmatically based on discount_price
  let promoprice = null;
  if (orderprice && item.discount_price > 0) {
    promoprice = orderprice - (orderprice * (item.discount_price / 100));
  }

  const handleImageError = (event) => {
    event.target.src = defaultImageUrl;
  };

  return (
    <Card>
      {/* Renders percentage off if it's a promotional item, otherwise defaults to 'New' label */}
      <NewBadge>
        {item.discount_price > 0 ? `${item.discount_price}%` : 'New'}
      </NewBadge>

      <ImageSection>
        <ProductImage
          src={`${url}/ecommerce/items/${item.photo_path}`}
          onError={handleImageError}
          alt={item.item_name}
        />
      </ImageSection>

      <Content>
        <Title>{item.item_name}</Title>

        <PriceRow>
          <Price>{promoprice || orderprice || "0.00"} MMK</Price>
          {promoprice && orderprice && (
            <OldPrice>{orderprice} MMK</OldPrice>
          )}
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