import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import family from '../feedImg/family.jpg'
import brandedms from '../feedImg/brandedms.jpg'
import wcoat from '../feedImg/wcoat.jpg'
import shoe from '../feedImg/shoe.jpg'
import axios from 'axios'
import { DataObjectTwoTone } from '@mui/icons-material'
import { useSelector} from 'react-redux'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Container = styled.div`
    width: 100%;
    height: auto;
    // padding: 20px;
    margin-top: 40px;
    margin-bottom: 40px;`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
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
`;

const FeedBox = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  overflow: hidden;
  position: relative;
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 25px;
  transition: transform 0.3s ease;
`;

const ItemContainer = styled.div`
  flex: 0 0 350px;
  min-width: 350px;

  @media (max-width: 992px) {
    flex: 0 0 300px;
    min-width: 300px;
  }

  @media (max-width: 600px) {
    flex: 0 0 250px;
    min-width: 250px;
  }
`;

const ReviewCard = styled.div`
  background: #eef3f7;
  border: 2px solid #2b57b8;
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s;

  display: flex;
  flex-direction: column; 
  align-items: center;
  height: 100%;             

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 15px;
`;

const Name = styled.h4`
  margin: 0;
  font-size: 25px;
  font-weight: 700;
  color: #2b57b8;
`;

const Role = styled.span`
  font-size: 20px;
  color: #2b57b8;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 14px;
  color: #3a3a3a;
  line-height: 1.6;
  flex: 1;  
`;

const SectionTitle = styled.h2`
    font-weight: bold;
    font-size:30px;
    margin-left: 10px;
    text-align: left;
    color: #2b57b8;
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  margin-top: auto; 
`;

const ProductLine = styled.a`
  font-size: 20px;
  color: #2b57b8;
  font-weight: 500;
`;

  

const Review = () => {

    const [products,setProducts] =  useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const url= useSelector(state => state.user.url);

    const scrollLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const scrollRight = () => {
        if (currentIndex < products.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
  
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
            <HeaderContainer>
                <SectionTitle>Customer Reviews</SectionTitle>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <ArrowButton onClick={scrollLeft} disabled={currentIndex === 0}>
                        <ArrowLeft size={20} />
                    </ArrowButton>
                    <ArrowButton onClick={scrollRight} disabled={currentIndex === products.length - 4}>
                        <ArrowRight size={20} />
                    </ArrowButton>
                </div>
            </HeaderContainer>
            <FeedBox>
                <ItemsWrapper style={{ transform: `translateX(-${currentIndex * 375}px)` }}>
                    {products.map((el) => (
                        <ItemContainer key={el.id}>
                            <ReviewCard>
                                <AvatarContainer>
                                    <Avatar
                                        src={url + "/facebook_images/" + el.facebook_photo}
                                        alt="customer"
                                    />
                                </AvatarContainer>

                                <Header>
                                    <Name>{el.facebook_title}</Name>
                                    <Role>Customer</Role>
                                </Header>

                                <Description>
                                    {el.facebook_description}
                                </Description>

                                <Footer>
                                    <ProductLine>{el.product_line || "NICE"}</ProductLine>
                                </Footer>
                            </ReviewCard>
                        </ItemContainer>
                    ))}
                </ItemsWrapper>
            </FeedBox>
        </Container>
    )
}

export default Review;