// import { Add, Remove } from '@mui/icons-material';
// import React, { useEffect, useState } from 'react';
// import { useLocation,Link} from 'react-router-dom';
// import styled from 'styled-components';
// import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';
// import { mobile } from "../../responsive";
// import { addProduct } from "../../redux/cartRedux";
// import { addOrder} from "../../redux/designRedux";
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import CheckColor from '../../components/CheckColor';
// import CheckSize from '../../components/CheckSize';
// import sample from '../../files/sample.pdf';
// import Swal from 'sweetalert2';
// import InstockDialog from '../../components/InstockDialog';
// import FilterColorWithUnitId from '../filter-color.component';
// import FilterSizeWithUnitId from '../filter-size.component';


// const Container = styled.div``
// const Wrapper = styled.div`
//     padding: 50px;
//     display: flex;
//     ${mobile({ padding: "10px", flexDirection: "column" })}
// `
// const ImgContainer = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
// `
// const SmallImgContainer = styled.div`
//     display: flex;
//     margin-top: 20px;
// `

// const SmallImgContainerOne = styled.div`
//     max-width: 90vw;
//     display: flex;
//     overflow-y: hidden; 
//     overflow-x: scroll; 
// `

// const Input = styled.input`
// `
// const Lable = styled.label`
//     font-size : 18px;
// `

// const MainImage = styled.img`
//     width: 500px;
//     height: auto;
//     object-fit: contain;
    
//     ${mobile({ height: "50%" })}
// `
// const SmallImage = styled.img`
//     width: 34%;
//     height: auto;
//     max-height: 191.5px;
//     object-fit: cover;
//     ${mobile({ height: "50%" })}
// `

// const SmallImageOne = styled.img`
//     width: 100%;
//     min-width: 250px;
//     min-height: 250px;
//     max-height: 250px;
//     object-fit: contain;
//     ${mobile({ height: "50%" })}
// `

// const InfoContainer = styled.div`
//     flex: 1;
//     padding: 0px 50px;
//     ${mobile({ padding: "10px" })}
// `
// const Title = styled.h1`
//     font-weight: 200;
// `
// const Desc = styled.p`
//     margin: 20px 0px;
// `

// const RowContainer = styled.div`
//     display: flex;
//     align-items: center;
//     margin-top: 20px;
// `

// const PriceLabel = styled.label`
//     font-size: 25px;
//     font-weight:bold;
// `

// const Price = styled.span`
//     font-weight: 100;
//     font-size: 25px;
//     margin-left: 10px;
// `

// const StockLabel = styled.label`
//     font-size: 25px;
//     font-weight:bold;
//     margin-left:10px;
// `

// const Stock = styled.span`
//     font-weight: 100;
//     font-size: 25px;
//     margin-left:10px;
// `
// const FilterContainer = styled.div`
//     width: 50%;
//     margin: 30px 0px;
//     display: flex;
//     justify-content: space-between;
//     ${mobile({ width: "100%" })}
// `

// const Filter = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-left: 10px;
// `
// const FilterTitle = styled.span`
//     font-size: 20px;
//     font-weight: 200;
// `

// const FilterFabric = styled.select`
//     margin-left: 10px;
//     padding: 5px;
// `
// const AddContainer = styled.div`
// width: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     ${mobile({ width: "100%" })}
// `

// const AmountContainer = styled.div`
//     display: flex;
//     align-items: center;
//     font-weight: 700;
// `
// const Amount = styled.span`
//     width: 30px;
//     height: 30px;
//     border-radius:10px;
//     border: 1px solid teal; 
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0px 5px;
// `
// const Button = styled.button`
//     padding:10px;
//     border: 1px solid teal;
//     background-color: white;
//     cursor: pointer;

//     &:hover{
//         background-color: teal;
//         color: white;
//     }
// `
// const DivF = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-item: center;
//     justify-content: center;
// `
// const Check = styled.p`
//     background-color: #027f9d;
//     margin-left: 5px;
//     color: #ffffff;
//     border-radius: 3px;
//     padding:3px;
//     cursor: pointer;
// `
// const DownloadPdf = styled.a`
//     font-size: 20px;
//     color: #027f9d;
//     text-decoration: none;
//     margin-top: 30px;
//     margin-left:40px;
//     padding-left: 20px;
//     border-radius: 3px;
//     cursor: pointer;
// `
// const SmallImgName = styled.div`
//     font-size: 20px;
//     color: #111111;
// `
// const Opt = styled.option`

// `

// const Product = () => {
//     const [checkColor, setCheckColor] = useState(false);
//     const [checkSize, setCheckSize] = useState(false);
//     const dispatch = useDispatch();
//     const url= useSelector(state => state.user.url);
//     const location = useLocation();
//     const [item, setItem] = useState([]);
//     const [relateditems, setRelatedItems] = useState([]);
//     const [relatedpants, setRelatedPants] = useState([]);
//     const [units, setUnits] = useState([]);
//     const [unitid, setUnitId] = useState('');
//     const [unitname, setUnitName] = useState('');
//     const [unitcode, setUnitCode] = useState('');
//     const [quantity, setQuantity] = useState(1);
//     const [color, setColor] = useState();
//     const [fabric, setFabric] = useState('');
//     const [size, setSize] = useState("");
//     const [price, setPrice] = useState(0);
//     const [stock, setStock] = useState(0);
//     const [design, setDesign] = useState('');
//     const [isInstock, setIsInstock] = useState(false);
//     const [instockFlag, setInstockFlag] = useState("");
//     const [preorderFlag, setPreorderFlag] = useState("");
//     const [isLoading, setIsLoading] = useState(true);
//     const [unitimg, setUnitImg] = useState("");
//     const [gendername, setGenderName] = useState('');
//     const [butBackColor, setBututBackColor] = useState('white');
//     const [butColor, setBututColor] = useState('teal');
//     const [selectedGender, setSelectedGender] = useState(null);
//     const [selectedFabric, setSelectedFabric] = useState(null);
//     const [selectedColor, setSelectedColor] = useState(null);
//     const [selectedSize, setSelectedSize] = useState(null);

//     const [filteredUnits, setFilteredUnits] = useState([]);
//     const [filteredFabrics, setFilteredFabrics] = useState([]);
//     const [filteredColors, setFilteredColors] = useState([]);
//     const [filteredSizes, setFilteredSizes] = useState([]);
//     const [primaryStoreUnit, setPrimaryStoreUnit] = useState([]);
//     const design_name = location.pathname.split("/")[2];
//     const cheColor = () => {
//         setCheckColor(true);
//     }
//     console.log('units is the ',units);
//     const handleSizeChange = (size) => {
//         const filtered = primaryStoreUnit.filter(unit => unit.size_name === size);
//         setSelectedSize(size);
//         setPrice(filtered[0].order_price);
//         setStock(filtered[0].current_quantity);
//         setUnitId(filtered[0].id)
//         setUnitName(filtered[0].unit_name)
//         setUnitCode(filtered[0].unit_code)
//         setQuantity(quantity)
//         setColor(filtered[0].colour_name)
//         setFabric(filtered[0].fabric_name)
//         setSize(filtered[0].size_name)
//         setPrice(filtered[0].order_price)
//         setStock(filtered[0].current_quantity)
//         setDesign(filtered[0].design_name)
//         setUnitImg(item.photo_path)

//     }
//     const id = location.pathname.split("/")[2];
//     useEffect(() => {
//         const getProduct = () => {
//             axios.get(url+"/api/unitbyid_api/" + id)
//                 .then((response) => {
//                     setItem(response.data.item);
//                     setDesign(response.data.item.item_name);
//                     setUnits(response.data.counting_units);
                    
//                     setInstockFlag(response.data.valueofinstock);
//                     console.log('response.data.valueofinstock',response.data.valueofinstock);
//                     console.log('hay');
//                     console.log(response.data.valueofinstock);

//                     setPreorderFlag(response.data.valueofpreorder);
//                     console.log(preorderFlag);

//                     const obj = {
//                         'category_id': response.data.item.category_id,
//                         'subcategory_id': response.data.item.sub_category_id,
//                         'item_id': response.data.item.id,
//                     }
//                     const obj1={
//                         'related_pant_id':response.data.item.related_pant_id
//                     }
//                     // console.log('pant data is',obj1);

//                     axios.post(url+'/api/productlineitems_api', obj)
//                         .then(res => {
//                             console.log('related data is',res);
//                             setRelatedItems(res.data);
                            
//                         }).catch(err => {
//                             console.log(err);
//                         })

//                         axios.post(url+'/api/productlinepants_api', obj1)
//                         .then(res => {
//                             console.log('related Pant data is',res.data);
//                             setRelatedPants(res.data);
//                             // console.log(res.data);
//                         }).catch(err => {
//                             console.log(err);
//                         }).finally(err => {
//                             setIsLoading(false);
//                         })
//                     }).catch((error) => console.log(error));
//         }
//         getProduct();
//     }, [id]);

//     // useEffect(() => {
//     //     // customer change specification
//     //     units.map((unit) => {
//     //         if (unit.size_name == size && unit.colour_name == color && unit.fabric_name == fabric) {
//     //             // setPrice(unit.order_price);
//     //             // setStock(unit.current_quantity);
//     //             setUnitId(unit.id);
//     //             setUnitName(unit.unit_name);
//     //             setUnitCode(unit.unit_code);
//     //             return 1;
//     //         }
//     //     })
//     // }, [color, fabric, size]);
//     // const handleQuantity = (type) => {
//     //     if (type === "dec") {
//     //         quantity > 1 && setQuantity(quantity - 1);
//     //     } else {
//     //         setQuantity(quantity + 1);
//     //     }
//     // }
//     const handleQuantity = (type) => {
//         setQuantity(prevQuantity => {
//             if (type === "dec") {
//                 return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
//             } else {
//                 return prevQuantity + 1;
//             }
//         });
//     };

//     // const handleClick = () => {
//     //     if(stock == 0){
//     //         setIsInstock(true);
//     //         let testname = item.item_name+' '+gendername+' '+fabric+' '+color+' '+size;
//     //         let testqty = quantity;
//     //         let testprice = price;
//     //         let orderid  = unitid;
//     //         // alert(testname,testqty);
//     //         dispatch(addOrder({orderid,testname,testqty,testprice}));
//     //     }else{
//     //         dispatch(addProduct({ unitid, unitname, unitcode, unitimg, color, size, fabric, quantity, price }));
//     //         Swal.fire({
//     //             title:  "Success!",
//     //             text: "Successfully Add to Cart.",
//     //             type: 'success',    
//     //             });
//     //     }
//     // }

//     const handleClick = () => {
//         if (stock === 0) {
//             setIsInstock(true);
//             const testname = `${item.item_name} ${gendername} ${fabric} ${color} ${size}`;
//             const testqty = quantity;
//             const testprice = price;
//             const orderid = unitid;
        
//             // Dispatch the order action with the necessary details
//             dispatch(addOrder({ orderid, testname, testqty, testprice }));
//         } else {
//             // Dispatch the addProduct action to add the product to the cart
//             dispatch(addProduct({ unitid, unitname, unitcode, unitimg, color, size, fabric, quantity, price }));
        
//             // Show a success message
//             Swal.fire({
//                 title: "Success!",
//                 text: "Successfully added to cart.",
//                 icon: 'success',
//             });
//         }
//     }


//     const change_photo = () => {
//         const hel = document.getElementById('hel').src;
//         const main = document.getElementById('main').src;
//         document.getElementById('hel').src = main;
//         document.getElementById('main').src = hel;
//     }

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     const availableGenders = [...new Set(units.map(unit => unit.gender_name))];

//     const choosegen = (gender) => {
//         setSelectedGender(gender);

//         // Filter units based on the selected gender
//         const filtered = units.filter(unit => unit.gender_name === gender);
//         setFilteredUnits(filtered);

//         // Extract unique fabrics from the filtered units
//         const fabrics = [...new Set(filtered.map(unit => unit.fabric_name))];
//         setFilteredFabrics(fabrics);

//         // Reset further selections
//         setSelectedFabric(null);
//         setSelectedColor(null);
//         setSelectedSize(null);
//     };

//     const ChangeFabric = (fabric) => {
//         setSelectedFabric(fabric);

//         // Filter units based on the selected gender and fabric
//         const filtered = filteredUnits.filter(unit => unit.fabric_name === fabric);

//         // Extract unique colors from the filtered units
//         const colors = [...new Set(filtered.map(unit => unit.colour_name))];
//         setFilteredColors(colors);

//         // Reset further selections
//         setSelectedColor(null);
//         setSelectedSize(null);
//     };

//     const handleColorChange = (color) => {
//         setSelectedColor(color);

//         // Filter units based on the selected gender, fabric, and color
//         const filtered = filteredUnits.filter(unit =>
//             unit.fabric_name === selectedFabric && unit.colour_name === color
//         );
//         setPrimaryStoreUnit(filtered);
//         console.log('this is the filter of handleColorChange',filtered);

//         // Extract unique sizes from the filtered units
//         const sizes = [...new Set(filtered.map(unit => unit.size_name))];
//         setFilteredSizes(sizes);

//         // Reset size selection
//         setSelectedSize(null);
//     };

//     console.log('filteredSizes',filteredSizes);
//     console.log('filteredUnits',filteredUnits);
//     console.log('item data is the',item);

//     return (
//         <Container>
//         <Navbar />
//         <Wrapper style={{ marginTop: '100px' }}>
//             <ImgContainer>

//                 <MainImage src={url+`/ecommerce/items/${item.photo_path}`} id='main' />

//                 <SmallImgContainer>
//                     <SmallImage src={url+`/ecommerce/items/${item.photo_path?.replace("front", "left")}`} onClick={change_photo} id='' />
//                     <SmallImage src={url+`/ecommerce/items/${item.photo_path?.replace("front", "right")}`} onClick={change_photo} id='' />
//                     <SmallImage src={url+`/ecommerce/items/${item.photo_path?.replace("front", "body")}`} onClick={change_photo} id='hel' />
//                 </SmallImgContainer>

//             </ImgContainer>
//             <InfoContainer>
//                 <Title id="item_name">{item.item_name}</Title>
//                 <Desc>Minimum Order Quantity : 30</Desc>
//                 <Desc>Lead Time : 2 weeks</Desc>
//                 {
//                 preorderFlag == 1 ? <Link to={'/order/'+item.item_name} state={{units}}><Button>Make Order</Button></Link> : 'Preorder Unavaliable!'
//                 }
//                 <RowContainer>
//                     <PriceLabel>Price: </PriceLabel>
//                     <Price>{price}</Price>
//                     <StockLabel>Stock: </StockLabel>
//                     <Stock>{stock}</Stock>
//                 </RowContainer>
//                 <FilterContainer>
//                     {/* Gender Filter */}
//                     <Filter className='float-left'>
//                             <FilterTitle>Gender</FilterTitle>
//                         <DivF>
//                             {availableGenders.includes("m") && (
//                                 <>
//                                     <Input type="radio" name="genderdata" id='r1' onClick={() => choosegen("m")} />
//                                     <Lable className='mt-2 px-2'>Male</Lable>
//                                 </>
//                             )}
//                             {availableGenders.includes("f") && (
//                                 <>
//                                     <Input type="radio" name="genderdata" id='r2' onClick={() => choosegen("f")} />
//                                     <Lable className='mt-2 px-2'>Female</Lable>
//                                 </>
//                             )}
//                             {availableGenders.includes("un") && (
//                                 <>
//                                     <Input type="radio" name="genderdata" id='r3' onClick={() => choosegen("un")} />
//                                     <Lable className='mt-2 px-2'>Uni</Lable>
//                                 </>
//                             )}
//                         </DivF>
//                     </Filter>


//                     {/* Fabric Filter */}
                    
//                         <Filter>
//                             <FilterTitle>Fabric</FilterTitle>   
//                             <DivF>
//                                 <FilterFabric onChange={(e) => ChangeFabric(e.target.value)} id="fabric" disabled={filteredFabrics.length === 0}>
//                                     <Opt>{filteredFabrics.length === 0 ? 'No Fabric Available' : 'Choose Fabric'}</Opt>
//                                     {selectedGender && filteredFabrics.map(fabric => (
//                                         <option key={fabric} value={fabric}>{fabric}</option>
//                                     ))}
//                                 </FilterFabric>
//                             </DivF>
//                         </Filter>

//                     {/* Color Filter */}
                    
//                         <Filter>
//                             <FilterTitle>Color</FilterTitle>
//                             <DivF>
//                                 <FilterColorWithUnitId units={filteredColors} onChange={handleColorChange} />
//                                 <Check onClick={cheColor} style={{ display: 'inline-block' }}>Check</Check>
//                             </DivF>
//                         </Filter>
                    

//                     {/* Size Filter */}
                    
//                         <Filter>
//                             <FilterTitle>Size</FilterTitle>
//                             <DivF>
//                                 <FilterSizeWithUnitId units={filteredSizes} onChange={handleSizeChange} />
//                             </DivF>
//                         </Filter>
                    
//                 </FilterContainer>



//                 <AddContainer>
//                     <AmountContainer>
//                         <Remove onClick={() => handleQuantity("dec")} />
//                         <Amount>{quantity}</Amount>
//                         <Add onClick={() => handleQuantity("inc")} />
//                     </AmountContainer>

//                     {
//                     instockFlag == 1 ? <Button onClick={handleClick} style={{ backgroundColor: butBackColor, color: butColor }}>Add to Cart</Button> : 'Stock Unavaliable!'
//                     }
                
//                 </AddContainer>

//                 <FilterContainer>
//                     <DownloadPdf href={sample} download>Download Catalog</DownloadPdf>

//                     {relatedpants ? (
//     <ImgContainer>
//       <SmallImgContainerOne>
//         <div>
//         <Lable className='mt-2 px-2'>Related Pants</Lable>

//           <div>
//             <Link to={`/product/${relatedpants.id}`}>
//               <SmallImageOne src={url + `/ecommerce/items/${relatedpants.photo_path}`} key={relatedpants.id} />
//             </Link>
//           </div>
//           <div style={{ textAlign: 'center' }}>
//             <SmallImgName>{relatedpants.item_name ? relatedpants.item_name : relatedpants.name}</SmallImgName>
//           </div>
//         </div>
//       </SmallImgContainerOne>
//     </ImgContainer>
//   ) : (
//     <p style={{ color: 'red' }}>No related pants available.</p>
//   )}
//                 </FilterContainer>
               
               
                  
                
                                
                 

//                 <AddContainer>
//                     <p id="success" className='mx-3'></p>
//                 </AddContainer>


//             </InfoContainer>
//         </Wrapper>
//         <Container className='text-center'>
//             <Title>Related Items</Title>
//         </Container>
//         <Wrapper>
//         <ImgContainer>
//                 <SmallImgContainerOne>

//                  {
                    
//                  relateditems.length != 0 && relateditems.items.map(it => (

//                         <div>
//                             <div>
//                                 <Link to={`/product/${it.id}`}><SmallImageOne src={url+`/ecommerce/items/${it.photo_path}`} key={it.id} /></Link>
//                             </div>
//                             <div style={{textAlign: 'center'}}>
//                                 <SmallImgName>{it.item_name ? it.item_name : it.name}</SmallImgName>
//                             </div>
//                         </div>
//                     ))
//                     }
                   
//                 </SmallImgContainerOne>
//             </ImgContainer>
//         </Wrapper>
//         {/* <Newsletter /> */}
//         <Footer />

//         <CheckColor name={selectedColor} open={checkColor} close={() => setCheckColor(false)} item={item}/>
//         <CheckSize gender={selectedSize} type={design} open={checkSize} close={() => setCheckSize(false)} />
        
//         <InstockDialog open={isInstock} close={()=>setIsInstock(false)}/>
//         {/* <CheckFabric open={checkFabric} close={() => setCheckFabric(false)} /> */}
//     </Container>
//     )
// }

// export default Product;



import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useMemo, useState } from "react";
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
import { useRef } from "react";
import ColorNav from "../../components/ColorNav";
import Spinner from "../../common/Spinner";

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

const ProductPrice = styled.div`
  font-size: 25px;
  color: #666;
  margin-bottom: 28px;
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

  ${mobile({
    flexDirection: "column",
    alignItems: "stretch",
  })}
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

  ${mobile({
    width: "100%",
  })}
`;

const QtyButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const QtyValue = styled.span`
  font-size: 24px;
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
  font-size: 26px;
  cursor: pointer;
  transition: 0.2s ease;
  text-transform: capitalize;

  &:hover {
    background: #4f9ee8;
  }

  ${mobile({
    width: "100%",
    fontSize: "18px",
  })}
`;

const Iconbox = styled.button`
  font-size: 25px;
  background: #b7d2eb;
  color: #156ea8;
  padding: 15px 15px;
  border-radius: 50%;

  &:hover{
    background: #156ea8;
    color: #b7d2eb;
  }
`;

const ActionRow = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const OutlineButton = styled.button`
  padding: 12px 18px;
  border: 1px solid #999;
  background: transparent;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #efefef;
  }
`;

const DownloadPdf = styled.a`
  display: inline-block;
  margin-top: 26px;
  color: #444;
  font-size: 18px;
  text-decoration: underline;
`;

const RelatedWrap = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px 40px 60px;

  ${mobile({
    padding: "20px 16px 40px",
  })}
`;

const RelatedTitle = styled.h2`
  font-weight: 400;
  font-size: 34px;
  margin-bottom: 20px;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 18px;

  ${mobile({
    gridTemplateColumns: "repeat(2, 1fr)",
  })}
`;

const RelatedCard = styled.div`
  background: #f4f6f8;
  border-radius: 20px;
  border: 2px solid #cfd8dc;
  overflow: hidden;
  transition: 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &:hover {
    transform: translateY(-6px);
  }
`;

const RelatedImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const RelatedName = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const Price = styled.p`
  text-align: center;
  font-size: 16px;
  color: #333;
`;

const BoldText = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #034f96;
`;

const SmallText = styled.div`
  color: #156ea8;
  font-weight: bold;
  font-size: 15px;
  margin-top: 6px;
`;

const ArrowWrapper = styled.div`
  position: relative;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  z-index: 10;
  background: transparent;
  border: none;
  font-size: 42px;
  color: #156ea8;
  cursor: pointer;

  &:hover {
    color: #4f9ee8;
  }

  &.left {
    left: -20px;
  }

  &.right {
    right: -20px;
  }
`;

const Product = () => {
    const [checkColor, setCheckColor] = useState(false);
    const [checkSize, setCheckSize] = useState(false);
    const dispatch = useDispatch();
    const url = useSelector((state) => state.user.url);
    const location = useLocation();

    const [item, setItem] = useState([]);
    const [relateditems, setRelatedItems] = useState([]);
    const [relatedpants, setRelatedPants] = useState([]);
    const [units, setUnits] = useState([]);
    const [allUnits, setAllUnits] = useState([]);

    const [unitid, setUnitId] = useState("");
    const [unitname, setUnitName] = useState("");
    const [unitcode, setUnitCode] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [color, setColor] = useState("");
    const [fabric, setFabric] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [design, setDesign] = useState("");
    const [isInstock, setIsInstock] = useState(false);
    const [instockFlag, setInstockFlag] = useState("");
    const [preorderFlag, setPreorderFlag] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [unitimg, setUnitImg] = useState("");
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedFabric, setSelectedFabric] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const [filteredUnits, setFilteredUnits] = useState([]);
    const [filteredFabrics, setFilteredFabrics] = useState([]);
    const [filteredColors, setFilteredColors] = useState([]);
    const [filteredSizes, setFilteredSizes] = useState([]);
    const [primaryStoreUnit, setPrimaryStoreUnit] = useState([]);

    const [selectedImage, setSelectedImage] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleItems, setVisibleItems] = useState(6);

    useEffect(() => {
        const updateVisibleItems = () => {
            const width = window.innerWidth;

            if (width >= 1400) setVisibleItems(6);
            else if (width >= 1024) setVisibleItems(5);
            else if (width >= 768) setVisibleItems(3);
            else setVisibleItems(2);
        };

        updateVisibleItems();
        window.addEventListener("resize", updateVisibleItems);

        return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);

    const totalItems = relateditems?.items?.length || 0;

    const id = location.pathname.split("/")[2];

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
            setItem(response.data.item);
            setDesign(response.data.item.item_name);
            setUnits(response.data.counting_units || []);
            setAllUnits(
                response.data.counting_unit_all_update ||
                response.data.counting_unit_all ||
                []
            );
            setInstockFlag(response.data.valueofinstock);
            setPreorderFlag(response.data.valueofpreorder);

            const obj = {
                category_id: response.data.item.category_id,
                subcategory_id: response.data.item.sub_category_id,
                item_id: response.data.item.id,
            };

            const obj1 = {
                related_pant_id: response.data.item.related_pant_id,
            };

            setSelectedImage(
                url + `/ecommerce/items/${response.data.item.photo_path || ""}`
            );

            axios
                .post(url + "/api/productlineitems_api", obj)
                .then((res) => {
                setRelatedItems(res.data);
                })
                .catch((err) => console.log(err));

            axios
                .post(url + "/api/productlinepants_api", obj1)
                .then((res) => {
                setRelatedPants(res.data);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                setIsLoading(false);
                });
            })
            .catch((error) => {
            console.log(error);
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

            if (!selectedSize || displayAvailability <= 0) {
            return prevQuantity;
            }

            if (type === "inc") {
            return prevQuantity < displayAvailability ? prevQuantity + 1 : prevQuantity;
            }

            return prevQuantity;
        });
    };

    const handleClick = () => {
        if (!selectedSize || !selectedColor || !selectedFabric || !selectedGender) {
        Swal.fire({
            title: "Please select options",
            text: "Choose gender, fabric, color and size first.",
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
            })
        );

        Swal.fire({
            title: "Success!",
            text: "Successfully added to cart.",
            icon: "success",
        });
        }
    };

    const handleWishlist = () => {
      if (!selectedSize || !selectedColor || !selectedFabric || !selectedGender) {
        Swal.fire({
          title: "Please select options",
          text: "Choose gender, fabric, color and size first.",
          icon: "warning",
        });
        return;
      }

      dispatch(
        addWishlist({
          unitid,
          unitname,
          unitimg,
          price,
          color,
          size,
          fabric,
        })
      );

      Swal.fire({
        title: "Added!",
        text: "Added to wishlist.",
        icon: "success",
      });
    };

//     const handleWishlist = () => {
//   dispatch(
//     addWishlist({
//       itemid: item.id,
//       itemname: item.item_name,
//       photo: item.photo_path,
//       fabrics: allFabrics,
//       colors: allColors,
//       sizes: displaySize,
//       price: price || "Price varies",
//     })
//   );

//   Swal.fire({
//     title: "Added!",
//     text: "Added to wishlist.",
//     icon: "success",
//   });
// };
    const availableGenders = [...new Set(units.map((unit) => unit.gender_name))];

    const choosegen = (gender) => {
        setSelectedGender(gender);

        const filtered = allUnits.filter((unit) => unit.gender_name === gender);
        setFilteredUnits(filtered);

        const fabrics = [...new Set(filtered.map((unit) => unit.fabric_name))];
        setFilteredFabrics(fabrics);

        setSelectedFabric(null);
        setSelectedColor(null);
        setSelectedSize(null);
        setFilteredColors([]);
        setFilteredSizes([]);
        setPrice(0);
        setStock(0);
    };

    const ChangeFabric = (fabricName) => {
        setSelectedFabric(fabricName);
        setFabric(fabricName);

        const filtered = allUnits.filter(
        (unit) =>
            unit.gender_name === selectedGender && unit.fabric_name === fabricName
        );

        const uniqueColors = [
        ...new Map(
            filtered.map((unit) => [
            unit.colour_name,
            {
                colour_name: unit.colour_name,
                colour_description: unit.colour_description || unit.colour_name,
                colour_photo_path: unit.colour_photo_path || null,
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
            unit.fabric_name === selectedFabric &&
            unit.colour_name === colorObj.colour_name
        );

        setPrimaryStoreUnit(filtered);

        const sizes = [...new Set(filtered.map((unit) => unit.size_name))];
        setFilteredSizes(sizes);

        setSelectedSize(null);
        setPrice(0);
        setStock(0);
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
        setUnitImg(item.photo_path);
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

        if (value.includes("black")) return "#1f1f1f";
        if (value.includes("white")) return "#f5f5f5";
        if (value.includes("darkblue")) return "#1e3a5f";
        if (value.includes("blue")) return "#5dade2";
        if (value.includes("skyblue")) return "#87ceeb";
        if (value.includes("green")) return "#4caf50";
        if (value.includes("orange")) return "#f39c12";
        if (value.includes("pink")) return "#e91e63";
        if (value.includes("red")) return "#d32f2f";
        if (value.includes("grey") || value.includes("gray")) return "#9e9e9e";
        if (value.includes("brown")) return "#8d6e63";

        return "#999";
    };

    const allFabrics = useMemo(() => {
        return [...new Set(allUnits.map((unit) => unit.fabric_name))].join(", ");
    }, [allUnits]);

    const allColors = useMemo(() => {
        const uniqueColors = [
        ...new Map(
            allUnits.map((unit) => [
            unit.colour_name,
            unit.colour_description || unit.colour_name,
            ])
        ).values(),
        ];

        return uniqueColors.join(", ");
    }, [allUnits]);

    const displayFabric = selectedFabric || allFabrics || "-";

    const displayColor =
        filteredColors.find((c) => c.colour_name === selectedColor)?.colour_description ||
        selectedColor ||
        allColors ||
        "-";

    const displaySize = selectedSize
        ? formatSizeLabel(selectedSize)
        : filteredSizes.length > 0
        ? filteredSizes.map((sz) => formatSizeLabel(sz)).join(", ")
        : "-";

    const displayAvailability = selectedSize ? stock : allStock;

    const relatedResponsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1400 },
            items: 6, 
        },
        desktop: {
            breakpoint: { max: 1400, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2,
        },
    };

    const carouselRef = useRef();

    const scrollProducts = (direction) => {
      if (!carouselRef.current) return;

      if (direction === "left") {
        carouselRef.current.previous();
      } else {
        carouselRef.current.next();
      }
    };

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
                <MainImage
                src={selectedImage || productImages[0]}
                alt={item.item_name}
                />
            </MainImageWrap>
            </GallerySection>

            <InfoSection>
            <ProductTitle>{item.item_name}</ProductTitle>

            <ProductMeta>
                <div>
                  <BoldText>Fabric</BoldText> — {displayFabric}
                </div>
                {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <BoldText>Colours</BoldText> —

                  {selectedColor ? (
                    <ColorCircle
                      bg={getColorCode(
                        filteredColors.find((c) => c.colour_name === selectedColor)?.colour_description ||
                        selectedColor
                      )}
                      selected
                      style={{ cursor: "default" }}
                      title={
                        filteredColors.find((c) => c.colour_name === selectedColor)?.colour_description ||
                        selectedColor
                      }
                    />
                  ) : (
                    <ColorRow style={{ margin: 0 }}>
                      {(filteredColors.length > 0 ? filteredColors : allUnits).map((col, index) => {
                        const colorName = col.colour_name || col;
                        const colorDesc = col.colour_description || col.colour_name || col;
                        const isDisabled = filteredColors.length === 0;

                        return (
                          <ColorCircle
                            key={index}
                            bg={getColorCode(colorDesc)}
                            selected={false}
                            disabled={isDisabled}
                            onClick={() => !isDisabled && handleColorChange(col)}
                            title={colorDesc}
                          />
                        );
                      })}
                    </ColorRow>
                  )}
                </div> */}
                {/* <div>
                  <BoldText>Size</BoldText> — {displaySize}
                </div> */}
                <div>
                  <BoldText>Availability</BoldText> — {displayAvailability} In stock
                </div>
                {/* <div>
                  <BoldText>Minimum Order Quantity</BoldText> — 30
                </div>
                <div>
                  <BoldText>Lead Time</BoldText> — 2 weeks
                </div> */}
            </ProductMeta>

            <SectionTitle>Gender</SectionTitle>
            <SizeRow>
                {availableGenders.includes("m") && (
                <SizeBox
                    selected={selectedGender === "m"}
                    onClick={() => choosegen("m")}
                >
                    Male
                </SizeBox>
                )}
                {availableGenders.includes("f") && (
                <SizeBox
                    selected={selectedGender === "f"}
                    onClick={() => choosegen("f")}
                >
                    Female
                </SizeBox>
                )}
                {availableGenders.includes("un") && (
                <SizeBox
                    selected={selectedGender === "un"}
                    onClick={() => choosegen("un")}
                >
                    Unisex
                </SizeBox>
                )}
            </SizeRow>

            <Divider />

            <SectionTitle>Fabric</SectionTitle>
            <SizeRow>
                {filteredFabrics.map((fab, index) => (
                <SizeBox
                    key={index}
                    selected={selectedFabric === fab}
                    onClick={() => ChangeFabric(fab)}
                >
                    {fab}
                </SizeBox>
                ))}
            </SizeRow>

            <Divider />

            <SectionTitle>Color</SectionTitle>
            <ColorRow>
                {filteredColors.map((col, index) => (
                <ColorCircle
                    key={index}
                    bg={getColorCode(col.colour_description)}
                    selected={selectedColor === col.colour_name}
                    onClick={() => handleColorChange(col)}
                    title={col.colour_description}
                />
                ))}
            </ColorRow>

            <SmallText>
                Selected color -{" "}
                <span className="text-[#156ea8] font-light capitalize">
                {filteredColors.find((c) => c.colour_name === selectedColor)?.colour_description ||
                    "No color selected"}
                </span>
            </SmallText>

            <Divider />

            <SectionTitle>Size</SectionTitle>
            <SizeRow>
                {filteredSizes.map((sz, index) => (
                <SizeBox
                    key={index}
                    selected={selectedSize === sz}
                    onClick={() => handleSizeChange(sz)}
                >
                    {formatSizeLabel(sz)}
                </SizeBox>
                ))}
            </SizeRow>

            <Divider/>

            <ProductMeta>
              <BoldText>Price</BoldText> — {price ? `${Number(price).toLocaleString()} MMK` : "***Price will show after choosing item***"}
            </ProductMeta>

            <CartRow>
                <QtyBox>
                    <QtyButton onClick={() => handleQuantity("dec")}>
                        <Remove />
                    </QtyButton>
                    <QtyValue>{quantity}</QtyValue>
                    <QtyButton
                        onClick={() => handleQuantity("inc")}
                        disabled={!selectedSize || displayAvailability <= 0 || quantity >= displayAvailability}
                    >
                        <Add />
                    </QtyButton>
                </QtyBox>

                {instockFlag == 1 ? (
                    <AddCartButton onClick={handleClick}>Add to cart</AddCartButton>
                    ) : (
                    <AddCartButton as="div" style={{ opacity: 0.6, cursor: "not-allowed" }}>
                        Stock Unavailable
                    </AddCartButton>
                )}


                <Iconbox onClick={handleWishlist}>
                  <FaRegHeart />
                </Iconbox>

            </CartRow>

            <ActionRow>
                {preorderFlag == 1 ? (
                <Link to={`/order/${item.item_name}`} state={{ units }}>
                    <OutlineButton>Make Order</OutlineButton>
                </Link>
                ) : (
                <OutlineButton as="div">Preorder Unavailable</OutlineButton>
                )}

                {/* <OutlineButton onClick={() => setCheckSize(true)}>
                Check Size
                </OutlineButton> */}
            </ActionRow>

            <DownloadPdf href={sample} download>
                Download Catalog
            </DownloadPdf>

            {relatedpants && relatedpants.id && (
                <div style={{ marginTop: "30px" }}>
                <SectionTitle>Related Pants</SectionTitle>
                <Link
                    to={`/product/${relatedpants.id}`}
                    style={{ textDecoration: "none" }}
                >
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
    cursor:
      currentSlide >= totalItems - visibleItems
        ? "not-allowed"
        : "pointer",
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
    {relateditems.length !== 0 &&
      relateditems.items?.map((it) => (
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
            {/* <Price>
              {it.price
                ? `${Number(it.price).toLocaleString()} MMK`
                : "0 MMK"}
            </Price> */}
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

        {/* <CheckSize
            gender={selectedSize}
            type={design}
            open={checkSize}
            close={() => setCheckSize(false)}
        /> */}

        <InstockDialog open={isInstock} close={() => setIsInstock(false)} />
        </Container>
    );
};

export default Product;