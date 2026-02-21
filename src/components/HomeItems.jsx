import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import { mobile } from "../responsive";
import axios from 'axios';
import Item from './Item';
import { useSelector} from 'react-redux'

const MainContainer = styled.div`
  align-item: center;
  justify-content: center;
  max-width: 110%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

// const Container = styled.div`
//     display: flex;
//     padding: 20px;
//     justify-content: space-between;
//     ${mobile({ padding: "0px", flexDirection: "column" })}
// `

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;

  ${mobile({
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "10px"
  })}
`;

const SectionTitle = styled.h2`
    font-weight: bold;
    font-size:30px;
    // margin-top: 20px;
    // margin-left: 20px;
    text-align: center;
    color: #2b57b8;
    ${mobile({ fontSize: "14px" })}
`

const HomeItems = ({ title, url }) => {

  const [items, setItems] = useState([]);
  const url1= useSelector(state => state.user.url);

  console.log('this is items',items);

  useEffect(() => {
    const getItems = async () => {
      try {
        // const res = await axios.get("http://localhost:8000/api/" + url,);
        const res = await axios.get(url1+"/api/" + url,);
        setItems(res.data);
        // console.log("res data data is",res.data);
      } catch (err) { }
    };
    getItems();
  },[]);


  return ( 
    <div>
      <MainContainer>
        <SectionTitle>{title}</SectionTitle>
        <Container>
          {items.map(item => (
            <Item item={item} key={item.id} title={title} />
          ))
          }
        </Container>
      </MainContainer>
    </div>
  )
}

export default HomeItems