// import React from "react";
// import styled from "styled-components";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer"
// import { useDispatch, useSelector } from "react-redux";
// import { removeWishlist } from "../../redux/wishlistRedux";


// const Container = styled.div`
//   margin-top: 80px;
// `;

// const Wrapper = styled.div`
//   width: 1200px;
//   padding: 20px 100px;
//   margin: 0 auto;
// `;

// const Title = styled.h1`
//   text-align: center;
//   margin-bottom: 30px;
//   color: #2f80a5;
// `;

// const SubTitle = styled.div`
//   margin-bottom: 20px;
//   color: gray;
// `;

// const WishlistRow = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px 0;
//   border-bottom: 1px solid #ddd;
// `;

// const Left = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
// `;

// const RemoveIcon = styled.span`
//   font-size: 20px;
//   cursor: pointer;
//   color: gray;
// `;

// const ProductImg = styled.img`
//   width: 80px;
//   height: 80px;
//   object-fit: cover;
// `;

// const ProductDetails = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Price = styled.div`
//   min-width: 120px;
// `;


// const ActionRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   gap: 8px;
// `;

// const SelectBtn = styled.button`
//   background: #2f80a5;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
// `;


// const Wishlist = () => {
//   const wishlist = useSelector((state) => state.wishlist);
//   const url = useSelector((state) => state.user.url);
//   const dispatch = useDispatch();

//   const removeItem = (id) => {
//     dispatch(removeWishlist(id));
//   };

//   return (
//     <Container>
//       <Navbar />

//       <Wrapper>
//         <Title>Wishlist</Title>
//         <SubTitle>My wishlist</SubTitle>

//         {wishlist.products.length === 0 ? (
//           <p>No items in wishlist.</p>
//         ) : (
//           wishlist.products.map((product) => (
//             <WishlistRow key={product.unitid}>

//               <Left>
//                 <RemoveIcon onClick={() => removeItem(product.unitid)}>
//                   ×
//                 </RemoveIcon>

//                 <ProductImg
//                   src={url + `/ecommerce/items/${product.unitimg}`}
//                 />

//                 <ProductDetails>
//                   <div>{product.unitname}</div>
//                 </ProductDetails>
//               </Left>

//               <Price>
//                 Ks {Number(product.price).toLocaleString()}
//               </Price>

//               <ActionRight>
//                 <SelectBtn>Select options</SelectBtn>
//               </ActionRight>

//             </WishlistRow>
//           ))
//         )}
//       </Wrapper>

//       <Footer />
//     </Container>
//   );
// };

// export default Wishlist;


import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlist } from "../../redux/wishlistRedux";

const Container = styled.div`
  margin-top: 80px;
`;

const Wrapper = styled.div`
  width: 1200px;
  padding: 20px 100px;
  margin: 0 auto;
  min-height: 50vh;
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
  font-size: 24px;
  cursor: pointer;
  color: gray;
  transition: color 0.2s ease;
  padding: 0 10px;

  &:hover {
    color: #e54a7c;
  }
`;

const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #eee;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

const ProductMeta = styled.div`
  font-size: 14px;
  color: #777;
  text-transform: capitalize;
`;

const Price = styled.div`
  min-width: 120px;
  font-size: 18px;
  font-weight: 600;
  color: #2f80a5;
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
  font-weight: 500;
  transition: background 0.2s ease;

  &:hover {
    background: #1d5c7a;
  }
`;

const Wishlist = () => {
  const wishlistProducts = useSelector((state) => state.wishlist.products || []);
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

        {wishlistProducts.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "40px", color: "#666" }}>
            No items in wishlist.
          </p>
        ) : (
          wishlistProducts.map((product) => {
            // Cleans up double slash possibilities if unitimg already has a starting slash
            const imagePath = product.unitimg?.startsWith("/") 
              ? `${url}${product.unitimg}` 
              : `${url}/ecommerce/items/${product.unitimg}`;

            return (
              <WishlistRow key={product.unitid}>
                <Left>
                  <RemoveIcon onClick={() => removeItem(product.unitid)}>
                    &times;
                  </RemoveIcon>

                  <ProductImg src={imagePath} alt={product.unitname} />

                  <ProductDetails>
                    <ProductName>{product.unitname}</ProductName>
                    {(product.size || product.color) && (
                      <ProductMeta>
                        {product.color && `Color: ${product.color}`}
                        {product.size && ` | Size: ${product.size}`}
                        {product.fabric && ` | Fabric: ${product.fabric}`}
                      </ProductMeta>
                    )}
                  </ProductDetails>
                </Left>

                <Price>
                  {Number(product.price).toLocaleString()} MMK
                </Price>

                <ActionRight>
                  <Link to={`/product/${product.productId}`}>
                    <SelectBtn>Select options</SelectBtn>
                  </Link>
                </ActionRight>
              </WishlistRow>
            );
          })
        )}
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Wishlist;