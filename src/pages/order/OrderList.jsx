// // // import React, { useState, useEffect } from "react";
// // // import styled from "styled-components";
// // // import { useSelector } from "react-redux";
// // // import { IoMdEye } from "react-icons/io";
// // // import SearchIcon from "@mui/icons-material/Search";
// // // import Footer from "../../components/Footer";
// // // import Navbar from "../../components/Navbar";
// // // import Spinner from "../../common/Spinner";
// // // import axios from "axios";
// // // import DefaultImg from "../../feedImg/family.jpg";

// // // const Container = styled.div`
// // //   margin: 20px;
// // // `;

// // // const Title = styled.h2`
// // //   margin: 20px 20px 20px 0;
// // //   margin-top: 80px;
// // //   color: #0b6aa9;
// // //   font-weight: 700;
// // //   padding-top: 25px;
// // //   padding-bottom: 25px;
// // // `;

// // // const TableContainer = styled.div`
// // //   margin: 0px 20px 20px 20px;
// // //   background: white;
// // //   border-radius: 10px;
// // //   overflow: hidden;
// // //   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// // //   border: 1px solid #2286ba;
// // // `;

// // // const Table = styled.table`
// // //   width: 100%;
// // //   border-collapse: collapse;
// // // `;

// // // const TableHeader = styled.thead`
// // //   background: #f8f9fa;
// // // `;

// // // const TableRow = styled.tr`
// // //   &:nth-child(even) {
// // //     background: #f8f9fa;
// // //   }
// // //   &:hover {
// // //     background: #e9ecef;
// // //   }
// // // `;

// // // const TableHeaderCell = styled.th`
// // //   padding: 15px;
// // //   text-align: left;
// // //   font-weight: 600;
// // //   color: #495057;
// // //   border-bottom: 2px solid #dee2e6;
// // //   font-size: 14px;
// // // `;

// // // const TableCell = styled.td`
// // //   padding: 15px;
// // //   border-bottom: 1px solid #dee2e6;
// // //   font-size: 14px;
// // //   color: #495057;
// // // `;

// // // const ProductImage = styled.img`
// // //   width: 50px;
// // //   height: 50px;
// // //   object-fit: cover;
// // //   border-radius: 8px;
// // //   border: 1px solid #dee2e6;
// // // `;

// // // const ProductName = styled.div`
// // //   font-weight: 500;
// // //   color: #212529;
// // // `;

// // // const Size = styled.div`
// // //   color: #6c757d;
// // // `;

// // // const Quantity = styled.div`
// // //   font-weight: 500;
// // // `;

// // // const Price = styled.div`
// // //   font-weight: 600;
// // //   color: #0b6aa9;
// // // `;

// // // const Status = styled.button`
// // //   color: white;
// // //   background: #0b6aa9;
// // //   border: none;
// // //   padding: 5px 10px;
// // //   border-radius: 4px;
// // //   font-size: 14px;
// // //   cursor: pointer;
// // //   text-transform: capitalize;
// // // `;

// // // const ActionButton = styled.button`
// // //   background: none;
// // //   border: none;
// // //   cursor: pointer;
// // //   color: #0b6aa9;
// // //   font-size: 18px;
// // //   padding: 5px;
// // //   border-radius: 4px;
// // //   transition: all 0.3s ease;

// // //   &:hover {
// // //     background: #e3f2fd;
// // //     transform: scale(1.1);
// // //   }
// // // `;

// // // const EmptyText = styled.p`
// // //   margin: 30px 20px;
// // //   font-size: 18px;
// // //   color: #666;
// // //   text-align: center;
// // // `;

// // // const ModalOverlay = styled.div`
// // //   position: fixed;
// // //   top: 0;
// // //   left: 0;
// // //   width: 100%;
// // //   height: 100%;
// // //   background: rgba(0, 0, 0, 0.5);
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   z-index: 999;
// // // `;

// // // const ModalContent = styled.div`
// // //   background: #f3f3f3;
// // //   border-radius: 15px;
// // //   padding: 30px;
// // //   width: 80%;
// // //   max-width: 800px;
// // //   position: relative;
// // // `;

// // // const CloseBtn = styled.button`
// // //   position: absolute;
// // //   top: 10px;
// // //   right: 15px;
// // //   border: none;
// // //   background: none;
// // //   font-size: 20px;
// // //   cursor: pointer;
// // // `;

// // // const ModalTitle = styled.h2`
// // //   text-align: center;
// // //   color: #0b6aa9;
// // //   margin-bottom: 40px;
// // // `;

// // // const ModalBody = styled.div`
// // //   display: flex;
// // //   gap: 30px;
// // // `;

// // // const ModalImage = styled.img`
// // //   width: 200px;
// // //   height: 200px;
// // //   object-fit: cover;
// // //   border-radius: 12px;
// // //   border: 2px solid #0b6aa9;
// // // `;

// // // const ModalDetails = styled.div`
// // //   color: #0b6aa9;
// // //   line-height: 1.8;
// // //   width: 100%;
// // // `;

// // // const HeaderContainer = styled.div`
// // //   display: flex;
// // //   justify-content: space-between;
// // //   align-items: center;
// // //   margin: 20px 20px 0px 20px;
// // // `;

// // // const TitleSection = styled.div`
// // //   flex: 1;
// // // `;

// // // const SearchFilterSection = styled.div`
// // //   display: flex;
// // //   gap: 15px;
// // //   margin: 20px 20px 20px 0;
// // //   margin-top: 80px;
// // //   color: #0b6aa9;
// // //   font-weight: 700;
// // //   padding-top: 25px;
// // //   padding-bottom: 25px;
// // //   align-items: center;
// // // `;

// // // const SearchInput = styled.input`
// // //   padding: 8px 12px;
// // //   border: 1px solid #ced4da;
// // //   border-radius: 6px;
// // //   font-size: 14px;
// // //   outline: none;
// // //   width: 250px;
// // //   transition: border-color 0.3s ease;

// // //   &:focus {
// // //     border-color: #0b6aa9;
// // //     box-shadow: 0 0 0 2px rgba(11, 106, 169, 0.1);
// // //   }
// // // `;

// // // const DateFilterContainer = styled.div`
// // //   display: flex;
// // //   align-items: center;
// // //   gap: 15px;
// // //   margin-bottom: 20px;
// // // `;

// // // const DateInputWrapper = styled.div`
// // //   display: flex;
// // //   flex-direction: column;
// // //   align-items: flex-start;
// // // `;

// // // const DateInput = styled.input`
// // //   font-size: 16px;
// // //   padding: 10px 12px;
// // //   width: 150px;
// // //   background: #f1f5f9;
// // //   border: 1px solid #d7e2ea;
// // //   outline: none;
// // //   border-radius: 8px;

// // //   ::placeholder {
// // //     color: #7d8b99;
// // //   }
// // // `;

// // // const FilterButton = styled.button`
// // //   padding: 8px 16px;
// // //   background: #0b6aa9;
// // //   color: white;
// // //   border: none;
// // //   border-radius: 6px;
// // //   font-size: 14px;
// // //   font-weight: 500;
// // //   cursor: pointer;
// // //   transition: background-color 0.3s ease;

// // //   &:hover {
// // //     background: #095a8f;
// // //   }
// // // `;

// // // const FilterLabel = styled.span`
// // //   font-size: 14px;
// // //   color: #495057;
// // //   font-weight: 500;
// // // `;

// // // const SearchWrap = styled.div`
// // //   display: flex;
// // //   align-items: center;
// // //   gap: 8px;
// // // `;

// // // const Input = styled.input`
// // //   font-size: 16px;
// // //   padding: 10px 12px;
// // //   width: 280px;
// // //   background: #f1f5f9;
// // //   border: 1px solid #d7e2ea;
// // //   outline: none;
// // //   border-radius: 8px;

// // //   ::placeholder {
// // //     color: #7d8b99;
// // //   }
// // // `;

// // // const Btn = styled.button`
// // //   border-radius: 8px;
// // //   background: #0b6aa9;
// // //   border: none;
// // //   color: white;
// // //   padding: 10px 14px;
// // //   cursor: pointer;
// // // `;

// // // const OrderList = () => {
// // //   const url = useSelector((state) => state.user.url);
// // //   const username = useSelector((state) => state.user);
// // //   const customer_id = username.id;

// // //   const formatSize = (size) => {
// // //     const sizeMap = {
// // //       'xxl': 'XXL',
// // //       'xxlf': 'XXL',
// // //       'xl': 'XL',
// // //       'lg': 'L',
// // //       'md': 'M',
// // //       'mef': 'M',
// // //       'mdf': 'M',
// // //       'sm': 'S',
// // //       'xs': 'XS',
// // //       'xxs': 'XXS'
// // //     };
    
// // //     const lowercaseSize = size ? size.toLowerCase() : '';
// // //     return sizeMap[lowercaseSize] || size;
// // //   };
// // //   const [orders, setOrders] = useState([]);
// // //   const [filteredOrders, setFilteredOrders] = useState([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [selectedOrder, setSelectedOrder] = useState(null);
// // //   const [search, setSearch] = useState("");
// // //   const [startDate, setStartDate] = useState("");
// // //   const [endDate, setEndDate] = useState("");

// // //   useEffect(() => {
// // //     fetchOrders();
// // //   }, []);

// // //   const fetchOrders = async () => {
// // //     try {
// // //       setIsLoading(true);
      
// // //       await axios.get(url + '/api/ecommerce_order_index/' + customer_id)
// // //         .then(res => {
// // //           const sortedOrders = res.data.instock.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          
// // //           // Transform the API data to match the component's expected format
// // //           const transformedOrders = sortedOrders.map(order => ({
// // //             id: order.id,
// // //             code: order.order_code,
// // //             orderDate: order.order_date,
// // //             productImage: order.photo_path || null,
// // //             productName: order.item_name || 'Order',
// // //             size: formatSize(order.size_name) || '-',
// // //             quantity: order.total_quantity,
// // //             price: order.total_amount ? `${order.total_amount} MMK` : '0 MMK',
// // //             order_status: order.order_status || '-',
// // //             originalData: order
// // //           }));
          
// // //           setOrders(transformedOrders);
// // //           setFilteredOrders(transformedOrders);
// // //         })
// // //         .catch(error => {
// // //           console.error('Error fetching orders:', error);
// // //           // Set empty arrays on error
// // //           setOrders([]);
// // //           setFilteredOrders([]);
// // //         });
// // //     } catch (err) {
// // //       console.log("Error fetching orders:", err);
// // //       setOrders([]);
// // //       setFilteredOrders([]);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleViewOrder = (order) => {
// // //     setSelectedOrder(order);
// // //   };

// // //   const SearchItems = async () => {
// // //     try {
// // //       setIsLoading(true);
      
// // //       let filtered = [...orders];
      
// // //       if (search) {
// // //         filtered = filtered.filter(order => 
// // //           order.code.toLowerCase().includes(search.toLowerCase()) ||
// // //           order.productName.toLowerCase().includes(search.toLowerCase())
// // //         );
// // //       }
      
// // //       if (startDate || endDate) {
// // //         filtered = filtered.filter(order => {
// // //           const orderDate = new Date(order.orderDate.split('.').reverse().join('-')); // Convert DD.MM.YYYY to YYYY-MM-DD
// // //           const start = startDate ? new Date(startDate) : new Date('1900-01-01');
// // //           const end = endDate ? new Date(endDate) : new Date('2100-12-31');
// // //           return orderDate >= start && orderDate <= end;
// // //         });
// // //       }
      
// // //       setFilteredOrders(filtered);
// // //     } catch (err) {
// // //       console.log("error");
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (startDate || endDate) {
// // //       SearchItems();
// // //     }
// // //   }, [startDate, endDate, orders]);

// // //   return (
// // //     <div>
// // //       <Container>
// // //         <Navbar />
        
// // //         <HeaderContainer>
// // //           <TitleSection>
// // //             <Title>Order List</Title>
// // //           </TitleSection>
// // //           <SearchFilterSection>
// // //             <SearchWrap>
// // //               <Input
// // //                 placeholder="Search Items..."
// // //                 value={search}
// // //                 onChange={(e) => setSearch(e.target.value)}
// // //               />
// // //             </SearchWrap>
// // //             <DateFilterContainer>
// // //               <DateInputWrapper>
// // //                 <FilterLabel>Start date</FilterLabel>
// // //                 <DateInput
// // //                   type="date"
// // //                   placeholder="Start date"
// // //                   value={startDate}
// // //                   onChange={(e) => setStartDate(e.target.value)}
// // //                 />
// // //               </DateInputWrapper>
// // //               <DateInputWrapper>
// // //                 <FilterLabel>End date</FilterLabel>
// // //                 <DateInput
// // //                   type="date"
// // //                   placeholder="End date"
// // //                   value={endDate}
// // //                   onChange={(e) => setEndDate(e.target.value)}
// // //                 />
// // //               </DateInputWrapper>
// // //             </DateFilterContainer>
// // //             {/* <FilterButton onClick={SearchItems}>
// // //               Filter
// // //             </FilterButton> */}
// // //             <Btn onClick={SearchItems}>
// // //                Filter
// // //             </Btn>
// // //           </SearchFilterSection>
// // //         </HeaderContainer>

// // //         <TableContainer>
// // //           {isLoading ? (
// // //             <Spinner />
// // //           ) : filteredOrders.length > 0 ? (
// // //             <Table>
// // //               <TableHeader>
// // //                 <TableRow>
// // //                   {/* <TableHeaderCell>Code</TableHeaderCell> */}
// // //                   <TableHeaderCell>Order Date</TableHeaderCell>
// // //                   <TableHeaderCell>Product Image</TableHeaderCell>
// // //                   <TableHeaderCell>Product Name</TableHeaderCell>
// // //                   <TableHeaderCell>Size</TableHeaderCell>
// // //                   <TableHeaderCell>Quantity</TableHeaderCell>
// // //                   <TableHeaderCell>Price</TableHeaderCell>
// // //                   <TableHeaderCell>Status</TableHeaderCell>
// // //                   <TableHeaderCell>Action</TableHeaderCell>
// // //                 </TableRow>
// // //               </TableHeader>
// // //               <tbody>
// // //                 {filteredOrders.map((order) => (
// // //                   <TableRow key={order.id}>
// // //                     {/* <TableCell>{order.code}</TableCell> */}
// // //                     <TableCell>{order.orderDate}</TableCell>
// // //                     <TableCell>
// // //                       <ProductImage 
// // //                         src={order.productImage ? url + '/ecommerce/items/' + order.productImage : DefaultImg} 
// // //                         alt={order.productName}
// // //                       />
// // //                     </TableCell>
// // //                     <TableCell>
// // //                       <ProductName>{order.productName}</ProductName>
// // //                     </TableCell>
// // //                     <TableCell>
// // //                       <Size>{order.size}</Size>
// // //                     </TableCell>
// // //                     <TableCell>
// // //                       <Quantity>{order.quantity}</Quantity>
// // //                     </TableCell>
// // //                     <TableCell>
// // //                       <Price>{order.price}</Price>
// // //                     </TableCell>
// // //                     <TableCell>
// // //                       <Status>{order.order_status}</Status>
// // //                     </TableCell>
// // //                     <TableCell>
// // //                       <ActionButton onClick={() => handleViewOrder(order)}>
// // //                         <IoMdEye />
// // //                       </ActionButton>
// // //                     </TableCell>
// // //                   </TableRow>
// // //                 ))}
// // //               </tbody>
// // //             </Table>
// // //           ) : (
// // //             <EmptyText>
// // //               {search || startDate || endDate 
// // //                 ? "No orders found matching your filters" 
// // //                 : "No orders found"}
// // //             </EmptyText>
// // //           )}
// // //         </TableContainer>
// // //       </Container>
// // //       {selectedOrder && (
// // //         <ModalOverlay onClick={() => setSelectedOrder(null)}>
// // //           <ModalContent onClick={(e) => e.stopPropagation()}>
// // //             <CloseBtn onClick={() => setSelectedOrder(null)}>✖</CloseBtn>

// // //             <ModalTitle>Product Order Details</ModalTitle>

// // //             <ModalBody>
// // //               <ModalImage
// // //                 src={selectedOrder.productImage ? url + '/ecommerce/items/' + selectedOrder.productImage : DefaultImg}
// // //               />

// // //               <ModalDetails>
// // //                 <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', paddingRight: '10px' }}>
// // //                   <h4 style={{ margin: '5px 0', fontSize: '20px', fontWeight: '900' }}>{selectedOrder.productName}</h4>
// // //                 </div>
// // //                 <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}><b>Price:</b> {selectedOrder.price}</p>
// // //                 {/* <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}>
// // //                   <b>Product Code:</b> {selectedOrder.code}
// // //                 </p> */}
// // //                 <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}>
// // //                   <b>Size:</b> {selectedOrder.size}
// // //                 </p>
// // //                 <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}>
// // //                   <b>Quantity:</b> {selectedOrder.quantity}
// // //                 </p>
// // //                 <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}>
// // //                   <b>Date:</b> {selectedOrder.orderDate}
// // //                 </p>
// // //                 <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}>
// // //                   <b>Status:</b> {selectedOrder.status}
// // //                 </p>
// // //                 {/* <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
// // //                   <p style={{ margin: 0, fontSize: '14px' }}>
// // //                     <b>Size:</b> {selectedOrder.size || 'Medium'}
// // //                   </p>
// // //                   <p style={{ margin: 0, fontSize: '14px' }}>
// // //                     <b>Quantity:</b> {selectedOrder.quantity}
// // //                   </p>
// // //                 </div> */}
// // //                 {/* <div style={{ marginTop: '10px' }}>
// // //                   <p style={{ margin: 0, fontSize: '14px' }}>
// // //                     <b>Date:</b> {selectedOrder.orderDate}
// // //                   </p>
// // //                 </div> */}
                
// // //               </ModalDetails>
// // //             </ModalBody>
// // //                         {/* <p style={{ marginTop: "18px" }}>
// // //               Easy to clean—This uniform nurse set dependable, fade
// // //               resistant, and washable making it comfortable.
// // //             </p> */}
// // //           </ModalContent>
// // //         </ModalOverlay>
// // //       )}
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default OrderList;



// // import React, { useState, useEffect } from "react";
// // import styled from "styled-components";
// // import { useSelector } from "react-redux";
// // import { MdCheckCircle } from "react-icons/md"; 
// // import Footer from "../../components/Footer";
// // import Navbar from "../../components/Navbar";
// // import Spinner from "../../common/Spinner";
// // import axios from "axios";
// // import DefaultImg from "../../feedImg/family.jpg";

// // // --- RESPONSIVE BREAKPOINTS ---
// // const breakpoints = {
// //   mobile: "576px",
// //   tablet: "768px",
// //   laptop: "1024px",
// //   desktop: "1200px"
// // };

// // // --- STYLED COMPONENTS ---
// // const Container = styled.div`
// //   margin: 10px;
// //   @media (min-width: ${breakpoints.tablet}) {
// //     margin: 20px;
// //   }
// // `;

// // const HeaderContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   margin: 20px 10px 0px 10px;
// //   gap: 15px;

// //   @media (min-width: ${breakpoints.laptop}) {
// //     flex-direction: row;
// //     justify-content: space-between;
// //     align-items: center;
// //     margin: 20px 20px 0px 20px;
// //   }
// // `;

// // const TitleSection = styled.div`
// //   flex: 1;
// // `;

// // const Title = styled.h2`
// //   margin: 0;
// //   margin-top: 20px;
// //   color: #0b6aa9;
// //   font-weight: 700;
// //   padding-top: 10px;
// //   padding-bottom: 10px;
  
// //   @media (min-width: ${breakpoints.laptop}) {
// //     margin-top: 80px;
// //     padding-top: 25px;
// //     padding-bottom: 25px;
// //   }
// // `;

// // const SearchFilterSection = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   gap: 15px;
// //   width: 100%;

// //   @media (min-width: ${breakpoints.tablet}) {
// //     flex-direction: row;
// //     align-items: flex-end;
// //   }

// //   @media (min-width: ${breakpoints.laptop}) {
// //     width: auto;
// //     margin-top: 80px;
// //     padding-top: 25px;
// //     padding-bottom: 25px;
// //     align-items: center;
// //   }
// // `;

// // const SearchWrap = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 8px;
// //   width: 100%;
// //   @media (min-width: ${breakpoints.tablet}) {
// //     width: auto;
// //   }
// // `;

// // const Input = styled.input`
// //   font-size: 16px;
// //   padding: 10px 12px;
// //   width: 100%;
// //   background: #f1f5f9;
// //   border: 1px solid #d7e2ea;
// //   outline: none;
// //   border-radius: 8px;

// //   @media (min-width: ${breakpoints.tablet}) {
// //     width: 240px;
// //   }
// // `;

// // const DateFilterContainer = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 10px;
// //   width: 100%;
// // `;

// // const DateInputWrapper = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: flex-start;
// //   flex: 1;
// // `;

// // const FilterLabel = styled.span`
// //   font-size: 12px;
// //   color: #495057;
// //   font-weight: 500;
// //   margin-bottom: 4px;
// // `;

// // const DateInput = styled.input`
// //   font-size: 14px;
// //   padding: 10px 12px;
// //   width: 100%;
// //   background: #f1f5f9;
// //   border: 1px solid #d7e2ea;
// //   outline: none;
// //   border-radius: 8px;
// // `;

// // const Btn = styled.button`
// //   border-radius: 8px;
// //   background: #0b6aa9;
// //   border: none;
// //   color: white;
// //   padding: 12px 20px;
// //   font-weight: 600;
// //   cursor: pointer;
// //   width: 100%;

// //   @media (min-width: ${breakpoints.tablet}) {
// //     width: auto;
// //     height: 42px;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //   }
// // `;

// // /* ==========================================================================
// //    NEW RESPONSIVE GRID & CARDS LAYOUT (REPLACING THE TABLE)
// //    ========================================================================== */
// // const OrdersGrid = styled.div`
// //   display: grid;
// //   grid-template-columns: 1fr;
// //   gap: 20px;
// //   padding: 10px;

// //   @media (min-width: ${breakpoints.tablet}) {
// //     grid-template-columns: repeat(2, 1fr);
// //     padding: 20px;
// //   }

// //   @media (min-width: ${breakpoints.desktop}) {
// //     grid-template-columns: repeat(3, 1fr);
// //   }
// // `;

// // const OrderCard = styled.div`
// //   background: #ffffff;
// //   border-radius: 20px;
// //   border: 1px solid #f1f5f9;
// //   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
// //   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
// //   overflow: hidden;
// //   display: flex;
// //   flex-direction: column;
// // `;

// // const CardHeader = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   padding: 18px 20px;
// //   border-bottom: 1px solid #f1f5f9;
// // `;

// // const CardTitle = styled.h3`
// //   margin: 0;
// //   font-size: 16px;
// //   font-weight: 600;
// //   color: #1e293b;
// // `;

// // const OrderMetaInfo = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: flex-start;
// //   padding: 20px 20px 10px 20px;
// // `;

// // const OrderIdText = styled.span`
// //   font-size: 18px;
// //   font-weight: 700;
// //   color: #2563eb;
// // `;

// // const TagBadge = styled.span`
// //   background: #f0fdf4;
// //   color: #16a34a;
// //   padding: 4px 12px;
// //   border-radius: 20px;
// //   font-size: 12px;
// //   font-weight: 600;
// // `;

// // const SubMetaRow = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   font-size: 13px;
// //   color: #64748b;
// //   padding: 0 20px 15px 20px;
// // `;

// // const ItemListContainer = styled.div`
// //   padding: 0 20px;
// // `;

// // const ItemRow = styled.div`
// //   display: flex;
// //   gap: 15px;
// //   padding: 12px 0;
// //   border-bottom: 1px dashed #e2e8f0;
// //   align-items: center;
// // `;

// // const ItemImage = styled.img`
// //   width: 60px;
// //   height: 60px;
// //   border-radius: 12px;
// //   object-fit: cover;
// // `;

// // const ItemDetails = styled.div`
// //   flex: 1;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 4px;
// // `;

// // const ItemName = styled.span`
// //   font-size: 14px;
// //   font-weight: 600;
// //   color: #1e293b;
// // `;

// // const ItemPrice = styled.span`
// //   font-size: 15px;
// //   font-weight: 700;
// //   color: #2563eb;
// // `;

// // const ItemQty = styled.span`
// //   font-size: 13px;
// //   color: #64748b;
// //   white-space: nowrap;
// // `;

// // const PricingSummaryContainer = styled.div`
// //   background: #f8fafc;
// //   border-radius: 12px;
// //   padding: 15px;
// //   margin: 20px;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 10px;
// // `;

// // const SummaryRow = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   font-size: 14px;
// //   color: ${props => props.isBold ? "#1e293b" : "#64748b"};
// //   font-weight: ${props => props.isBold ? "700" : "500"};
// // `;

// // const PaidBadge = styled.span`
// //   background: #22c55e;
// //   color: white;
// //   font-size: 11px;
// //   padding: 2px 8px;
// //   border-radius: 6px;
// //   font-weight: bold;
// //   margin-left: 6px;
// // `;

// // const NotesContainer = styled.div`
// //   background: #fff5f5;
// //   border-left: 4px solid #ef4444;
// //   border-radius: 8px;
// //   padding: 12px;
// //   margin: 0 20px 20px 20px;
// // `;

// // const NotesTitle = styled.div`
// //   font-size: 12px;
// //   font-weight: 700;
// //   color: #b91c1c;
// //   margin-bottom: 4px;
// // `;

// // const NotesContent = styled.p`
// //   margin: 0;
// //   font-size: 13px;
// //   color: #7f1d1d;
// //   line-height: 1.4;
// // `;

// // const TimelineSection = styled.div`
// //   padding: 0 20px 25px 20px;
// // `;

// // const TimelineTitle = styled.h4`
// //   margin: 0 0 15px 0;
// //   font-size: 15px;
// //   font-weight: 700;
// //   color: #1e293b;
// // `;

// // const TimelineList = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   gap: 15px;
// //   position: relative;
  
// //   &::before {
// //     content: '';
// //     position: absolute;
// //     left: 11px;
// //     top: 10px;
// //     bottom: 10px;
// //     width: 2px;
// //     background: #e2e8f0;
// //   }
// // `;

// // const TimelineItem = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   position: relative;
// //   padding-left: 30px;
// // `;

// // const StatusIndicator = styled.div`
// //   position: absolute;
// //   left: 0;
// //   top: 50%;
// //   transform: translateY(-50%);
// //   z-index: 2;
// //   color: ${props => props.isActive ? "#22c55e" : "#cbd5e1"};
// //   background: white;
// //   border-radius: 50%;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   font-size: 24px;
// // `;

// // const StatusLabel = styled.span`
// //   font-size: 14px;
// //   font-weight: 600;
// //   color: ${props => props.isActive ? "#1e293b" : "#94a3b8"};
// // `;

// // const StatusTime = styled.span`
// //   font-size: 13px;
// //   color: #94a3b8;
// // `;

// // const EmptyText = styled.p`
// //   margin: 50px 20px;
// //   font-size: 16px;
// //   color: #666;
// //   text-align: center;
// //   grid-column: 1 / -1;
// // `;


// // // --- MAIN REACT COMPONENT ---
// // const OrderList = () => {
// //   const url = useSelector((state) => state.user.url);
// //   const username = useSelector((state) => state.user);
// //   const customer_id = username.id;

// //   const formatSize = (size) => {
// //     const sizeMap = {
// //       'xxl': 'XXL', 'xxlf': 'XXL', 'xl': 'XL', 'lg': 'L',
// //       'md': 'M', 'mef': 'M', 'mdf': 'M', 'sm': 'S',
// //       'xs': 'XS', 'xxs': 'XXS'
// //     };
// //     const lowercaseSize = size ? size.toLowerCase() : '';
// //     return sizeMap[lowercaseSize] || size;
// //   };

// //   const [orders, setOrders] = useState([]);
// //   const [filteredOrders, setFilteredOrders] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [search, setSearch] = useState("");
// //   const [startDate, setStartDate] = useState("");
// //   const [endDate, setEndDate] = useState("");

// //   useEffect(() => {
// //     fetchOrders();
// //   }, []);

// //   const fetchOrders = async () => {
// //     try {
// //       setIsLoading(true);
// //       await axios.get(url + '/api/ecommerce_order_index/' + customer_id)
// //         .then(res => {
// //           const sortedOrders = res.data.instock.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          
// //           const transformedOrders = sortedOrders.map(order => ({
// //             id: order.id,
// //             code: order.order_code || '#8726AB', 
// //             orderDate: order.order_date,
// //             productImage: order.photo_path || null,
// //             productName: order.item_name || 'Order Item',
// //             size: formatSize(order.size_name) || '-',
// //             quantity: order.total_quantity,
// //             price: order.total_amount ? `${order.total_amount} MMK` : '0 MMK',
// //             order_status: order.order_status || 'New Order',
// //             originalData: order
// //           }));
          
// //           setOrders(transformedOrders);
// //           setFilteredOrders(transformedOrders);
// //         })
// //         .catch(error => {
// //           console.error('Error fetching orders:', error);
// //           setOrders([]);
// //           setFilteredOrders([]);
// //         });
// //     } catch (err) {
// //       console.log("Error fetching orders:", err);
// //       setOrders([]);
// //       setFilteredOrders([]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const SearchItems = async () => {
// //     try {
// //       setIsLoading(true);
// //       let filtered = [...orders];
      
// //       if (search) {
// //         filtered = filtered.filter(order => 
// //           order.code.toLowerCase().includes(search.toLowerCase()) ||
// //           order.productName.toLowerCase().includes(search.toLowerCase())
// //         );
// //       }
      
// //       if (startDate || endDate) {
// //         filtered = filtered.filter(order => {
// //           const orderDate = new Date(order.orderDate.split('.').reverse().join('-'));
// //           const start = startDate ? new Date(startDate) : new Date('1900-01-01');
// //           const end = endDate ? new Date(endDate) : new Date('2100-12-31');
// //           return orderDate >= start && orderDate <= end;
// //         });
// //       }
// //       setFilteredOrders(filtered);
// //     } catch (err) {
// //       console.log("error");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (startDate || endDate) {
// //       SearchItems();
// //     }
// //   }, [startDate, endDate, orders]);

// //   return (
// //     <div>
// //       <Container>
// //         <Navbar />
        
// //         <HeaderContainer>
// //           <TitleSection>
// //             <Title>Order List</Title>
// //           </TitleSection>
// //           <SearchFilterSection>
// //             <SearchWrap>
// //               <Input
// //                 placeholder="Search Items..."
// //                 value={search}
// //                 onChange={(e) => setSearch(e.target.value)}
// //               />
// //             </SearchWrap>
// //             <DateFilterContainer>
// //               <DateInputWrapper>
// //                 <FilterLabel>Start date</FilterLabel>
// //                 <DateInput
// //                   type="date"
// //                   value={startDate}
// //                   onChange={(e) => setStartDate(e.target.value)}
// //                 />
// //               </DateInputWrapper>
// //               <DateInputWrapper>
// //                 <FilterLabel>End date</FilterLabel>
// //                 <DateInput
// //                   type="date"
// //                   value={endDate}
// //                   onChange={(e) => setEndDate(e.target.value)}
// //                 />
// //               </DateInputWrapper>
// //             </DateFilterContainer>
// //             <Btn onClick={SearchItems}>Filter</Btn>
// //           </SearchFilterSection>
// //         </HeaderContainer>

// //         {/* ==========================================================================
// //            ORDERS MAIN CONTENT - CARD VIEWS GRID (TABLE ENTIRELY REMOVED)
// //            ========================================================================== */}
// //         {isLoading ? (
// //           <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
// //             <Spinner />
// //           </div>
// //         ) : (
// //           <OrdersGrid>
// //             {filteredOrders.length > 0 ? (
// //               filteredOrders.map((order) => (
// //                 <OrderCard key={order.id}>
// //                   <CardHeader>
// //                     <CardTitle>Detail Order</CardTitle>
// //                   </CardHeader>

// //                   <OrderMetaInfo>
// //                     <OrderIdText>Order ID {order.code}</OrderIdText>
// //                     <TagBadge>{order.order_status}</TagBadge>
// //                   </OrderMetaInfo>
                  
// //                   <SubMetaRow>
// //                     <span>{order.orderDate || "Tue, 10 Dec 2024 • 11:51 am"}</span> 
// //                     <span>Table 12</span>
// //                   </SubMetaRow>

// //                   <ItemListContainer>
// //                     {/* Item Row 1 (Dynamic Item from your database) */}
// //                     <ItemRow>
// //                       <ItemImage 
// //                         src={order.productImage ? url + '/ecommerce/items/' + order.productImage : DefaultImg} 
// //                         alt={order.productName}
// //                       />
// //                       <ItemDetails>
// //                         <ItemName>{order.productName}</ItemName>
// //                         <ItemPrice>{order.price}</ItemPrice>
// //                       </ItemDetails>
// //                       <ItemQty>Qty : {order.quantity} Item</ItemQty>
// //                     </ItemRow>

// //                     {/* Item Row 2 (Visual filler item mapped directly to look like your mock photo) */}
// //                     <ItemRow>
// //                       <ItemImage src={DefaultImg} alt="Frosted Bliss Donut" />
// //                       <ItemDetails>
// //                         <ItemName>Frosted Bliss Donut</ItemName>
// //                         <ItemPrice>5,500 MMK</ItemPrice>
// //                       </ItemDetails>
// //                       <ItemQty>Qty : 1 Item</ItemQty>
// //                     </ItemRow>
// //                   </ItemListContainer>

// //                   <PricingSummaryContainer>
// //                     <SummaryRow>
// //                       <span>Amount</span>
// //                       <span>{order.price}</span>
// //                     </SummaryRow>
// //                     <SummaryRow style={{ color: '#ef4444' }}>
// //                       <span>Discount</span>
// //                       <span>-500 MMK</span>
// //                     </SummaryRow>
// //                     <SummaryRow isBold>
// //                       <span>Payment Method</span>
// //                       <div>
// //                         <span>Credit Card</span>
// //                         <PaidBadge>Paid</PaidBadge>
// //                       </div>
// //                     </SummaryRow>
// //                   </PricingSummaryContainer>

// //                   <NotesContainer>
// //                     <NotesTitle>Notes</NotesTitle>
// //                     <NotesContent>
// //                       Customer is allergic to nuts. Ensure no cross-contamination.
// //                     </NotesContent>
// //                   </NotesContainer>

// //                   <TimelineSection>
// //                     <TimelineTitle>Timeline Order</TimelineTitle>
// //                     <TimelineList>
// //                       <TimelineItem>
// //                         <StatusIndicator isActive><MdCheckCircle /></StatusIndicator>
// //                         <StatusLabel isActive>Order Placed</StatusLabel>
// //                         <StatusTime>10:30 AM</StatusTime>
// //                       </TimelineItem>
// //                       <TimelineItem>
// //                         <StatusIndicator isActive><MdCheckCircle /></StatusIndicator>
// //                         <StatusLabel isActive>Payment Confirmed</StatusLabel>
// //                         <StatusTime>10:35 AM</StatusTime>
// //                       </TimelineItem>
// //                       <TimelineItem>
// //                         <StatusIndicator isActive><MdCheckCircle /></StatusIndicator>
// //                         <StatusLabel isActive>Order in Progress</StatusLabel>
// //                         <StatusTime>10:40 AM</StatusTime>
// //                       </TimelineItem>
// //                       <TimelineItem>
// //                         <StatusIndicator><MdCheckCircle /></StatusIndicator>
// //                         <StatusLabel>Ready for Pickup</StatusLabel>
// //                         <StatusTime>10:50 AM</StatusTime>
// //                       </TimelineItem>
// //                     </TimelineList>
// //                   </TimelineSection>
// //                 </OrderCard>
// //               ))
// //             ) : (
// //               <EmptyText>
// //                 {search || startDate || endDate 
// //                   ? "No orders found matching your filters" 
// //                   : "No orders found"}
// //               </EmptyText>
// //             )}
// //           </OrdersGrid>
// //         )}
// //       </Container>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default OrderList;

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
//     align-items: flex-end; /* Keeps them bottom-aligned on tablet */
//   }

//   @media (min-width: ${breakpoints.laptop}) {
//     width: auto;
//     margin-top: 80px;
//     padding-top: 25px;
//     padding-bottom: 25px;
//     /* --- CHANGE THIS FROM 'center' TO 'flex-end' --- */
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
  
//   /* --- ADD THESE LINES TO SET AND CENTER THE CARD SIZE --- */
//   width: 100%;
//   max-width: 600px; /* Limits size on desktop, but stays responsive on mobile devices */
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
//   background: ${props => props.isPaid ? "#22c55e" : "#ef4444"};
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
//       'xxl': 'XXL', 'xxlf': 'XXL','xxlm': 'XXL', 'xl': 'XL', 'xlf': 'XL','xlm': 'XXL', 'lg': 'L',
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
      
//       const orderGroups = {};
//       const instockData = res?.data?.instock || [];
      
//       instockData.forEach(item => {
//         const code = item.order_code || '#UNKNOWN';
//         if (!orderGroups[code]) {
//           orderGroups[code] = {
//             id: item.id,
//             code: code,
//             orderDate: item.order_date,
//             created_at: item.created_at,
//             order_status: item.order_status || 'New Order',
//             discount: item.discount_amount ? `${item.discount_amount} MMK` : '0 MMK',
//             paymentChannel: item.payment_channel || 'N/A',
//             paymentType: item.payment_type || 'N/A',
//             paidFlag: item.paid_flag,
//             remark: item.remark || '',
//             township: item.township || '',
//             totalAmount: item.total_amount ? `${item.total_amount} MMK` : '0 MMK',
//             items: []
//           };
//         }
        
//         orderGroups[code].items.push({
//           productName: item.item_name || 'Order Item',
//           productImage: item.photo_path || null,
//           size: formatSize(item.size_name) || '-',
//           quantity: item.total_quantity
//         });
//       });

//       const sortedOrders = Object.values(orderGroups).sort(
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
//                     {/* Safe array check with optional chaining */}
//                     {order.items?.map((item, idx) => (
//                       <ItemRow key={`${item.productName}-${idx}`}>
//                         <ItemImage 
//                           src={item.productImage ? url + '/ecommerce/items/' + item.productImage : DefaultImg} 
//                           alt={item.productName}
//                         />
//                         <ItemDetails>
//                           <ItemName>{item.productName} ({item.size})</ItemName>
//                           <ItemPrice>{order.totalAmount}</ItemPrice>
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

const OrdersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 10px;
  justify-items: center;
  width: 100%;
`;

const OrderCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
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
  grid-column: 1 / -1;
`;

// --- MAIN REACT COMPONENT ---
const OrderList = () => {
  const url = useSelector((state) => state.user.url);
  const username = useSelector((state) => state.user);
  const customer_id = username.id;

  const formatSize = (size) => {
    const sizeMap = {
      'xxl': 'XXL', 'xxlf': 'XXL','xxlm': 'XXL', 'xl': 'XL', 'xlf': 'XL','xlm': 'XXL', 'lg': 'L',
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

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(url + '/api/ecommerce_order_index/' + customer_id);
      
      const instockData = res?.data?.instock || [];
      
      // Map orders properly matching the exact API structural layout
      const mappedOrders = instockData.map(orderItem => {
        return {
          id: orderItem.id,
          code: orderItem.order_code || '#UNKNOWN',
          orderDate: orderItem.order_date,
          created_at: orderItem.screenshot?.created_at || orderItem.order_date,
          order_status: orderItem.order_status || 'New Order',
          discount: '0 MMK', // Not present in provided JSON, defaulting
          paymentChannel: orderItem.payment_channel || 'N/A',
          paymentType: orderItem.payment_type || 'N/A',
          paidFlag: orderItem.paid_flag,
          remark: orderItem.screenshot?.remark || '', // Pulled from nested screenshot data
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

      // Sort by creation date descending
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
          <OrdersGrid>
            {(filteredOrders && filteredOrders.length > 0) ? (
              filteredOrders.map((order) => (
                <OrderCard key={order.code}>
                  <CardHeader>
                    <CardTitle>Detail Order</CardTitle>
                  </CardHeader>

                  <OrderMetaInfo>
                    <OrderIdText>Order ID {order.code}</OrderIdText>
                    <TagBadge>{order.order_status}</TagBadge>
                  </OrderMetaInfo>
                  
                  <SubMetaRow>
                    <span>{order.orderDate}</span> 
                    <span>{order.township}</span>
                  </SubMetaRow>

                  <ItemListContainer>
                    {order.items?.map((item, idx) => (
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
                      <span>{order.totalAmount}</span>
                    </SummaryRow>
                    <SummaryRow style={{ color: '#ef4444' }}>
                      <span>Discount</span>
                      <span>-{order.discount}</span>
                    </SummaryRow>
                    <SummaryRow isBold>
                      <span>Payment Method</span>
                      <div>
                        <span style={{ textTransform: 'capitalize' }}>
                          {order.paymentChannel} ({order.paymentType})
                        </span>
                        <PaidBadge isPaid={order.paidFlag === 1}>
                          {order.paidFlag === 1 ? "Paid" : "Unpaid"}
                        </PaidBadge>
                      </div>
                    </SummaryRow>
                  </PricingSummaryContainer>

                  {order.remark && (
                    <NotesContainer>
                      <NotesTitle>Notes / Remark</NotesTitle>
                      <NotesContent>{order.remark}</NotesContent>
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
                        <StatusIndicator isActive={order.order_status === 'received' || order.paidFlag === 1}>
                          <MdCheckCircle />
                        </StatusIndicator>
                        <StatusLabel isActive={order.order_status === 'received' || order.paidFlag === 1}>
                          Processing / Received
                        </StatusLabel>
                        <StatusTime></StatusTime>
                      </TimelineItem>
                    </TimelineList>
                  </TimelineSection>
                </OrderCard>
              ))
            ) : (
              <EmptyText>
                {search || startDate || endDate 
                  ? "No orders found matching your filters" 
                  : "No orders found"}
              </EmptyText>
            )}
          </OrdersGrid>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default OrderList;