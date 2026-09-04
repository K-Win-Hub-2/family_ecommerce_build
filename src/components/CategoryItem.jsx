import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to="/products" state={{ category: item }}>
        <Image src={url+`/ecommerce/brands/${item.photo_path}`}/>
        </Link>
    </Container>
  )
}

export default CategoryItem