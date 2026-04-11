import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IoMdEye } from "react-icons/io";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Spinner from "../../common/Spinner";

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
  width: 80px;
  height: 80px;
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
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  width: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ced4da;
    box-shadow: 0 0 0 2px rgba(11, 106, 169, 0.1);
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

const OrderList = () => {
  const url = useSelector((state) => state.user.url);
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const mockOrders = [
        {
          id: 1,
          code: "001",
          orderDate: "21.2.2026",
          productImage: null,
          productName: "V-Neck",
          size: "Medium",
          quantity: 1,
          price: "2,300,000 MMK",
        },
        {
          id: 2,
          code: "002",
          orderDate: "19.2.2026",
          productImage: null,
          productName: "Shoes",
          size: "Small",
          quantity: 2,
          price: "2,300,000 MMK",
        },
        {
          id: 3,
          code: "003",
          orderDate: "19.2.2026",
          productImage: null,
          productName: "Accessories",
          size: "-",
          quantity: 1,
          price: "2,300,000 MMK",
        },
        {
          id: 4,
          code: "004",
          orderDate: "19.2.2026",
          productImage: null,
          productName: "Shoe",
          size: "37",
          quantity: 1,
          price: "2,300,000 MMK",
        },
        {
          id: 5,
          code: "005",
          orderDate: "19.2.2026",
          productImage: null,
          productName: "Shoe",
          size: "38",
          quantity: 1,
          price: "2,300,000 MMK",
        },
        {
          id: 6,
          code: "006",
          orderDate: "1.1.2026",
          productImage: "/api/placeholder/50/50", // Red V-neck image
          productName: "V-Neck",
          size: "Medium",
          quantity: 1,
          price: "2,300,000 MMK",
        },
        {
          id: 7,
          code: "007",
          orderDate: "1.1.2026",
          productImage: null,
          productName: "Scrub",
          size: "-",
          quantity: 10,
          price: "2,300,000 MMK",
        },
        {
          id: 8,
          code: "008",
          orderDate: "1.1.2026",
          productImage: null,
          productName: "Shoe",
          size: "37",
          quantity: 1,
          price: "2,300,000 MMK",
        },
        {
          id: 9,
          code: "009",
          orderDate: "1.1.2026",
          productImage: null,
          productName: "Shoe",
          size: "38",
          quantity: 1,
          price: "2,300,000 MMK",
        },
        {
          id: 10,
          code: "010",
          orderDate: "1.1.2026",
          productImage: null,
          productName: "Shoe",
          size: "37",
          quantity: 1,
          price: "2,300,000 MMK",
        },
      ];

      // Uncomment this when you have the actual API endpoint
      // const response = await axios.get(url + "/api/orders");
      // setOrders(response.data.orders || []);

      setOrders(mockOrders);
      setFilteredOrders(mockOrders);
    } catch (err) {
      console.log("Error fetching orders:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const applyFilters = () => {
    let filtered = [...orders];

    if (searchTerm) {
      filtered = filtered.filter(order => 
        order.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.productName.toLowerCase().includes(searchTerm.toLowerCase())
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
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, startDate, endDate, orders]);

  return (
    <div>
      <Container>
        <Navbar />
        
        <HeaderContainer>
          <TitleSection>
            <Title>Order List</Title>
          </TitleSection>
          <SearchFilterSection>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
            <FilterButton onClick={applyFilters}>
              Filter
            </FilterButton>
          </SearchFilterSection>
        </HeaderContainer>

        <TableContainer>
          {isLoading ? (
            <Spinner />
          ) : filteredOrders.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Code</TableHeaderCell>
                  <TableHeaderCell>Order Date</TableHeaderCell>
                  <TableHeaderCell>Quantity</TableHeaderCell>
                  <TableHeaderCell>Price</TableHeaderCell>
                  <TableHeaderCell>Action</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.code}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>
                      <Quantity>{order.quantity}</Quantity>
                    </TableCell>
                    <TableCell>
                      <Price>{order.price}</Price>
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
              {searchTerm || startDate || endDate 
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
                src={selectedOrder.productImage || "/api/placeholder/250/250"}
              />

              <ModalDetails>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', paddingRight: '10px' }}>
                  <h4 style={{ margin: 0 }}>{selectedOrder.productName}</h4>
                  <p style={{ margin: 0, textAlign: 'right' }}>{selectedOrder.price}</p>
                </div>
                <p className="text-xs mb-0 pb-2">
                  {selectedOrder.code}
                </p>
                <div className="flex gap-3">
                  <p>
                    <b>Size:</b> {selectedOrder.size}
                  </p>
                  <p>
                    <b>Quantity:</b> {selectedOrder.quantity}
                  </p>
                </div>
                
              </ModalDetails>
            </ModalBody>
            <hr />
            
            <ModalBody>
              <ModalImage
                src={selectedOrder.productImage || "/api/placeholder/250/250"}
              />

              <ModalDetails>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', paddingRight: '10px' }}>
                  <h4 style={{ margin: 0 }}>{selectedOrder.productName}</h4>
                  <p style={{ margin: 0, textAlign: 'right' }}>{selectedOrder.price}</p>
                </div>
                <p className="text-xs mb-0 pb-2">
                  {selectedOrder.code}
                </p>
                <div className="flex gap-3">
                  <p>
                    <b>Size:</b> {selectedOrder.size}
                  </p>
                  <p>
                    <b>Quantity:</b> {selectedOrder.quantity}
                  </p>
                </div>
                
              </ModalDetails>
            </ModalBody>
            <hr />
            <ModalBody>
              <ModalImage
                src={selectedOrder.productImage || "/api/placeholder/250/250"}
              />

              <ModalDetails>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', paddingRight: '10px' }}>
                  <h4 style={{ margin: 0 }}>{selectedOrder.productName}</h4>
                  <p style={{ margin: 0, textAlign: 'right' }}>{selectedOrder.price}</p>
                </div>
                <p className="text-xs mb-0 pb-2">
                  {selectedOrder.code}
                </p>
                <div className="flex gap-3">
                  <p>
                    <b>Size:</b> {selectedOrder.size}
                  </p>
                  <p>
                    <b>Quantity:</b> {selectedOrder.quantity}
                  </p>
                </div>
                
              </ModalDetails>
            </ModalBody>
            <hr />
            <div className="flex justify-between">
              <p>
                <b>Date:</b> {selectedOrder.orderDate}
              </p>
              <p>
                <b>Total Price:</b> {selectedOrder.price}
              </p>
            </div>
            <p style={{ marginTop: "18px" }}>
              Easy to clean—This uniform nurse set dependable, fade
              resistant, and washable making it comfortable.
            </p>
          </ModalContent>
        </ModalOverlay>
      )}
      <Footer />
    </div>
  );
};

export default OrderList;
