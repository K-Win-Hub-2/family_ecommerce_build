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
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import Navbar from "../components/Navbar";
import Spinner from "../common/Spinner";


const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h2`
  margin: 20px;
  margin-top: 80px;
  color: #0b6aa9;
  font-weight: 700;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const CategoryScroll = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 1100px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CategoryButtonWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  width: max-content;
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

  useEffect(() => {
    getItems();
    categories();
    subcategories();
  }, []);

  useEffect(() => {
  homesearchitem();
}, [hsearch]);

  const categoryScrollRef = useRef(null);

  const scrollCategories = (direction) => {
    if (categoryScrollRef.current) {
      const scrollAmount = 220;

      categoryScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
        setCate(response.data || []);
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
      : subcat;

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
            <ArrowButton onClick={() => scrollCategories("left")}>
              <IoMdArrowDropleftCircle />
            </ArrowButton>

            <CategoryScroll ref={categoryScrollRef}>
              <CategoryButtonWrap>
                <CategoryButton
                  active={selectedCategory === null}
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubcategory("");
                  }}
                >
                  All
                </CategoryButton>

                {cate.map((ca) => (
                  <CategoryButton
                    key={ca.id}
                    active={selectedCategory?.id === ca.id}
                    onClick={() => {
                      setSelectedCategory(ca);
                      setSelectedSubcategory("");
                    }}
                    className="capitalize"
                  >
                    {ca.category_name}
                  </CategoryButton>
                ))}
              </CategoryButtonWrap>
            </CategoryScroll>

            <ArrowButton onClick={() => scrollCategories("right")}>
              <IoMdArrowDroprightCircle />
            </ArrowButton>
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

        {selectedCategory && (
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