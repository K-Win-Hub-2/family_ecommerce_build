// import React, { useState, useEffect} from 'react'
// import { useLocation, Link,useNavigate } from 'react-router-dom'
// import styled from 'styled-components'
// import Footer from '../components/Footer'
// import ColorNav from '../components/ColorNav'
// import Products from '../components/Products'
// import ItemOne from '../components/ItemOne'
// import SearchIcon from '@mui/icons-material/Search';
// import { mobile } from "../responsive"
// import axios from 'axios'
// import { useSelector,useDispatch } from 'react-redux'
// import { resetItem, resetSearch } from "../redux/designRedux"
// import { getListItemSecondaryActionClassesUtilityClass } from '@mui/material'

// const Container = styled.div`
// margin: 20px;
// `
// const ContainerOne = styled.div`
// padding:20px;
// justify-content: space-between;
// `

// const Title = styled.h2`
//   margin: 20px;
//   margin-top: 80px;
// `
// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `
// const Filter = styled.div`
//   margin: 20px;
//   display: flex;
//   ${mobile({ margin: "0px 20px", flexDirection: "column" })}
// `
// const FilterText = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   margin-right: 20px;
//   ${mobile({ marginRight: "0px" })}
// `

// const FilterTextOne = styled.h4`
//   margin-left: 70px;
//   padding-top: 20px;
//   ${mobile({ marginRight: "0px" })}
// `


// const Select = styled.select`
//   padding: 10px;
//   margin-right: 20px;
//   ${mobile({ margin: "10px 0px" })}
// `
// const Input = styled.input`
//   font-size: 18px;
//   padding: 9px;
//   margin-left: 45px;
//   width: 300px;
//   background: #c8cdcf;
//   border: 1px solid #c8cdcf;
//   outline: none;
//   border-radius: 5px;
//   opacity: 1;
//   float: right;
//   transition: all .75s ease-in;
//   ::placeholder {
//     color: #FFFFFF;
//   }
//   ${mobile({ margin: "10px 0px" })}
// `

// const Div = styled.div`
//     margin-top: 26px;
//     margin-left: 10px;
//     width: 220px;
//     height: 500px;
//     background-color: transparent;
//     position: sticky;
//     top: 100px;
// `
// const DivOne = styled.div`
//     width: 170px;
//     margin-left: 50px;
//     margin-top: 7px;
//     background-color: #32549b;
//     padding: 7px 5px 7px 8px;
//     color: white;
//     border-radius: 5px;
//     &:hover {
//         background-color: #2258ce;
//     }
// `
// const Btn = styled.button`
//     border-radius: 5px;
//     margin-left: 2px;
//     background: #c8cdcf;
//     border: none;
// `
// const A = styled.a`
//     color: white;
// `

// const Option = styled.option``

// const ProductList = () => {

//   const location = useLocation();
//   const cat = location.pathname.split("/")[2];
//   // const cat_name = location.pathname.split("/")[3];
//   const [filters, setFilters] = useState({});
//   const [sort, setSort] = useState("newest");
//   const [search, setSearch] = useState('');
//   const [fil, setFil] = useState(0);
//   const [cat_id, setCatId] = useState(1);
//   const [click, setClick] = useState(false);
//   const [subcat, setSubCat] = useState([]);
//   const [cate, setCate] = useState([]);
//   const url = useSelector(state => state.user.url);
//   const hsearch = useSelector(state => state.design.homesearch);
//   const [items, setItems] = useState([]);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const family = (val) => {
//     axios.get(url+"/api/category_all/"+val)
//         .then((response) => {
//             setItems(response.data.items);
//             setSubCat(response.data.subs);
//             console.log(response.data.items);
//         })
//     setCatId(val);
//     setFil(0);
//     setClick(false);
//   }

//   useEffect(() =>{
//     getItems();
//     homesearchitem();
//     categories();
//     subcategories();
// },[]);

//   const homesearchitem = () => {
     
//       if(hsearch == true){
//         setClick(true);
//       setItems(location.state.itemsS);
//       dispatch(resetSearch());
//       }     
//   }

//   const getItems = () => {
//     axios.get(url+"/api/item_api")
//         .then((response) => {
//             setItems(response.data.items);
//         })
//   }

//   const categories = () => {
//     axios.get(url+"/api/category_all")
//         .then((response) => {
//             setCate(response.data);
//             console.log(response.data);
//         })
//   }

//   const subcategories = () => {
//     axios.get(url+"/api/subcategory_api")
//         .then((response) => {
//             setSubCat(response.data.data);
//         })
//   }
 
//   const SearchItems = () => {
//     setFil(0);
//     setClick(true);
//     axios.post(url + '/api/searchitem', {
//       item: search
//     }).then(res => {
//       setItems(res.data);
//     }
    
//     ).catch(err => {
//       console.log('error');
//     });
//   }

//   const handleFilters = (e) => {
//     // alert(e.target.value);
//     axios.get(url+"/api/category_api/"+cat_id+'/'+e.target.value)
//     .then((response) => {
//         setItems(response.data.items);
//         console.log(response.data.items);
//     }) 
//     setFil(e.target.value);
//     setClick(false);
//     // alert(e.target.value);
//     // setFilters(() => e.target.value)
//     // const value = e.target.value;
//     // setFilters({
//     //   ...filters,
//     //   [e.target.name]: value,
//     // });
//     // navigate('/products/1/family%20hospital')
//   };

//   return (
//     <div>
//       <Container id="top">

//         <ColorNav />
//         {/* <Slider/> */}

//         <Title>Product Line
          
//         </Title>

//         <FilterContainer>
//           <Filter>
//             <FilterText>Filter Products: </FilterText>

//             <Select name="color" onChange={handleFilters}>
//               <Option>Type</Option>
//               {
//                 subcat.map((sub)=>(
//                   <Option key={sub.id} value={sub.id}>{sub.name}</Option>
//                 ))
//               }
//               {/* <Option>Pant 2</Option> */}
//             </Select>

//             {/* <Select name="part" onChange={handleFilters}>
//               <Option disabled>Gender</Option>
//               <Option value="male">Male</Option>
//               <Option value="female">Female</Option>
//             </Select> */}

//           </Filter>


//           <Filter>
//             {/* <FilterText>Sort Porducts: </FilterText>
//             <Select onChange={e => setSort(e.target.value)}>
//               <Option value="newest">Newest</Option>
//               <Option value="asc">Price (asc)</Option>
//               <Option value="desc">Price (desc)</Option>
//             </Select> */}
           
//             <Input placeholder='Search Items.........' onChange={(e) => setSearch(e.target.value)}></Input>
//             <Btn onClick={SearchItems}><A><SearchIcon /></A></Btn>
//           </Filter>

//         </FilterContainer>
//       </Container>
//       <Container>
//         <div className='row'>
//           <div className='col-md-2'>
//             <Div>
//               <FilterTextOne>Brands</FilterTextOne>
//               { cate.map(ca => (
//                 <div>
//                 <a className='text-decoration-none text-white' href='#' onClick={() => family(ca.id)}><DivOne>{ca.category_name}</DivOne></a>
//                 </div>
//               ))}
//             </Div>
//           </div>
//           <div className='col-md-10'>
//             {
//               click == true ?
//                 <ContainerOne>
//                   <div className='row'>
//                     {items.map(item => (

//                       <div className='col-md-4'>
//                         <ItemOne item={item} key={item.id} />
//                       </div>

//                     ))}
//                   </div>
//                   <br></br>
//                 </ContainerOne>

//                 :
//                 <ContainerOne>
//                   <div className='row'>
//                     {items.map(item => (
//                       <div className='col-md-4'>
//                         <ItemOne item={item} key={item.id} />
//                       </div>
//                     ))}
//                   </div>
//                   <br></br>
//                 </ContainerOne>
//                 // <Products cat={cat} filters={filters} sort={sort} fil={fil}/>
//             }

//           </div>
//         </div>
//       </Container>
//       <Footer />
//     </div>
//   )
// }

// export default ProductList


import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import ColorNav from "../components/ColorNav";
import ItemOne from "../components/ItemOne";
import SearchIcon from "@mui/icons-material/Search";
import { mobile } from "../responsive";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { resetSearch } from "../redux/designRedux";
import Navbar from "../components/Navbar";
import Spinner from "../common/Spinner";


const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h2`
  margin: 20px;
  margin-top: 100px;
  color: #0b6aa9;
  font-weight: 800;
  font-size: 42px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 15px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #0b6aa9, #0b74b5);
    border-radius: 2px;
  }

  ${mobile({
    fontSize: "28px",
    letterSpacing: "1px",
    margin: "20px 10px",
  })}
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px;

  ${mobile({
    flexDirection: "column",
    alignItems: "stretch",
  })}
`;

const CategoryNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 20px 0 30px;
`;

const CategoryButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  transition: all 0.4s ease-in-out;
`;

const CategoryButton = styled.button`
  border: 1px solid #0b74b5;
  background: ${(props) => (props.active ? "#0b74b5" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#0b74b5")};
  border-radius: 10px;
  padding: 10px 18px;
  white-space: nowrap;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0b74b5;
    color: white;
    transform: translateY(-2px);
  }
`;

const SubcategoryWrap = styled.div`
  margin: 0 20px 20px 20px;
  display: flex;
  justify-content: flex-start;
`;

const SubcategorySelect = styled.select`
  min-width: 220px;
  padding: 10px 14px;
  border: 1px solid #0b74b5;
  border-radius: 8px;
  background: white;
  color: #0b74b5;
  font-size: 14px;
  outline: none;
  cursor: pointer;
`;

const ArrowButton = styled.button`
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  color: #0b74b5;
  font-size: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.08);
  }
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

  ${mobile({
    width: "100%",
  })}
`;

const Btn = styled.button`
  border-radius: 8px;
  background: #0b6aa9;
  border: none;
  color: white;
  padding: 10px 14px;
  cursor: pointer;
`;

const ProductSection = styled.div`
  margin: 40px 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #0b6aa9;
  font-weight: 700;
  text-transform: uppercase;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  ${mobile({
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

const EmptyText = styled.p`
  margin: 30px 20px;
  font-size: 18px;
  color: #666;
`;

const BrandSection = styled.div`
  display: flex;
  align-items: left;
  gap: 40px;
  margin: 20px auto;
  padding: 40px;
  background: #e2eef7;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  width: 1200px;
  max-width: 100%;

  ${mobile({
    flexDirection: "column",
    textAlign: "center",
    padding: "30px 20px",
    gap: "20px",
    width: "100%",
  })}
`;

const BrandLogo = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 12px;
  background: white;
  padding: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${mobile({
    width: "120px",
    height: "120px",
    padding: "10px",
  })}
`;

const BrandInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BrandName = styled.h3`
  color: #0b74b5;
  font-weight: 800;
  margin-bottom: 10px;
  font-size: 32px;
  text-transform: capitalize;
  line-height: 1.2;

  ${mobile({
    fontSize: "24px",
  })}
`;

const BrandDescription = styled.div`
  color: #4a5568;
  font-size: 20px;
  line-height: 1.8;
  margin: 8px 0 0 0;
  font-weight: 400;
  max-width: 700px;
  text-align: left;
  letter-spacing: 0.3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

  ul {
    margin: 15px 0;
    padding-left: 20px;
  }

  li {
    margin: 10px 0;
    list-style-type: disc;
    list-style-position: outside;
  }

  p {
    margin: 10px 0;
  }

  strong {
    font-weight: 700;
    color: #1a1a1a;
  }

  ${mobile({
    fontSize: "14px",
    lineHeight: "1.6",
    maxWidth: "100%",
  })}
`;

const ProductList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const url = useSelector((state) => state.user.url);
  const hsearch = useSelector((state) => state.design.homesearch);

  const [items, setItems] = useState([]);
  const [subcat, setSubCat] = useState([]);
  const [cate, setCate] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [categoryDetails, setCategoryDetails] = useState(null);

  useEffect(() => {
    getItems();
    categories();
    subcategories();
  }, []);

  useEffect(() => {
  homesearchitem();
}, [hsearch]);

useEffect(() => {
  // Set "Family Hospital" as default category when categories are loaded
  if (cate.length > 0 && !selectedCategory) {
    const familyHospital = cate.find(cat => cat.category_name === "family hospital");
    if (familyHospital) {
      setSelectedCategory(familyHospital);
      getCategoryItems(familyHospital.id);
    }
  }
}, [cate, selectedCategory]);


  const homesearchitem = () => {
    if (hsearch === true && location.state?.itemsS) {
      setItems(location.state.itemsS);
      dispatch(resetSearch());
    }
  };

  const getItems = async () => {
  try {
    setIsLoading(true);

    const response = await axios.get(url + "/api/item_api");
    setItems(response.data.items || []);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false); 
  }
};

  const categories = () => {
    axios
      .get(url + "/api/category_all")
      .then((response) => {
        const allCategories = response.data || [];
        const targetCategories = ["family hospital", "branded", "ecofamily", "NICE", "Arfi Brand"];
        const filteredCategories = allCategories.filter(cat => 
          targetCategories.includes(cat.category_name)
        );
        setCate(filteredCategories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const subcategories = () => {
    axios
      .get(url + "/api/subcategory_api")
      .then((response) => {
        setSubCat(response.data.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectedCategorySubcategories = useMemo(() => {
    if (!selectedCategory) return [];

    return subcat.filter(
      (sub) => sub.category_name === selectedCategory.category_name
    );
  }, [subcat, selectedCategory]);

  const SearchItems = async () => {
  try {
    setIsLoading(true);

    const res = await axios.post(url + "/api/searchitem", {
      item: search,
    });

    setItems(res.data || []);
  } catch (err) {
    console.log("error");
  } finally {
    setIsLoading(false);
  }
};

const getCategoryItems = async (categoryId) => {
  try {
    setIsLoading(true);
    
    const response = await axios.get(url + "/api/category_all/" + categoryId);
    setItems(response.data.items || []);
    setSubCat(response.data.subs || []);
    setCategoryDetails(response.data.category || null);
    console.log(response.data.items);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchCategory = selectedCategory
        ? item.category_id === selectedCategory.id
        : true;

      const matchSubcategory = selectedSubcategory
        ? item.sub_category_id === Number(selectedSubcategory)
        : true;

      return matchCategory && matchSubcategory;
    });
  }, [items, selectedCategory, selectedSubcategory]);

  const groupedItems = useMemo(() => {
    const validSubcategories = selectedCategory
      ? subcat.filter((sub) => sub.category_name === selectedCategory.category_name)
      : [];

    const filteredSubcategories = selectedSubcategory
      ? validSubcategories.filter((sub) => sub.id === Number(selectedSubcategory))
      : validSubcategories;

    return filteredSubcategories
      .map((sub) => {
        const subItems = filteredItems.filter(
          (item) => item.sub_category_id === sub.id
        );

        return {
          ...sub,
          items: subItems,
        };
      })
      .filter((group) => group.items.length > 0);
  }, [filteredItems, subcat, selectedCategory, selectedSubcategory]);

  

  return (
    <div>
      <Container id="top">
        <Navbar />

        <Title>Brands</Title>

        <TopBar>
          <CategoryNavWrapper>
            <CategoryButtonWrap>
              {/* <CategoryButton
                active={selectedCategory === null}
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedSubcategory("");
                }}
              >
                All
              </CategoryButton> */}

              {cate.map((ca) => (
                <CategoryButton
                  key={ca.id}
                  active={selectedCategory?.id === ca.id}
                  onClick={() => {
                    setSelectedCategory(ca);
                    setSelectedSubcategory("");
                    getCategoryItems(ca.id);
                  }}
                  className="capitalize"
                >
                  {ca.category_name}
                </CategoryButton>
              ))}

              
            </CategoryButtonWrap>
          </CategoryNavWrapper>

          <SearchWrap>
            <Input
              placeholder="Search Items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Btn onClick={SearchItems}>
              <SearchIcon />
            </Btn>
          </SearchWrap>
        </TopBar>

        {/* Brand Logo and Description */}
        {categoryDetails && (
          <BrandSection>
            <BrandLogo 
              // src={categoryDetails.photo_path ? `/feedImg/${categoryDetails.photo_path}` : '/feedImg/placeholder.png'}
              src={url+`/ecommerce/brands/${categoryDetails.photo_path}`}
              alt={categoryDetails.category_name}
            />
            <BrandInfo>
              <BrandName>{categoryDetails.category_name}</BrandName>
              <BrandDescription
                dangerouslySetInnerHTML={{
                  __html: categoryDetails.description || `Explore our premium ${categoryDetails.category_name} collection. Quality products designed for professionals who demand the best.`
                }}
              />
            </BrandInfo>
          </BrandSection>
        )}

        {selectedCategorySubcategories.length > 0 && (
          <SubcategoryWrap>
            <SubcategorySelect
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="capitalize"
            >
              <option value="">All Subcategories</option>
              {selectedCategorySubcategories.map((sub) => (
                <option key={sub.id} value={sub.id} className="capitalize">
                  {sub.name}
                </option>
              ))}
            </SubcategorySelect>
          </SubcategoryWrap>
        )}
      </Container>

      <Container>
        {isLoading ? (
          <Spinner />
        ) : groupedItems.length > 0 ? (
          groupedItems.map((group) => (
            <ProductSection key={group.id}>
              <SectionTitle>{group.name}</SectionTitle>

              <ProductGrid>
                {group.items.map((item) => (
                  <ItemOne key={item.id} item={item} />
                ))}
              </ProductGrid>
            </ProductSection>
          ))
        ) : (
          <div style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}>
            <Spinner />
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default ProductList;