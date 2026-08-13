
import React  from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ColorNav from './ColorNav';
import Footer from './Footer';
import Invoice from './Invoice';

const Table = styled.table`
    width: 100%;
    height: auto;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    border: 1px solid rgba(2,127,157,1);
`
const Tr = styled.tr`
    width: 100%;
    height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
`
const Th = styled.th`
    background-color: rgba(2,127,157,1);
    border: 1px solid rgba(2,127,157,1);
    color: #ffffff;
    padding: 20px;
    text-align: center;
`
const Td = styled.td`
    text-align: center;
`
const TableButton = styled.button`
    padding: 3px;
    background-color: black;
    color: white;
    font-size: 17px;
    font-weight: 600;
    border-radius: 3px;
    text-align: center;
`
const TableButton1 = styled.button`
    padding: 3px;
    background-color: teal;
    color: white;
    font-size: 17px;
    font-weight: 600;
    border-radius: 3px;
    text-align: center;
    margin-left : 10px;
    border : none;
`

export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
  margin-left: 200px;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "lightgray")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;

const TrackOrderList = () => {

  
    const [lists,setLists] = useState();
  
    const url= useSelector(state => state.user.url);
    const [value,setValue] = useState()
   
  
      const [selectedOption, setSelectedOption] = useState('');

    const handleInputChange = (e) => {
      setValue(e.target.value)
      }   
    const fetchProduct = async (value) => {
      console.log("valueis",value)
        const api = await axios.post(url+"/api/track/order",null,{
          params:{
            ...value
          }
        });
        const data = await api.data.data;
        console.log("data",data)
        setLists(data)
      };
      const handleSubmit = (e) => {
        e.preventDefault();
       
      };
     
      
     
      const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
       
         
      };
      const navigate = useNavigate();
      const orderDetail = (id) =>{
        navigate("/order_detail/"+id);
    }
    const orderInvoice = (id) =>{
      navigate(`/order_invoice/${id}`);
      return <Invoice id={id} />;
  }
    return (
        
        <>
        <ColorNav/> <br /> <br /> <br />
        <div className="flex items-center justify-center my-11">
            <h2 className="font-bold text-[20px] text-center mt-10 text-cus-primary fs-bold text-secondary ">My Track Order List</h2>
        </div>
        <form className="md:flex xl:flex 2xl:flex lg:flex justify-center items-center block"
        onSubmit={handleSubmit}>
          <div className="row col">
            <div className="col-7"></div>
            <div className="col-2">
              
            <select name="searchOption" onChange={(e)=>handleSelectChange(e)}>
              <option value="">Select Search Option</option>
              <option value="customer_name">User Name</option>
              <option value="customer_phone">Customer Phone</option>
              <option value="order_code">Order Code</option>
            </select> <br /> <br />
           
            </div>
           
            <div className="row col">
              <div className="col-6">
              {
           
              <input type="text"
              className="lg:mx-2  mx-1 rounded-md"
              onChange={(e) => {handleInputChange(e)}}

              />
            }
              
           

              </div>
              <div className="col-6">
           <input type="submit" 
                  onClick={() => {
                    let data = {}
                    data[selectedOption] = value
                    fetchProduct(data)
                    }}  
                  value="Search" />
            </div>
            </div>

          </div>
            
        </form>
        <br /> <br /> <br />

        {
                
                <Table>
                <Tr>
                    <Th>No</Th>
                    <Th>Customer</Th>
                    <Th>Phone</Th>
                    <Th>Order Code</Th>
                    <Th>Order Date</Th>
                    <Th>Order Status</Th>
                    <Th>Qty</Th>
                    <Th>Total Price</Th>
                    <Th>Action</Th>
                    
                </Tr>
                
                
                
                {
                     lists && lists.length !== 0 ? lists.map((item, index) => (
                        <Tr key={item.id}>
                            <Td>{++index}</Td>
                            <Td>{item.customer_name} </Td>
                            <Td>{item.customer_phone} </Td>
                            <Td>{item.order_code} </Td>
                            <Td>{item.order_date}</Td>
                            <Td>{item.order_status}</Td>
                            <Td>{item.total_quantity}</Td>
                            <Td>{item.total_amount}</Td>
                            <TableButton onClick={()=>orderDetail(item.id)}>Detail</TableButton>
                            {/* </Link>    */}
                            <TableButton1 onClick={()=>orderInvoice(item.id)}>Invoice</TableButton1>
                        </Tr>
                    )): ""
                }
                
            </Table> 
            }
        <Footer/>
        </>
            
        
    );
}

export default TrackOrderList;