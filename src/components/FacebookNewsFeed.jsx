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
    height: auto;
    display: flex;
    padding: 20px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    
    @media (max-width: 768px) {
      padding: 10px;
    }
`

const ItemsWrapper = styled.div`
  display: flex;
  gap: 20px;
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
    flex: 0 0 52%;
    min-width: 52%;
    padding: 0;
    box-sizing: border-box;
  }
`;

const SectionTitle = styled.h2`
    font-weight: bold;
    font-size: 30px;
    margin-left: 10px;
    text-align: left;
    color: #2b57b8;
    
    @media (max-width: 768px) {
        font-size: 22px;
        margin-left: 5px;
    }
`

const Card = styled.div`
  width: 100%;
  border: 2px solid #2b57b8;
  border-radius: 20px;
  background: white;
  overflow: hidden;
  transition: 0.3s;
  height: 500px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 768px) {
    height: 520px;
  }
`;

const CardImage = styled.div`
  max-height: 200px;
  min-height: 200px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    max-height: 180px;
    min-height: 180px;
  }
`;

const CardBody = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CardTitle = styled.h4`
  color: #2b57b8;
  font-weight: bold;
  margin: 0 0 15px 0;
  font-size: 22px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardTextContainer = styled.div`
  font-size: 14px;
  color: #3a3a3a;
  line-height: 1.6;
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding-right: 5px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #2b57b8;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #1e4098;
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CardButton = styled.a`
  background-color: #2b57b8;
  color: #fff;
  border-radius: 20px;
  padding: 10px 25px;
  text-decoration: none;
  display: inline-block;
  font-weight: 500;
  transition: background 0.3s;
  flex-shrink: 0;
  align-self: flex-start;
  
  &:hover {
    background: #1e4098;
  }
  
  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 14px;
  }
`;

const FacebookNewsFeed = () => {
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
        const visibleItems = isMobile ? 1 : 3;
        if (currentIndex < products.length - visibleItems) {
            setCurrentIndex(currentIndex + 1);
        }
    };
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get(url + `/api/facebook`);
          console.log(res.data);
          setProducts(res.data);
        } catch(err) {}
      };
      getProducts();
    }, [url]);

    return (
        <Container>
            <HeaderContainer>
                <SectionTitle>Facebook Newsfeed</SectionTitle>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <ArrowButton onClick={scrollLeft} disabled={currentIndex === 0}>
                        <ArrowLeft size={isMobile ? 16 : 20} />
                    </ArrowButton>
                    <ArrowButton onClick={scrollRight} disabled={currentIndex >= products.length - (isMobile ? 1 : 3)}>
                        <ArrowRight size={isMobile ? 16 : 20} />
                    </ArrowButton>
                </div>
            </HeaderContainer>
            <FeedBox ref={feedBoxRef}>
                <ItemsWrapper style={{ transform: `translateX(-${currentIndex * (isMobile ? containerWidth * 0.92 + 15 : 370)}px)` }}>
                    {
                        products.map((el) => (
                            <ItemContainer key={el.id}>
                                <Card>
                                    <CardImage>
                                        <img src={url + '/facebook_images/' + el.facebook_photo} alt="Facebook post" />
                                    </CardImage>
                                    <CardBody>
                                        <CardTitle>{el.facebook_title}</CardTitle>
                                        <CardTextContainer>
                                            <div dangerouslySetInnerHTML={{ __html: el.facebook_description }} />
                                        </CardTextContainer>
                                        <CardButton href={el.facebook_link} target="_blank" rel="noopener noreferrer">
                                            See In Facebook
                                        </CardButton>
                                    </CardBody>
                                </Card>
                            </ItemContainer>
                        ))
                    }
                </ItemsWrapper>
            </FeedBox>
        </Container>
    )
}

export default FacebookNewsFeed;
