import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector} from 'react-redux'
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
    flex: 0 0 48%;
    min-width: 48%;
    padding: 0;
    box-sizing: border-box;
    max-width: 350px;
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
  height: auto;             

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

const ToggleButton = styled.button`
  background: transparent;
  border: 1px solid #2b57b8;
  border-radius: 8px;
  color: #2b57b8;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  padding: 6px 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: #2b57b8;
    color: white;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
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
  justify-content: space-between;
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
  
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Review = () => {

    const [products,setProducts] =  useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(350);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [expandedCards, setExpandedCards] = useState({});
    const feedBoxRef = useRef(null);
    const url= useSelector(state => state.user.url);

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

    const toggleExpand = (id) => {
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const scrollLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const scrollRight = () => {
        const visibleItems = isMobile ? 1 : 4;
        if (currentIndex < products.length - visibleItems) {
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
                        <ArrowLeft size={isMobile ? 16 : 20} />
                    </ArrowButton>
                    <ArrowButton onClick={scrollRight} disabled={currentIndex >= products.length - (isMobile ? 1 : 4)}>
                        <ArrowRight size={isMobile ? 16 : 20} />
                    </ArrowButton>
                </div>
            </HeaderContainer>
            <FeedBox ref={feedBoxRef}>
                <ItemsWrapper style={{ transform: `translateX(-${currentIndex * (isMobile ? containerWidth : 375)}px)` }}>
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

                                <DescriptionContainer>
                                    <DescriptionText>
                                        <div dangerouslySetInnerHTML={{ __html: el.facebook_description }} />
                                    </DescriptionText>
                                </DescriptionContainer>

                                <Footer>
                                    {!isMobile && (
                                        <ToggleButton onClick={() => toggleExpand(el.id)}>
                                            {expandedCards[el.id] ? (
                                                <>
                                                    <ArrowLeft size={16} />
                                                    Less
                                                </>
                                            ) : (
                                                <>
                                                    More
                                                    <ArrowRight size={16} />
                                                </>
                                            )}
                                        </ToggleButton>
                                    )}
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
