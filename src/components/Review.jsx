import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 40px;
    margin-bottom: 40px;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
    margin-bottom: 15px;
  }
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
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const FeedBox = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 25px;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const ItemContainer = styled.div`
  flex: 0 0 350px;
  min-width: 350px;

  @media (max-width: 992px) {
    flex: 0 0 300px;
    min-width: 300px;
  }

  @media (max-width: 768px) {
    flex: 0 0 73%;
    min-width: 73%;
    padding: 0;
    box-sizing: border-box;
  }
`;

const ReviewCard = styled.div`
  background: #f8f9fa;
  border: 2px solid #2b57b8;
  border-radius: 24px;
  padding: 20px;
  transition: 0.3s;
  display: flex;
  flex-direction: column; 
  align-items: center;
  
  /* Desktop Changes */
  height: 400px; 
  min-height: 400px;            

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 768px) {
    padding: 25px 20px;
    background: #f0f4f8;
    border-radius: 20px;
    border: 2px solid #2b57b8;
    height: 400px;
    min-height: 400px;
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
  border: 3px solid #2b57b8;
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    border-width: 2px;
  }
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
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Role = styled.span`
  font-size: 20px;
  color: #2b57b8;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const DescriptionContainer = styled.div`
  font-size: 14px;
  color: #3a3a3a;
  line-height: 1.6;
  flex: 1;
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  /* Desktop Changes: Restrict height and enable scrolling */
  max-height: 140px;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    font-size: 15px;
    max-height: 300px;
    overflow-y: auto;
  }
`;

const DescriptionText = styled.div`
  overflow: visible;
  display: block;
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const SectionTitle = styled.h2`
    font-weight: bold;
    font-size:30px;
    margin-left: 10px;
    text-align: left;
    color: #2b57b8;
    
    @media (max-width: 768px) {
        font-size: 22px;
        margin-left: 5px;
    }
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  margin-top: 15px; 
  width: 100%;
  gap: 10px;
  
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const ProductLine = styled.a`
  font-size: 20px;
  color: #2b57b8;
  font-weight: 600;
  text-transform: capitalize;
  
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Review = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(350);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const feedBoxRef = useRef(null);
    const url = useSelector(state => state.user.url);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (feedBoxRef.current) {
                const width = feedBoxRef.current.offsetWidth;
                setContainerWidth(width);
            }
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const scrollRight = () => {
        const visibleItems = isMobile ? 1 : 4;
        if (products && currentIndex < products.length - visibleItems) {
            setCurrentIndex(currentIndex + 1);
        }
    };
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get(`${url}/api/customer-reviews`);
          console.log("Customer Reviews Response:", res.data);
          
          // Based on your specific JSON, the array is inside res.data.data
          if (res.data && Array.isArray(res.data.data)) {
            setProducts(res.data.data);
          } else {
            console.error("Could not find array inside payload structure:", res.data);
            setProducts([]); 
          }
        } catch(err) {
          console.error("Error grabbing customer reviews:", err);
          setProducts([]);
        }
      };
      
      if (url) {
        getProducts();
      }
    }, [url]);

    return (
        <Container>
            <HeaderContainer>
                <SectionTitle>Customer Reviews</SectionTitle>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <ArrowButton onClick={scrollLeft} disabled={currentIndex === 0}>
                        <ArrowLeft size={isMobile ? 16 : 20} />
                    </ArrowButton>
                    <ArrowButton 
                        onClick={scrollRight} 
                        disabled={!products || currentIndex >= products.length - (isMobile ? 1 : 4)}
                    >
                        <ArrowRight size={isMobile ? 16 : 20} />
                    </ArrowButton>
                </div>
            </HeaderContainer>
            <FeedBox ref={feedBoxRef}>
                <ItemsWrapper style={{ transform: `translateX(-${currentIndex * (isMobile ? containerWidth : 375)}px)` }}>
                    {Array.isArray(products) && products.map((el) => (
                        <ItemContainer key={el.id}>
                            <ReviewCard>
                                <AvatarContainer>
                                    <Avatar
                                        /* Since photo_url is already a complete absolute URL 
                                          (e.g., http://192.168.100.163:8000/...), we can map it directly!
                                        */
                                        src={el.photo_url || ""}
                                        alt="customer"
                                    />
                                </AvatarContainer>

                                <Header>
                                    <Name>{el.customer_name || "Anonymous"}</Name>
                                    <Role>{el.customer_role || "Customer"}</Role>
                                </Header>

                                <DescriptionContainer>
                                    <DescriptionText>
                                        {/* Renders text string directly or as safe raw HTML safely */}
                                        <div dangerouslySetInnerHTML={{ __html: el.text || "" }} />
                                    </DescriptionText>
                                </DescriptionContainer>

                                <Footer>
                                    <ProductLine>
                                      {el.category?.name?.toLowerCase() === "family hospital" 
                                          ? "Family Hospital Uniform" 
                                          : (el.category?.name || "NICE")
                                      }
                                  </ProductLine>
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