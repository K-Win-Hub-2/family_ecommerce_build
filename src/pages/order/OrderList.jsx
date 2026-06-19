// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useSelector } from "react-redux";
// import { MdCheckCircle } from "react-icons/md"; 
// import Footer from "../../components/Footer";
// import Navbar from "../../components/Navbar";
// import Spinner from "../../common/Spinner";
// import axios from "axios";
// import DefaultImg from "../../feedImg/family.jpg";

// // --- RESPONSIVE BREAKPOINTS ---
// const breakpoints = {
//   mobile: "576px",
//   tablet: "768px",
//   laptop: "1024px",
//   desktop: "1200px"
// };

// // --- STYLED COMPONENTS ---
// const Container = styled.div`
//   margin: 10px;
//   @media (min-width: ${breakpoints.tablet}) {
//     margin: 20px;
//   }
// `;

// const HeaderContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 20px 10px 0px 10px;
//   gap: 15px;

//   @media (min-width: ${breakpoints.laptop}) {
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     margin: 20px 20px 0px 20px;
//   }
// `;

// const TitleSection = styled.div`
//   flex: 1;
// `;

// const Title = styled.h2`
//   margin: 0;
//   margin-top: 20px;
//   color: #0b6aa9;
//   font-weight: 700;
//   padding-top: 10px;
//   padding-bottom: 10px;
  
//   @media (min-width: ${breakpoints.laptop}) {
//     margin-top: 80px;
//     padding-top: 25px;
//     padding-bottom: 25px;
//   }
// `;

// const SearchFilterSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   width: 100%;

//   @media (min-width: ${breakpoints.tablet}) {
//     flex-direction: row;
//     align-items: flex-end;
//   }

//   @media (min-width: ${breakpoints.laptop}) {
//     width: auto;
//     margin-top: 80px;
//     padding-top: 25px;
//     padding-bottom: 25px;
//     align-items: flex-end; 
//   }
// `;

// const SearchWrap = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   width: 100%;
//   @media (min-width: ${breakpoints.tablet}) {
//     width: auto;
//   }
// `;

// const Input = styled.input`
//   font-size: 16px;
//   padding: 10px 12px;
//   width: 100%;
//   background: #f1f5f9;
//   border: 1px solid #d7e2ea;
//   outline: none;
//   border-radius: 8px;

//   @media (min-width: ${breakpoints.tablet}) {
//     width: 240px;
//   }
// `;

// const DateFilterContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   width: 100%;
// `;

// const DateInputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   flex: 1;
// `;

// const FilterLabel = styled.span`
//   font-size: 12px;
//   color: #495057;
//   font-weight: 500;
//   margin-bottom: 4px;
// `;

// const DateInput = styled.input`
//   font-size: 14px;
//   padding: 10px 12px;
//   width: 100%;
//   background: #f1f5f9;
//   border: 1px solid #d7e2ea;
//   outline: none;
//   border-radius: 8px;
// `;

// const Btn = styled.button`
//   border-radius: 8px;
//   background: #0b6aa9;
//   border: none;
//   color: white;
//   padding: 12px 20px;
//   font-weight: 600;
//   cursor: pointer;
//   width: 100%;

//   @media (min-width: ${breakpoints.tablet}) {
//     width: auto;
//     height: 42px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const OrdersGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 20px;
//   padding: 10px;
//   justify-items: center;
//   width: 100%;
// `;

// const OrderCard = styled.div`
//   background: #ffffff;
//   border-radius: 20px;
//   border: 1px solid #f1f5f9;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 600px;
// `;

// const CardHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 18px 20px;
//   border-bottom: 1px solid #f1f5f9;
// `;

// const CardTitle = styled.h3`
//   margin: 0;
//   font-size: 16px;
//   font-weight: 600;
//   color: #1e293b;
// `;

// const OrderMetaInfo = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   padding: 20px 20px 10px 20px;
// `;

// const OrderIdText = styled.span`
//   font-size: 18px;
//   font-weight: 700;
//   color: #2563eb;
// `;

// const TagBadge = styled.span`
//   background: #f0fdf4;
//   color: #16a34a;
//   padding: 4px 12px;
//   border-radius: 20px;
//   font-size: 12px;
//   font-weight: 600;
//   text-transform: capitalize;
// `;

// const SubMetaRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 13px;
//   color: #64748b;
//   padding: 0 20px 15px 20px;
// `;

// const ItemListContainer = styled.div`
//   padding: 0 20px;
// `;

// const ItemRow = styled.div`
//   display: flex;
//   gap: 15px;
//   padding: 12px 0;
//   border-bottom: 1px dashed #e2e8f0;
//   align-items: center;
  
//   &:last-child {
//     border-bottom: none;
//   }
// `;

// const ItemImage = styled.img`
//   width: 60px;
//   height: 60px;
//   border-radius: 12px;
//   object-fit: cover;
// `;

// const ItemDetails = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
// `;

// const ItemName = styled.span`
//   font-size: 14px;
//   font-weight: 600;
//   color: #1e293b;
// `;

// const ItemPrice = styled.span`
//   font-size: 15px;
//   font-weight: 700;
//   color: #2563eb;
// `;

// const ItemQty = styled.span`
//   font-size: 13px;
//   color: #64748b;
//   white-space: nowrap;
// `;

// const PricingSummaryContainer = styled.div`
//   background: #f8fafc;
//   border-radius: 12px;
//   padding: 15px;
//   margin: 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin-top: auto; 
// `;

// const SummaryRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 14px;
//   color: ${props => props.isBold ? "#1e293b" : "#64748b"};
//   font-weight: ${props => props.isBold ? "700" : "500"};
// `;

// const PaidBadge = styled.span`
//   background: ${props => props.isPaid ? "#22c55e" : "#ef4444"} ;
//   color: white;
//   font-size: 11px;
//   padding: 2px 8px;
//   border-radius: 6px;
//   font-weight: bold;
//   margin-left: 6px;
//   text-transform: capitalize;
// `;

// const NotesContainer = styled.div`
//   background: #fff5f5;
//   border-left: 4px solid #ef4444;
//   border-radius: 8px;
//   padding: 12px;
//   margin: 0 20px 20px 20px;
// `;

// const NotesTitle = styled.div`
//   font-size: 12px;
//   font-weight: 700;
//   color: #b91c1c;
//   margin-bottom: 4px;
// `;

// const NotesContent = styled.p`
//   margin: 0;
//   font-size: 13px;
//   color: #7f1d1d;
//   line-height: 1.4;
// `;

// const TimelineSection = styled.div`
//   padding: 0 20px 25px 20px;
// `;

// const TimelineTitle = styled.h4`
//   margin: 0 0 15px 0;
//   font-size: 15px;
//   font-weight: 700;
//   color: #1e293b;
// `;

// const TimelineList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   position: relative;
  
//   &::before {
//     content: '';
//     position: absolute;
//     left: 11px;
//     top: 10px;
//     bottom: 10px;
//     width: 2px;
//     background: #e2e8f0;
//   }
// `;

// const TimelineItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
//   padding-left: 30px;
// `;

// const StatusIndicator = styled.div`
//   position: absolute;
//   left: 0;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 2;
//   color: ${props => props.isActive ? "#22c55e" : "#cbd5e1"};
//   background: white;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 24px;
// `;

// const StatusLabel = styled.span`
//   font-size: 14px;
//   font-weight: 600;
//   color: ${props => props.isActive ? "#1e293b" : "#94a3b8"};
// `;

// const StatusTime = styled.span`
//   font-size: 13px;
//   color: #94a3b8;
// `;

// const EmptyText = styled.p`
//   margin: 50px 20px;
//   font-size: 16px;
//   color: #666;
//   text-align: center;
//   grid-column: 1 / -1;
// `;

// // --- MAIN REACT COMPONENT ---
// const OrderList = () => {
//   const url = useSelector((state) => state.user.url);
//   const username = useSelector((state) => state.user);
//   const customer_id = username.id;

//   const formatSize = (size) => {
//     const sizeMap = {
//       'xxl': 'XXL', 'xxlf': 'XXL','xxlm': 'XXL', 'xl': 'XL', 'xlf': 'XL','xlm': 'XXL', 'lg': 'L','lgf': 'L','lgm': 'L',
//       'md': 'M', 'mef': 'M','mem': 'M', 'mdf': 'M','mdm': 'M', 'sm': 'S','smf': 'S','smm': 'S',
//       'xs': 'XS', 'xsf': 'XS','xsm': 'XS', 'xxs': 'XXS'
//     };
//     const lowercaseSize = size ? size.toLowerCase() : '';
//     return sizeMap[lowercaseSize] || size;
//   };

//   const [orders, setOrders] = useState([]);
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       setIsLoading(true);
//       const res = await axios.get(url + '/api/ecommerce_order_index/' + customer_id);
      
//       const instockData = res?.data?.instock || [];
      
//       // Map orders properly matching the exact API structural layout
//       const mappedOrders = instockData.map(orderItem => {
//         return {
//           id: orderItem.id,
//           code: orderItem.order_code || '#UNKNOWN',
//           orderDate: orderItem.order_date,
//           created_at: orderItem.screenshot?.created_at || orderItem.order_date,
//           order_status: orderItem.order_status || 'New Order',
//           discount: '0 MMK', // Not present in provided JSON, defaulting
//           paymentChannel: orderItem.payment_channel || 'N/A',
//           paymentType: orderItem.payment_type || 'N/A',
//           paidFlag: orderItem.paid_flag,
//           remark: orderItem.screenshot?.remark || '', // Pulled from nested screenshot data
//           township: orderItem.township || 'N/A',
//           totalAmount: orderItem.total_amount ? `${orderItem.total_amount} MMK` : '0 MMK',
//           items: (orderItem.items || []).map(prod => ({
//             productName: prod.item_name || 'Order Item',
//             productImage: prod.photo_path || null,
//             size: formatSize(prod.size_name) || '-',
//             quantity: prod.quantity,
//             price: prod.price ? `${prod.price} MMK` : '0 MMK'
//           }))
//         };
//       });

//       // Sort by creation date descending
//       const sortedOrders = mappedOrders.sort(
//         (a, b) => new Date(b.created_at) - new Date(a.created_at)
//       );
      
//       setOrders(sortedOrders);
//       setFilteredOrders(sortedOrders);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       setOrders([]);
//       setFilteredOrders([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const SearchItems = async () => {
//     try {
//       setIsLoading(true);
//       let filtered = [...orders];
      
//       if (search) {
//         filtered = filtered.filter(order => 
//           order.code.toLowerCase().includes(search.toLowerCase()) ||
//           (order.items && order.items.some(item => item.productName.toLowerCase().includes(search.toLowerCase())))
//         );
//       }
      
//       if (startDate || endDate) {
//         filtered = filtered.filter(order => {
//           if (!order.orderDate) return false;
//           const orderDate = new Date(order.orderDate);
//           const start = startDate ? new Date(startDate) : new Date('1900-01-01');
//           const end = endDate ? new Date(endDate) : new Date('2100-12-31');
          
//           start.setHours(0,0,0,0);
//           end.setHours(23,59,59,999);
//           return orderDate >= start && orderDate <= end;
//         });
//       }
//       setFilteredOrders(filtered);
//     } catch (err) {
//       console.log("Error filtering items", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (startDate || endDate) {
//       SearchItems();
//     }
//   }, [startDate, endDate, orders]);

//   return (
//     <div>
//       <Container>
//         <Navbar />
        
//         <HeaderContainer>
//           <TitleSection>
//             <Title>Order List</Title>
//           </TitleSection>
//           <SearchFilterSection>
//             <SearchWrap>
//               <Input
//                 placeholder="Search Items..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </SearchWrap>
//             <DateFilterContainer>
//               <DateInputWrapper>
//                 <FilterLabel>Start date</FilterLabel>
//                 <DateInput
//                   type="date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                 />
//               </DateInputWrapper>
//               <DateInputWrapper>
//                 <FilterLabel>End date</FilterLabel>
//                 <DateInput
//                   type="date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                 />
//               </DateInputWrapper>
//             </DateFilterContainer>
//             <Btn onClick={SearchItems}>Filter</Btn>
//           </SearchFilterSection>
//         </HeaderContainer>

//         {isLoading ? (
//           <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
//             <Spinner />
//           </div>
//         ) : (
//           <OrdersGrid>
//             {(filteredOrders && filteredOrders.length > 0) ? (
//               filteredOrders.map((order) => (
//                 <OrderCard key={order.code}>
//                   <CardHeader>
//                     <CardTitle>Detail Order</CardTitle>
//                   </CardHeader>

//                   <OrderMetaInfo>
//                     <OrderIdText>Order ID {order.code}</OrderIdText>
//                     <TagBadge>{order.order_status}</TagBadge>
//                   </OrderMetaInfo>
                  
//                   <SubMetaRow>
//                     <span>{order.orderDate}</span> 
//                     <span>{order.township}</span>
//                   </SubMetaRow>

//                   <ItemListContainer>
//                     {order.items?.map((item, idx) => (
//                       <ItemRow key={`${item.productName}-${idx}`}>
//                         <ItemImage 
//                           src={item.productImage ? url + '/ecommerce/items/' + item.productImage : DefaultImg} 
//                           alt={item.productName}
//                         />
//                         <ItemDetails>
//                           <ItemName>{item.productName} ({item.size})</ItemName>
//                           <ItemPrice>{item.price}</ItemPrice>
//                         </ItemDetails>
//                         <ItemQty>Qty : {item.quantity} Item</ItemQty>
//                       </ItemRow>
//                     ))}
//                   </ItemListContainer>

//                   <PricingSummaryContainer>
//                     <SummaryRow>
//                       <span>Amount</span>
//                       <span>{order.totalAmount}</span>
//                     </SummaryRow>
//                     <SummaryRow style={{ color: '#ef4444' }}>
//                       <span>Discount</span>
//                       <span>-{order.discount}</span>
//                     </SummaryRow>
//                     <SummaryRow isBold>
//                       <span>Payment Method</span>
//                       <div>
//                         <span style={{ textTransform: 'capitalize' }}>
//                           {order.paymentChannel} ({order.paymentType})
//                         </span>
//                         <PaidBadge isPaid={order.paidFlag === 1}>
//                           {order.paidFlag === 1 ? "Paid" : "Unpaid"}
//                         </PaidBadge>
//                       </div>
//                     </SummaryRow>
//                   </PricingSummaryContainer>

//                   {order.remark && (
//                     <NotesContainer>
//                       <NotesTitle>Notes / Remark</NotesTitle>
//                       <NotesContent>{order.remark}</NotesContent>
//                     </NotesContainer>
//                   )}

//                   <TimelineSection>
//                     <TimelineTitle>Timeline Order</TimelineTitle>
//                     <TimelineList>
//                       <TimelineItem>
//                         <StatusIndicator isActive><MdCheckCircle /></StatusIndicator>
//                         <StatusLabel isActive>Order Placed</StatusLabel>
//                         <StatusTime>Active</StatusTime>
//                       </TimelineItem>
//                       <TimelineItem>
//                         <StatusIndicator isActive={order.order_status === 'received' || order.paidFlag === 1}>
//                           <MdCheckCircle />
//                         </StatusIndicator>
//                         <StatusLabel isActive={order.order_status === 'received' || order.paidFlag === 1}>
//                           Processing / Received
//                         </StatusLabel>
//                         <StatusTime></StatusTime>
//                       </TimelineItem>
//                     </TimelineList>
//                   </TimelineSection>
//                 </OrderCard>
//               ))
//             ) : (
//               <EmptyText>
//                 {search || startDate || endDate 
//                   ? "No orders found matching your filters" 
//                   : "No orders found"}
//               </EmptyText>
//             )}
//           </OrdersGrid>
//         )}
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default OrderList;


import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { MdCheckCircle } from "react-icons/md"; 
import { FaEye, FaTimes } from "react-icons/fa"; // Imported Eye and Close icons
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Spinner from "../../common/Spinner";
import axios from "axios";
import DefaultImg from "../../feedImg/family.jpg";

// --- RESPONSIVE BREAKPOINTS ---
const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px"
};

// --- STYLED COMPONENTS ---
const Container = styled.div`
  margin: 10px;
  @media (min-width: ${breakpoints.tablet}) {
    margin: 20px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px 0px 10px;
  gap: 15px;

  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 20px 0px 20px;
  }
`;

const TitleSection = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin: 0;
  margin-top: 20px;
  color: #0b6aa9;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
  
  @media (min-width: ${breakpoints.laptop}) {
    margin-top: 80px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

const SearchFilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-end;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: auto;
    margin-top: 80px;
    padding-top: 25px;
    padding-bottom: 25px;
    align-items: flex-end; 
  }
`;

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
  }
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px 12px;
  width: 100%;
  background: #f1f5f9;
  border: 1px solid #d7e2ea;
  outline: none;
  border-radius: 8px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 240px;
  }
`;

const DateFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const FilterLabel = styled.span`
  font-size: 12px;
  color: #495057;
  font-weight: 500;
  margin-bottom: 4px;
`;

const DateInput = styled.input`
  font-size: 14px;
  padding: 10px 12px;
  width: 100%;
  background: #f1f5f9;
  border: 1px solid #d7e2ea;
  outline: none;
  border-radius: 8px;
`;

const Btn = styled.button`
  border-radius: 8px;
  background: #0b6aa9;
  border: none;
  color: white;
  padding: 12px 20px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// --- NEW TABLE STYLED COMPONENTS ---
const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const Th = styled.th`
  background-color: #f8fafc;
  color: #475569;
  padding: 16px;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 2px solid #edf2f7;
`;

const Td = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #334155;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: middle;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #0b6aa9;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  
  &:hover {
    color: #2563eb;
  }
`;

// --- MODAL STYLED COMPONENTS ---
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 20px;
  color: #64748b;
  cursor: pointer;
  
  &:hover {
    color: #1e293b;
  }
`;

// --- ORDER CARD CONTAINER (REUSED INSIDE MODAL) ---
const OrderCard = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  border-bottom: 1px solid #f1f5f9;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
`;

const OrderMetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 20px 10px 20px;
`;

const OrderIdText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #2563eb;
`;

const TagBadge = styled.span`
  background: #f0fdf4;
  color: #16a34a;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
`;

const SubMetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #64748b;
  padding: 0 20px 15px 20px;
`;

const ItemListContainer = styled.div`
  padding: 0 20px;
`;

const ItemRow = styled.div`
  display: flex;
  gap: 15px;
  padding: 12px 0;
  border-bottom: 1px dashed #e2e8f0;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ItemName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
`;

const ItemPrice = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #2563eb;
`;

const ItemQty = styled.span`
  font-size: 13px;
  color: #64748b;
  white-space: nowrap;
`;

const PricingSummaryContainer = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto; 
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${props => props.isBold ? "#1e293b" : "#64748b"};
  font-weight: ${props => props.isBold ? "700" : "500"};
`;

const PaidBadge = styled.span`
  background: ${props => props.isPaid ? "#22c55e" : "#ef4444"} ;
  color: white;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: bold;
  margin-left: 6px;
  text-transform: capitalize;
`;

const NotesContainer = styled.div`
  background: #fff5f5;
  border-left: 4px solid #ef4444;
  border-radius: 8px;
  padding: 12px;
  margin: 0 20px 20px 20px;
`;

const NotesTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #b91c1c;
  margin-bottom: 4px;
`;

const NotesContent = styled.p`
  margin: 0;
  font-size: 13px;
  color: #7f1d1d;
  line-height: 1.4;
`;

const TimelineSection = styled.div`
  padding: 0 20px 25px 20px;
`;

const TimelineTitle = styled.h4`
  margin: 0 0 15px 0;
  font-size: 15px;
  font-weight: 700;
  color: #1e293b;
`;

const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 10px;
    bottom: 10px;
    width: 2px;
    background: #e2e8f0;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: 30px;
`;

const StatusIndicator = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: ${props => props.isActive ? "#22c55e" : "#cbd5e1"};
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const StatusLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.isActive ? "#1e293b" : "#94a3b8"};
`;

const StatusTime = styled.span`
  font-size: 13px;
  color: #94a3b8;
`;

const EmptyText = styled.p`
  margin: 50px 20px;
  font-size: 16px;
  color: #666;
  text-align: center;
`;

// --- MAIN REACT COMPONENT ---
const OrderList = () => {
  const url = useSelector((state) => state.user.url);
  const username = useSelector((state) => state.user);
  const customer_id = username.id;

  const formatSize = (size) => {
    const sizeMap = {
      'xxl': 'XXL', 'xxlf': 'XXL','xxlm': 'XXL', 'xl': 'XL', 'xlf': 'XL','xlm': 'XXL', 'lg': 'L','lgf': 'L','lgm': 'L',
      'md': 'M', 'mef': 'M','mem': 'M', 'mdf': 'M','mdm': 'M', 'sm': 'S','smf': 'S','smm': 'S',
      'xs': 'XS', 'xsf': 'XS','xsm': 'XS', 'xxs': 'XXS'
    };
    const lowercaseSize = size ? size.toLowerCase() : '';
    return sizeMap[lowercaseSize] || size;
  };

  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  // --- NEW MODAL STATES ---
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(url + '/api/ecommerce_order_index/' + customer_id);
      
      const instockData = res?.data?.instock || [];
      
      const mappedOrders = instockData.map(orderItem => {
        return {
          id: orderItem.id,
          code: orderItem.order_code || '#UNKNOWN',
          orderDate: orderItem.order_date,
          created_at: orderItem.screenshot?.created_at || orderItem.order_date,
          order_status: orderItem.order_status || 'New Order',
          discount: '0 MMK', 
          paymentChannel: orderItem.payment_channel || 'N/A',
          paymentType: orderItem.payment_type || 'N/A',
          paidFlag: orderItem.paid_flag,
          remark: orderItem.screenshot?.remark || '', 
          township: orderItem.township || 'N/A',
          totalAmount: orderItem.total_amount ? `${orderItem.total_amount} MMK` : '0 MMK',
          items: (orderItem.items || []).map(prod => ({
            productName: prod.item_name || 'Order Item',
            productImage: prod.photo_path || null,
            size: formatSize(prod.size_name) || '-',
            quantity: prod.quantity,
            price: prod.price ? `${prod.price} MMK` : '0 MMK'
          }))
        };
      });

      const sortedOrders = mappedOrders.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      
      setOrders(sortedOrders);
      setFilteredOrders(sortedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setOrders([]);
      setFilteredOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  const SearchItems = async () => {
    try {
      setIsLoading(true);
      let filtered = [...orders];
      
      if (search) {
        filtered = filtered.filter(order => 
          order.code.toLowerCase().includes(search.toLowerCase()) ||
          (order.items && order.items.some(item => item.productName.toLowerCase().includes(search.toLowerCase())))
        );
      }
      
      if (startDate || endDate) {
        filtered = filtered.filter(order => {
          if (!order.orderDate) return false;
          const orderDate = new Date(order.orderDate);
          const start = startDate ? new Date(startDate) : new Date('1900-01-01');
          const end = endDate ? new Date(endDate) : new Date('2100-12-31');
          
          start.setHours(0,0,0,0);
          end.setHours(23,59,59,999);
          return orderDate >= start && orderDate <= end;
        });
      }
      setFilteredOrders(filtered);
    } catch (err) {
      console.log("Error filtering items", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (startDate || endDate) {
      SearchItems();
    }
  }, [startDate, endDate, orders]);

  // --- NEW MODAL CONTROLLERS ---
  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Container>
        <Navbar />
        
        <HeaderContainer>
          <TitleSection>
            <Title>Order List</Title>
          </TitleSection>
          <SearchFilterSection>
            <SearchWrap>
              <Input
                placeholder="Search Items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </SearchWrap>
            <DateFilterContainer>
              <DateInputWrapper>
                <FilterLabel>Start date</FilterLabel>
                <DateInput
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </DateInputWrapper>
              <DateInputWrapper>
                <FilterLabel>End date</FilterLabel>
                <DateInput
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </DateInputWrapper>
            </DateFilterContainer>
            <Btn onClick={SearchItems}>Filter</Btn>
          </SearchFilterSection>
        </HeaderContainer>

        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <Spinner />
          </div>
        ) : (
          <TableWrapper>
            {filteredOrders && filteredOrders.length > 0 ? (
              <Table>
                <thead>
                  <tr>
                    <Th>Order ID</Th>
                    <Th>Date</Th>
                    <Th>Township</Th>
                    <Th>Amount</Th>
                    <Th>Status</Th>
                    <Th style={{ textAlign: 'center' }}>Action</Th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.code}>
                      <Td style={{ fontWeight: '600', color: '#2563eb' }}>{order.code}</Td>
                      <Td>{order.orderDate}</Td>
                      <Td>{order.township}</Td>
                      <Td style={{ fontWeight: '600' }}>{order.totalAmount}</Td>
                      <Td>
                        <TagBadge>{order.order_status}</TagBadge>
                      </Td>
                      <Td>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <ActionButton onClick={() => handleOpenModal(order)} title="View Detail">
                            <FaEye />
                          </ActionButton>
                        </div>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <EmptyText>
                {search || startDate || endDate 
                  ? "No orders found matching your filters" 
                  : "No orders found"}
              </EmptyText>
            )}
          </TableWrapper>
        )}

        {/* --- DYNAMIC MODAL BOX --- */}
        {isModalOpen && selectedOrder && (
          <ModalOverlay onClick={handleCloseModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={handleCloseModal}>
                <FaTimes />
              </CloseButton>
              
              <OrderCard>
                <CardHeader>
                  <CardTitle>Detail Order</CardTitle>
                </CardHeader>

                <OrderMetaInfo>
                  <OrderIdText>Order ID {selectedOrder.code}</OrderIdText>
                  <TagBadge>{selectedOrder.order_status}</TagBadge>
                </OrderMetaInfo>
                
                <SubMetaRow>
                  <span>{selectedOrder.orderDate}</span> 
                  <span>{selectedOrder.township}</span>
                </SubMetaRow>

                <ItemListContainer>
                  {selectedOrder.items?.map((item, idx) => (
                    <ItemRow key={`${item.productName}-${idx}`}>
                      <ItemImage 
                        src={item.productImage ? url + '/ecommerce/items/' + item.productImage : DefaultImg} 
                        alt={item.productName}
                      />
                      <ItemDetails>
                        <ItemName>{item.productName} ({item.size})</ItemName>
                        <ItemPrice>{item.price}</ItemPrice>
                      </ItemDetails>
                      <ItemQty>Qty : {item.quantity} Item</ItemQty>
                    </ItemRow>
                  ))}
                </ItemListContainer>

                <PricingSummaryContainer>
                  <SummaryRow>
                    <span>Amount</span>
                    <span>{selectedOrder.totalAmount}</span>
                  </SummaryRow>
                  <SummaryRow style={{ color: '#ef4444' }}>
                    <span>Discount</span>
                    <span>-{selectedOrder.discount}</span>
                  </SummaryRow>
                  <SummaryRow isBold>
                    <span>Payment Method</span>
                    <div>
                      <span style={{ textTransform: 'capitalize' }}>
                        {selectedOrder.paymentChannel} ({selectedOrder.paymentType})
                      </span>
                      <PaidBadge isPaid={selectedOrder.paidFlag === 1}>
                        {selectedOrder.paidFlag === 1 ? "Paid" : "Unpaid"}
                      </PaidBadge>
                    </div>
                  </SummaryRow>
                </PricingSummaryContainer>

                {selectedOrder.remark && (
                  <NotesContainer>
                    <NotesTitle>Notes / Remark</NotesTitle>
                    <NotesContent>{selectedOrder.remark}</NotesContent>
                  </NotesContainer>
                )}

                <TimelineSection>
                  <TimelineTitle>Timeline Order</TimelineTitle>
                  <TimelineList>
                    <TimelineItem>
                      <StatusIndicator isActive><MdCheckCircle /></StatusIndicator>
                      <StatusLabel isActive>Order Placed</StatusLabel>
                      <StatusTime>Active</StatusTime>
                    </TimelineItem>
                    <TimelineItem>
                      <StatusIndicator isActive={selectedOrder.order_status === 'received' || selectedOrder.paidFlag === 1}>
                        <MdCheckCircle />
                      </StatusIndicator>
                      <StatusLabel isActive={selectedOrder.order_status === 'received' || selectedOrder.paidFlag === 1}>
                        Processing / Received
                      </StatusLabel>
                      <StatusTime></StatusTime>
                    </TimelineItem>
                  </TimelineList>
                </TimelineSection>
              </OrderCard>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default OrderList;