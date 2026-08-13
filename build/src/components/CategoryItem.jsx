import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useSelector} from 'react-redux'

const Container = styled.div`
flex: 1;
margin: 3px;
height: 30vh;
position: relative;

    ${props => props.isLast && `
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #ffffff;
    ${mobile({height: "30vh"})}

    ${props => props.isLast && `
        width: 50%;
        height: 50%;
    `}
`
const CategoryItem = ({item, isLast}) => {
    const url= useSelector(state => state.user.url);
  return (
    <Container isLast={isLast}>
        {/* <Link to={`/products/${item.id}/${item.category_name}`}> */}
        <Image src={url+`/ecommerce/brands/${item.photo_path}`}/>
        {/* <Image src={`http://192.168.1.54:8000/ecommerce/brands/${item.photo_path}`} isLast={isLast}/> */}
        {/* <Image src={`http://localhost:8000/ecommerce/brands/${item.photo_path}`}/>  */}
        {/* <Info>
            <Button>Details</Button>
        </Info> */}
        {/* </Link> */}
    </Container>
  )
}

export default CategoryItem