import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import { useDispatch, useSelector } from "react-redux";
import { removeWishlist } from "../../redux/wishlistRedux";


const Container = styled.div`
  margin-top: 80px;
`;

const Wrapper = styled.div`
  width: 1200px;
  padding: 20px 100px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #2f80a5;
`;

const SubTitle = styled.div`
  margin-bottom: 20px;
  color: gray;
`;

const WishlistRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const RemoveIcon = styled.span`
  font-size: 20px;
  cursor: pointer;
  color: gray;
`;

const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.div`
  min-width: 120px;
`;


const ActionRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

const SelectBtn = styled.button`
  background: #2f80a5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;


const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const url = useSelector((state) => state.user.url);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeWishlist(id));
  };

  return (
    <Container>
      <Navbar />

      <Wrapper>
        <Title>Wishlist</Title>
        <SubTitle>My wishlist</SubTitle>

        {wishlist.products.length === 0 ? (
          <p>No items in wishlist.</p>
        ) : (
          wishlist.products.map((product) => (
            <WishlistRow key={product.unitid}>

              <Left>
                <RemoveIcon onClick={() => removeItem(product.unitid)}>
                  ×
                </RemoveIcon>

                <ProductImg
                  src={url + `/ecommerce/items/${product.unitimg}`}
                />

                <ProductDetails>
                  <div>{product.unitname}</div>
                </ProductDetails>
              </Left>

              <Price>
                Ks {Number(product.price).toLocaleString()}
              </Price>

              <ActionRight>
                <SelectBtn>Select options</SelectBtn>
              </ActionRight>

            </WishlistRow>
          ))
        )}
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Wishlist;