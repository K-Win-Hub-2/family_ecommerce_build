import React  from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ColorNav from './ColorNav';
import Footer from './Footer';
import { useSelector} from 'react-redux'

const Div = styled.div`
    margin-top: 65px;
`
const Wrapper = styled.div`
    widtr: 100vw;
    height: auto;
    min-height: 100vh;
    padding: 50px;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({padding: '50'})}
`
const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
    text-align: center;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({textAlign: "center"})}
`
const Table = styled.table`
    width: 70%;
    height: auto;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    border: 1px solid rgba(2,127,157,1);
    ${mobile({width: "90%"})}
`
const Tr = styled.tr`
    width: 100%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    ${mobile({width: "90%"})}
`
const Th = styled.th`
    text-align: center;
    background-color: rgba(2,127,157,1);
    border: 1px solid rgba(2,127,157,1);
    color: #ffffff;
    padding: 20px;
    ${mobile({width: "90%"})}
`
const Td = styled.td`
    text-align: center;
    border-bottom: 1px solid rgba(2,127,157,1);
    padding: 10px 0px 10px 0px;
    ${mobile({width: "90%"})}
`
const Span = styled.span`
    background-color: rgba(2,127,157,1);
    color: white;
    font-size: 15px;
    font-weight: 600;
    padding: 6px;
    border-radius: 50px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
`
const BigBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-direction: row;
`
const RBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-direction: row;
`
// border-right: 2px solid rgba(0,0,0,0.3);
const LBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-direction: row;
`
const Left = styled.div`
    width: 50%;
    text-align: right;
    padding: 20px;
`
const Right = styled.div`
    width: 50%;
    padding: 20px;
`
const P = styled.p`
    font-size: 18px;
    font-weight: 600;
`

const PreOrderDetail = () => {

    const [ inputs, setInputs ] = useState({});
    const [ oinputs, setOInputs ] = useState([]);
    const [ attachs, setAttachs ] = useState([]);
    const [ecounting, setEcounting] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const url= useSelector(state => state.user.url);
    const username = useSelector(state=>state.user);

    const {id} = useParams();

    useEffect(() => {
        fetchOrderDetail()
    },[]);

    const fetchOrderDetail = async () => {
        await axios.get(url+'/api/ecommerce_preorder_detail/'+id)
        .then(res=>{
            console.log("PreordrData is:",res.data);
            setInputs({
                id: res.data[0].id,
                order_code: res.data[0].order_code,
                order_date: res.data[0].order_date,
                customer_name: res.data[0].customer_name,
                customer_phone: res.data[0].customer_phone,
                deliver_address: res.data[0].deliver_address,
                order_status: res.data[0].order_status,
                order_code: res.data[0].order_code,
                grand_total: res.data[0].grand_total, 
                total_quantity: res.data[0].total_quantity
                

            });
            setOInputs(res.data);
            // setAttachs(res.data.attachs);
            // setEcounting(res.data.units);
            // setColor(res.data.color);
            // setSize(res.data.size);
        });
    }

    return (

        <div>
            <div>
            <ColorNav/>
        </div>
        <Div>
            <Wrapper>
            <Title>Your PreOrders Detail</Title>
            <Description>This is where your preorder list shown</Description>
            <BigBox>
                <LBox>
                    <Left>
                        <P>NO : </P>
                        <P>Customer Name : </P>
                        <P>Order Phone : </P>
                        <P>Order Address : </P>
                        <P>Order Date : </P>
                       
                    </Left>
                    <Right>
                        <P> { inputs.id } </P>
                        <P>
                        {inputs.customer_name !== null ? (
                                <span>{inputs.customer_name}</span>
                            ) : (
                                <span>{username.name}</span>
                            )}
                            
                        </P>
                        <P> { inputs.customer_phone } </P>
                        <P> 
                        {inputs.deliver_address !== null ? (
                                <span>{inputs.deliver_address}</span>
                            ) : (
                                <span>empty</span>
                            )}
                      </P>
                        <P> { inputs.order_date } </P>
                       
                    </Right>
                </LBox>
                <RBox>
                    <Left>
                        <P>Order No : </P>
                        <P>Total Amount : </P>
                        <P>Total Quantity : </P>
                        <P>Order Status :</P>
                    </Left>
                    <Right>
                        <P>{inputs.order_code} </P>
                        <P>
                        {inputs.grand_total !== null ? (
                                <span>{inputs.grand_total}</span>
                            ) : (
                                <span>0</span>
                            )}
                        </P>
                        <P>{inputs.total_quantity} </P>
                        <P>{inputs.order_status} </P>

                        
                    </Right>
                </RBox>
            </BigBox>
            {
                
                <Table>
                <Tr>
                    <Th>No</Th>
                    <Th>Fabric</Th>
                    <Th>Gender</Th>
                    <Th>Color</Th>
                    <Th>Size</Th>
                    <Th>Qty</Th>
                    <Th>Price</Th>
                    <Th>Total Price</Th>
 
                </Tr>
                {
                    // console.log("UUU",oinputs)
                    oinputs && oinputs.length != 0 ?  oinputs.map((oinput, index) => (
    
                        <Tr key={oinput.id}>
                            <Td>{++index}</Td>
                            <Td>{oinput.fabric}</Td>
                            <Td>{oinput.gender}</Td>
                            <Td>{oinput.colour}</Td>
                            <Td>{oinput.size}</Td>
                            <Td>{oinput.quantity}</Td>
                            <Td>{oinput.price}</Td>
                            <Td>{oinput.total_price}</Td>


                        </Tr> 
                    
                    )):""
                }
                
                
            </Table> 
            }
           
        </Wrapper>
        </Div>
        <div>
            <Footer/>
        </div>
        </div>
        

    );

}

export default PreOrderDetail;