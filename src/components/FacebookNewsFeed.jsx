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
    height: auto;
    display: flex;
    padding: 20px;
    overflow: hidden;
    position: relative;
`

const ItemsWrapper = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease;
`;

const ItemContainer = styled.div`
  flex: 0 0 500px;
  min-width: 500px;
`;
const SectionTitle = styled.h2`
    font-weight: bold;
    font-size:30px;
    margin-left: 10px;
    text-align: left;
    color: #2b57b8;
`

  

const FacebookNewsFeed = () => {

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
                <SectionTitle>Facebook Newsfeed</SectionTitle>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <ArrowButton onClick={scrollLeft} disabled={currentIndex === 0}>
                        <ArrowLeft size={20} />
                    </ArrowButton>
                    <ArrowButton onClick={scrollRight} disabled={currentIndex === products.length - 3}>
                        <ArrowRight size={20} />
                    </ArrowButton>
                </div>
            </HeaderContainer>
            <FeedBox>
                <ItemsWrapper style={{ transform: `translateX(-${currentIndex * 420}px)` }}>
                    {
                        products.map((el)=>(
                            <ItemContainer key={el.id}>
                                <div className="card" style={{width: '100%',border:'2px solid #2b57b8',borderRadius:"20px"}}>
                                    <div style={{maxHeight: '200px',minHeight: '200px',borderRadius:'20px', overflow: 'hidden'}}>
                                        <img src={url+'/facebook_images/'+el.facebook_photo} class="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body" style={{position: 'relative', minHeight: '230px'}}>
                                        <h4 className="card-title" style={{color:"#2b57b8", fontWeight:"bold"}}>{el.facebook_title}</h4>
                                        <p className="card-text">{el.facebook_description}</p>
                                        <a href={el.facebook_link} className="btn" style={{position: "absolute", bottom: "15px",backgroundColor:"#2b57b8",color:"#fff",borderRadius:"20px"}}>See In Facebook</a>
                                    </div>
                                </div>
                            </ItemContainer>
                        ))
                    }
                </ItemsWrapper>
             
            {/* <div className="card" style={{width: '25%', marginLeft:'20px'}}>
                <div style={{maxHeight: '200px',minHeight: '200px', overflow: 'hidden'}}>
                    <img src={brandedms} class="card-img-top" alt="..."></img>
                </div>
                <div className="card-body" style={{position: 'relative'}}>
                    <h5 className="card-title">Branded Medical Scrub</h5>
                    <p className="card-text">နိုင်ငံတကာအဆင့်မှီ အရည်အသွေးမြင့် Medical Scrub ကို ပြည်တွင်းမှာပဲ အလွယ်တကူ ဝယ်လို့ရနေပါပြီ၊၊</p>
                    <a href="https://www.facebook.com/471460249710870/posts/pfbid02y1XXaJSyf19iFi4UrgaCENjxH2QG1Tb3SJzSyj5rdwzk1DUptfxHpK3ZVue6Y8unl/?mibextid=dDOYBg" className="btn btn-primary" style={{position: "absolute", bottom: "15px"}}>See In Facebook</a>
                </div>
            </div>
            <div className="card" style={{width: '25%', marginLeft:'20px'}}>
                <div style={{maxHeight: '200px',minHeight: '200px', overflow: 'hidden'}}>
                    <img src={wcoat} class="card-img-top" alt="..." style={{minHeight: '200px'}}></img>
                </div>
                <div className="card-body" style={{position: 'relative'}}>
                    <h5 className="card-title">Branded Doctor Coat</h5>
                    <p className="card-text">White Coat ထဲက International Premium Coat ကိုသာ ၀ယ်ယူချင်ပါတယ်ဆိုရင်တော့ Medical_World_Showroom ကို လာရောက်လေ့လာဖို့ ဖိတ်ခေါ်ချင်ပါတယ်၊၊</p>
                    <a href="https://www.facebook.com/471460249710870/posts/pfbid0W8E6o4t7fdJ1J5f8iFHLThe1M2hrnFNyygKuuqKyorTUo8hFR3BR8zG6NnLe4E99l/?mibextid=dDOYBg" className="btn btn-primary" style={{position: "absolute", bottom: "15px"}}>See In Facebook</a>
                </div>
            </div>
            <div className="card" style={{width: '25%', marginLeft:'20px'}}>
                <div style={{maxHeight: '200px',minHeight: '200px', overflow: 'hidden'}}>
                    <img src={shoe} class="card-img-top" alt="..."></img>
                </div>
                <div className="card-body" style={{position: 'relative'}}>
                    <h5 className="card-title">Family Medical Shoes</h5>
                    <p className="card-text"> Family Medical Shoes လေးနဲ့ဆို ခြေလှမ်းတိုင်းကပေါ့ပါးပြီး ကြာလှပါချည်ရဲ့ဆိုတဲ့ ဂျူတီချိန်တောင် ဘယ်လိုကုန်သွားလဲ သိမှာမဟုတ်ဘူးနော်။</p>
                    <a href="https://www.facebook.com/471460249710870/posts/pfbid02eN8R3V4cwWfCXmbuvRHkNrZSi6dyBLNomQqKnGGxrcizK6RkZwYKoBkSG7iQScsCl/?mibextid=dDOYBg" className="btn btn-primary" style={{position: "absolute", bottom: "15px"}}>See In Facebook</a>
                </div>
            </div> */}
            </FeedBox>
        </Container>
    )
}

export default FacebookNewsFeed;