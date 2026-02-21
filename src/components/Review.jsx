import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import family from '../feedImg/family.jpg'
import brandedms from '../feedImg/brandedms.jpg'
import wcoat from '../feedImg/wcoat.jpg'
import shoe from '../feedImg/shoe.jpg'
import axios from 'axios'
import { DataObjectTwoTone } from '@mui/icons-material'
import { useSelector} from 'react-redux'

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 40px;`

const FeedBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  padding: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background: #eef3f7;
  border: 2px solid #2b57b8;
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
`;

const Name = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #2b57b8;
`;

// const Role = styled.span`
//   font-size: 13px;
//   color: #2b57b8;
//   font-weight: 600;
// `;

const Description = styled.p`
  font-size: 14px;
  color: #3a3a3a;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
    font-weight: bold;
    font-size:30px;
    // margin-left: 20px;
    text-align: center;
    color: #2b57b8;
`

  

const Review = () => {

    const [products,setProducts] =  useState([]);
    const url= useSelector(state => state.user.url);
  
    useEffect(()=>{
      const getProducts = async () =>{
        try{
          const res = await axios.get(url+`/api/facebook`);
          console.log(res.data);
          setProducts(res.data);
        }catch(err){}
      };
      getProducts();
      
    },[]);

    return (
        <Container>
            <SectionTitle>Customer Reviews</SectionTitle>
            <FeedBox>
            {products.slice(0, 6).map((el) => (
              <ReviewCard key={el.id}>
                
                <Header>
                  <Avatar
                    src={url + "/facebook_images/" + el.facebook_photo}
                    alt="customer"
                  />

                  <div>
                    <Name>{el.facebook_title}</Name>
                    {/* <Role>Customer</Role> */}
                  </div>
                </Header>

                <Description>
                  {el.facebook_description}
                </Description>

              </ReviewCard>
            ))}
          </FeedBox>
        </Container>
    )
}

export default Review;