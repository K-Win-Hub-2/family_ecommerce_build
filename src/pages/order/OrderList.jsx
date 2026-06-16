import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IoMdEye } from "react-icons/io";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Spinner from "../../common/Spinner";
import axios from "axios";
import DefaultImg from "../../feedImg/family.jpg";

const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h2`
  margin: 20px 20px 20px 0;
  margin-top: 80px;
  color: #0b6aa9;
  font-weight: 700;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const TableContainer = styled.div`
  margin: 0px 20px 20px 20px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #2286ba;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background: #f8f9fa;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f8f9fa;
  }
  &:hover {
    background: #e9ecef;
  }
`;

const TableHeaderCell = styled.th`
  padding: 15px;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #dee2e6;
  font-size: 14px;
`;

const TableCell = styled.td`
  padding: 15px;
  border-bottom: 1px solid #dee2e6;
  font-size: 14px;
  color: #495057;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #dee2e6;
`;

const ProductName = styled.div`
  font-weight: 500;
  color: #212529;
`;

const Size = styled.div`
  color: #6c757d;
`;

const Quantity = styled.div`
  font-weight: 500;
`;

const Price = styled.div`
  font-weight: 600;
  color: #0b6aa9;
`;

const Status = styled.button`
  color: white;
  background: #0b6aa9;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  text-transform: capitalize;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #0b6aa9;
  font-size: 18px;
  padding: 5px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: #e3f2fd;
    transform: scale(1.1);
  }
`;

const EmptyText = styled.p`
  margin: 30px 20px;
  font-size: 18px;
  color: #666;
  text-align: center;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #f3f3f3;
  border-radius: 15px;
  padding: 30px;
  width: 80%;
  max-width: 800px;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  text-align: center;
  color: #0b6aa9;
  margin-bottom: 40px;
`;

const ModalBody = styled.div`
  display: flex;
  gap: 30px;
`;

const ModalImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid #0b6aa9;
`;

const ModalDetails = styled.div`
  color: #0b6aa9;
  line-height: 1.8;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 0px 20px;
`;

const TitleSection = styled.div`
  flex: 1;
`;

const SearchFilterSection = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 20px 20px 0;
  margin-top: 80px;
  color: #0b6aa9;
  font-weight: 700;
  padding-top: 25px;
  padding-bottom: 25px;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  width: 250px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #0b6aa9;
    box-shadow: 0 0 0 2px rgba(11, 106, 169, 0.1);
  }
`;

const DateFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DateInput = styled.input`
  font-size: 16px;
  padding: 10px 12px;
  width: 150px;
  background: #f1f5f9;
  border: 1px solid #d7e2ea;
  outline: none;
  border-radius: 8px;

  ::placeholder {
    color: #7d8b99;
  }
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  background: #0b6aa9;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #095a8f;
  }
`;

const FilterLabel = styled.span`
  font-size: 14px;
  color: #495057;
  font-weight: 500;
`;

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px 12px;
  width: 280px;
  background: #f1f5f9;
  border: 1px solid #d7e2ea;
  outline: none;
  border-radius: 8px;

  ::placeholder {
    color: #7d8b99;
  }
`;

const Btn = styled.button`
  border-radius: 8px;
  background: #0b6aa9;
  border: none;
  color: white;
  padding: 10px 14px;
  cursor: pointer;
`;

const OrderList = () => {
  const url = useSelector((state) => state.user.url);
  const username = useSelector((state) => state.user);
  const customer_id = username.id;

  const formatSize = (size) => {
    const sizeMap = {
      'xxl': 'XXL',
      'xxlf': 'XXL',
      'xl': 'XL',
      'lg': 'L',
      'md': 'M',
      'mef': 'M',
      'mdf': 'M',
      'sm': 'S',
      'xs': 'XS',
      'xxs': 'XXS'
    };
    
    const lowercaseSize = size ? size.toLowerCase() : '';
    return sizeMap[lowercaseSize] || size;
  };
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      
      await axios.get(url + '/api/ecommerce_order_index/' + customer_id)
        .then(res => {
          const sortedOrders = res.data.instock.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          
          // Transform the API data to match the component's expected format
          const transformedOrders = sortedOrders.map(order => ({
            id: order.id,
            code: order.order_code,
            orderDate: order.order_date,
            productImage: order.photo_path || null,
            productName: order.item_name || 'Order',
            size: formatSize(order.size_name) || '-',
            quantity: order.total_quantity,
            price: order.total_amount ? `${order.total_amount} MMK` : '0 MMK',
            order_status: order.order_status || '-',
            originalData: order
          }));
          
          setOrders(transformedOrders);
          setFilteredOrders(transformedOrders);
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
          // Set empty arrays on error
          setOrders([]);
          setFilteredOrders([]);
        });
    } catch (err) {
      console.log("Error fetching orders:", err);
      setOrders([]);
      setFilteredOrders([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const SearchItems = async () => {
    try {
      setIsLoading(true);
      
      let filtered = [...orders];
      
      if (search) {
        filtered = filtered.filter(order => 
          order.code.toLowerCase().includes(search.toLowerCase()) ||
          order.productName.toLowerCase().includes(search.toLowerCase())
        );
      }
      
      if (startDate || endDate) {
        filtered = filtered.filter(order => {
          const orderDate = new Date(order.orderDate.split('.').reverse().join('-')); // Convert DD.MM.YYYY to YYYY-MM-DD
          const start = startDate ? new Date(startDate) : new Date('1900-01-01');
          const end = endDate ? new Date(endDate) : new Date('2100-12-31');
          return orderDate >= start && orderDate <= end;
        });
      }
      
      setFilteredOrders(filtered);
    } catch (err) {
      console.log("error");
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
                  placeholder="Start date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </DateInputWrapper>
              <DateInputWrapper>
                <FilterLabel>End date</FilterLabel>
                <DateInput
                  type="date"
                  placeholder="End date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </DateInputWrapper>
            </DateFilterContainer>
            {/* <FilterButton onClick={SearchItems}>
              Filter
            </FilterButton> */}
            <Btn onClick={SearchItems}>
               Filter
            </Btn>
          </SearchFilterSection>
        </HeaderContainer>

        <TableContainer>
          {isLoading ? (
            <Spinner />
          ) : filteredOrders.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  {/* <TableHeaderCell>Code</TableHeaderCell> */}
                  <TableHeaderCell>Order Date</TableHeaderCell>
                  <TableHeaderCell>Product Image</TableHeaderCell>
                  <TableHeaderCell>Product Name</TableHeaderCell>
                  <TableHeaderCell>Size</TableHeaderCell>
                  <TableHeaderCell>Quantity</TableHeaderCell>
                  <TableHeaderCell>Price</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Action</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    {/* <TableCell>{order.code}</TableCell> */}
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>
                      <ProductImage 
                        src={order.productImage ? url + '/ecommerce/items/' + order.productImage : DefaultImg} 
                        alt={order.productName}
                      />
                    </TableCell>
                    <TableCell>
                      <ProductName>{order.productName}</ProductName>
                    </TableCell>
                    <TableCell>
                      <Size>{order.size}</Size>
                    </TableCell>
                    <TableCell>
                      <Quantity>{order.quantity}</Quantity>
                    </TableCell>
                    <TableCell>
                      <Price>{order.price}</Price>
                    </TableCell>
                    <TableCell>
                      <Status>{order.order_status}</Status>
                    </TableCell>
                    <TableCell>
                      <ActionButton onClick={() => handleViewOrder(order)}>
                        <IoMdEye />
                      </ActionButton>
                    </TableCell>
                  </TableRow>
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
        </TableContainer>
      </Container>
      {selectedOrder && (
        <ModalOverlay onClick={() => setSelectedOrder(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={() => setSelectedOrder(null)}>✖</CloseBtn>

            <ModalTitle>Product Order Details</ModalTitle>

            <ModalBody>
              <ModalImage
                src={selectedOrder.productImage ? url + '/ecommerce/items/' + selectedOrder.productImage : DefaultImg}
              />

              <ModalDetails>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', paddingRight: '10px' }}>
                  <h4 style={{ margin: '5px 0', fontSize: '20px', fontWeight: '900' }}>{selectedOrder.productName}</h4>
                </div>
                <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}><b>Price:</b> {selectedOrder.price}</p>
                {/* <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}>
                  <b>Product Code:</b> {selectedOrder.code}
                </p> */}
                <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}>
                  <b>Size:</b> {selectedOrder.size}
                </p>
                <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}>
                  <b>Quantity:</b> {selectedOrder.quantity}
                </p>
                <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}>
                  <b>Date:</b> {selectedOrder.orderDate}
                </p>
                <p style={{ margin: 0, textAlign: 'left', fontSize: '18px', fontWeight: '600', color: '#0b6aa9' }}>
                  <b>Status:</b> {selectedOrder.status}
                </p>
                {/* <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                  <p style={{ margin: 0, fontSize: '14px' }}>
                    <b>Size:</b> {selectedOrder.size || 'Medium'}
                  </p>
                  <p style={{ margin: 0, fontSize: '14px' }}>
                    <b>Quantity:</b> {selectedOrder.quantity}
                  </p>
                </div> */}
                {/* <div style={{ marginTop: '10px' }}>
                  <p style={{ margin: 0, fontSize: '14px' }}>
                    <b>Date:</b> {selectedOrder.orderDate}
                  </p>
                </div> */}
                
              </ModalDetails>
            </ModalBody>
                        {/* <p style={{ marginTop: "18px" }}>
              Easy to clean—This uniform nurse set dependable, fade
              resistant, and washable making it comfortable.
            </p> */}
          </ModalContent>
        </ModalOverlay>
      )}
      <Footer />
    </div>
  );
};

export default OrderList;
