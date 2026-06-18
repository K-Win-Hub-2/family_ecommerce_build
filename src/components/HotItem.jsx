import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

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
  background: #e9eef2;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 10px;
`;

const Content = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    padding: 12px;
    gap: 6px;
  }
`;

const Title = styled.h3`
  color: #0b6fa4;
  font-weight: 700;
  margin: 0;
  font-size: 18px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #0b6fa4;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: gray;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Discount = styled.span`
  background: red;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 8px;
  }
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

const HeartIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    top: 8px;
    right: 8px;
  }
`;

const defaultImageUrl = 'http://familyuniformapp.medicalworld.com.mm/ecommerce/items/default.png';

const HotItem = ({ item, title }) => {
  const url = useSelector(state => state.user.url);

  // 1. Locally access baseline price data from the nested array structure
  const firstUnit = item.counting_units && item.counting_units[0];
  const orderprice = firstUnit ? firstUnit.order_price : null;

  // 2. Compute promotion prices inside memory instead of spamming network APIs
  let promoprice = null;
  if (orderprice && item.discount_price > 0) {
    promoprice = orderprice - (orderprice * (item.discount_price / 100));
  }

  const handleImageError = (event) => {
    event.target.src = defaultImageUrl;
  };

  return (
    <Card>
      <HeartIcon>
        <Discount>
          {item.discount_price > 0 ? `-${item.discount_price}%` : 'Hot Sale'}
        </Discount>
      </HeartIcon>

      <ImageSection>
        <ProductImage
          src={`${url}/ecommerce/items/${item.photo_path}`}
          onError={handleImageError}
          alt={item.item_name}
        />
      </ImageSection>

      <Content>
        <Title>{item.item_name}</Title>
        <Description>{item.description || "No description available."}</Description>

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

export default HotItem;