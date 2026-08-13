import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import {mobile} from "../responsive";
import axios from 'axios';
import { useSelector} from 'react-redux'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    ${mobile({padding: "0px",flexDirection: "column"})}
`

const SectionTitle = styled.span`
    margin-top: 20px;
    font-weight: bold;
    font-size:30px;
    margin-left: 20px;
    text-align: left;
    color: #2b57b8;
    ${mobile({fontSize: "20px"})}
`

const Categories = () => {

  const [categories,setCategories] = useState([]);
  const url= useSelector(state => state.user.url);

  useEffect(()=>{
    const getCategories = async () =>{
      try{
        const res = await axios.get(url+"/api/category_api");
        // const res = await axios.get("http://192.168.1.54:8000/api/category_api");
        console.log(res.data);
        setCategories(res.data);
        
      }catch(err){}
    };
    getCategories();
  },[url]);

  return (
    <MainContainer>
      <SectionTitle>Our Brands</SectionTitle>
      <Container>
          {categories.map((item, index)=>(
              <CategoryItem item={item} key={item.id} isLast={index === categories.length - 1}/>
          ))}
      </Container>
    </MainContainer>
    
  )
}

export default Categories