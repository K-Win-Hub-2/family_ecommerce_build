// import React, { useState, useEffect, useMemo } from "react";
// import { useLocation } from "react-router-dom";
// import styled from "styled-components";
// import Footer from "../components/Footer";
// import ItemOne from "../components/ItemOne";
// import SearchIcon from "@mui/icons-material/Search";
// import { mobile } from "../responsive";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { resetSearch } from "../redux/designRedux";
// import Navbar from "../components/Navbar";
// import Spinner from "../common/Spinner";

// const Container = styled.div`
//   margin: 20px;
// `;

// const Title = styled.h2`
//   margin: 20px;
//   margin-top: 100px;
//   color: #0b6aa9;
//   font-weight: 800;
//   font-size: 42px;
//   text-align: left;
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   position: relative;
//   padding-bottom: 15px;
  
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     transform: translateX(50%);
//     width: 80px;
//     height: 4px;
//     background: linear-gradient(90deg, #0b6aa9, #0b74b5);
//     border-radius: 2px;
//   }

//   ${mobile({
//     fontSize: "28px",
//     letterSpacing: "1px",
//     margin: "120px 10px 20px 10px",
//   })}
// `;

// const TopBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: left;
//   gap: 10px;
//   flex-wrap: wrap;
//   margin: 20px;

//   ${mobile({
//     flexDirection: "column",
//     alignItems: "stretch",
//   })}
// `;

// const CategoryNavWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 12px;
//   margin: 20px 0 30px;
// `;

// const CategoryButtonWrap = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 30px;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.4s ease-in-out;
// `;

// const CategoryButton = styled.button`
//   border: 1px solid #0b74b5;
//   background: ${(props) => (props.active ? "#0b74b5" : "#fff")};
//   color: ${(props) => (props.active ? "#fff" : "#0b74b5")};
//   border-radius: 10px;
//   padding: 10px 18px;
//   white-space: nowrap;
//   font-size: 14px;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: #0b74b5;
//     color: white;
//     transform: translateY(-2px);
//   }
// `;

// // Dropdown styles for "Other Brands"
// const DropdownContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const DropdownMenu = styled.div`
//   position: absolute;
//   top: 110%;
//   left: 0;
//   background-color: white;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.15);
//   border: 1px solid #0b74b5;
//   border-radius: 8px;
//   z-index: 10;
//   display: ${(props) => (props.show ? "block" : "none")};
//   overflow: hidden;
// `;

// const DropdownItem = styled.div`
//   color: #0b74b5;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
//   font-size: 14px;
//   cursor: pointer;
//   background: ${(props) => (props.active ? "#e2eef7" : "#fff")};
//   transition: background 0.2s ease;

//   &:hover {
//     background-color: #0b74b5;
//     color: white;
//   }
// `;

// const SubcategoryWrap = styled.div`
//   margin: 0 20px 20px 20px;
//   display: flex;
//   justify-content: flex-start;
// `;

// const SubcategorySelect = styled.select`
//   min-width: 220px;
//   padding: 10px 14px;
//   border: 1px solid #0b74b5;
//   border-radius: 8px;
//   background: white;
//   color: #0b74b5;
//   font-size: 14px;
//   outline: none;
//   cursor: pointer;
// `;

// const SearchWrap = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
// `;

// const Input = styled.input`
//   font-size: 16px;
//   padding: 10px 12px;
//   width: 280px;
//   background: #f1f5f9;
//   border: 1px solid #d7e2ea;
//   outline: none;
//   border-radius: 8px;

//   ::placeholder {
//     color: #7d8b99;
//   }

//   ${mobile({
//     width: "100%",
//   })}
// `;

// const Btn = styled.button`
//   border-radius: 8px;
//   background: #0b6aa9;
//   border: none;
//   color: white;
//   padding: 10px 14px;
//   cursor: pointer;
// `;

// const ProductSection = styled.div`
//   margin: 40px 20px;
// `;

// const SectionTitle = styled.h2`
//   margin-bottom: 20px;
//   color: #0b6aa9;
//   font-weight: 700;
//   text-transform: uppercase;
// `;

// const ProductGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(6, 1fr);
//   gap: 20px;

//   ${mobile({
//     gridTemplateColumns: "repeat(1, 1fr)",
//   })}
// `;

// const EmptyText = styled.p`
//   margin: 30px 20px;
//   font-size: 18px;
//   color: #666;
// `;

// const BrandSection = styled.div`
//   display: flex;
//   align-items: left;
//   gap: 40px;
//   margin: 20px auto;
//   padding: 40px;
//   background: #e2eef7;
//   border-radius: 16px;
//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
//   position: relative;
//   overflow: hidden;
//   width: 1200px;
//   max-width: 100%;

//   ${mobile({
//     flexDirection: "column",
//     textAlign: "center",
//     padding: "30px 20px",
//     gap: "20px",
//     width: "100%",
//   })}
// `;

// const BrandLogo = styled.img`
//   width: 180px;
//   height: 180px;
//   object-fit: contain;
//   border-radius: 12px;
//   background: white;
//   padding: 15px;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }

//   ${mobile({
//     width: "120px",
//     height: "120px",
//     padding: "10px",
//     margin: "0 auto",
//   })}
// `;

// const BrandInfo = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;

// const BrandName = styled.h3`
//   color: #0b74b5;
//   font-weight: 800;
//   margin-bottom: 10px;
//   font-size: 32px;
//   text-transform: capitalize;
//   line-height: 1.2;

//   ${mobile({
//     fontSize: "24px",
//   })}
// `;

// const BrandDescription = styled.div`
//   color: #4a5568;
//   font-size: 20px;
//   line-height: 1.8;
//   margin: 8px 0 0 0;
//   font-weight: 400;
//   max-width: 700px;
//   text-align: left;
//   letter-spacing: 0.3px;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

//   ul {
//     margin: 15px 0;
//     padding-left: 20px;
//   }

//   li {
//     margin: 10px 0;
//     list-style-type: disc;
//     list-style-position: outside;
//   }

//   p {
//     margin: 10px 0;
//   }

//   strong {
//     font-weight: 700;
//     color: #1a1a1a;
//   }

//   ${mobile({
//     fontSize: "14px",
//     lineHeight: "1.6",
//     maxWidth: "100%",
//   })}
// `;

// const ErrorMessage = styled.div`
//   margin: 20px;
//   padding: 12px 16px;
//   border-radius: 8px;
//   background: #fee2e2;
//   color: #b91c1c;
//   border: 1px solid #fecaca;
//   font-size: 14px;
// `;

// const ProductList = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const url = useSelector((state) => state.user.url);
//   const hsearch = useSelector((state) => state.design.homesearch);

//   const [items, setItems] = useState([]);
//   const [subcat, setSubCat] = useState([]);
//   const [cate, setCate] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubcategory, setSelectedSubcategory] = useState("");
//   const [search, setSearch] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [categoryDetails, setCategoryDetails] = useState(null);
//   const [subcatError, setSubcatError] = useState("");
  
//   // State to manage Dropdown Menu Visibility
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     getItems();
//     categories();
//     subcategories();
//   }, []);

//   useEffect(() => {
//     homesearchitem();
//   }, [hsearch]);

//   useEffect(() => {
//     if (cate.length > 0 && !selectedCategory) {
//       const familyHospital = cate.find(cat => cat.category_name === "family hospital");
//       if (familyHospital) {
//         setSelectedCategory(familyHospital);
//         getCategoryItems(familyHospital.id);
//       }
//     }
//   }, [cate, selectedCategory]);

//   const homesearchitem = () => {
//     if (hsearch === true && location.state?.itemsS) {
//       setItems(location.state.itemsS);
//       dispatch(resetSearch());
//     }
//   };

//   const getItems = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(url + "/api/item_api");
//       setItems(response.data.items || []);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setIsLoading(false); 
//     }
//   };

//   const categories = () => {
//     axios
//       .get(url + "/api/category_all")
//       .then((response) => {
//         const allCategories = response.data || [];
//         const targetCategories = ["family hospital", "branded", "ecofamily", "NICE", "Arfi Brand"];
//         const filteredCategories = allCategories.filter(cat => 
//           targetCategories.includes(cat.category_name)
//         );
//         setCate(filteredCategories);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const subcategories = async () => {
//     try {
//       setSubcatError("");
//       const response = await axios.get(url + "/api/subcategory_api");
//       setSubCat(response.data.data || []);
//     } catch (err) {
//       console.error("Subcategory API Error:", err);
//       setSubcatError(
//         err.response?.data?.message || "Failed to load subcategories. Please try again."
//       );
//       setSubCat([]);
//     }
//   };

//   const selectedCategorySubcategories = useMemo(() => {
//     if (!selectedCategory) return [];
//     return subcat.filter(
//       (sub) => 
//         sub.category_id === selectedCategory.id || 
//         sub.category_name === selectedCategory.category_name
//     );
//   }, [subcat, selectedCategory]);

//   const SearchItems = async () => {
//     try {
//       setIsLoading(true);
//       const res = await axios.post(url + "/api/searchitem", {
//         item: search,
//       });
//       setItems(res.data || []);
//     } catch (err) {
//       console.log("error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getCategoryItems = async (categoryId) => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(url + "/api/category_all/" + categoryId);
//       setItems(response.data.items || []);
//       setSubCat(response.data.subs || []);
//       setCategoryDetails(response.data.category || null);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const filteredItems = useMemo(() => {
//     return items.filter((item) => {
//       const matchCategory = selectedCategory
//         ? item.category_id === selectedCategory.id
//         : true;

//       const matchSubcategory = selectedSubcategory
//         ? item.sub_category_id === Number(selectedSubcategory)
//         : true;

//       return matchCategory && matchSubcategory;
//     });
//   }, [items, selectedCategory, selectedSubcategory]);

//   const groupedItems = useMemo(() => {
//     const validSubcategories = selectedCategory
//       ? subcat.filter((sub) => sub.category_id === selectedCategory.id || sub.category_name === selectedCategory.category_name)
//       : [];

//     const filteredSubcategories = selectedSubcategory
//       ? validSubcategories.filter((sub) => sub.id === Number(selectedSubcategory))
//       : validSubcategories;

//     return filteredSubcategories
//       .map((sub) => {
//         const subItems = filteredItems.filter(
//           (item) => item.sub_category_id === sub.id
//         );

//         return {
//           ...sub,
//           items: subItems,
//         };
//       })
//       .filter((group) => group.items.length > 0);
//   }, [filteredItems, subcat, selectedCategory, selectedSubcategory]);

//   // Derived filtered layout lists for the UI presentation layer
//   const staticMainBrands = ["family hospital", "branded", "ecofamily", "NICE"];
//   const mainRowCategories = cate.filter(cat => staticMainBrands.includes(cat.category_name));
//   const arfiBrandCategory = cate.find(cat => cat.category_name === "Arfi Brand");

//   return (
//     <div>
//       <Container id="top">
//         <Navbar />
//         <Title>Brands</Title>

//         <TopBar>
//           <CategoryNavWrapper>
//             <CategoryButtonWrap>
//               {/* Main row brand list display */}
//               {mainRowCategories.map((ca) => (
//                 <CategoryButton
//                   key={ca.id}
//                   active={selectedCategory?.id === ca.id}
//                   onClick={() => {
//                     setSelectedCategory(ca);
//                     setSelectedSubcategory("");
//                     getCategoryItems(ca.id);
//                     setIsDropdownOpen(false); // Close dropdown if a main brand is clicked
//                   }}
//                   className="capitalize"
//                 >
//                   {ca.category_name.toLowerCase() === "family hospital" 
//                     ? "Family Hospital Uniform" 
//                     : ca.category_name}
//                 </CategoryButton>
//               ))}

//               {/* Other Brands Dropdown Button */}
//               <DropdownContainer>
//                 <CategoryButton 
//                   active={selectedCategory?.category_name === "Arfi Brand"}
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 >
//                   Other Brands ▾
//                 </CategoryButton>
//                 <DropdownMenu show={isDropdownOpen}>
//                   {arfiBrandCategory && (
//                     <DropdownItem
//                       active={selectedCategory?.id === arfiBrandCategory.id}
//                       onClick={() => {
//                         setSelectedCategory(arfiBrandCategory);
//                         setSelectedSubcategory("");
//                         getCategoryItems(arfiBrandCategory.id);
//                         setIsDropdownOpen(false); // Auto-hide menu on choice select
//                       }}
//                     >
//                       {arfiBrandCategory.category_name}
//                     </DropdownItem>
//                   )}
//                 </DropdownMenu>
//               </DropdownContainer>
//             </CategoryButtonWrap>
//           </CategoryNavWrapper>

//           <SearchWrap>
//             <Input
//               placeholder="Search Items..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <Btn onClick={SearchItems}>
//               <SearchIcon />
//             </Btn>
//           </SearchWrap>
//         </TopBar>

//         {categoryDetails && (
//           <BrandSection>
//             <BrandLogo 
//               src={url + `/ecommerce/brands/${categoryDetails.photo_path}`}
//               alt={categoryDetails.category_name}
//             />
//             <BrandInfo>
//               <BrandName>
//                 {categoryDetails?.category_name?.toLowerCase() === "family hospital"
//                   ? "Family Hospital Uniform"
//                   : categoryDetails?.category_name}
//               </BrandName>
//               <BrandDescription
//                 dangerouslySetInnerHTML={{
//                   __html: categoryDetails.description || `Explore our premium ${categoryDetails.category_name} collection. Quality products designed for professionals who demand the best.`
//                 }}
//               />
//             </BrandInfo>
//           </BrandSection>
//         )}

//         {subcatError ? (
//           <ErrorMessage>
//             {subcatError}
//             <br />
//             <button
//               onClick={subcategories}
//               style={{
//                 marginTop: "10px",
//                 padding: "6px 12px",
//                 border: "none",
//                 borderRadius: "6px",
//                 background: "#0b74b5",
//                 color: "#fff",
//                 cursor: "pointer",
//               }}
//             >
//               Retry
//             </button>
//           </ErrorMessage>
//         ) : (
//           selectedCategorySubcategories.length > 0 && (
//             <SubcategoryWrap>
//               <SubcategorySelect
//                 value={selectedSubcategory}
//                 onChange={(e) => setSelectedSubcategory(e.target.value)}
//                 className="capitalize"
//               >
//                 <option value="">All Subcategories</option>
//                 {selectedCategorySubcategories.map((sub) => (
//                   <option key={sub.id} value={sub.id} className="capitalize">
//                     {sub.name}
//                   </option>
//                 ))}
//               </SubcategorySelect>
//             </SubcategoryWrap>
//           )
//         )}
//       </Container>

//       <Container>
//         {isLoading ? (
//           <Spinner />
//         ) : groupedItems.length > 0 ? (
//           groupedItems.map((group) => (
//             <ProductSection key={group.id}>
//               <SectionTitle>{group.name}</SectionTitle>
//               <ProductGrid>
//                 {group.items.map((item) => (
//                   <ItemOne key={item.id} item={item} />
//                 ))}
//               </ProductGrid>
//             </ProductSection>
//           ))
//         ) : (
//           <EmptyText>No products found.</EmptyText>
//         )}
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default ProductList;


import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
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
    margin: "120px 10px 20px 10px",
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
  align-items: center;
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

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.15);
  border: 1px solid #0b74b5;
  border-radius: 8px;
  z-index: 10;
  display: ${(props) => (props.show ? "block" : "none")};
  overflow: hidden;
`;

const DropdownItem = styled.div`
  color: #0b74b5;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 14px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#e2eef7" : "#fff")};
  transition: background 0.2s ease;

  &:hover {
    background-color: #0b74b5;
    color: white;
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
    margin: "0 auto",
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

const ErrorMessage = styled.div`
  margin: 20px;
  padding: 12px 16px;
  border-radius: 8px;
  background: #fee2e2;
  color: #b91c1c;
  border: 1px solid #fecaca;
  font-size: 14px;
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
  const [subcatError, setSubcatError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    getItems();
    categories();
    subcategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    homesearchitem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hsearch]);

  useEffect(() => {
    if (cate.length > 0 && !selectedCategory) {
      const familyHospital = cate.find(cat => cat.category_name === "family hospital");
      if (familyHospital) {
        setSelectedCategory(familyHospital);
        getCategoryItems(familyHospital.id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const subcategories = async () => {
    try {
      setSubcatError("");
      const response = await axios.get(url + "/api/subcategory_api");
      setSubCat(response.data.data || []);
    } catch (err) {
      console.error("Subcategory API Error:", err);
      setSubcatError(
        err.response?.data?.message || "Failed to load subcategories. Please try again."
      );
      setSubCat([]);
    }
  };

  const selectedCategorySubcategories = useMemo(() => {
    if (!selectedCategory) return [];
    return subcat.filter(
      (sub) => 
        sub.category_id === selectedCategory.id || 
        sub.category_name === selectedCategory.category_name
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
      ? subcat.filter((sub) => sub.category_id === selectedCategory.id || sub.category_name === selectedCategory.category_name)
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

  const staticMainBrands = ["family hospital", "branded", "ecofamily", "NICE"];
  const mainRowCategories = cate.filter(cat => staticMainBrands.includes(cat.category_name));
  const arfiBrandCategory = cate.find(cat => cat.category_name === "Arfi Brand");

  return (
    <div>
      <Container id="top">
        <Navbar />
        <Title>Brands</Title>

        <TopBar>
          <CategoryNavWrapper>
            <CategoryButtonWrap>
              {mainRowCategories.map((ca) => (
                <CategoryButton
                  key={ca.id}
                  active={selectedCategory?.id === ca.id}
                  onClick={() => {
                    setSelectedCategory(ca);
                    setSelectedSubcategory("");
                    getCategoryItems(ca.id);
                    setIsDropdownOpen(false);
                  }}
                  className="capitalize"
                >
                  {ca.category_name.toLowerCase() === "family hospital" 
                    ? "Family Hospital Uniform" 
                    : ca.category_name}
                </CategoryButton>
              ))}

              <DropdownContainer>
                <CategoryButton 
                  active={selectedCategory?.category_name === "Arfi Brand"}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Other Brands ▾
                </CategoryButton>
                <DropdownMenu show={isDropdownOpen}>
                  {arfiBrandCategory && (
                    <DropdownItem
                      active={selectedCategory?.id === arfiBrandCategory.id}
                      onClick={() => {
                        setSelectedCategory(arfiBrandCategory);
                        setSelectedSubcategory("");
                        getCategoryItems(arfiBrandCategory.id);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {arfiBrandCategory.category_name}
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </DropdownContainer>
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

        {categoryDetails && (
          <BrandSection>
            <BrandLogo 
              src={url + `/ecommerce/brands/${categoryDetails.photo_path}`}
              alt={categoryDetails.category_name}
            />
            <BrandInfo>
              <BrandName>
                {categoryDetails?.category_name?.toLowerCase() === "family hospital"
                  ? "Family Hospital Uniform"
                  : categoryDetails?.category_name}
              </BrandName>
              <BrandDescription
                dangerouslySetInnerHTML={{
                  __html: categoryDetails.description || `Explore our premium ${categoryDetails.category_name} collection.`
                }}
              />
            </BrandInfo>
          </BrandSection>
        )}

        {subcatError ? (
          <ErrorMessage>
            {subcatError}
            <br />
            <button
              onClick={subcategories}
              style={{
                marginTop: "10px",
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                background: "#0b74b5",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Retry
            </button>
          </ErrorMessage>
        ) : (
          selectedCategorySubcategories.length > 0 && (
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
          )
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
          <EmptyText>No products found.</EmptyText>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default ProductList;