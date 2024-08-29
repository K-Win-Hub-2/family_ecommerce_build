import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useLocation,Link} from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { mobile } from "../../responsive";
import { addProduct } from "../../redux/cartRedux";
import { addOrder} from "../../redux/designRedux";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import CheckColor from '../../components/CheckColor';
import CheckSize from '../../components/CheckSize';
import sample from '../../files/sample.pdf';
import Swal from 'sweetalert2';
import InstockDialog from '../../components/InstockDialog';
import FilterColorWithUnitId from '../filter-color.component';
import FilterSizeWithUnitId from '../filter-size.component';


const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
const SmallImgContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const SmallImgContainerOne = styled.div`
    max-width: 90vw;
    display: flex;
    overflow-y: hidden; 
    overflow-x: scroll; 
`

const Input = styled.input`
`
const Lable = styled.label`
    font-size : 18px;
`

const MainImage = styled.img`
    width: 500px;
    height: auto;
    object-fit: contain;
    
    ${mobile({ height: "50%" })}
`
const SmallImage = styled.img`
    width: 34%;
    height: auto;
    max-height: 191.5px;
    object-fit: cover;
    ${mobile({ height: "50%" })}
`

const SmallImageOne = styled.img`
    width: 100%;
    min-width: 250px;
    min-height: 250px;
    max-height: 250px;
    object-fit: contain;
    ${mobile({ height: "50%" })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`

const RowContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

const PriceLabel = styled.label`
    font-size: 25px;
    font-weight:bold;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 25px;
    margin-left: 10px;
`

const StockLabel = styled.label`
    font-size: 25px;
    font-weight:bold;
    margin-left:10px;
`

const Stock = styled.span`
    font-weight: 100;
    font-size: 25px;
    margin-left:10px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterFabric = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const AddContainer = styled.div`
width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius:10px;
    border: 1px solid teal; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding:10px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: teal;
        color: white;
    }
`
const DivF = styled.div`
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
`
const Check = styled.p`
    background-color: #027f9d;
    margin-left: 5px;
    color: #ffffff;
    border-radius: 3px;
    padding:3px;
    cursor: pointer;
`
const DownloadPdf = styled.a`
    font-size: 20px;
    color: #027f9d;
    text-decoration: none;
    margin-top: 30px;
    margin-left:40px;
    padding-left: 20px;
    border-radius: 3px;
    cursor: pointer;
`
const SmallImgName = styled.div`
    font-size: 20px;
    color: #111111;
`
const Opt = styled.option`

`

const Product = () => {
    const [checkColor, setCheckColor] = useState(false);
    const [checkSize, setCheckSize] = useState(false);
    const dispatch = useDispatch();
    const url= useSelector(state => state.user.url);
    const location = useLocation();
    const [item, setItem] = useState([]);
    const [relateditems, setRelatedItems] = useState([]);
    const [relatedpants, setRelatedPants] = useState([]);
    const [units, setUnits] = useState([]);
    const [unitid, setUnitId] = useState('');
    const [unitname, setUnitName] = useState('');
    const [unitcode, setUnitCode] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState();
    const [fabric, setFabric] = useState('');
    const [size, setSize] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [design, setDesign] = useState('');
    const [isInstock, setIsInstock] = useState(false);
    const [instockFlag, setInstockFlag] = useState("");
    const [preorderFlag, setPreorderFlag] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [unitimg, setUnitImg] = useState("");
    const [gendername, setGenderName] = useState('');
    const [butBackColor, setBututBackColor] = useState('white');
    const [butColor, setBututColor] = useState('teal');
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedFabric, setSelectedFabric] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const [filteredUnits, setFilteredUnits] = useState([]);
    const [filteredFabrics, setFilteredFabrics] = useState([]);
    const [filteredColors, setFilteredColors] = useState([]);
    const [filteredSizes, setFilteredSizes] = useState([]);
    const [primaryStoreUnit, setPrimaryStoreUnit] = useState([]);
    const cheColor = () => {
        setCheckColor(true);
    }
    const handleSizeChange = (size) => {
        const filtered = primaryStoreUnit.filter(unit => unit.size_name === size);
        setSelectedSize(size);
        setPrice(filtered[0].order_price);
        setStock(filtered[0].current_quantity);
        setUnitId(filtered[0].id)
        setUnitName(filtered[0].unit_name)
        setUnitCode(filtered[0].unit_code)
        setQuantity(quantity)
        setColor(filtered[0].colour_name)
        setFabric(filtered[0].fabric_name)
        setSize(filtered[0].size_name)
        setPrice(filtered[0].order_price)
        setStock(filtered[0].current_quantity)
        setDesign(filtered[0].design_name)
        setUnitImg(item.photo_path)

    }
    const id = location.pathname.split("/")[2];
    useEffect(() => {
        const getProduct = () => {
            axios.get(url+"/api/unitbyid_api/" + id)
                .then((response) => {
                    setItem(response.data.item);
                    setDesign(response.data.item.item_name);
                    setUnits(response.data.counting_units);
                    
                    setInstockFlag(response.data.valueofinstock);
                    console.log('response.data.valueofinstock',response.data.valueofinstock);
                    console.log('hay');
                    console.log(response.data.valueofinstock);

                    setPreorderFlag(response.data.valueofpreorder);
                    console.log(preorderFlag);

                    const obj = {
                        'category_id': response.data.item.category_id,
                        'subcategory_id': response.data.item.sub_category_id,
                        'item_id': response.data.item.id,
                    }
                    const obj1={
                        'related_pant_id':response.data.item.related_pant_id
                    }
                    // console.log('pant data is',obj1);

                    axios.post(url+'/api/productlineitems_api', obj)
                        .then(res => {
                            console.log('related data is',res);
                            setRelatedItems(res.data);
                            
                        }).catch(err => {
                            console.log(err);
                        })

                        axios.post(url+'/api/productlinepants_api', obj1)
                        .then(res => {
                            console.log('related Pant data is',res.data);
                            setRelatedPants(res.data);
                            // console.log(res.data);
                        }).catch(err => {
                            console.log(err);
                        }).finally(err => {
                            setIsLoading(false);
                        })
                    }).catch((error) => console.log(error));
        }
        getProduct();
    }, [id]);

    // useEffect(() => {
    //     // customer change specification
    //     units.map((unit) => {
    //         if (unit.size_name == size && unit.colour_name == color && unit.fabric_name == fabric) {
    //             // setPrice(unit.order_price);
    //             // setStock(unit.current_quantity);
    //             setUnitId(unit.id);
    //             setUnitName(unit.unit_name);
    //             setUnitCode(unit.unit_code);
    //             return 1;
    //         }
    //     })
    // }, [color, fabric, size]);
    // const handleQuantity = (type) => {
    //     if (type === "dec") {
    //         quantity > 1 && setQuantity(quantity - 1);
    //     } else {
    //         setQuantity(quantity + 1);
    //     }
    // }
    const handleQuantity = (type) => {
        setQuantity(prevQuantity => {
            if (type === "dec") {
                return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
            } else {
                return prevQuantity + 1;
            }
        });
    };

    const handleClick = () => {
        if(stock == 0){
            setIsInstock(true);
            let testname = item.item_name+' '+gendername+' '+fabric+' '+color+' '+size;
            let testqty = quantity;
            let testprice = price;
            let orderid  = unitid;
            // alert(testname,testqty);
            dispatch(addOrder({orderid,testname,testqty,testprice}));
        }else{
            dispatch(addProduct({ unitid, unitname, unitcode, unitimg, color, size, fabric, quantity, price }));
            Swal.fire({
                title:  "Success!",
                text: "Successfully Add to Cart.",
                type: 'success',    
                });
        }
    }

    const change_photo = () => {
        const hel = document.getElementById('hel').src;
        const main = document.getElementById('main').src;
        document.getElementById('hel').src = main;
        document.getElementById('main').src = hel;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const availableGenders = [...new Set(units.map(unit => unit.gender_name))];

    const choosegen = (gender) => {
        setSelectedGender(gender);

        // Filter units based on the selected gender
        const filtered = units.filter(unit => unit.gender_name === gender);
        setFilteredUnits(filtered);

        // Extract unique fabrics from the filtered units
        const fabrics = [...new Set(filtered.map(unit => unit.fabric_name))];
        setFilteredFabrics(fabrics);

        // Reset further selections
        setSelectedFabric(null);
        setSelectedColor(null);
        setSelectedSize(null);
    };

    const ChangeFabric = (fabric) => {
        setSelectedFabric(fabric);

        // Filter units based on the selected gender and fabric
        const filtered = filteredUnits.filter(unit => unit.fabric_name === fabric);

        // Extract unique colors from the filtered units
        const colors = [...new Set(filtered.map(unit => unit.colour_name))];
        setFilteredColors(colors);

        // Reset further selections
        setSelectedColor(null);
        setSelectedSize(null);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);

        // Filter units based on the selected gender, fabric, and color
        const filtered = filteredUnits.filter(unit =>
            unit.fabric_name === selectedFabric && unit.colour_name === color
        );
        setPrimaryStoreUnit(filtered);
        console.log('this is the filter of handleColorChange',filtered);

        // Extract unique sizes from the filtered units
        const sizes = [...new Set(filtered.map(unit => unit.size_name))];
        setFilteredSizes(sizes);

        // Reset size selection
        setSelectedSize(null);
    };

    console.log('filteredSizes',filteredSizes);
    console.log('filteredUnits',filteredUnits);
    console.log('item data is the',item);

    return (
        <Container>
        <Navbar />
        <Wrapper style={{ marginTop: '100px' }}>
            <ImgContainer>

                <MainImage src={url+`/ecommerce/items/${item.photo_path}`} id='main' />

                <SmallImgContainer>
                    <SmallImage src={url+`/ecommerce/items/${item.photo_path?.replace("front", "left")}`} onClick={change_photo} id='' />
                    <SmallImage src={url+`/ecommerce/items/${item.photo_path?.replace("front", "right")}`} onClick={change_photo} id='' />
                    <SmallImage src={url+`/ecommerce/items/${item.photo_path?.replace("front", "body")}`} onClick={change_photo} id='hel' />
                </SmallImgContainer>

            </ImgContainer>
            <InfoContainer>
                <Title id="item_name">{item.item_name}</Title>
                <Desc>Minimum Order Quantity : 30</Desc>
                <Desc>Lead Time : 2 weeks</Desc>
                {
                preorderFlag == 1 ? <Link to={'/order/'+item.item_name}><Button>Make Order</Button></Link> : 'Preorder Unavaliable!'
                }
                <RowContainer>
                    <PriceLabel>Price: </PriceLabel>
                    <Price>{price}</Price>
                    <StockLabel>Stock: </StockLabel>
                    <Stock>{stock}</Stock>
                </RowContainer>
                <FilterContainer>
                    {/* Gender Filter */}
                    <Filter className='float-left'>
                            <FilterTitle>Gender</FilterTitle>
                        <DivF>
                            {availableGenders.includes("m") && (
                                <>
                                    <Input type="radio" name="genderdata" id='r1' onClick={() => choosegen("m")} />
                                    <Lable className='mt-2 px-2'>Male</Lable>
                                </>
                            )}
                            {availableGenders.includes("f") && (
                                <>
                                    <Input type="radio" name="genderdata" id='r2' onClick={() => choosegen("f")} />
                                    <Lable className='mt-2 px-2'>Female</Lable>
                                </>
                            )}
                            {availableGenders.includes("un") && (
                                <>
                                    <Input type="radio" name="genderdata" id='r3' onClick={() => choosegen("un")} />
                                    <Lable className='mt-2 px-2'>Uni</Lable>
                                </>
                            )}
                        </DivF>
                    </Filter>


                    {/* Fabric Filter */}
                    
                        <Filter>
                            <FilterTitle>Fabric</FilterTitle>   
                            <DivF>
                                <FilterFabric onChange={(e) => ChangeFabric(e.target.value)} id="fabric" disabled={filteredFabrics.length === 0}>
                                    <Opt>{filteredFabrics.length === 0 ? 'No Fabric Available' : 'Choose Fabric'}</Opt>
                                    {selectedGender && filteredFabrics.map(fabric => (
                                        <option key={fabric} value={fabric}>{fabric}</option>
                                    ))}
                                </FilterFabric>
                            </DivF>
                        </Filter>

                    {/* Color Filter */}
                    
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <DivF>
                                <FilterColorWithUnitId units={filteredColors} onChange={handleColorChange} />
                                <Check onClick={cheColor} style={{ display: 'inline-block' }}>Check</Check>
                            </DivF>
                        </Filter>
                    

                    {/* Size Filter */}
                    
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <DivF>
                                <FilterSizeWithUnitId units={filteredSizes} onChange={handleSizeChange} />
                            </DivF>
                        </Filter>
                    
                </FilterContainer>



                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={() => handleQuantity("dec")} />
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleQuantity("inc")} />
                    </AmountContainer>

                    {
                    instockFlag == 1 ? <Button onClick={handleClick} style={{ backgroundColor: butBackColor, color: butColor }}>Add to Cart</Button> : 'Stock Unavaliable!'
                    }
                
                </AddContainer>

                <FilterContainer>
                    <DownloadPdf href={sample} download>Download Catalog</DownloadPdf>

                    {relatedpants ? (
    <ImgContainer>
      <SmallImgContainerOne>
        <div>
        <Lable className='mt-2 px-2'>Related Pants</Lable>

          <div>
            <Link to={`/product/${relatedpants.id}`}>
              <SmallImageOne src={url + `/ecommerce/items/${relatedpants.photo_path}`} key={relatedpants.id} />
            </Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SmallImgName>{relatedpants.item_name ? relatedpants.item_name : relatedpants.name}</SmallImgName>
          </div>
        </div>
      </SmallImgContainerOne>
    </ImgContainer>
  ) : (
    <p style={{ color: 'red' }}>No related pants available.</p>
  )}
                </FilterContainer>
               
               
                  
                
                                
                 

                <AddContainer>
                    <p id="success" className='mx-3'></p>
                </AddContainer>


            </InfoContainer>
        </Wrapper>
        <Container className='text-center'>
            <Title>Related Items</Title>
        </Container>
        <Wrapper>
        <ImgContainer>
                <SmallImgContainerOne>

                 {
                    
                 relateditems.length != 0 && relateditems.items.map(it => (

                        <div>
                            <div>
                                <Link to={`/product/${it.id}`}><SmallImageOne src={url+`/ecommerce/items/${it.photo_path}`} key={it.id} /></Link>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <SmallImgName>{it.item_name ? it.item_name : it.name}</SmallImgName>
                            </div>
                        </div>
                    ))
                    }
                   
                </SmallImgContainerOne>
            </ImgContainer>
        </Wrapper>
        {/* <Newsletter /> */}
        <Footer />

        <CheckColor name={selectedColor} open={checkColor} close={() => setCheckColor(false)} item={item}/>
        <CheckSize gender={selectedSize} type={design} open={checkSize} close={() => setCheckSize(false)} />
        
        <InstockDialog open={isInstock} close={()=>setIsInstock(false)}/>
        {/* <CheckFabric open={checkFabric} close={() => setCheckFabric(false)} /> */}
    </Container>
    )
}

export default Product;