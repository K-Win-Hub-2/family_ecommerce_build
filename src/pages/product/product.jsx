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
import Swal from "sweetalert2";
import InstockDialog from "../../components/InstockDialog";
import MatchItemDialog from "../../components/MatchItemDialog";
import { FaRegHeart } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Spinner from "../../common/Spinner";
import NoImage from "../../../src/files/noimage/noimage.png";

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
  lineheight: 1.15;
  color: #034f96;
  margin: 0 0 18px;
  text-transform: capitalize;

  ${mobile({
    fontSize: "32px",
  })}
`;

const ProductMeta = styled.div`
  font-size: 20px;
  font-weight: 600;
  lineheight: 1;
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

const SectionTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  ${SectionTitle} {
    margin-bottom: 0;
  }
`;

const SizeChartToggle = styled.button`
  padding: 6px 14px;
  border: 1px solid #156ea8;
  border-radius: 8px;
  background: ${({ active }) => (active ? "#156ea8" : "#fafafa")};
  color: ${({ active }) => (active ? "#fff" : "#156ea8")};
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  margin-bottom: 10px;

  &:hover {
    background: #4f9ee8;
    color: #fff;
  }
`;

const SizeChartImage = styled.img`
  width: 100%;
  max-width: 320px;
  margin-bottom: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  display: block;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const SizeChartModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const SizeChartModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SizeChartModalImage = styled.img`
  max-width: 100%;
  max-height: 85vh;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
`;

const SizeChartModalPdf = styled.iframe`
  width: 80vw;
  height: 85vh;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
`;

const SizeChartModalClose = styled.button`
  position: absolute;
  top: -14px;
  right: -14px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #fff;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;

  &:hover {
    background: #eee;
  }
`;

const SizeChartPdf = styled.iframe`
  width: 100%;
  max-width: 420px;
  height: 300px;
  margin-bottom: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  display: block;
  flex-shrink: 0;
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

const SizeAndChartRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${mobile(`
    flex-direction: column;
  `)}
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

const WishlistButton = styled.button`
  width: 58px;
  height: 58px;
  background: #fff;
  color: #156ea8;
  border: 1px solid #156ea8;
  border-radius: 20px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f7ff;
    color: #4f9ee8;
    border-color: #4f9ee8;
  }

  ${mobile(`
    height: 54px;
    width: 54px;
  `)}
`;

const BoldText = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #034f96;
`;

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

const relatedResponsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Product = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const carouselRef = useRef(null);
    const matchGroupRef = useRef(null);
    const parentItemRef = useRef(null);
    const presetAppliedRef = useRef(false);

    const url = useSelector((state) => state.user.url);

    const defaultImageUrl = url + "/ecommerce/items/default.png";
    const isDefaultPhoto = (photoPath) =>
        !photoPath ||
        String(photoPath).toLowerCase().includes("default") ||
        String(photoPath).toLowerCase().includes("noimage");
    const getItemPhotoUrl = (photoPath) =>
        isDefaultPhoto(photoPath)
            ? defaultImageUrl
            : url + `/ecommerce/items/${photoPath}`;

  const [item, setItem] = useState({});
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
  const [, setDesign] = useState("");
  const [unitimg, setUnitImg] = useState("");

  const [isInstock, setIsInstock] = useState(false);
  const [instockFlag, setInstockFlag] = useState("");
  const [, setPreorderFlag] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [checkColor, setCheckColor] = useState(false);

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [, setFilteredUnits] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [primaryStoreUnit, setPrimaryStoreUnit] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [websiteDisplayName, setWebsiteDisplayName] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(true);
  const [sizeChartModalOpen, setSizeChartModalOpen] = useState(false);

    const [relatedpants, setRelatedPants] = useState([]);
    const [relateditems, setRelatedItems] = useState({ items: [] });
    const [matchModalOpen, setMatchModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [validImages, setValidImages] = useState([]);
    const [fetchedUnitImages, setFetchedUnitImages] = useState([]);
    const galleryPickedRef = useRef(false);

    const isMatchView = location.state?.fromMatchView || new URLSearchParams(location.search).get("fromMatchView") === "1";

  const id = location.pathname.split("/")[2];
  const visibleItems = 4;
  const totalItems = relateditems?.items?.length || 0;

    const formatSizeLabel = (sizeName) => {
        if (!sizeName) return "";
        // if (normalized.includes("xxl")) return "XXL";
        // if (normalized.includes("xl")) return "XL";
        // if (normalized.includes("xs")) return "XS";
        // if (normalized.includes("lg")) return "L";
        // if (normalized.includes("sm")) return "S";
        // if (normalized.includes("me")) return "M";
        return sizeName.toUpperCase();
    };

  const allStock = useMemo(() => {
    return allUnits.reduce((total, unit) => {
      return total + Number(unit.current_quantity || 0);
    }, 0);
  }, [allUnits]);

    const preselectUnit = (unitId, loadedUnits) => {
        if (!unitId || loadedUnits.length === 0) return;

        galleryPickedRef.current = false;

        const targetUnit = loadedUnits.find(
            (u) => String(u.id) === String(unitId),
        );
        if (!targetUnit) return;

        const gender = targetUnit.gender_name;
        const colour = targetUnit.colour_name;
        const sizeName = targetUnit.size_name;

        const genderFiltered = loadedUnits.filter(
            (u) => u.gender_name === gender,
        );
        const colorFiltered = genderFiltered.filter(
            (u) => u.colour_name === colour,
        );

        setSelectedGender(gender);
        setFilteredUnits(genderFiltered);

        const uniqueColors = [
            ...new Map(
                genderFiltered.map((unit) => [
                    unit.colour_name,
                    {
                        colour_name: unit.colour_name,
                        colour_description: unit.colour_description || unit.colour_name,
                        color_hex_code: unit.colour?.color_hex_code || null,
                    },
                ])
            ).values(),
        ];
        setFilteredColors(uniqueColors);

        setSelectedColor(colour);
        setColor(colour);

        setPrimaryStoreUnit(colorFiltered);
        const sizes = [...new Set(colorFiltered.map((unit) => unit.size_name))];
        setFilteredSizes(sizes);

        setSelectedSize(sizeName);
        setPrice(targetUnit.order_price);
        setStock(targetUnit.current_quantity);
        setUnitId(targetUnit.id);
        setUnitName(targetUnit.unit_name);
        setUnitCode(targetUnit.unit_code);
        setFabric(targetUnit.fabric_name);
        setDesign(targetUnit.design_name);

        if (targetUnit.website_display_name) {
            setWebsiteDisplayName(targetUnit.website_display_name);
        }

        const unitImage = findUnitImage(targetUnit);
        if (unitImage) {
            setSelectedImage(url + unitImage);
            setUnitImg(unitImage);
        }
        setRelatedPants(targetUnit.match_item || []);
    };

    useEffect(() => {
        const getProduct = () => {
            const unitIdParam = location.state?.unitId;

            const apiUrl = unitIdParam
                ? url + "/api/item/unit/" + unitIdParam
                : url + "/api/unitbyid_api/" + id;

            axios
                .get(apiUrl)
                .then((response) => {
                    setItem(response.data.item || {});
                    setDesign(response.data.item?.item_name || "");
                    setUnits(response.data.counting_units || []);
                    setAllUnits(
                        response.data.counting_unit_all_update ||
                        response.data.counting_unit_all ||
                        []
                    );
                    setInstockFlag((response.data.counting_units || []).reduce(
                        (total, unit) => total + Number(unit.current_quantity || 0),
                        0
                    ));
                    setPreorderFlag(response.data.valueofpreorder);

                    const itemObj = response.data.item || {};
                    const relatedPantsObj =
                        response.data.related_pants ||
                        itemObj.related_item ||
                        itemObj.related_pants;

                    const relatedItemsRaw =
                        response.data.related_items ||
                        response.data.related_item;
                    if (Array.isArray(relatedItemsRaw)) {
                        setRelatedItems({ items: relatedItemsRaw });
                    } else if (relatedItemsRaw) {
                        setRelatedItems({ items: [relatedItemsRaw] });
                    } else if (relatedPantsObj) {
                        setRelatedItems({ items: [relatedPantsObj] });
                    }

          setSelectedImage(getItemPhotoUrl(response.data.item?.photo_path));

          if (response.data.item?.website_display_name) {
            setWebsiteDisplayName(response.data.item.website_display_name);
          }

          if (unitIdParam) {
            preselectUnit(unitIdParam, [
                ...(response.data.counting_unit_all_update || []),
                ...(response.data.counting_unit_all || []),
                ...(response.data.counting_units || []),
            ]);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    getProduct();
  }, [id, url, location.state?.unitId]);

  useEffect(() => {
    presetAppliedRef.current = false;
  }, [id]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const genderParam = params.get("gender");
    const colorParam = params.get("color");
    if (!genderParam || !colorParam) return;
    if (presetAppliedRef.current || allUnits.length === 0) return;

    const genderFiltered = allUnits.filter(
      (unit) => unit.gender_name === genderParam,
    );
    if (genderFiltered.length === 0) return;

    const colorFiltered = genderFiltered.filter(
      (unit) => unit.colour_name === colorParam,
    );
    if (colorFiltered.length === 0) return;

    setSelectedGender(genderParam);
    setFilteredUnits(genderFiltered);

    const uniqueColors = [
      ...new Map(
        genderFiltered.map((unit) => [
          unit.colour_name,
          {
            colour_name: unit.colour_name,
            colour_description: unit.colour_description || unit.colour_name,
            color_hex_code: unit.colour?.color_hex_code || null,
          },
        ]),
      ).values(),
    ];
    setFilteredColors(uniqueColors);

    setSelectedColor(colorParam);
    setColor(colorParam);
    setPrimaryStoreUnit(colorFiltered);
    const sizes = [...new Set(colorFiltered.map((unit) => unit.size_name))];
    setFilteredSizes(sizes);
    setSelectedSize(null);
    setPrice(0);
    setStock(0);

    const targetUnit = colorFiltered[0];
    const unitImage = findUnitImage(targetUnit);
    if (unitImage) {
      setSelectedImage(url + unitImage);
      setUnitImg(unitImage);
    }
      axios
        .get(url + "/api/counting-unit/" + targetUnit.id)
        .then((res) => {
          if (res.data) {
            if (res.data.image) {
              setSelectedImage(url + res.data.image);
              setUnitImg(res.data.image);
            }
            setWebsiteDisplayName(res.data.website_display_name || "");
          }
        })
        .catch((err) => console.error(err));

    presetAppliedRef.current = true;
  }, [allUnits, location.search, url]);

  const handleQuantity = (type) => {
    setQuantity((prevQuantity) => {
      if (type === "dec") {
        return prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
      }
      if (!selectedSize || displayAvailability <= 0) return prevQuantity;
      if (type === "inc") {
        return prevQuantity < displayAvailability
          ? prevQuantity + 1
          : prevQuantity;
      }
      return prevQuantity;
    });
  };

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
            if (item.related_item_id && allMatchItems.length === 0) {
                Swal.fire({
                    title: "Not Available",
                    text: "Can't buy this product cause of the match product stock is 0.",
                    icon: "warning",
                });
            } else if (allMatchItems.length > 0) {
                const matchGroupId = `match_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
                matchGroupRef.current = matchGroupId;
                parentItemRef.current = {
                    unitid,
                    unitname,
                    unitcode,
                    unitimg,
                    color,
                    size,
                    fabric,
                    quantity,
                    price,
                    productId: id,
                    matchGroupId,
                    isMatchParent: true
                };
                setMatchModalOpen(true);
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

                Swal.fire({
                    title: "Success!",
                    text: "Successfully added to cart.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        }
    };

  const handleWishlistClick = () => {
    if (!selectedSize || !selectedColor || !selectedGender) {
      Swal.fire({
        title: "Please select options",
        text: "Choose gender, color and size first.",
        icon: "warning",
      });
      return;
    }

    dispatch(
      addWishlist({
        unitid,
        unitname,
        unitcode,
        unitimg,
        color,
        size,
        fabric,
        quantity,
        price,
        productId: id,
      }),
    );

    Swal.fire({
      title: "Added to Wishlist!",
      text: "Successfully added to your wishlist.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
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
                        color_hex_code: unit.colour?.color_hex_code || null,
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

  const findUnitImage = (unit) => {
    if (unit?.image) return unit.image;
    const match = units.find(
      (u) =>
        u.id === unit.id ||
        (u.gender_name === unit.gender_name &&
          u.colour_name === unit.colour_name &&
          u.size_name === unit.size_name),
    );
    return match?.image || "";
  };

  const handleColorChange = (colorObj) => {
    setSelectedColor(colorObj.colour_name);
    setColor(colorObj.colour_name);
    galleryPickedRef.current = false;

    const filtered = allUnits.filter(
      (unit) =>
        unit.gender_name === selectedGender &&
        unit.colour_name === colorObj.colour_name,
    );

    setPrimaryStoreUnit(filtered);
    const sizes = [...new Set(filtered.map((unit) => unit.size_name))];
    setFilteredSizes(sizes);

    setSelectedSize(null);
    setPrice(0);
    setStock(0);

    if (filtered.length > 0) {
      const targetUnit = filtered[0];
      const unitImage = findUnitImage(targetUnit);
      if (unitImage) {
        setSelectedImage(url + unitImage);
        setUnitImg(unitImage);
      }

      axios
        .get(url + "/api/counting-unit/" + targetUnit.id)
        .then((res) => {
          if (res.data) {
            if (res.data.image) {
              setSelectedImage(url + res.data.image);
              setUnitImg(res.data.image);
            }
            setWebsiteDisplayName(res.data.website_display_name || "");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const handleSizeChange = (sizeName) => {
    const filtered = primaryStoreUnit.filter(
      (unit) => unit.size_name === sizeName,
    );
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
        
        setWebsiteDisplayName(selectedUnit.website_display_name || "");
        setRelatedPants(selectedUnit.match_item || []);
        
        const unitImage = findUnitImage(selectedUnit);
        if (unitImage) {
            setSelectedImage(url + unitImage);
            setUnitImg(unitImage);
        } else {
            setSelectedImage(getItemPhotoUrl(item.photo_path));
            setUnitImg("/ecommerce/items/default.png");
        }
    };

  const productImages = useMemo(() => {
    if (
      !item?.photo_path ||
      item.photo_path.trim() === "" ||
      isDefaultPhoto(item.photo_path)
    ) {
      return [{ id: "front", url: defaultImageUrl }];
    }

    const frontUrl = url + `/ecommerce/items/${item.photo_path}`;
    const imagesArray = [{ id: "front", url: frontUrl }];

    if (!item.photo_path.includes("front")) {
      return imagesArray;
    }

    const leftPath = item.photo_path.replace("front", "left");
    const rightPath = item.photo_path.replace("front", "right");
    const bodyPath = item.photo_path.replace("front", "body");

    if (leftPath && !leftPath.includes("null") && leftPath.trim() !== "") {
      imagesArray.push({
        id: "left",
        url: url + `/ecommerce/items/${leftPath}`,
      });
    }
    if (rightPath && !rightPath.includes("null") && rightPath.trim() !== "") {
      imagesArray.push({
        id: "right",
        url: url + `/ecommerce/items/${rightPath}`,
      });
    }
    if (bodyPath && !bodyPath.includes("null") && bodyPath.trim() !== "") {
      imagesArray.push({
        id: "body",
        url: url + `/ecommerce/items/${bodyPath}`,
      });
    }

    return imagesArray;
  }, [item, url]);

  const colorUnitImages = useMemo(() => {
    if (!isMatchView) return [];

    const sourceUnits = [...(allUnits || []), ...(units || [])];
    const filtered = sourceUnits.filter(
      (u) => u.colour_name === selectedColor,
    );

    const seen = new Set();
    const images = [];
    filtered.forEach((u) => {
      const img = u.image;
      if (img && !seen.has(img)) {
        seen.add(img);
        images.push({ id: img, url: url + img });
      }
    });
    return images;
  }, [allUnits, units, selectedColor, isMatchView, url]);

  useEffect(() => {
    if (!isMatchView || !selectedColor) {
      setFetchedUnitImages([]);
      return;
    }

    let cancelled = false;
    const sourceUnits = allUnits.length > 0 ? allUnits : units;
    const seenUnits = new Set();
    const unitIds = [];
    sourceUnits.forEach((u) => {
      if (u?.colour_name !== selectedColor) return;
      const uid = u?.id;
      if (uid && !seenUnits.has(uid)) {
        seenUnits.add(uid);
        unitIds.push(uid);
      }
    });

    if (unitIds.length === 0) return;

    Promise.allSettled(
      unitIds.map((uid) => axios.get(url + "/api/counting-unit/" + uid)),
    ).then((results) => {
      if (cancelled) return;

      const seen = new Set();
      const images = [];
      results.forEach((r) => {
        const img = r.status === "fulfilled" ? r.value?.data?.image : null;
        if (img && !seen.has(img)) {
          seen.add(img);
          images.push({ id: img, url: url + img });
        }
      });

      setFetchedUnitImages(images);

      if (images.length > 0 && !galleryPickedRef.current) {
        setSelectedImage((prev) =>
          images.some((im) => im.url === prev) ? prev : images[0].url,
        );
        setUnitImg(images[0].url.replace(url, ""));
      }
    });

    return () => {
      cancelled = true;
    };
  }, [isMatchView, selectedColor, allUnits, units, url]);

  useEffect(() => {
    if (isMatchView) {
      const seen = new Set();
      const combined = [];
      [...colorUnitImages, ...fetchedUnitImages].forEach((im) => {
        if (!seen.has(im.url)) {
          seen.add(im.url);
          combined.push(im);
        }
      });
      setValidImages(combined.length > 0 ? combined : productImages);
      return;
    }

    if (productImages.length === 0) {
      setValidImages([]);
      return;
    }

    const frontImage = productImages.find((img) => img.id === "front");
    const variantImages = productImages.filter((img) => img.id !== "front");

    if (variantImages.length === 0) {
      setValidImages(productImages);
      return;
    }

    setValidImages([frontImage]);

    variantImages.forEach((imgObj) => {
      const img = new Image();
      img.src = imgObj.url;
      img.onload = () => {
        setValidImages((prev) => {
          if (prev.some((item) => item.id === imgObj.id)) return prev;
          return [...prev, imgObj];
        });
      };
      img.onerror = () => {
        console.warn(
          `Image variation ${imgObj.id} returned 404/error, hiding from UI.`,
        );
      };
    });
}, [productImages, isMatchView, colorUnitImages, fetchedUnitImages]);

  const displayAvailability = selectedSize ? stock : allStock;

  const allMatchItems = useMemo(() => {
    const seen = new Set();
    const result = [];
    (allUnits || []).forEach((unit) => {
      if (selectedColor && unit.colour_name !== selectedColor) return;
      (unit.match_item || []).forEach((match) => {
        if (!seen.has(match.id)) {
          seen.add(match.id);
          result.push(match);
        }
      });
    });
    return result;
  }, [allUnits, selectedColor]);

  const hasOutOfStockMatch = useMemo(() => {
    return allMatchItems.length > 0 && allMatchItems.every(
      (match) => Number(match.current_quantity || 0) <= 0
    );
  }, [allMatchItems]);

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
            {validImages.map((imgObj) => (
              <Thumbnail
                key={imgObj.id}
                src={imgObj.url}
                alt={`thumb-${imgObj.id}`}
                active={selectedImage === imgObj.url}
                onClick={() => {
                  galleryPickedRef.current = true;
                  setSelectedImage(imgObj.url);
                }}
              />
            ))}
          </ThumbnailColumn>
          <MainImageWrap>
            <MainImage
              src={selectedImage || (validImages[0] ? validImages[0].url : "")}
              alt={item.item_name}
            />
          </MainImageWrap>
        </GallerySection>

        <InfoSection>
          <ProductTitle>{item.item_name}</ProductTitle>
          {(websiteDisplayName || item.website_display_name) && (
            <ProductMeta>
              <div>({websiteDisplayName || item.website_display_name})</div>
            </ProductMeta>
          )}
          <ProductMeta>
            <div>
              <BoldText>Availability</BoldText> — {displayAvailability} In stock
            </div>
          </ProductMeta>

                    <SectionTitle>Gender</SectionTitle>
                    <SizeRow>
                        {availableGenders.includes("m") && (
                            <SizeBox selected={selectedGender === "m"} onClick={() => choosegen("m")}>Male</SizeBox>
                        )}
                        {availableGenders.includes("f") && (
                            <SizeBox selected={selectedGender === "f"} onClick={() => choosegen("f")}>Female</SizeBox>
                        )}
                        {availableGenders.includes("un") && (
                            <SizeBox selected={selectedGender === "un"} onClick={() => choosegen("un")}>Unisex</SizeBox>
                        )}
                        {availableGenders.includes("st") && (
                            <SizeBox selected={selectedGender === "st"} onClick={() => choosegen("st")}>ST</SizeBox>
                        )}
                        {availableGenders.includes("t") && (
                            <SizeBox selected={selectedGender === "t"} onClick={() => choosegen("t")}>T</SizeBox>
                        )}
                        {availableGenders.includes("c") && (
                            <SizeBox selected={selectedGender === "c"} onClick={() => choosegen("c")}>C</SizeBox>
                        )}
                        {availableGenders.includes("a") && (
                            <SizeBox selected={selectedGender === "a"} onClick={() => choosegen("a")}>A</SizeBox>
                        )}
                        {availableGenders.includes("sh") && (
                            <SizeBox selected={selectedGender === "sh"} onClick={() => choosegen("sh")}>SH</SizeBox>
                        )}
                        {availableGenders.includes("fs") && (
                            <SizeBox selected={selectedGender === "fs"} onClick={() => choosegen("fs")}>FS</SizeBox>
                        )}
                        {availableGenders.includes("slp") && (
                            <SizeBox selected={selectedGender === "slp"} onClick={() => choosegen("slp")}>SLP</SizeBox>
                        )}
                        {availableGenders.includes("other") && (
                            <SizeBox selected={selectedGender === "other"} onClick={() => choosegen("other")}>Other</SizeBox>
                        )}
                    </SizeRow>

                    {selectedGender && (
                        <>
                            <SectionTitle>Color</SectionTitle>
                            <ColorRow>
                                {filteredColors.filter(col => col.color_hex_code).map((col, index) => (
                                    <ColorCircle
                                        key={index}
                                        bg={col.color_hex_code}
                                        selected={selectedColor === col.colour_name}
                                        onClick={() => handleColorChange(col)}
                                        title={col.colour_description || col.colour_name}
                                    />
                                ))}
                            </ColorRow>
                        </>
                    )}

          <Divider />
          <SectionTitleRow>
            <SectionTitle>Size</SectionTitle>
            {item.size_chart_path && (
              <SizeChartToggle
                active={showSizeChart}
                onClick={() => setShowSizeChart((prev) => !prev)}
              >
                {showSizeChart ? "Hide Size Chart" : "Show Size Chart"}
              </SizeChartToggle>
            )}
          </SectionTitleRow>
          <SizeAndChartRow>
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
            {showSizeChart && item.size_chart_path && (
              item.size_chart_path.toLowerCase().endsWith(".pdf") ? (
                <SizeChartPdf
                  src={
                    url +
                    `/ecommerce/items/${item.size_chart_path}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0`
                  }
                  title="Size Chart PDF"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSizeChartModalOpen(true)}
                />
              ) : (
                <SizeChartImage
                  src={url + `/ecommerce/items/${item.size_chart_path}`}
                  alt="Size Chart"
                  onClick={() => setSizeChartModalOpen(true)}
                />
              )
            )}
          </SizeAndChartRow>


          <Divider />
          <ProductMeta>
            <BoldText>Price</BoldText> —{" "}
            {price
              ? `${Number(price).toLocaleString()} MMK`
              : "***Price will show after choosing item***"}
          </ProductMeta>

          <CartRow>
            {!isMatchView && (
              <>
                <QtyBox>
                  <QtyButton onClick={() => handleQuantity("dec")}>
                    <Remove />
                  </QtyButton>
                  <QtyValue>{quantity}</QtyValue>
                  <QtyButton
                    onClick={() => handleQuantity("inc")}
                    disabled={
                      !selectedSize ||
                      displayAvailability <= 0 ||
                      quantity >= displayAvailability
                    }
                  >
                    <Add />
                  </QtyButton>
                </QtyBox>

                {instockFlag > 0 && !hasOutOfStockMatch ? (
                  <AddCartButton onClick={handleClick}>Add to cart</AddCartButton>
                ) : (
                  <AddCartButton style={{ opacity: 0.6, cursor: "not-allowed" }}>
                    {hasOutOfStockMatch ? "Match Item Out of Stock" : "Stock Unavailable"}
                  </AddCartButton>
                )}
              </>
            )}

            <WishlistButton
              onClick={handleWishlistClick}
              title="Add to Wishlist"
            >
              <FaRegHeart />
            </WishlistButton>
          </CartRow>
                        {/* {relatedpants && relatedpants.id && (
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
                    )} */}
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
            {relateditems.items &&
              relateditems.items.map((it) => (
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

            <MatchItemDialog
                open={matchModalOpen}
                close={() => setMatchModalOpen(false)}
                items={allMatchItems}
                url={url}
                fallbackImage={NoImage}
                matchGroupId={matchGroupRef.current}
                parentItem={parentItemRef.current}
            />

            {sizeChartModalOpen && item.size_chart_path && (
              <SizeChartModalOverlay onClick={() => setSizeChartModalOpen(false)}>
                <SizeChartModalContent onClick={(e) => e.stopPropagation()}>
                  <SizeChartModalClose onClick={() => setSizeChartModalOpen(false)}>
                    &times;
                  </SizeChartModalClose>
                  {item.size_chart_path.toLowerCase().endsWith(".pdf") ? (
                    <SizeChartModalPdf
                      src={
                        url +
                        `/ecommerce/items/${item.size_chart_path}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0`
                      }
                      title="Size Chart PDF"
                    />
                  ) : (
                    <SizeChartModalImage
                      src={url + `/ecommerce/items/${item.size_chart_path}`}
                      alt="Size Chart"
                    />
                  )}
                </SizeChartModalContent>
              </SizeChartModalOverlay>
            )}
        </Container>
    );
};

export default Product;
