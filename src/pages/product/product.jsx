// // // import { Add, Remove } from "@mui/icons-material";
// // // import React, { useEffect, useMemo, useState } from "react";
// // // import { useLocation, Link } from "react-router-dom";
// // // import styled from "styled-components";
// // // import Footer from "../../components/Footer";
// // // import Navbar from "../../components/Navbar";
// // // import { mobile } from "../../responsive";
// // // import { addProduct } from "../../redux/cartRedux";
// // // import { addOrder } from "../../redux/designRedux";
// // // import { addWishlist } from "../../redux/wishlistRedux";
// // // import { useSelector, useDispatch } from "react-redux";
// // // import axios from "axios";
// // // import CheckColor from "../../components/CheckColor";
// // // import CheckSize from "../../components/CheckSize";
// // // import sample from "../../files/sample.pdf";
// // // import Swal from "sweetalert2";
// // // import InstockDialog from "../../components/InstockDialog";
// // // import { FaRegHeart } from "react-icons/fa6";
// // // import Carousel from "react-multi-carousel";
// // // import "react-multi-carousel/lib/styles.css";
// // // import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
// // // import { useRef } from "react";
// // // import ColorNav from "../../components/ColorNav";
// // // import Spinner from "../../common/Spinner";

// // // const Container = styled.div`
// // //   background: #f7f7f7;
// // // `;

// // // const MainSection = styled.div`
// // //   max-width: 1500px;
// // //   margin: 0 auto;
// // //   padding: 120px 40px 60px;
// // //   display: flex;
// // //   gap: 40px;
// // //   align-items: flex-start;

// // //   ${mobile({
// // //     flexDirection: "column",
// // //     padding: "100px 16px 30px",
// // //     gap: "24px",
// // //   })}
// // // `;

// // // const GallerySection = styled.div`
// // //   flex: 1.2;
// // //   display: flex;
// // //   gap: 20px;
// // //   align-items: flex-start;
// // //   min-width: 0;

// // //   ${mobile({
// // //     flexDirection: "column-reverse",
// // //   })}
// // // `;

// // // const ThumbnailColumn = styled.div`
// // //   width: 80px;
// // //   display: flex;
// // //   flex-direction: column;
// // //   gap: 12px;

// // //   ${mobile({
// // //     width: "100%",
// // //     flexDirection: "row",
// // //     overflowX: "auto",
// // //   })}
// // // `;

// // // const Thumbnail = styled.img`
// // //   width: 68px;
// // //   height: 82px;
// // //   object-fit: cover;
// // //   background: #eee;
// // //   border: 3px solid ${({ active }) => (active ? "#156ea8" : "#e5e5e5")};
// // //   border-radius: 10px;
// // //   cursor: pointer;
// // //   opacity: ${({ active }) => (active ? 1 : 0.85)};
// // //   transition: all 0.2s ease;

// // //   &:hover {
// // //     opacity: 1;
// // //     border-color: #999;
// // //   }

// // //   ${mobile({
// // //     minWidth: "68px",
// // //   })}
// // // `;

// // // const MainImageWrap = styled.div`
// // //   flex: 1;
// // //   background: #fff;
// // // `;

// // // const MainImage = styled.img`
// // //   width: 100%;
// // //   max-height: 560px;
// // //   object-fit: cover;
// // //   display: block;
// // //   border: 2px solid #156ea8;
// // //   border-radius: 20px;

// // //   ${mobile({
// // //     maxHeight: "500px",
// // //   })}
// // // `;

// // // const InfoSection = styled.div`
// // //   flex: 0.9;
// // //   background: #f7f7f7;
// // //   padding: 0 10px;

// // //   ${mobile({
// // //     padding: "0",
// // //   })}
// // // `;

// // // const ProductTitle = styled.h1`
// // //   font-size: 40px;
// // //   font-weight: 400;
// // //   line-height: 1.15;
// // //   color: #034f96;
// // //   margin: 0 0 18px;
// // //   text-transform: capitalize;

// // //   ${mobile({
// // //     fontSize: "32px",
// // //   })}
// // // `;

// // // const ProductPrice = styled.div`
// // //   font-size: 25px;
// // //   color: #666;
// // //   margin-bottom: 28px;
// // // `;

// // // const ProductMeta = styled.div`
// // //   font-size: 20px;
// // //   line-height: 1.9;
// // //   margin-bottom: 34px;
// // //   text-transform: capitalize;
// // //   color: #156ea8;

// // //   ${mobile({
// // //     fontSize: "16px",
// // //     lineHeight: "1.8",
// // //   })}
// // // `;

// // // const SectionTitle = styled.div`
// // //   font-size: 20px;
// // //   color: #156ea8;
// // //   margin-bottom: 18px;

// // //   ${mobile({
// // //     fontSize: "22px",
// // //   })}
// // // `;

// // // const ColorRow = styled.div`
// // //   display: grid;
// // //   grid-template-columns: repeat(5, 34px);
// // //   gap: 12px;
// // //   margin-top: 10px;
// // // `;

// // // const ColorCircle = styled.button`
// // //   width: 34px;
// // //   height: 34px;
// // //   border-radius: 50%;
// // //   border: ${({ selected }) => (selected ? "2px solid #111" : "1px solid #ccc")};
// // //   background: ${({ bg }) => bg || "#ddd"};
// // //   cursor: pointer;
// // //   outline: none;
// // // `;

// // // const Divider = styled.hr`
// // //   border: none;
// // //   border-top: 1px solid #dddddd;
// // //   margin: 5px 0;
// // // `;

// // // const SizeRow = styled.div`
// // //   display: flex;
// // //   gap: 10px;
// // //   flex-wrap: wrap;
// // //   margin-bottom: 5px;
// // // `;

// // // const SizeBox = styled.button`
// // //   min-width: 52px;
// // //   height: 44px;
// // //   padding: 0 14px;
// // //   border: 1px solid ${({ selected }) => (selected ? "#fff" : "#156ea8")};
// // //   border-radius: 10px;
// // //   background: ${({ selected }) => (selected ? "#156ea8" : "#fafafa")};
// // //   color: ${({ selected }) => (selected ? "#fff" : "#156ea8")};
// // //   cursor: pointer;
// // //   font-size: 22px;
// // //   text-transform: capitalize;
// // //   transition: all 0.2s ease;

// // //   &:hover {
// // //     border-color: #156ea8;
// // //   }

// // //   ${mobile({
// // //     fontSize: "16px",
// // //     minWidth: "46px",
// // //     height: "40px",
// // //   })}
// // // `;

// // // const CartRow = styled.div`
// // //   display: flex;
// // //   gap: 18px;
// // //   margin-top: 30px;
// // //   align-items: center;
// // //   width: 100%;

// // //   ${mobile(`
// // //     flex-wrap: wrap;
// // //     gap: 14px;
// // //   `)}
// // // `;

// // // const QtyBox = styled.div`
// // //   width: 150px;
// // //   height: 58px;
// // //   border: 1px solid #156ea8;
// // //   border-radius: 20px;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: space-between;
// // //   background: #fafafa;
// // //   padding: 0 14px;
// // //   box-sizing: border-box;

// // //   ${mobile(`
// // //     flex: 1;
// // //     height: 50px;
// // //   `)}
// // // `;

// // // const QtyButton = styled.button`
// // //   border: none;
// // //   background: transparent;
// // //   font-size: 24px;
// // //   color: #666;
// // //   cursor: pointer;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   padding: 0;

// // //   &:disabled {
// // //     opacity: 0.4;
// // //     cursor: not-allowed;
// // //   }
// // // `;

// // // const QtyValue = styled.span`
// // //   font-size: 22px;
// // //   font-weight: bold;
// // //   color: #156ea8;
// // // `;

// // // const AddCartButton = styled.button`
// // //   flex: 1;
// // //   height: 58px;
// // //   background: #156ea8;
// // //   color: white;
// // //   border: none;
// // //   border-radius: 20px;
// // //   font-size: 22px;
// // //   font-weight: 600;
// // //   cursor: pointer;
// // //   transition: 0.2s ease;
// // //   text-transform: capitalize;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;

// // //   &:hover {
// // //     background: #4f9ee8;
// // //   }

// // //   ${mobile(`
// // //     width: 100%;
// // //     order: 1;
// // //     height: 54px;
// // //     font-size: 18px;
// // //   `)}
// // // `;

// // // const SmallText = styled.div`
// // //   color: #156ea8;
// // //   font-weight: bold;
// // //   font-size: 15px;
// // //   margin-top: 6px;
// // // `;

// // // const BoldText = styled.span`
// // //   font-size: 22px;
// // //   font-weight: bold;
// // //   color: #034f96;
// // // `;

// // // const Product = () => {
// // //     const dispatch = useDispatch();
// // //     const url = useSelector((state) => state.user.url);
// // //     const location = useLocation();

// // //     const [item, setItem] = useState([]);
// // //     const [units, setUnits] = useState([]);
// // //     const [allUnits, setAllUnits] = useState([]);

// // //     const [unitid, setUnitId] = useState("");
// // //     const [unitname, setUnitName] = useState("");
// // //     const [unitcode, setUnitCode] = useState("");
// // //     const [quantity, setQuantity] = useState(0);
// // //     const [color, setColor] = useState("");
// // //     const [fabric, setFabric] = useState("");
// // //     const [size, setSize] = useState("");
// // //     const [price, setPrice] = useState(0);
// // //     const [stock, setStock] = useState(0);
// // //     const [design, setDesign] = useState("");
// // //     const [isInstock, setIsInstock] = useState(false);
// // //     const [instockFlag, setInstockFlag] = useState("");
// // //     const [preorderFlag, setPreorderFlag] = useState("");
// // //     const [isLoading, setIsLoading] = useState(true);
// // //     const [unitimg, setUnitImg] = useState("");
// // //     const [selectedGender, setSelectedGender] = useState(null);
// // //     const [selectedFabric, setSelectedFabric] = useState(null);
// // //     const [selectedColor, setSelectedColor] = useState(null);
// // //     const [selectedSize, setSelectedSize] = useState(null);

// // //     const [filteredUnits, setFilteredUnits] = useState([]);
// // //     const [filteredColors, setFilteredColors] = useState([]);
// // //     const [filteredSizes, setFilteredSizes] = useState([]);
// // //     const [primaryStoreUnit, setPrimaryStoreUnit] = useState([]);

// // //     const [selectedImage, setSelectedImage] = useState("");

// // //     const id = location.pathname.split("/")[2]; // e.g., "302" or "303"

// // //     const formatSizeLabel = (sizeName) => {
// // //         if (!sizeName) return "";
// // //         const normalized = sizeName.toLowerCase().trim();
// // //         if (normalized.includes("xxl")) return "XXL";
// // //         if (normalized.includes("xl")) return "XL";
// // //         if (normalized.includes("xs")) return "XS";
// // //         if (normalized.includes("lg")) return "L";
// // //         if (normalized.includes("sm")) return "S";
// // //         if (normalized.includes("me")) return "M";
// // //         return sizeName.toUpperCase();
// // //     };

// // //     const allStock = useMemo(() => {
// // //         return allUnits.reduce((total, unit) => {
// // //             return total + Number(unit.current_quantity || 0);
// // //         }, 0);
// // //     }, [allUnits]);

// // //     useEffect(() => {
// // //         const getProduct = () => {
// // //             axios
// // //                 .get(url + "/api/unitbyid_api/" + id)
// // //                 .then((response) => {
// // //                     setItem(response.data.item);
// // //                     setDesign(response.data.item.item_name);
// // //                     setUnits(response.data.counting_units || []);
// // //                     setAllUnits(
// // //                         response.data.counting_unit_all_update ||
// // //                         response.data.counting_unit_all ||
// // //                         []
// // //                     );
// // //                     setInstockFlag(response.data.valueofinstock);
// // //                     setPreorderFlag(response.data.valueofpreorder);

// // //                     setSelectedImage(
// // //                         url + `/ecommerce/items/${response.data.item.photo_path || ""}`
// // //                     );
// // //                 })
// // //                 .catch((error) => {
// // //                     console.log(error);
// // //                 })
// // //                 .finally(() => {
// // //                     setIsLoading(false);
// // //                 });
// // //         };

// // //         getProduct();
// // //     }, [id, url]);

// // //     const handleQuantity = (type) => {
// // //         setQuantity((prevQuantity) => {
// // //             if (type === "dec") {
// // //                 return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
// // //             }
// // //             if (!selectedSize || displayAvailability <= 0) return prevQuantity;
// // //             if (type === "inc") {
// // //                 return prevQuantity < displayAvailability ? prevQuantity + 1 : prevQuantity;
// // //             }
// // //             return prevQuantity;
// // //         });
// // //     };

// // //     const handleClick = () => {
// // //         if (!selectedSize || !selectedColor || !selectedGender) {
// // //             Swal.fire({
// // //                 title: "Please select options",
// // //                 text: "Choose gender, color and size first.",
// // //                 icon: "warning",
// // //             });
// // //             return;
// // //         }

// // //         if (stock === 0) {
// // //             setIsInstock(true);
// // //             const testname = `${item.item_name} ${selectedGender} ${fabric} ${color} ${size}`;
// // //             const testqty = quantity;
// // //             const testprice = price;
// // //             const orderid = unitid;

// // //             dispatch(addOrder({ orderid, testname, testqty, testprice }));
// // //         } else {
// // //             dispatch(
// // //                 addProduct({
// // //                     unitid,
// // //                     unitname,
// // //                     unitcode,
// // //                     unitimg,
// // //                     color,
// // //                     size,
// // //                     fabric,
// // //                     quantity,
// // //                     price,
// // //                 })
// // //             );

// // //             // --- CROSS-SELL ALERTS FOR TARGET PRODUCTS ---
// // //             let targetId = null;
// // //             let suggestionMessage = "";

// // //             if (id === "302") {
// // //                 targetId = "303";
// // //                 suggestionMessage = "You might also need our matching item (ID: 303)! Would you like to view it?";
// // //             } else if (id === "303") {
// // //                 targetId = "302";
// // //                 suggestionMessage = "You might also need our matching item (ID: 302)! Would you like to view it?";
// // //             }

// // //             if (targetId) {
// // //                 Swal.fire({
// // //                     title: "Successfully added to cart!",
// // //                     text: suggestionMessage,
// // //                     icon: "success",
// // //                     showCancelButton: true,
// // //                     confirmButtonColor: "#156ea8",
// // //                     cancelButtonColor: "#aaa",
// // //                     confirmButtonText: "Go View Item",
// // //                     cancelButtonText: "Stay Here"
// // //                 }).then((result) => {
// // //                     if (result.isConfirmed) {
// // //                         window.location.href = `/product/${targetId}`;
// // //                     }
// // //                 });
// // //             } else {
// // //                 Swal.fire({
// // //                     title: "Success!",
// // //                     text: "Successfully added to cart.",
// // //                     icon: "success",
// // //                 });
// // //             }
// // //         }
// // //     };

// // //     const availableGenders = [...new Set(units.map((unit) => unit.gender_name))];

// // //     const choosegen = (gender) => {
// // //         setSelectedGender(gender);
// // //         const filtered = allUnits.filter((unit) => unit.gender_name === gender);
// // //         setFilteredUnits(filtered);

// // //         const uniqueColors = [
// // //             ...new Map(
// // //                 filtered.map((unit) => [
// // //                     unit.colour_name,
// // //                     {
// // //                         colour_name: unit.colour_name,
// // //                         colour_description: unit.colour_description || unit.colour_name,
// // //                     },
// // //                 ])
// // //             ).values(),
// // //         ];

// // //         setFilteredColors(uniqueColors);
// // //         setSelectedColor(null);
// // //         setSelectedSize(null);
// // //         setFilteredSizes([]);
// // //         setPrice(0);
// // //         setStock(0);
// // //     };

// // //     const handleColorChange = (colorObj) => {
// // //         setSelectedColor(colorObj.colour_name);
// // //         setColor(colorObj.colour_name);

// // //         const filtered = allUnits.filter(
// // //             (unit) =>
// // //                 unit.gender_name === selectedGender &&
// // //                 unit.colour_name === colorObj.colour_name
// // //         );

// // //         setPrimaryStoreUnit(filtered);
// // //         const sizes = [...new Set(filtered.map((unit) => unit.size_name))];
// // //         setFilteredSizes(sizes);

// // //         setSelectedSize(null);
// // //         setPrice(0);
// // //         setStock(0);

// // //         if (filtered.length > 0) {
// // //             const targetUnitId = filtered[0].id;
// // //             axios
// // //                 .get(`${url}/api/counting-unit/${targetUnitId}`)
// // //                 .then((res) => {
// // //                     if (res.data && res.data.image) {
// // //                         setSelectedImage(url + res.data.image);
// // //                     }
// // //                 })
// // //                 .catch((err) => console.error(err));
// // //         }
// // //     };

// // //     const handleSizeChange = (sizeName) => {
// // //         const filtered = primaryStoreUnit.filter((unit) => unit.size_name === sizeName);
// // //         if (!filtered.length) return;

// // //         const selectedUnit = filtered[0];
// // //         setSelectedSize(sizeName);
// // //         setSize(formatSizeLabel(selectedUnit.size_name));
// // //         setPrice(selectedUnit.order_price);
// // //         setStock(selectedUnit.current_quantity);
// // //         setUnitId(selectedUnit.id);
// // //         setUnitName(selectedUnit.unit_name);
// // //         setUnitCode(selectedUnit.unit_code);
// // //         setColor(selectedUnit.colour_name);
// // //         setFabric(selectedUnit.fabric_name);
// // //         setDesign(selectedUnit.design_name);
// // //         setUnitImg(item.photo_path);
// // //     };

// // //     const productImages = useMemo(() => {
// // //         if (!item?.photo_path) return [];
// // //         const front = url + `/ecommerce/items/${item.photo_path}`;
// // //         const left = url + `/ecommerce/items/${item.photo_path.replace("front", "left")}`;
// // //         const right = url + `/ecommerce/items/${item.photo_path.replace("front", "right")}`;
// // //         const body = url + `/ecommerce/items/${item.photo_path.replace("front", "body")}`;
// // //         return [front, left, right, body];
// // //     }, [item, url]);

// // //     const getColorCode = (name) => {
// // //         if (!name) return "#ccc";
// // //         const value = name.toLowerCase().trim();
// // //         if (value.includes("magenta")) return "#e54a7c";
// // //         if (value.includes("pink")) return "#ff94b4";
// // //         if (value.includes("purple")) return "#741bb5";
// // //         if (value.includes("navy blue") || value.includes("navy")) return "#101646";
// // //         if (value.includes("black")) return "#1f1f1f";
// // //         if (value.includes("white")) return "#f5f5f5";
// // //         return "#999";
// // //     };

// // //     const displayAvailability = selectedSize ? stock : allStock;

// // //     if (isLoading) {
// // //         return (
// // //             <Container>
// // //                 <Navbar />
// // //                 <Spinner />
// // //             </Container>
// // //         );
// // //     }

// // //     return (
// // //         <Container>
// // //             <Navbar />
// // //             <MainSection>
// // //                 <GallerySection>
// // //                     <ThumbnailColumn>
// // //                         {productImages.map((img, index) => (
// // //                             <Thumbnail
// // //                                 key={index}
// // //                                 src={img}
// // //                                 alt={`thumb-${index}`}
// // //                                 active={selectedImage === img}
// // //                                 onClick={() => setSelectedImage(img)}
// // //                             />
// // //                         ))}
// // //                     </ThumbnailColumn>
// // //                     <MainImageWrap>
// // //                         <MainImage src={selectedImage || productImages[0]} alt={item.item_name} />
// // //                     </MainImageWrap>
// // //                 </GallerySection>

// // //                 <InfoSection>
// // //                     <ProductTitle>{item.item_name}</ProductTitle>
// // //                     <ProductMeta>
// // //                         <div><BoldText>Availability</BoldText> — {displayAvailability} In stock</div>
// // //                     </ProductMeta>

// // //                     <SectionTitle>Gender</SectionTitle>
// // //                     <SizeRow>
// // //                         {availableGenders.includes("m") && (
// // //                             <SizeBox selected={selectedGender === "m"} onClick={() => choosegen("m")}>Male</SizeBox>
// // //                         )}
// // //                         {availableGenders.includes("f") && (
// // //                             <SizeBox selected={selectedGender === "f"} onClick={() => choosegen("f")}>Female</SizeBox>
// // //                         )}
// // //                     </SizeRow>

// // //                     {selectedGender && (
// // //                         <>
// // //                             <SectionTitle>Color</SectionTitle>
// // //                             <ColorRow>
// // //                                 {filteredColors.map((col, index) => (
// // //                                     <ColorCircle
// // //                                         key={index}
// // //                                         bg={getColorCode(col.colour_description || col.colour_name)}
// // //                                         selected={selectedColor === col.colour_name}
// // //                                         onClick={() => handleColorChange(col)}
// // //                                         title={col.colour_description || col.colour_name}
// // //                                     />
// // //                                 ))}
// // //                             </ColorRow>
// // //                         </>
// // //                     )}

// // //                     <Divider />
// // //                     <SectionTitle>Size</SectionTitle>
// // //                     <SizeRow>
// // //                         {filteredSizes.map((sz, index) => (
// // //                             <SizeBox key={index} selected={selectedSize === sz} onClick={() => handleSizeChange(sz)}>
// // //                                 {formatSizeLabel(sz)}
// // //                             </SizeBox>
// // //                         ))}
// // //                     </SizeRow>

// // //                     <Divider />
// // //                     <ProductMeta>
// // //                         <BoldText>Price</BoldText> — {price ? `${Number(price).toLocaleString()} MMK` : "***Price will show after choosing item***"}
// // //                     </ProductMeta>

// // //                     <CartRow>
// // //                         <QtyBox>
// // //                             <QtyButton onClick={() => handleQuantity("dec")}><Remove /></QtyButton>
// // //                             <QtyValue>{quantity}</QtyValue>
// // //                             <QtyButton
// // //                                 onClick={() => handleQuantity("inc")}
// // //                                 disabled={!selectedSize || displayAvailability <= 0 || quantity >= displayAvailability}
// // //                             ><Add /></QtyButton>
// // //                         </QtyBox>

// // //                         {instockFlag == 1 ? (
// // //                             <AddCartButton onClick={handleClick}>Add to cart</AddCartButton>
// // //                         ) : (
// // //                             <AddCartButton style={{ opacity: 0.6, cursor: "not-allowed" }}>Stock Unavailable</AddCartButton>
// // //                         )}
// // //                     </CartRow>
// // //                 </InfoSection>
// // //             </MainSection>
// // //         </Container>
// // //     );
// // // };

// // // export default Product;


// // import { Add, Remove } from "@mui/icons-material";
// // import React, { useEffect, useMemo, useState } from "react";
// // import { useLocation, Link } from "react-router-dom";
// // import styled from "styled-components";
// // import Footer from "../../components/Footer";
// // import Navbar from "../../components/Navbar";
// // import { mobile } from "../../responsive";
// // import { addProduct } from "../../redux/cartRedux";
// // import { addOrder } from "../../redux/designRedux";
// // import { addWishlist } from "../../redux/wishlistRedux";
// // import { useSelector, useDispatch } from "react-redux";
// // import axios from "axios";
// // import CheckColor from "../../components/CheckColor";
// // import CheckSize from "../../components/CheckSize";
// // import sample from "../../files/sample.pdf";
// // import Swal from "sweetalert2";
// // import InstockDialog from "../../components/InstockDialog";
// // import { FaRegHeart } from "react-icons/fa6";
// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";
// // import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
// // import { useRef } from "react";
// // import ColorNav from "../../components/ColorNav";
// // import Spinner from "../../common/Spinner";

// // const Container = styled.div`
// //   background: #f7f7f7;
// // `;

// // const MainSection = styled.div`
// //   max-width: 1500px;
// //   margin: 0 auto;
// //   padding: 120px 40px 60px;
// //   display: flex;
// //   gap: 40px;
// //   align-items: flex-start;

// //   ${mobile({
// //     flexDirection: "column",
// //     padding: "100px 16px 30px",
// //     gap: "24px",
// //   })}
// // `;

// // const GallerySection = styled.div`
// //   flex: 1.2;
// //   display: flex;
// //   gap: 20px;
// //   align-items: flex-start;
// //   min-width: 0;

// //   ${mobile({
// //     flexDirection: "column-reverse",
// //   })}
// // `;

// // const ThumbnailColumn = styled.div`
// //   width: 80px;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 12px;

// //   ${mobile({
// //     width: "100%",
// //     flexDirection: "row",
// //     overflowX: "auto",
// //   })}
// // `;

// // const Thumbnail = styled.img`
// //   width: 68px;
// //   height: 82px;
// //   object-fit: cover;
// //   background: #eee;
// //   border: 3px solid ${({ active }) => (active ? "#156ea8" : "#e5e5e5")};
// //   border-radius: 10px;
// //   cursor: pointer;
// //   opacity: ${({ active }) => (active ? 1 : 0.85)};
// //   transition: all 0.2s ease;

// //   &:hover {
// //     opacity: 1;
// //     border-color: #999;
// //   }

// //   ${mobile({
// //     minWidth: "68px",
// //   })}
// // `;

// // const MainImageWrap = styled.div`
// //   flex: 1;
// //   background: #fff;
// // `;

// // const MainImage = styled.img`
// //   width: 100%;
// //   max-height: 560px;
// //   object-fit: cover;
// //   display: block;
// //   border: 2px solid #156ea8;
// //   border-radius: 20px;

// //   ${mobile({
// //     maxHeight: "500px",
// //   })}
// // `;

// // const InfoSection = styled.div`
// //   flex: 0.9;
// //   background: #f7f7f7;
// //   padding: 0 10px;

// //   ${mobile({
// //     padding: "0",
// //   })}
// // `;

// // const ProductTitle = styled.h1`
// //   font-size: 40px;
// //   font-weight: 400;
// //   line-height: 1.15;
// //   color: #034f96;
// //   margin: 0 0 18px;
// //   text-transform: capitalize;

// //   ${mobile({
// //     fontSize: "32px",
// //   })}
// // `;

// // const ProductPrice = styled.div`
// //   font-size: 25px;
// //   color: #666;
// //   margin-bottom: 28px;
// // `;

// // const ProductMeta = styled.div`
// //   font-size: 20px;
// //   line-height: 1.9;
// //   margin-bottom: 34px;
// //   text-transform: capitalize;
// //   color: #156ea8;

// //   ${mobile({
// //     fontSize: "16px",
// //     lineHeight: "1.8",
// //   })}
// // `;

// // const SectionTitle = styled.div`
// //   font-size: 20px;
// //   color: #156ea8;
// //   margin-bottom: 18px;

// //   ${mobile({
// //     fontSize: "22px",
// //   })}
// // `;

// // const ColorRow = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(5, 34px);
// //   gap: 12px;
// //   margin-top: 10px;
// // `;

// // const ColorCircle = styled.button`
// //   width: 34px;
// //   height: 34px;
// //   border-radius: 50%;
// //   border: ${({ selected }) => (selected ? "2px solid #111" : "1px solid #ccc")};
// //   background: ${({ bg }) => bg || "#ddd"};
// //   cursor: pointer;
// //   outline: none;
// // `;

// // const Divider = styled.hr`
// //   border: none;
// //   border-top: 1px solid #dddddd;
// //   margin: 5px 0;
// // `;

// // const SizeRow = styled.div`
// //   display: flex;
// //   gap: 10px;
// //   flex-wrap: wrap;
// //   margin-bottom: 5px;
// // `;

// // const SizeBox = styled.button`
// //   min-width: 52px;
// //   height: 44px;
// //   padding: 0 14px;
// //   border: 1px solid ${({ selected }) => (selected ? "#fff" : "#156ea8")};
// //   border-radius: 10px;
// //   background: ${({ selected }) => (selected ? "#156ea8" : "#fafafa")};
// //   color: ${({ selected }) => (selected ? "#fff" : "#156ea8")};
// //   cursor: pointer;
// //   font-size: 22px;
// //   text-transform: capitalize;
// //   transition: all 0.2s ease;

// //   &:hover {
// //     border-color: #156ea8;
// //   }

// //   ${mobile({
// //     fontSize: "16px",
// //     minWidth: "46px",
// //     height: "40px",
// //   })}
// // `;

// // const CartRow = styled.div`
// //   display: flex;
// //   gap: 18px;
// //   margin-top: 30px;
// //   align-items: center;
// //   width: 100%;

// //   ${mobile(`
// //     flex-wrap: wrap;
// //     gap: 14px;
// //   `)}
// // `;

// // const QtyBox = styled.div`
// //   width: 150px;
// //   height: 58px;
// //   border: 1px solid #156ea8;
// //   border-radius: 20px;
// //   display: flex;
// //   align-items: center;
// //   justify-content: space-between;
// //   background: #fafafa;
// //   padding: 0 14px;
// //   box-sizing: border-box;

// //   ${mobile(`
// //     flex: 1;
// //     height: 50px;
// //   `)}
// // `;

// // const QtyButton = styled.button`
// //   border: none;
// //   background: transparent;
// //   font-size: 24px;
// //   color: #666;
// //   cursor: pointer;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   padding: 0;

// //   &:disabled {
// //     opacity: 0.4;
// //     cursor: not-allowed;
// //   }
// // `;

// // const QtyValue = styled.span`
// //   font-size: 22px;
// //   font-weight: bold;
// //   color: #156ea8;
// // `;

// // const AddCartButton = styled.button`
// //   flex: 1;
// //   height: 58px;
// //   background: #156ea8;
// //   color: white;
// //   border: none;
// //   border-radius: 20px;
// //   font-size: 22px;
// //   font-weight: 600;
// //   cursor: pointer;
// //   transition: 0.2s ease;
// //   text-transform: capitalize;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;

// //   &:hover {
// //     background: #4f9ee8;
// //   }

// //   ${mobile(`
// //     width: 100%;
// //     order: 1;
// //     height: 54px;
// //     font-size: 18px;
// //   `)}
// // `;

// // const SmallText = styled.div`
// //   color: #156ea8;
// //   font-weight: bold;
// //   font-size: 15px;
// //   margin-top: 6px;
// // `;

// // const BoldText = styled.span`
// //   font-size: 22px;
// //   font-weight: bold;
// //   color: #034f96;
// // `;

// // const Product = () => {
// //     const dispatch = useDispatch();
// //     const url = useSelector((state) => state.user.url);
// //     const location = useLocation();

// //     const [item, setItem] = useState([]);
// //     const [units, setUnits] = useState([]);
// //     const [allUnits, setAllUnits] = useState([]);

// //     const [unitid, setUnitId] = useState("");
// //     const [unitname, setUnitName] = useState("");
// //     const [unitcode, setUnitCode] = useState("");
// //     const [quantity, setQuantity] = useState(0);
// //     const [color, setColor] = useState("");
// //     const [fabric, setFabric] = useState("");
// //     const [size, setSize] = useState("");
// //     const [price, setPrice] = useState(0);
// //     const [stock, setStock] = useState(0);
// //     const [design, setDesign] = useState("");
// //     const [isInstock, setIsInstock] = useState(false);
// //     const [instockFlag, setInstockFlag] = useState("");
// //     const [preorderFlag, setPreorderFlag] = useState("");
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [unitimg, setUnitImg] = useState("");
// //     const [selectedGender, setSelectedGender] = useState(null);
// //     const [selectedFabric, setSelectedFabric] = useState(null);
// //     const [selectedColor, setSelectedColor] = useState(null);
// //     const [selectedSize, setSelectedSize] = useState(null);

// //     const [filteredUnits, setFilteredUnits] = useState([]);
// //     const [filteredColors, setFilteredColors] = useState([]);
// //     const [filteredSizes, setFilteredSizes] = useState([]);
// //     const [primaryStoreUnit, setPrimaryStoreUnit] = useState([]);

// //     const [selectedImage, setSelectedImage] = useState("");

// //     const id = location.pathname.split("/")[2]; // e.g., "302" or "303"

// //     const formatSizeLabel = (sizeName) => {
// //         if (!sizeName) return "";
// //         const normalized = sizeName.toLowerCase().trim();
// //         if (normalized.includes("xxl")) return "XXL";
// //         if (normalized.includes("xl")) return "XL";
// //         if (normalized.includes("xs")) return "XS";
// //         if (normalized.includes("lg")) return "L";
// //         if (normalized.includes("sm")) return "S";
// //         if (normalized.includes("me")) return "M";
// //         return sizeName.toUpperCase();
// //     };

// //     const allStock = useMemo(() => {
// //         return allUnits.reduce((total, unit) => {
// //             return total + Number(unit.current_quantity || 0);
// //         }, 0);
// //     }, [allUnits]);

// //     useEffect(() => {
// //         const getProduct = () => {
// //             axios
// //                 .get(url + "/api/unitbyid_api/" + id)
// //                 .then((response) => {
// //                     setItem(response.data.item);
// //                     setDesign(response.data.item.item_name);
// //                     setUnits(response.data.counting_units || []);
// //                     setAllUnits(
// //                         response.data.counting_unit_all_update ||
// //                         response.data.counting_unit_all ||
// //                         []
// //                     );
// //                     setInstockFlag(response.data.valueofinstock);
// //                     setPreorderFlag(response.data.valueofpreorder);

// //                     setSelectedImage(
// //                         url + `/ecommerce/items/${response.data.item.photo_path || ""}`
// //                     );
// //                 })
// //                 .catch((error) => {
// //                     console.log(error);
// //                 })
// //                 .finally(() => {
// //                     setIsLoading(false);
// //                 });
// //         };

// //         getProduct();
// //     }, [id, url]);

// //     const handleQuantity = (type) => {
// //         setQuantity((prevQuantity) => {
// //             if (type === "dec") {
// //                 return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
// //             }
// //             if (!selectedSize || displayAvailability <= 0) return prevQuantity;
// //             if (type === "inc") {
// //                 return prevQuantity < displayAvailability ? prevQuantity + 1 : prevQuantity;
// //             }
// //             return prevQuantity;
// //         });
// //     };

// //     const handleClick = () => {
// //         if (!selectedSize || !selectedColor || !selectedGender) {
// //             Swal.fire({
// //                 title: "Please select options",
// //                 text: "Choose gender, color and size first.",
// //                 icon: "warning",
// //             });
// //             return;
// //         }

// //         if (stock === 0) {
// //             setIsInstock(true);
// //             const testname = `${item.item_name} ${selectedGender} ${fabric} ${color} ${size}`;
// //             const testqty = quantity;
// //             const testprice = price;
// //             const orderid = unitid;

// //             dispatch(addOrder({ orderid, testname, testqty, testprice }));
// //         } else {
// //             dispatch(
// //                 addProduct({
// //                     unitid,
// //                     unitname,
// //                     unitcode,
// //                     unitimg,
// //                     color,
// //                     size,
// //                     fabric,
// //                     quantity,
// //                     price,
// //                 })
// //             );

// //             // --- CROSS-SELL ALERTS FOR TARGET PRODUCTS ---
// //             let targetId = null;
// //             let suggestionMessage = "";

// //             if (id === "302") {
// //                 targetId = "303";
// //                 suggestionMessage = "You might also need our matching item (ID: 303)! Would you like to view it?";
// //             } else if (id === "303") {
// //                 targetId = "302";
// //                 suggestionMessage = "You might also need our matching item (ID: 302)! Would you like to view it?";
// //             }

// //             if (targetId) {
// //                 Swal.fire({
// //                     title: "Successfully added to cart!",
// //                     text: suggestionMessage,
// //                     icon: "success",
// //                     showCancelButton: true,
// //                     confirmButtonColor: "#156ea8",
// //                     cancelButtonColor: "#aaa",
// //                     confirmButtonText: "Go View Item",
// //                     cancelButtonText: "Stay Here"
// //                 }).then((result) => {
// //                     if (result.isConfirmed) {
// //                         window.location.href = `/product/${targetId}`;
// //                     }
// //                 });
// //             } else {
// //                 Swal.fire({
// //                     title: "Success!",
// //                     text: "Successfully added to cart.",
// //                     icon: "success",
// //                 });
// //             }
// //         }
// //     };

// //     const availableGenders = [...new Set(units.map((unit) => unit.gender_name))];

// //     const choosegen = (gender) => {
// //         setSelectedGender(gender);
// //         const filtered = allUnits.filter((unit) => unit.gender_name === gender);
// //         setFilteredUnits(filtered);

// //         const uniqueColors = [
// //             ...new Map(
// //                 filtered.map((unit) => [
// //                     unit.colour_name,
// //                     {
// //                         colour_name: unit.colour_name,
// //                         colour_description: unit.colour_description || unit.colour_name,
// //                     },
// //                 ])
// //             ).values(),
// //         ];

// //         setFilteredColors(uniqueColors);
// //         setSelectedColor(null);
// //         setSelectedSize(null);
// //         setFilteredSizes([]);
// //         setPrice(0);
// //         setStock(0);
// //     };

// //     const handleColorChange = (colorObj) => {
// //         setSelectedColor(colorObj.colour_name);
// //         setColor(colorObj.colour_name);

// //         const filtered = allUnits.filter(
// //             (unit) =>
// //                 unit.gender_name === selectedGender &&
// //                 unit.colour_name === colorObj.colour_name
// //         );

// //         setPrimaryStoreUnit(filtered);
// //         const sizes = [...new Set(filtered.map((unit) => unit.size_name))];
// //         setFilteredSizes(sizes);

// //         setSelectedSize(null);
// //         setPrice(0);
// //         setStock(0);

// //         if (filtered.length > 0) {
// //             const targetUnitId = filtered[0].id;
// //             axios
// //                 .get(`${url}/api/counting-unit/${targetUnitId}`)
// //                 .then((res) => {
// //                     if (res.data && res.data.image) {
// //                         setSelectedImage(url + res.data.image);
// //                     }
// //                 })
// //                 .catch((err) => console.error(err));
// //         }
// //     };

// //     const handleSizeChange = (sizeName) => {
// //         const filtered = primaryStoreUnit.filter((unit) => unit.size_name === sizeName);
// //         if (!filtered.length) return;

// //         const selectedUnit = filtered[0];
// //         setSelectedSize(sizeName);
// //         setSize(formatSizeLabel(selectedUnit.size_name));
// //         setPrice(selectedUnit.order_price);
// //         setStock(selectedUnit.current_quantity);
// //         setUnitId(selectedUnit.id);
// //         setUnitName(selectedUnit.unit_name);
// //         setUnitCode(selectedUnit.unit_code);
// //         setColor(selectedUnit.colour_name);
// //         setFabric(selectedUnit.fabric_name);
// //         setDesign(selectedUnit.design_name);
// //         setUnitImg(item.photo_path);
// //     };

// //     const productImages = useMemo(() => {
// //         if (!item?.photo_path) return [];
// //         const front = url + `/ecommerce/items/${item.photo_path}`;
// //         const left = url + `/ecommerce/items/${item.photo_path.replace("front", "left")}`;
// //         const right = url + `/ecommerce/items/${item.photo_path.replace("front", "right")}`;
// //         const body = url + `/ecommerce/items/${item.photo_path.replace("front", "body")}`;
// //         return [front, left, right, body];
// //     }, [item, url]);

// //     const getColorCode = (name) => {
// //         if (!name) return "#ccc";
// //         const value = name.toLowerCase().trim();
// //         if (value.includes("magenta")) return "#e54a7c";
// //         if (value.includes("pink")) return "#ff94b4";
// //         if (value.includes("purple")) return "#741bb5";
// //         if (value.includes("navy blue") || value.includes("navy")) return "#101646";
// //         if (value.includes("black")) return "#1f1f1f";
// //         if (value.includes("white")) return "#f5f5f5";
// //         return "#999";
// //     };

// //     const displayAvailability = selectedSize ? stock : allStock;

// //     if (isLoading) {
// //         return (
// //             <Container>
// //                 <Navbar />
// //                 <Spinner />
// //             </Container>
// //         );
// //     }

// //     return (
// //         <Container>
// //             <Navbar />
// //             <MainSection>
// //                 <GallerySection>
// //                     <ThumbnailColumn>
// //                         {productImages.map((img, index) => (
// //                             <Thumbnail
// //                                 key={index}
// //                                 src={img}
// //                                 alt={`thumb-${index}`}
// //                                 active={selectedImage === img}
// //                                 onClick={() => setSelectedImage(img)}
// //                             />
// //                         ))}
// //                     </ThumbnailColumn>
// //                     <MainImageWrap>
// //                         <MainImage src={selectedImage || productImages[0]} alt={item.item_name} />
// //                     </MainImageWrap>
// //                 </GallerySection>

// //                 <InfoSection>
// //                     <ProductTitle>{item.item_name}</ProductTitle>
// //                     <ProductMeta>
// //                         <div><BoldText>Availability</BoldText> — {displayAvailability} In stock</div>
// //                     </ProductMeta>

// //                     <SectionTitle>Gender</SectionTitle>
// //                     <SizeRow>
// //                         {availableGenders.includes("m") && (
// //                             <SizeBox selected={selectedGender === "m"} onClick={() => choosegen("m")}>Male</SizeBox>
// //                         )}
// //                         {availableGenders.includes("f") && (
// //                             <SizeBox selected={selectedGender === "f"} onClick={() => choosegen("f")}>Female</SizeBox>
// //                         )}
// //                     </SizeRow>

// //                     {selectedGender && (
// //                         <>
// //                             <SectionTitle>Color</SectionTitle>
// //                             <ColorRow>
// //                                 {filteredColors.map((col, index) => (
// //                                     <ColorCircle
// //                                         key={index}
// //                                         bg={getColorCode(col.colour_description || col.colour_name)}
// //                                         selected={selectedColor === col.colour_name}
// //                                         onClick={() => handleColorChange(col)}
// //                                         title={col.colour_description || col.colour_name}
// //                                     />
// //                                 ))}
// //                             </ColorRow>
// //                         </>
// //                     )}

// //                     <Divider />
// //                     <SectionTitle>Size</SectionTitle>
// //                     <SizeRow>
// //                         {filteredSizes.map((sz, index) => (
// //                             <SizeBox key={index} selected={selectedSize === sz} onClick={() => handleSizeChange(sz)}>
// //                                 {formatSizeLabel(sz)}
// //                             </SizeBox>
// //                         ))}
// //                     </SizeRow>

// //                     <Divider />
// //                     <ProductMeta>
// //                         <BoldText>Price</BoldText> — {price ? `${Number(price).toLocaleString()} MMK` : "***Price will show after choosing item***"}
// //                     </ProductMeta>

// //                     <CartRow>
// //                         <QtyBox>
// //                             <QtyButton onClick={() => handleQuantity("dec")}><Remove /></QtyButton>
// //                             <QtyValue>{quantity}</QtyValue>
// //                             <QtyButton
// //                                 onClick={() => handleQuantity("inc")}
// //                                 disabled={!selectedSize || displayAvailability <= 0 || quantity >= displayAvailability}
// //                             ><Add /></QtyButton>
// //                         </QtyBox>

// //                         {instockFlag == 1 ? (
// //                             <AddCartButton onClick={handleClick}>Add to cart</AddCartButton>
// //                         ) : (
// //                             <AddCartButton style={{ opacity: 0.6, cursor: "not-allowed" }}>Stock Unavailable</AddCartButton>
// //                         )}
// //                     </CartRow>
// //                 </InfoSection>
// //             </MainSection>
// //         </Container>
// //     );
// // };

// // export default Product;


// import { Add, Remove } from "@mui/icons-material";
// import React, { useEffect, useMemo, useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import styled from "styled-components";
// import Footer from "../../components/Footer";
// import Navbar from "../../components/Navbar";
// import { mobile } from "../../responsive";
// import { addProduct } from "../../redux/cartRedux";
// import { addOrder } from "../../redux/designRedux";
// import { addWishlist } from "../../redux/wishlistRedux";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import CheckColor from "../../components/CheckColor";
// import CheckSize from "../../components/CheckSize";
// import sample from "../../files/sample.pdf";
// import Swal from "sweetalert2";
// import InstockDialog from "../../components/InstockDialog";
// import { FaRegHeart } from "react-icons/fa6";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
// import { useRef } from "react";
// import ColorNav from "../../components/ColorNav";
// import Spinner from "../../common/Spinner";

// const Container = styled.div`
//   background: #f7f7f7;
// `;

// const MainSection = styled.div`
//   max-width: 1500px;
//   margin: 0 auto;
//   padding: 120px 40px 60px;
//   display: flex;
//   gap: 40px;
//   align-items: flex-start;

//   ${mobile({
//     flexDirection: "column",
//     padding: "100px 16px 30px",
//     gap: "24px",
//   })}
// `;

// const GallerySection = styled.div`
//   flex: 1.2;
//   display: flex;
//   gap: 20px;
//   align-items: flex-start;
//   min-width: 0;

//   ${mobile({
//     flexDirection: "column-reverse",
//   })}
// `;

// const ThumbnailColumn = styled.div`
//   width: 80px;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;

//   ${mobile({
//     width: "100%",
//     flexDirection: "row",
//     overflowX: "auto",
//   })}
// `;

// const Thumbnail = styled.img`
//   width: 68px;
//   height: 82px;
//   object-fit: cover;
//   background: #eee;
//   border: 3px solid ${({ active }) => (active ? "#156ea8" : "#e5e5e5")};
//   border-radius: 10px;
//   cursor: pointer;
//   opacity: ${({ active }) => (active ? 1 : 0.85)};
//   transition: all 0.2s ease;

//   &:hover {
//     opacity: 1;
//     border-color: #999;
//   }

//   ${mobile({
//     minWidth: "68px",
//   })}
// `;

// const MainImageWrap = styled.div`
//   flex: 1;
//   background: #fff;
// `;

// const MainImage = styled.img`
//   width: 100%;
//   max-height: 560px;
//   object-fit: cover;
//   display: block;
//   border: 2px solid #156ea8;
//   border-radius: 20px;

//   ${mobile({
//     maxHeight: "500px",
//   })}
// `;

// const InfoSection = styled.div`
//   flex: 0.9;
//   background: #f7f7f7;
//   padding: 0 10px;

//   ${mobile({
//     padding: "0",
//   })}
// `;

// const ProductTitle = styled.h1`
//   font-size: 40px;
//   font-weight: 400;
//   line-height: 1.15;
//   color: #034f96;
//   margin: 0 0 18px;
//   text-transform: capitalize;

//   ${mobile({
//     fontSize: "32px",
//   })}
// `;

// const ProductPrice = styled.div`
//   font-size: 25px;
//   color: #666;
//   margin-bottom: 28px;
// `;

// const ProductMeta = styled.div`
//   font-size: 20px;
//   line-height: 1.9;
//   margin-bottom: 34px;
//   text-transform: capitalize;
//   color: #156ea8;

//   ${mobile({
//     fontSize: "16px",
//     lineHeight: "1.8",
//   })}
// `;

// const SectionTitle = styled.div`
//   font-size: 20px;
//   color: #156ea8;
//   margin-bottom: 18px;

//   ${mobile({
//     fontSize: "22px",
//   })}
// `;

// const ColorRow = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 34px);
//   gap: 12px;
//   margin-top: 10px;
// `;

// const ColorCircle = styled.button`
//   width: 34px;
//   height: 34px;
//   border-radius: 50%;
//   border: ${({ selected }) => (selected ? "2px solid #111" : "1px solid #ccc")};
//   background: ${({ bg }) => bg || "#ddd"};
//   cursor: pointer;
//   outline: none;
// `;

// const Divider = styled.hr`
//   border: none;
//   border-top: 1px solid #dddddd;
//   margin: 5px 0;
// `;

// const SizeRow = styled.div`
//   display: flex;
//   gap: 10px;
//   flex-wrap: wrap;
//   margin-bottom: 5px;
// `;

// const SizeBox = styled.button`
//   min-width: 52px;
//   height: 44px;
//   padding: 0 14px;
//   border: 1px solid ${({ selected }) => (selected ? "#fff" : "#156ea8")};
//   border-radius: 10px;
//   background: ${({ selected }) => (selected ? "#156ea8" : "#fafafa")};
//   color: ${({ selected }) => (selected ? "#fff" : "#156ea8")};
//   cursor: pointer;
//   font-size: 22px;
//   text-transform: capitalize;
//   transition: all 0.2s ease;

//   &:hover {
//     border-color: #156ea8;
//   }

//   ${mobile({
//     fontSize: "16px",
//     minWidth: "46px",
//     height: "40px",
//   })}
// `;

// const CartRow = styled.div`
//   display: flex;
//   gap: 18px;
//   margin-top: 30px;
//   align-items: center;
//   width: 100%;

//   ${mobile(`
//     flex-wrap: wrap;
//     gap: 14px;
//   `)}
// `;

// const QtyBox = styled.div`
//   width: 150px;
//   height: 58px;
//   border: 1px solid #156ea8;
//   border-radius: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background: #fafafa;
//   padding: 0 14px;
//   box-sizing: border-box;

//   ${mobile(`
//     flex: 1;
//     height: 50px;
//   `)}
// `;

// const QtyButton = styled.button`
//   border: none;
//   background: transparent;
//   font-size: 24px;
//   color: #666;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0;

//   &:disabled {
//     opacity: 0.4;
//     cursor: not-allowed;
//   }
// `;

// const QtyValue = styled.span`
//   font-size: 22px;
//   font-weight: bold;
//   color: #156ea8;
// `;

// const AddCartButton = styled.button`
//   flex: 1;
//   height: 58px;
//   background: #156ea8;
//   color: white;
//   border: none;
//   border-radius: 20px;
//   font-size: 22px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: 0.2s ease;
//   text-transform: capitalize;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     background: #4f9ee8;
//   }

//   ${mobile(`
//     width: 100%;
//     order: 1;
//     height: 54px;
//     font-size: 18px;
//   `)}
// `;

// const SmallText = styled.div`
//   color: #156ea8;
//   font-weight: bold;
//   font-size: 15px;
//   margin-top: 6px;
// `;

// const BoldText = styled.span`
//   font-size: 22px;
//   font-weight: bold;
//   color: #034f96;
// `;

// const Product = () => {
//     const dispatch = useDispatch();
//     const url = useSelector((state) => state.user.url);
//     const cartProducts = useSelector((state) => state.cart.products || []);
//     const location = useLocation();

//     const [item, setItem] = useState([]);
//     const [units, setUnits] = useState([]);
//     const [allUnits, setAllUnits] = useState([]);

//     const [unitid, setUnitId] = useState("");
//     const [unitname, setUnitName] = useState("");
//     const [unitcode, setUnitCode] = useState("");
//     const [quantity, setQuantity] = useState(0);
//     const [color, setColor] = useState("");
//     const [fabric, setFabric] = useState("");
//     const [size, setSize] = useState("");
//     const [price, setPrice] = useState(0);
//     const [stock, setStock] = useState(0);
//     const [design, setDesign] = useState("");
//     const [isInstock, setIsInstock] = useState(false);
//     const [instockFlag, setInstockFlag] = useState("");
//     const [preorderFlag, setPreorderFlag] = useState("");
//     const [isLoading, setIsLoading] = useState(true);
//     const [unitimg, setUnitImg] = useState("");
//     const [selectedGender, setSelectedGender] = useState(null);
//     const [selectedColor, setSelectedColor] = useState(null);
//     const [selectedSize, setSelectedSize] = useState(null);

//     const [filteredUnits, setFilteredUnits] = useState([]);
//     const [filteredColors, setFilteredColors] = useState([]);
//     const [filteredSizes, setFilteredSizes] = useState([]);
//     const [primaryStoreUnit, setPrimaryStoreUnit] = useState([]);

//     const [selectedImage, setSelectedImage] = useState("");

//     const id = location.pathname.split("/")[2]; // e.g., "302" or "303"

//     const formatSizeLabel = (sizeName) => {
//         if (!sizeName) return "";
//         const normalized = sizeName.toLowerCase().trim();
//         if (normalized.includes("xxl")) return "XXL";
//         if (normalized.includes("xl")) return "XL";
//         if (normalized.includes("xs")) return "XS";
//         if (normalized.includes("lg")) return "L";
//         if (normalized.includes("sm")) return "S";
//         if (normalized.includes("me")) return "M";
//         return sizeName.toUpperCase();
//     };

//     const allStock = useMemo(() => {
//         return allUnits.reduce((total, unit) => {
//             return total + Number(unit.current_quantity || 0);
//         }, 0);
//     }, [allUnits]);

//     useEffect(() => {
//         const getProduct = () => {
//             axios
//                 .get(url + "/api/unitbyid_api/" + id)
//                 .then((response) => {
//                     setItem(response.data.item);
//                     setDesign(response.data.item.item_name);
//                     setUnits(response.data.counting_units || []);
//                     setAllUnits(
//                         response.data.counting_unit_all_update ||
//                         response.data.counting_unit_all ||
//                         []
//                     );
//                     setInstockFlag(response.data.valueofinstock);
//                     setPreorderFlag(response.data.valueofpreorder);

//                     setSelectedImage(
//                         url + `/ecommerce/items/${response.data.item.photo_path || ""}`
//                     );
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//                 .finally(() => {
//                     setIsLoading(false);
//                 });
//         };

//         getProduct();
//     }, [id, url]);

//     const handleQuantity = (type) => {
//         setQuantity((prevQuantity) => {
//             if (type === "dec") {
//                 return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
//             }
//             if (!selectedSize || displayAvailability <= 0) return prevQuantity;
//             if (type === "inc") {
//                 return prevQuantity < displayAvailability ? prevQuantity + 1 : prevQuantity;
//             }
//             return prevQuantity;
//         });
//     };

//     const handleClick = () => {
//     if (!selectedSize || !selectedColor || !selectedGender) {
//         Swal.fire({
//             title: "Please select options",
//             text: "Choose gender, color and size first.",
//             icon: "warning",
//         });
//         return;
//     }

//     if (stock === 0) {
//         setIsInstock(true);
//         const testname = `${item.item_name} ${selectedGender} ${fabric} ${color} ${size}`;
//         const testqty = quantity;
//         const testprice = price;
//         const orderid = unitid;

//         dispatch(addOrder({ orderid, testname, testqty, testprice }));
//     } else {
//         // 1. Pass 'productId' (the base ID '302' or '303') into the Redux payload
//         dispatch(
//             addProduct({
//                 unitid,
//                 unitname,
//                 unitcode,
//                 unitimg,
//                 color,
//                 size,
//                 fabric,
//                 quantity,
//                 price,
//                 productId: id // <-- Add this line here
//             })
//         );

//         // 2. Check the cart items using both 'productId' and fallback string checks
//         const has302 = id === "302" || cartProducts.some(p => 
//             String(p.productId) === "302" || 
//             String(p.unitcode).includes("302") || 
//             String(p.unitname).includes("302")
//         );
        
//         const has303 = id === "303" || cartProducts.some(p => 
//             String(p.productId) === "303" || 
//             String(p.unitcode).includes("303") || 
//             String(p.unitname).includes("303")
//         );
        
//         const bothInCart = has302 && has303;

//         let targetId = null;
//         let suggestionMessage = "";

//         // Only suggest if they don't have both items in the cart yet
//         if (!bothInCart) {
//             if (id === "302") {
//                 targetId = "303";
//                 suggestionMessage = "You might also need our matching item (ID: 303)! Would you like to view it?";
//             } else if (id === "303") {
//                 targetId = "302";
//                 suggestionMessage = "You might also need our matching item (ID: 302)! Would you like to view it?";
//             }
//         }

//         // 3. Show redirect alert OR standard "OK" alert
//         if (targetId) {
//             Swal.fire({
//                 title: "Successfully added to cart!",
//                 text: suggestionMessage,
//                 icon: "success",
//                 showCancelButton: true,
//                 confirmButtonColor: "#156ea8",
//                 cancelButtonColor: "#aaa",
//                 confirmButtonText: "Go View Item",
//                 cancelButtonText: "Stay Here"
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     window.location.href = `/product/${targetId}`;
//                 }
//             });
//         } else {
//             // This runs if they already have both items! Just a simple alert with an OK button.
//             Swal.fire({
//                 title: "Success!",
//                 text: "Successfully added to cart.",
//                 icon: "success",
//             });
//         }
//     }
// };

//     const availableGenders = [...new Set(units.map((unit) => unit.gender_name))];

//     const choosegen = (gender) => {
//         setSelectedGender(gender);
//         const filtered = allUnits.filter((unit) => unit.gender_name === gender);
//         setFilteredUnits(filtered);

//         const uniqueColors = [
//             ...new Map(
//                 filtered.map((unit) => [
//                     unit.colour_name,
//                     {
//                         colour_name: unit.colour_name,
//                         colour_description: unit.colour_description || unit.colour_name,
//                     },
//                 ])
//             ).values(),
//         ];

//         setFilteredColors(uniqueColors);
//         setSelectedColor(null);
//         setSelectedSize(null);
//         setFilteredSizes([]);
//         setPrice(0);
//         setStock(0);
//     };

//     // const handleColorChange = (colorObj) => {
//     //     setSelectedColor(colorObj.colour_name);
//     //     setColor(colorObj.colour_name);

//     //     const filtered = allUnits.filter(
//     //         (unit) =>
//     //             unit.gender_name === selectedGender &&
//     //             unit.colour_name === colorObj.colour_name
//     //     );

//     //     setPrimaryStoreUnit(filtered);
//     //     const sizes = [...new Set(filtered.map((unit) => unit.size_name))];
//     //     setFilteredSizes(sizes);

//     //     setSelectedSize(null);
//     //     setPrice(0);
//     //     setStock(0);

//     //     if (filtered.length > 0) {
//     //         const targetUnitId = filtered[0].id;
//     //         axios
//     //             .get(`${url}/api/counting-unit/${targetUnitId}`)
//     //             .then((res) => {
//     //                 if (res.data && res.data.image) {
//     //                     setSelectedImage(url + res.data.image);
//     //                 }
//     //             })
//     //             .catch((err) => console.error(err));
//     //     }
//     // };

//     const handleColorChange = (colorObj) => {
//     setSelectedColor(colorObj.colour_name);
//     setColor(colorObj.colour_name);

//     const filtered = allUnits.filter(
//         (unit) =>
//             unit.gender_name === selectedGender &&
//             unit.colour_name === colorObj.colour_name
//     );

//     setPrimaryStoreUnit(filtered);
//     const sizes = [...new Set(filtered.map((unit) => unit.size_name))];
//     setFilteredSizes(sizes);

//     setSelectedSize(null);
//     setPrice(0);
//     setStock(0);

//     if (filtered.length > 0) {
//         const targetUnitId = filtered[0].id;
//         axios
//             .get(`${url}/api/counting-unit/${targetUnitId}`)
//             .then((res) => {
//                 if (res.data && res.data.image) {
//                     setSelectedImage(url + res.data.image);
//                     // 🌟 FIX: Save the variant image relative path to use for the cart entry
//                     setUnitImg(res.data.image); 
//                 }
//             })
//             .catch((err) => console.error(err));
//     }
// };

//     // const handleSizeChange = (sizeName) => {
//     //     const filtered = primaryStoreUnit.filter((unit) => unit.size_name === sizeName);
//     //     if (!filtered.length) return;

//     //     const selectedUnit = filtered[0];
//     //     setSelectedSize(sizeName);
//     //     setSize(formatSizeLabel(selectedUnit.size_name));
//     //     setPrice(selectedUnit.order_price);
//     //     setStock(selectedUnit.current_quantity);
//     //     setUnitId(selectedUnit.id);
//     //     setUnitName(selectedUnit.unit_name);
//     //     setUnitCode(selectedUnit.unit_code);
//     //     setColor(selectedUnit.colour_name);
//     //     setFabric(selectedUnit.fabric_name);
//     //     setDesign(selectedUnit.design_name);
//     //     setUnitImg(item.photo_path);
//     // };

//     const handleSizeChange = (sizeName) => {
//     const filtered = primaryStoreUnit.filter((unit) => unit.size_name === sizeName);
//     if (!filtered.length) return;

//     const selectedUnit = filtered[0];
//     setSelectedSize(sizeName);
//     setSize(formatSizeLabel(selectedUnit.size_name));
//     setPrice(selectedUnit.order_price);
//     setStock(selectedUnit.current_quantity);
//     setUnitId(selectedUnit.id);
//     setUnitName(selectedUnit.unit_name);
//     setUnitCode(selectedUnit.unit_code);
//     setColor(selectedUnit.colour_name);
//     setFabric(selectedUnit.fabric_name);
//     setDesign(selectedUnit.design_name);
    
//     if (!unitimg) {
//         setUnitImg(`/ecommerce/items/${item.photo_path}`);
//     }
// };

//     const productImages = useMemo(() => {
//         if (!item?.photo_path) return [];
//         const front = url + `/ecommerce/items/${item.photo_path}`;
//         const left = url + `/ecommerce/items/${item.photo_path.replace("front", "left")}`;
//         const right = url + `/ecommerce/items/${item.photo_path.replace("front", "right")}`;
//         const body = url + `/ecommerce/items/${item.photo_path.replace("front", "body")}`;
//         return [front, left, right, body];
//     }, [item, url]);

//     const getColorCode = (name) => {
//         if (!name) return "#ccc";
//         const value = name.toLowerCase().trim();
//         if (value.includes("magenta")) return "#e54a7c";
//         if (value.includes("pink")) return "#ff94b4";
//         if (value.includes("purple")) return "#741bb5";
//         if (value.includes("navy blue") || value.includes("navy")) return "#101646";
//         if (value.includes("black")) return "#1f1f1f";
//         if (value.includes("white")) return "#f5f5f5";
//         return "#999";
//     };

//     const displayAvailability = selectedSize ? stock : allStock;

//     if (isLoading) {
//         return (
//             <Container>
//                 <Navbar />
//                 <Spinner />
//             </Container>
//         );
//     }

//     return (
//         <Container>
//             <Navbar />
//             <MainSection>
//                 <GallerySection>
//                     <ThumbnailColumn>
//                         {productImages.map((img, index) => (
//                             <Thumbnail
//                                 key={index}
//                                 src={img}
//                                 alt={`thumb-${index}`}
//                                 active={selectedImage === img}
//                                 onClick={() => setSelectedImage(img)}
//                             />
//                         ))}
//                     </ThumbnailColumn>
//                     <MainImageWrap>
//                         <MainImage src={selectedImage || productImages[0]} alt={item.item_name} />
//                     </MainImageWrap>
//                 </GallerySection>

//                 <InfoSection>
//                     <ProductTitle>{item.item_name}</ProductTitle>
//                     <ProductMeta>
//                         <div><BoldText>Availability</BoldText> — {displayAvailability} In stock</div>
//                     </ProductMeta>

//                     <SectionTitle>Gender</SectionTitle>
//                     <SizeRow>
//                         {availableGenders.includes("m") && (
//                             <SizeBox selected={selectedGender === "m"} onClick={() => choosegen("m")}>Male</SizeBox>
//                         )}
//                         {availableGenders.includes("f") && (
//                             <SizeBox selected={selectedGender === "f"} onClick={() => choosegen("f")}>Female</SizeBox>
//                         )}
//                     </SizeRow>

//                     {selectedGender && (
//                         <>
//                             <SectionTitle>Color</SectionTitle>
//                             <ColorRow>
//                                 {filteredColors.map((col, index) => (
//                                     <ColorCircle
//                                         key={index}
//                                         bg={getColorCode(col.colour_description || col.colour_name)}
//                                         selected={selectedColor === col.colour_name}
//                                         onClick={() => handleColorChange(col)}
//                                         title={col.colour_description || col.colour_name}
//                                     />
//                                 ))}
//                             </ColorRow>
//                         </>
//                     )}

//                     <Divider />
//                     <SectionTitle>Size</SectionTitle>
//                     <SizeRow>
//                         {filteredSizes.map((sz, index) => (
//                             <SizeBox key={index} selected={selectedSize === sz} onClick={() => handleSizeChange(sz)}>
//                                 {formatSizeLabel(sz)}
//                             </SizeBox>
//                         ))}
//                     </SizeRow>

//                     <Divider />
//                     <ProductMeta>
//                         <BoldText>Price</BoldText> — {price ? `${Number(price).toLocaleString()} MMK` : "***Price will show after choosing item***"}
//                     </ProductMeta>

//                     <CartRow>
//                         <QtyBox>
//                             <QtyButton onClick={() => handleQuantity("dec")}><Remove /></QtyButton>
//                             <QtyValue>{quantity}</QtyValue>
//                             <QtyButton
//                                 onClick={() => handleQuantity("inc")}
//                                 disabled={!selectedSize || displayAvailability <= 0 || quantity >= displayAvailability}
//                             ><Add /></QtyButton>
//                         </QtyBox>

//                         {instockFlag == 1 ? (
//                             <AddCartButton onClick={handleClick}>Add to cart</AddCartButton>
//                         ) : (
//                             <AddCartButton style={{ opacity: 0.6, cursor: "not-allowed" }}>Stock Unavailable</AddCartButton>
//                         )}
//                     </CartRow>

//                     {relatedpants && relatedpants.id && (
//                 <div style={{ marginTop: "30px" }}>
//                 <SectionTitle>Related Pants</SectionTitle>
//                 <Link
//                     to={`/product/${relatedpants.id}`}
//                     style={{ textDecoration: "none" }}
//                 >
//                     <RelatedCard style={{ maxWidth: "240px" }}>
//                         <RelatedImage
//                             src={url + `/ecommerce/items/${relatedpants.photo_path}`}
//                             alt={relatedpants.item_name}
//                         />
//                         <RelatedName>
//                             {relatedpants.item_name || relatedpants.name}
//                         </RelatedName>
//                     </RelatedCard>
//                 </Link>
//                 </div>
//             )}
//                 </InfoSection>
//             </MainSection>

//             <RelatedWrap>
//             <RelatedTitle>Related Products</RelatedTitle>

//             <ArrowWrapper>
//                 <ArrowButton
//                   className="left"
//                   onClick={() => scrollProducts("left")}
//                   disabled={currentSlide === 0}
//                   style={{
//                     opacity: currentSlide === 0 ? 0.3 : 1,
//                     cursor: currentSlide === 0 ? "not-allowed" : "pointer",
//                   }}
//                 >
//                   <IoMdArrowDropleftCircle />
//                 </ArrowButton>

//                 <ArrowButton
//                   className="right"
//                   onClick={() => scrollProducts("right")}
//                   disabled={currentSlide >= totalItems - visibleItems}
//                   style={{
//                     opacity: currentSlide >= totalItems - visibleItems ? 0.3 : 1,
//                     cursor:
//                       currentSlide >= totalItems - visibleItems
//                         ? "not-allowed"
//                         : "pointer",
//                   }}
//                 >
//                   <IoMdArrowDroprightCircle />
//                 </ArrowButton>

//                 <Carousel
//                   ref={carouselRef}
//                   responsive={relatedResponsive}
//                   arrows={false}
//                   infinite={false}
//                   keyBoardControl
//                   swipeable
//                   draggable
//                   showDots={false}
//                   containerClass="py-2"
//                   itemClass="px-2"
//                   transitionDuration={500}
//                   afterChange={(previousSlide, { currentSlide }) => {
//                     setCurrentSlide(currentSlide);
//                   }}
//                 >
//                     {relateditems.length !== 0 &&
//                       relateditems.items?.map((it) => (
//                         <RelatedCard key={it.id}>
//                           <Link
//                             to={`/product/${it.id}`}
//                             style={{ textDecoration: "none", color: "inherit" }}
//                           >
//                             <RelatedImage
//                               src={url + `/ecommerce/items/${it.photo_path}`}
//                               alt={it.item_name}
//                             />
//                             <RelatedName>{it.item_name || it.name}</RelatedName>
//                           </Link>
//                         </RelatedCard>
//                       ))}
//                 </Carousel>
//             </ArrowWrapper>
//         </RelatedWrap>

//         <Footer />

//         <CheckColor
//             name={selectedColor}
//             open={checkColor}
//             close={() => setCheckColor(false)}
//             item={item}
//         />

//         <InstockDialog open={isInstock} close={() => setIsInstock(false)} />
//         </Container>
//     );
// };

// export default Product;


import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { mobile } from "../../responsive";
import { addProduct } from "../../redux/cartRedux";
import { addOrder } from "../../redux/designRedux";
import { addWishlist } from "../../redux/wishlistRedux";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import CheckColor from "../../components/CheckColor";
import CheckSize from "../../components/CheckSize";
import sample from "../../files/sample.pdf";
import Swal from "sweetalert2";
import InstockDialog from "../../components/InstockDialog";
import { FaRegHeart } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import ColorNav from "../../components/ColorNav";
import Spinner from "../../common/Spinner";

// ==========================================
// 1. STYLED COMPONENTS (All defined here)
// ==========================================
const Container = styled.div`
  background: #f7f7f7;
`;

const MainSection = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 120px 40px 60px;
  display: flex;
  gap: 40px;
  align-items: flex-start;

  ${mobile({
    flexDirection: "column",
    padding: "100px 16px 30px",
    gap: "24px",
  })}
`;

const GallerySection = styled.div`
  flex: 1.2;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  min-width: 0;

  ${mobile({
    flexDirection: "column-reverse",
  })}
`;

const ThumbnailColumn = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${mobile({
    width: "100%",
    flexDirection: "row",
    overflowX: "auto",
  })}
`;

const Thumbnail = styled.img`
  width: 68px;
  height: 82px;
  object-fit: cover;
  background: #eee;
  border: 3px solid ${({ active }) => (active ? "#156ea8" : "#e5e5e5")};
  border-radius: 10px;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.85)};
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    border-color: #999;
  }

  ${mobile({
    minWidth: "68px",
  })}
`;

const MainImageWrap = styled.div`
  flex: 1;
  background: #fff;
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 560px;
  object-fit: cover;
  display: block;
  border: 2px solid #156ea8;
  border-radius: 20px;

  ${mobile({
    maxHeight: "500px",
  })}
`;

const InfoSection = styled.div`
  flex: 0.9;
  background: #f7f7f7;
  padding: 0 10px;

  ${mobile({
    padding: "0",
  })}
`;

const ProductTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 1.15;
  color: #034f96;
  margin: 0 0 18px;
  text-transform: capitalize;

  ${mobile({
    fontSize: "32px",
  })}
`;

const ProductMeta = styled.div`
  font-size: 20px;
  line-height: 1.9;
  margin-bottom: 34px;
  text-transform: capitalize;
  color: #156ea8;

  ${mobile({
    fontSize: "16px",
    lineHeight: "1.8",
  })}
`;

const SectionTitle = styled.div`
  font-size: 20px;
  color: #156ea8;
  margin-bottom: 18px;

  ${mobile({
    fontSize: "22px",
  })}
`;

const ColorRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 34px);
  gap: 12px;
  margin-top: 10px;
`;

const ColorCircle = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: ${({ selected }) => (selected ? "2px solid #111" : "1px solid #ccc")};
  background: ${({ bg }) => bg || "#ddd"};
  cursor: pointer;
  outline: none;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #dddddd;
  margin: 5px 0;
`;

const SizeRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const SizeBox = styled.button`
  min-width: 52px;
  height: 44px;
  padding: 0 14px;
  border: 1px solid ${({ selected }) => (selected ? "#fff" : "#156ea8")};
  border-radius: 10px;
  background: ${({ selected }) => (selected ? "#156ea8" : "#fafafa")};
  color: ${({ selected }) => (selected ? "#fff" : "#156ea8")};
  cursor: pointer;
  font-size: 22px;
  text-transform: capitalize;
  transition: all 0.2s ease;

  &:hover {
    border-color: #156ea8;
  }

  ${mobile({
    fontSize: "16px",
    minWidth: "46px",
    height: "40px",
  })}
`;

const CartRow = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 30px;
  align-items: center;
  width: 100%;

  ${mobile(`
    flex-wrap: wrap;
    gap: 14px;
  `)}
`;

const QtyBox = styled.div`
  width: 150px;
  height: 58px;
  border: 1px solid #156ea8;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fafafa;
  padding: 0 14px;
  box-sizing: border-box;

  ${mobile(`
    flex: 1;
    height: 50px;
  `)}
`;

const QtyButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const QtyValue = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #156ea8;
`;

const AddCartButton = styled.button`
  flex: 1;
  height: 58px;
  background: #156ea8;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #4f9ee8;
  }

  ${mobile(`
    width: 100%;
    order: 1;
    height: 54px;
    font-size: 18px;
  `)}
`;

const BoldText = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #034f96;
`;

// These styled definitions fix your 'react/jsx-no-undef' carousel errors
const RelatedWrap = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 40px;
`;

const RelatedTitle = styled.h2`
  font-size: 28px;
  color: #156ea8;
  margin-bottom: 20px;
`;

const ArrowWrapper = styled.div`
  position: relative;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: transparent;
  border: none;
  font-size: 40px;
  color: #156ea8;
  display: flex;
  align-items: center;
  justify-content: center;

  &.left {
    left: -25px;
  }
  &.right {
    right: -25px;
  }
`;

const RelatedCard = styled.div`
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const RelatedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const RelatedName = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

// Responsive layout configs for multi-carousel
const relatedResponsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
const Product = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    
    // Carousel navigation tracking ref
    const carouselRef = useRef(null);

    // Redux selectors
    const url = useSelector((state) => state.user.url);
    const cartProducts = useSelector((state) => state.cart.products || []);

    // Basic product & unit states
    const [item, setItem] = useState({});
    const [units, setUnits] = useState([]);
    const [allUnits, setAllUnits] = useState([]);

    // Selection property states
    const [unitid, setUnitId] = useState("");
    const [unitname, setUnitName] = useState("");
    const [unitcode, setUnitCode] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [fabric, setFabric] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [design, setDesign] = useState("");
    const [unitimg, setUnitImg] = useState("");

    // Interface triggers & status flags
    const [isInstock, setIsInstock] = useState(false);
    const [instockFlag, setInstockFlag] = useState("");
    const [preorderFlag, setPreorderFlag] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
    // Fix: checkColor modal trigger states
    const [checkColor, setCheckColor] = useState(false);

    // Variant logic filters
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [filteredUnits, setFilteredUnits] = useState([]);
    const [filteredColors, setFilteredColors] = useState([]);
    const [filteredSizes, setFilteredSizes] = useState([]);
    const [primaryStoreUnit, setPrimaryStoreUnit] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");

    // Fix: Related slider tracking state variables
    const [relatedpants, setRelatedPants] = useState(null);
    const [relateditems, setRelatedItems] = useState({ items: [] });
    const [currentSlide, setCurrentSlide] = useState(0);

    const id = location.pathname.split("/")[2];
    
    // Visual boundary configuration for slider items computation
    const visibleItems = 4;
    const totalItems = relateditems?.items?.length || 0;

    const formatSizeLabel = (sizeName) => {
        if (!sizeName) return "";
        const normalized = sizeName.toLowerCase().trim();
        if (normalized.includes("xxl")) return "XXL";
        if (normalized.includes("xl")) return "XL";
        if (normalized.includes("xs")) return "XS";
        if (normalized.includes("lg")) return "L";
        if (normalized.includes("sm")) return "S";
        if (normalized.includes("me")) return "M";
        return sizeName.toUpperCase();
    };

    const allStock = useMemo(() => {
        return allUnits.reduce((total, unit) => {
            return total + Number(unit.current_quantity || 0);
        }, 0);
    }, [allUnits]);

    useEffect(() => {
        const getProduct = () => {
            axios
                .get(url + "/api/unitbyid_api/" + id)
                .then((response) => {
                    setItem(response.data.item || {});
                    setDesign(response.data.item?.item_name || "");
                    setUnits(response.data.counting_units || []);
                    setAllUnits(
                        response.data.counting_unit_all_update ||
                        response.data.counting_unit_all ||
                        []
                    );
                    setInstockFlag(response.data.valueofinstock);
                    setPreorderFlag(response.data.valueofpreorder);

                    // Safely set related dataset parameters from responses if available
                    if (response.data.related_pants) setRelatedPants(response.data.related_pants);
                    if (response.data.related_items) setRelatedItems({ items: response.data.related_items });

                    setSelectedImage(
                        url + `/ecommerce/items/${response.data.item?.photo_path || ""}`
                    );
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };

        getProduct();
    }, [id, url]);

    const handleQuantity = (type) => {
        setQuantity((prevQuantity) => {
            if (type === "dec") {
                return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
            }
            if (!selectedSize || displayAvailability <= 0) return prevQuantity;
            if (type === "inc") {
                return prevQuantity < displayAvailability ? prevQuantity + 1 : prevQuantity;
            }
            return prevQuantity;
        });
    };

    // Fix: Product slider ref dispatcher method 
    const scrollProducts = (direction) => {
        if (carouselRef.current) {
            if (direction === "left") {
                carouselRef.current.previous();
            } else {
                carouselRef.current.next();
            }
        }
    };

    const handleClick = () => {
        if (!selectedSize || !selectedColor || !selectedGender) {
            Swal.fire({
                title: "Please select options",
                text: "Choose gender, color and size first.",
                icon: "warning",
            });
            return;
        }

        if (stock === 0) {
            setIsInstock(true);
            const testname = `${item.item_name} ${selectedGender} ${fabric} ${color} ${size}`;
            const testqty = quantity;
            const testprice = price;
            const orderid = unitid;

            dispatch(addOrder({ orderid, testname, testqty, testprice }));
        } else {
            dispatch(
                addProduct({
                    unitid,
                    unitname,
                    unitcode,
                    unitimg,
                    color,
                    size,
                    fabric,
                    quantity,
                    price,
                    productId: id 
                })
            );

            const has302 = id === "302" || cartProducts.some(p => 
                String(p.productId) === "302" || 
                String(p.unitcode).includes("302") || 
                String(p.unitname).includes("302")
            );
            
            const has303 = id === "303" || cartProducts.some(p => 
                String(p.productId) === "303" || 
                String(p.unitcode).includes("303") || 
                String(p.unitname).includes("303")
            );
            
            const bothInCart = has302 && has303;

            let targetId = null;
            let suggestionMessage = "";

            if (!bothInCart) {
                if (id === "302") {
                    targetId = "303";
                    suggestionMessage = "You might also need our matching item (ID: 303)! Would you like to view it?";
                } else if (id === "303") {
                    targetId = "302";
                    suggestionMessage = "You might also need our matching item (ID: 302)! Would you like to view it?";
                }
            }

            if (targetId) {
                Swal.fire({
                    title: "Successfully added to cart!",
                    text: suggestionMessage,
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#156ea8",
                    cancelButtonColor: "#aaa",
                    confirmButtonText: "Go View Item",
                    cancelButtonText: "Stay Here"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = `/product/${targetId}`;
                    }
                });
            } else {
                Swal.fire({
                    title: "Success!",
                    text: "Successfully added to cart.",
                    icon: "success",
                });
            }
        }
    };

    const availableGenders = [...new Set(units.map((unit) => unit.gender_name))];

    const choosegen = (gender) => {
        setSelectedGender(gender);
        const filtered = allUnits.filter((unit) => unit.gender_name === gender);
        setFilteredUnits(filtered);

        const uniqueColors = [
            ...new Map(
                filtered.map((unit) => [
                    unit.colour_name,
                    {
                        colour_name: unit.colour_name,
                        colour_description: unit.colour_description || unit.colour_name,
                    },
                ])
            ).values(),
        ];

        setFilteredColors(uniqueColors);
        setSelectedColor(null);
        setSelectedSize(null);
        setFilteredSizes([]);
        setPrice(0);
        setStock(0);
    };

    const handleColorChange = (colorObj) => {
        setSelectedColor(colorObj.colour_name);
        setColor(colorObj.colour_name);

        const filtered = allUnits.filter(
            (unit) =>
                unit.gender_name === selectedGender &&
                unit.colour_name === colorObj.colour_name
        );

        setPrimaryStoreUnit(filtered);
        const sizes = [...new Set(filtered.map((unit) => unit.size_name))];
        setFilteredSizes(sizes);

        setSelectedSize(null);
        setPrice(0);
        setStock(0);

        if (filtered.length > 0) {
            const targetUnitId = filtered[0].id;
            axios
                .get(`${url}/api/counting-unit/${targetUnitId}`)
                .then((res) => {
                    if (res.data && res.data.image) {
                        setSelectedImage(url + res.data.image);
                        setUnitImg(res.data.image); 
                    }
                })
                .catch((err) => console.error(err));
        }
    };

    const handleSizeChange = (sizeName) => {
        const filtered = primaryStoreUnit.filter((unit) => unit.size_name === sizeName);
        if (!filtered.length) return;

        const selectedUnit = filtered[0];
        setSelectedSize(sizeName);
        setSize(formatSizeLabel(selectedUnit.size_name));
        setPrice(selectedUnit.order_price);
        setStock(selectedUnit.current_quantity);
        setUnitId(selectedUnit.id);
        setUnitName(selectedUnit.unit_name);
        setUnitCode(selectedUnit.unit_code);
        setColor(selectedUnit.colour_name);
        setFabric(selectedUnit.fabric_name);
        setDesign(selectedUnit.design_name);
        
        if (!unitimg && item.photo_path) {
            setUnitImg(`/ecommerce/items/${item.photo_path}`);
        }
    };

    const productImages = useMemo(() => {
        if (!item?.photo_path) return [];
        const front = url + `/ecommerce/items/${item.photo_path}`;
        const left = url + `/ecommerce/items/${item.photo_path.replace("front", "left")}`;
        const right = url + `/ecommerce/items/${item.photo_path.replace("front", "right")}`;
        const body = url + `/ecommerce/items/${item.photo_path.replace("front", "body")}`;
        return [front, left, right, body];
    }, [item, url]);

    const getColorCode = (name) => {
        if (!name) return "#ccc";
        const value = name.toLowerCase().trim();
        if (value.includes("magenta")) return "#e54a7c";
        if (value.includes("pink")) return "#ff94b4";
        if (value.includes("purple")) return "#741bb5";
        if (value.includes("navy blue") || value.includes("navy")) return "#101646";
        if (value.includes("black")) return "#1f1f1f";
        if (value.includes("white")) return "#f5f5f5";
        return "#999";
    };

    const displayAvailability = selectedSize ? stock : allStock;

    if (isLoading) {
        return (
            <Container>
                <Navbar />
                <Spinner />
            </Container>
        );
    }

    return (
        <Container>
            <Navbar />
            <MainSection>
                <GallerySection>
                    <ThumbnailColumn>
                        {productImages.map((img, index) => (
                            <Thumbnail
                                key={index}
                                src={img}
                                alt={`thumb-${index}`}
                                active={selectedImage === img}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </ThumbnailColumn>
                    <MainImageWrap>
                        <MainImage src={selectedImage || productImages[0]} alt={item.item_name} />
                    </MainImageWrap>
                </GallerySection>

                <InfoSection>
                    <ProductTitle>{item.item_name}</ProductTitle>
                    <ProductMeta>
                        <div><BoldText>Availability</BoldText> — {displayAvailability} In stock</div>
                    </ProductMeta>

                    <SectionTitle>Gender</SectionTitle>
                    <SizeRow>
                        {availableGenders.includes("m") && (
                            <SizeBox selected={selectedGender === "m"} onClick={() => choosegen("m")}>Male</SizeBox>
                        )}
                        {availableGenders.includes("f") && (
                            <SizeBox selected={selectedGender === "f"} onClick={() => choosegen("f")}>Female</SizeBox>
                        )}
                    </SizeRow>

                    {selectedGender && (
                        <>
                            <SectionTitle>Color</SectionTitle>
                            <ColorRow>
                                {filteredColors.map((col, index) => (
                                    <ColorCircle
                                        key={index}
                                        bg={getColorCode(col.colour_description || col.colour_name)}
                                        selected={selectedColor === col.colour_name}
                                        onClick={() => handleColorChange(col)}
                                        title={col.colour_description || col.colour_name}
                                    />
                                ))}
                            </ColorRow>
                        </>
                    )}

                    <Divider />
                    <SectionTitle>Size</SectionTitle>
                    <SizeRow>
                        {filteredSizes.map((sz, index) => (
                            <SizeBox key={index} selected={selectedSize === sz} onClick={() => handleSizeChange(sz)}>
                                {formatSizeLabel(sz)}
                            </SizeBox>
                        ))}
                    </SizeRow>

                    <Divider />
                    <ProductMeta>
                        <BoldText>Price</BoldText> — {price ? `${Number(price).toLocaleString()} MMK` : "***Price will show after choosing item***"}
                    </ProductMeta>

                    <CartRow>
                        <QtyBox>
                            <QtyButton onClick={() => handleQuantity("dec")}><Remove /></QtyButton>
                            <QtyValue>{quantity}</QtyValue>
                            <QtyButton
                                onClick={() => handleQuantity("inc")}
                                disabled={!selectedSize || displayAvailability <= 0 || quantity >= displayAvailability}
                            ><Add /></QtyButton>
                        </QtyBox>

                        {instockFlag == 1 ? (
                            <AddCartButton onClick={handleClick}>Add to cart</AddCartButton>
                        ) : (
                            <AddCartButton style={{ opacity: 0.6, cursor: "not-allowed" }}>Stock Unavailable</AddCartButton>
                        )}
                    </CartRow>

                    {relatedpants && relatedpants.id && (
                        <div style={{ marginTop: "30px" }}>
                            <SectionTitle>Related Pants</SectionTitle>
                            <Link to={`/product/${relatedpants.id}`} style={{ textDecoration: "none" }}>
                                <RelatedCard style={{ maxWidth: "240px" }}>
                                    <RelatedImage
                                        src={url + `/ecommerce/items/${relatedpants.photo_path}`}
                                        alt={relatedpants.item_name}
                                    />
                                    <RelatedName>
                                        {relatedpants.item_name || relatedpants.name}
                                    </RelatedName>
                                </RelatedCard>
                            </Link>
                        </div>
                    )}
                </InfoSection>
            </MainSection>

            <RelatedWrap>
                <RelatedTitle>Related Products</RelatedTitle>

                <ArrowWrapper>
                    <ArrowButton
                      className="left"
                      onClick={() => scrollProducts("left")}
                      disabled={currentSlide === 0}
                      style={{
                        opacity: currentSlide === 0 ? 0.3 : 1,
                        cursor: currentSlide === 0 ? "not-allowed" : "pointer",
                      }}
                    >
                      <IoMdArrowDropleftCircle />
                    </ArrowButton>

                    <ArrowButton
                      className="right"
                      onClick={() => scrollProducts("right")}
                      disabled={currentSlide >= totalItems - visibleItems}
                      style={{
                        opacity: currentSlide >= totalItems - visibleItems ? 0.3 : 1,
                        cursor: currentSlide >= totalItems - visibleItems ? "not-allowed" : "pointer",
                      }}
                    >
                      <IoMdArrowDroprightCircle />
                    </ArrowButton>

                    <Carousel
                      ref={carouselRef}
                      responsive={relatedResponsive}
                      arrows={false}
                      infinite={false}
                      keyBoardControl
                      swipeable
                      draggable
                      showDots={false}
                      containerClass="py-2"
                      itemClass="px-2"
                      transitionDuration={500}
                      afterChange={(previousSlide, { currentSlide }) => {
                        setCurrentSlide(currentSlide);
                      }}
                    >
                        {relateditems.items && relateditems.items.map((it) => (
                            <RelatedCard key={it.id}>
                              <Link
                                to={`/product/${it.id}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                              >
                                <RelatedImage
                                  src={url + `/ecommerce/items/${it.photo_path}`}
                                  alt={it.item_name}
                                />
                                <RelatedName>{it.item_name || it.name}</RelatedName>
                              </Link>
                            </RelatedCard>
                        ))}
                    </Carousel>
                </ArrowWrapper>
            </RelatedWrap>

            <Footer />

            <CheckColor
                name={selectedColor}
                open={checkColor}
                close={() => setCheckColor(false)}
                item={item}
            />

            <InstockDialog open={isInstock} close={() => setIsInstock(false)} />
        </Container>
    );
};

export default Product;