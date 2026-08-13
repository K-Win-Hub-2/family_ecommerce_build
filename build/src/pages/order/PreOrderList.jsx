import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdEye } from "react-icons/io";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Spinner from "../../common/Spinner";
import preOrder from "../../files/preorder.png";

const Container = styled.div`
  margin: 20px;
`;

const Image = styled.img`
  width: 180px;
  object-fit: cover;
  margin: 20px auto;
  margin-top: 80px;
`;

const Title = styled.h2`
  margin: 20px;
  color: #0b6aa9;
  font-weight: 700;
  text-align: center;
  padding-bottom: 25px;
`;

const TableContainer = styled.div`
  margin: 20px;
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
  c
  border-radius: 12px;
  border: 2px solid #0b6aa9;
`;

const ModalDetails = styled.div`
  color: #0b6aa9;
  line-height: 1.8;
`;

const PreOrderList = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      // Mock data based on the image - replace with actual API call
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
    } catch (err) {
      console.log("Error fetching orders:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div>
      <Container>
        <Navbar />
        <Image src={preOrder} alt="Pre-Order Banner" />
        <Title>You can order now!</Title>

        <TableContainer>
          {isLoading ? (
            <Spinner />
          ) : orders.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Code</TableHeaderCell>
                  <TableHeaderCell>Order Date</TableHeaderCell>
                  <TableHeaderCell>Product Image</TableHeaderCell>
                  <TableHeaderCell>Product Name</TableHeaderCell>
                  <TableHeaderCell>Size</TableHeaderCell>
                  <TableHeaderCell>Quantity</TableHeaderCell>
                  <TableHeaderCell>Price</TableHeaderCell>
                  <TableHeaderCell>Action</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.code}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>
                      {order.productImage ? (
                        <ProductImage
                          src={order.productImage}
                          alt={order.productName}
                        />
                      ) : (
                        <ProductImage
                          src="/api/placeholder/50/50"
                          alt="No image"
                        />
                      )}
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
                      <ActionButton onClick={() => handleViewOrder(order)}>
                        <IoMdEye />
                      </ActionButton>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          ) : (
            <EmptyText>No orders found</EmptyText>
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
                <h3 className="pb-3">{selectedOrder.productName}</h3>
                <p>
                  <b>Product Code:</b> {selectedOrder.code}
                </p>
                <p>
                  <b>Date:</b> {selectedOrder.orderDate}
                </p>
                <p>
                  <b>Size:</b> {selectedOrder.size}
                </p>
                <p>
                  <b>Quantity:</b> {selectedOrder.quantity}
                </p>
                <p>
                  <b>Price:</b> {selectedOrder.price}
                </p>

                <p style={{ marginTop: "10px" }}>
                  Easy to clean—This uniform nurse set dependable, fade
                  resistant, and washable making it comfortable.
                </p>
              </ModalDetails>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
      <Footer />
    </div>
  );
};

export default PreOrderList;
