import React, { useEffect, useState } from "react";
import ColorNav from "../ColorNav";
import Footer from "../Footer";
import styled from "styled-components";
import { mobile } from "../../responsive";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import {
  addAttach,
  removeAttach,
  resetOrder,
  resetAttach,
  editOrder,
  editAttach,
} from "../../redux/designRedux";
import Swal from "sweetalert2";
import BankInfoDialog from "../BankInfoDialog";
import PaidInfoDialog from "../PaidInfoDialog";
import CheckColor from "../../components/CheckColor";
import ProductRow from "./product-row";

const Div = styled.div`
  margin-top: 30px;
  width: 80%;
  height: auto;
`;
const Title = styled.h4`
  margin-top: 20px;
  text-align: center;
`;
const Wrapper = styled.div`
  widtr: 100vw;
  height: auto;
  min-height: 100vh;
  padding: 50px;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ padding: "50" })}
`;
const Lable = styled.label`
  font-size: 18px;
`;
const Text = styled.span`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;
const Text1 = styled.span`
  padding: 5px 15px;
  color: #32549b;
  font-size: 20px;
  font-weight: bold;
  font-style: oblique;
`;
const Input = styled.input``;
const A = styled.a``;

const Button = styled.button`
  padding: 8px;
  background-color: teal;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  float: right;
  color: white;
`;
const Btn = styled.button`
  padding: 4px;
  background-color: #32549b;
  border: none;
  border-radius: 20px;
  color: white;
`;

const Check = styled.p`
  background-color: #027f9d;
  margin-left: 7px;
  color: #ffffff;
  border-radius: 3px;
  padding: 3px;
  cursor: pointer;
`;

const Delete = styled.button`
  background-color: #32549b;
  border: none;
  border-radius: 20px;
  width: 70px;
  height: 30px;
  margin-top: 3px;
  color: white;
`;
const Cancel = styled.button`
  background-color: red;
  border: none;
  border-radius: 20px;
  width: 70px;
  height: 30px;
  margin-top: 3px;
  color: white;
`;

const Edit = styled.button`
  background-color: #e69b00;
  border: none;
  border-radius: 20px;
  width: 70px;
  height: 30px;
  margin-top: 3px;
  color: white;
`;

const Save = styled.button`
  background-color: #32549b;
  border: none;
  border-radius: 10px;
  width: 110px;
  height: 35px;
  margin-top: 3px;
  color: white;
  margin-left: 450px;
  margin-bottom: 50px;
`;
const Select = styled.select`
  padding: 4px;
  width: 200px;
`;
const Select1 = styled.select``;

const Option = styled.option``;
const Qty = styled.input`
  width: 70px;
`;
const MainText = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.7s ease;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  margin-left: 20px;
`;

const Order = () => {
  const location = useLocation();
  const design_id = location.pathname.split("/")[2];
  const item_name = location.pathname.split("/")[2];
  const units = location.state.units;
  console.log('units the the state units',units);
  let [count, setCount] = useState(1);
  const [paymentchannel, setPaymentChannel] = useState("");
  const [paymenttype, setPaymentType] = useState("");
  const [check, setCheck] = useState(false);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [files, setFiles] = useState("");
  const dispatch = useDispatch();
  const pre = useSelector((state) => state.design.orders);
  const preattach = useSelector((state) => state.design.attachs);
  const username = useSelector((state) => state.user);
  const edittestname = useSelector((state) => state.design.edit_testname);
  const edittestqty = useSelector((state) => state.design.edit_testqty);
  const editdescription = useSelector((state) => state.design.edit_description);
  const editfile = useSelector((state) => state.design.edit_file);
  // const edittestprice = useSelector((state) => state.design.edit_testprice);
  const edittestprice = 0;
  const [checkColor, setCheckColor] = useState(false);
  const navigate = useNavigate();
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  const onPaymentChannelChanged = (e) => setPaymentChannel(e.target.value);
  const onPaymentType = (e) => setPaymentType(e.target.value);

  const [showBankInfo, setshowBankInfo] = useState(false);
  const [showPaidInfo, setshowPaidInfo] = useState(false);
  const [design_name, setDesignName] = useState("");
  const [designs, setDesigns] = useState([]);
  const [gendername, setGenderName] = useState("");
  const [fabricname, setFabricName] = useState("");
  const [colourname, setColorName] = useState("");
  const [sizename, setSizeName] = useState("");
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [loading,setLoading]=useState(true);
  const url = useSelector((state) => state.user.url);
  const [eid, setEid] = useState(0);
  const { register, handleSubmit} = useForm({
    defaultValues: {
      price: 0 // Set the initial value of price to 0
    }
  });
 const [cartItems, setCartItems] = useState([]);
 let cacheData ;

const getDesigns = async (design_id) => {
  try {
    const res = await axios.get(`${url}/api/designapi/${design_id}`);
    setLoading(false);

    // Extract and set design data
    const designData = Object.entries(res.data.design).map(e => e[1]);
    setDesigns(designData);

    // Assuming you want to generate HTML from designData
    let html = designData.map(design => {
      // Create HTML string based on your design data structure
      return `<div>${design.name}</div>`; // Adjust based on your design object
    }).join('');

    // Update the DOM with the generated HTML
    document.getElementById("type").innerHTML = html;
  } catch (err) {
    console.error("Error fetching designs:", err);
    setLoading(false);
  }
};

console.log('this is the cartItems array',cartItems);


useEffect(()=>{
  cacheData ? setDesigns(cacheData) : getDesigns(design_id)
},[]);
const bankInfo = () => {
  setshowBankInfo(true);
};

  const paidInfo = () => {
    setshowPaidInfo(true);
  };

  const cheColor = () => {
    setCheckColor(true);
  };

  
  const addGender = (gender) => {
    setGenderName(gender);
    filterSizesByGender(gender.id);
  };
  const addDesign = (design) => {
    setDesignName(design);
  };
  const filterSizesByGender = (id) => {
    const filteredSizes = sizes.filter(size => size.gender_id == id);
    setFilteredSizes(filteredSizes);
  };
  const addFabric = (fabric) => {
    setFabricName(fabric);
  };
  const addColor = (color) => {
    setColorName(color);
  };
  const addSize = (size) => {
    setSizeName(size);
  };
 
  const handleChange = (event) => {
    const selectedGenderId = event.target.value;
  };

  const attach = () => {
    if (document.getElementById("qty1").value == "") {
      Swal.fire({
        title: "Warning!",
        text: "Please Enter Quantity.",
        type: "error",
      });
    } else {
      let testqty = document.getElementById("qty1").value;
      let testprice = document.getElementById("price1").value;
      setCount(++count);
      let orderid = count;
      dispatch(
        addAttach({ orderid, file, files, description, testqty, testprice })
      );
      document.getElementById("qty1").value = "";
      document.getElementById("price1").value = "";
      document.getElementById("description").value = "";
      document.getElementById("file").value = "";
    }
  };

  const removeattach = (id) => {
    dispatch(removeAttach({ id }));
  };
   useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('addToCart')) || [];
    setCartItems(storedItems);
  }, []);
  
    const addToCart = (data) => {
    const storedItems = JSON.parse(localStorage.getItem('addToCart')) || [];
    storedItems.length == 0 ? data["id"] = 1 : data["id"] = storedItems[storedItems.length -1 ].id + 1
    const updatedItems = [...storedItems, data];
    localStorage.setItem('addToCart', JSON.stringify(updatedItems));
    setCartItems(updatedItems); // Update component state
    console.log('data is the data',data);
  };
  const remove = (id) => {
    const storedItems = JSON.parse(localStorage.getItem('addToCart')) || [];
    let saveItem= storedItems.filter(items => items.id != id);
    localStorage.setItem('addToCart',JSON.stringify(saveItem));
    setCartItems(saveItem); 
  };

  const changeprice = () => {
    if (document.getElementById("item_name").innerHTML == "") {
      Swal.fire({
        title: "Warning!",
        text: "You Need to Choose Design.",
        type: "error",
      });
      document.getElementById("qty").value = "";
    } else if (document.getElementById("gen_name").innerHTML == "") {
      Swal.fire({
        title: "Warning!",
        text: "You Need to Choose Gender.",
        type: "error",
      });
      document.getElementById("qty").value = "";
    } 
    // else if (document.getElementById("fab_name").innerHTML == "") {
    //   Swal.fire({
    //     title: "Warning!",
    //     text: "You Need to Choose Fabric.",
    //     type: "error",
    //   });
    //   document.getElementById("qty").value = "";
    // } else if (document.getElementById("col_name").innerHTML == "") {
    //   Swal.fire({
    //     title: "Warning!",
    //     text: "You Need to Choose Colour.",
    //     type: "error",
    //   });
    //   document.getElementById("qty").value = "";
    // } else if (document.getElementById("siz_name").innerHTML == "") {
    //   Swal.fire({
    //     title: "Warning!",
    //     text: "You Need to Choose Size.",
    //     type: "error",
    //   });
    //   document.getElementById("qty").value = "";
    // }
     else {
      const counting =
        design_name.design_name +
        " " +
        gendername.gender_name +
        " " +
        fabricname.fabric_name +
        " " +
        colourname.colour_name +
        " " +
        sizename.size_name;
      axios
        .post(url + "/api/showprice", {
          unit: counting,
        })
        .then((res) => {
          // alert('success');
          document.getElementById("price").value = res.data.data;
        })
        .catch((err) => {
          console.log("error");
        });
    }
  };

  const savepreorder = async () => {
    const items = JSON.parse(localStorage.getItem('addToCart')) ;
    
    let formdata = {
      id: username.id,
      customer_name: username.name,
      phone: username.phone,
      address: username.address,
      orders: items,
    };
    console.log('formData',formdata);
   const response = await axios.post(url + "/api/ecommerce_preorder_store", formdata)
   if(response.data){
      Swal.fire({
              title: "Success",
              text: "Order success",
              type: "success",
              confirmButtonColor: "blue"
            }).then(result => {
              if(result["isConfirmed"]){
                localStorage.removeItem("addToCart")
                setCartItems([])
                navigate("/order_list")
              }
            });
   }
  };

  const storepreorder = () => {
    let formdata = {
      customer_id: username.id,
      customer_name: username.name,
      phone: username.phone,
      address: username.address,
      orders: cartItems,
    };

    const res = axios .post(url + "/api/ecommerce_preorder_store", formdata)
              .then(function (response) {
          alert('success store');
        dispatch(resetOrder());
        navigate("/order_list");
      })
      .catch(function (error) {
        alert("fail store");
      });
  };
  const sendmail = (val) => {
    axios
      .post(url + "/api/send/invoice_email", {
        id: username.id,
        name: username.name,
        phone: username.phone,
        address: username.address,
        email: username.email,
        preorders: pre,
        attachs: preattach,
        type: val,
      })
      .then((response) => {
        //Success Message in Sweetalert modal
        Swal.fire({
          title: response.data["message"],
          text: "Thanks For Your Pre-Orders! Your will be delivered within four to six weeks!",
          type: "success",
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const storeattach = () => {
    let formdata = {
      id: username.id,
      name: username.name,
      phone: username.phone,
      address: username.address,
    };
    const res = axios
      .post(url + "/api/ecommerce_attachorder_store", formdata)
      .then(function (response) {
        setEid(response.data);
        preattachstore(response.data);
      })
      .catch(function (error) {
        alert("fail store");
      });
  };

  const preattachstore = (id) => {
    let totqty = 0;
    let totamt = 0;
    preattach.map((el) => {
      totqty += parseInt(el.testqty);
      totamt += parseInt(el.testprice) * parseInt(el.testqty);
      const data = {
        attachs: el.files,
        qty: el.testqty,
        description: el.description,
        price: 0,
        totqty: totqty,
        totamount: totamt,
        id: id,
      };
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      const res = axios
        .post(url + "/api/ecommerce_attach_store", data, config)
        .then(function (response) {
          //   alert('success store');
          dispatch(resetAttach());
          navigate("/order_list");
          axios
            .post(
              url + "/api/send/invoice_email",
              {
                id: username.id,
                name: username.name,
                phone: username.phone,
                address: username.address,
                email: username.email,
                preorders: pre,
                attachs: preattach,
                type: 2,
              },
              config
            )
            .then((response) => {
              //Success Message in Sweetalert modal
              Swal.fire({
                title: response.data["message"],
                text: "Thanks For Your Pre-Orders! Your will be delivered within four to six weeks!",
                type: "success",
              });
            })
            .catch((err) => {
              console.log("error");
            });
        })
        .catch(function (error) {
          alert("fail store");
        });
    });
  };

  const edit = (id) => {
    dispatch(editOrder({ id }));
    const fullname = edittestname.split(" ");
    document.getElementById("item_name").innerHTML = design_name;
    document.getElementById("gen_name").innerHTML = fullname[1];
    document.getElementById("fab_name").innerHTML = fullname[2];
    document.getElementById("col_name").innerHTML = fullname[3];
    document.getElementById("siz_name").innerHTML = fullname[4];
    document.getElementById("qty").value = edittestqty;
    document.getElementById("price").value = edittestprice;
  };

  const editattach = (id) => {
    dispatch(editAttach({ id }));
    document.getElementById("qty1").value = edittestqty;
    document.getElementById("description").value = editdescription;
    document.getElementById("price1").value = edittestprice;
    document.getElementById("file").src = editfile;
  };

  const changefile = (f) => {
    setFile(URL.createObjectURL(f));
    setFiles(f);
  };
    const genders = [
        {
        id: "2",
        gender_name: "female",
        },
        {
        id: "3",
        gender_name: "male",
        },
    ];
    const fabrics = [
        {
        id: "1",
        fabric_name: "familyarrow",
        },
    ];
    const colors = [
    {
        "id": 133,
        "colour_name": "ar8",
        "colour_description": "Green",
        "color_hex_code": "0xff7F8384"
    },
    {
        "id": 148,
        "colour_name": "ar23",
        "colour_description": "Yellow",
        "color_hex_code": "0xff97A075"
    },
    {
        "id": 607,
        "colour_name": "ar81",
        "colour_description": "Yellow",
        "color_hex_code": "0xff70691E"
    },
    {
        "id": 725,
        "colour_name": "4925ar18",
        "colour_description": "Yellow",
        "color_hex_code": "0xff63A298"
    },
    {
        "id": 733,
        "colour_name": "ar106",
        "colour_description": "Yellow",
        "color_hex_code": "0xff4C4C4C"
    },
    {
        "id": 735,
        "colour_name": "ar43",
        "colour_description": "Yellow",
        "color_hex_code": "0xffF3E124"
    },
    {
        "id": 736,
        "colour_name": "ar89",
        "colour_description": "Blue",
        "color_hex_code": "0xff141622"
    },
    {
        "id": 738,
        "colour_name": "ar96",
        "colour_description": "Blue",
        "color_hex_code": "0xff003C55"
    },
    {
        "id": 745,
        "colour_name": "4925ar26",
        "colour_description": "Pink",
        "color_hex_code": "0xffBD8091"
    },
    {
        "id": 746,
        "colour_name": "ar44",
        "colour_description": "Blue",
        "color_hex_code": "0xff167394"
    },
    {
        "id": 747,
        "colour_name": "ar98",
        "colour_description": "Blue",
        "color_hex_code": "0xff026D80"
    },
    {
        "id": 764,
        "colour_name": "ar88",
        "colour_description": "Green",
        "color_hex_code": "0xff0FB782"
    },
    {
        "id": 771,
        "colour_name": "ar48",
        "colour_description": "Yellow",
        "color_hex_code": "0xff8F803A"
    },
    {
        "id": 777,
        "colour_name": "4925ar7",
        "colour_description": "Yellow",
        "color_hex_code": "0xff9C9679"
    },
    {
        "id": 815,
        "colour_name": "ar77",
        "colour_description": "Green",
        "color_hex_code": "0xff0E6833"
    },
    {
        "id": 827,
        "colour_name": "4925ar23",
        "colour_description": "Blue",
        "color_hex_code": "0xff1A2251"
    },
    {
        "id": 830,
        "colour_name": "ar36",
        "colour_description": "Pink",
        "color_hex_code": "0xffC7004C"
    },
    {
        "id": 831,
        "colour_name": "ar64",
        "colour_description": "Green",
        "color_hex_code": "0xff00A23B"
    },
    {
        "id": 832,
        "colour_name": "ar66",
        "colour_description": "Purple",
        "color_hex_code": "0xff2A1733"
    },
    {
        "id": 833,
        "colour_name": "ar82",
        "colour_description": "Blue",
        "color_hex_code": "0xff4D6DAD"
    },
    {
        "id": 834,
        "colour_name": "ar90",
        "colour_description": "Yellow",
        "color_hex_code": "0xff7F7E73"
    },
    {
        "id": 835,
        "colour_name": "ar67",
        "colour_description": "Pink",
        "color_hex_code": "0xffDA99CC"
    },
    {
        "id": 836,
        "colour_name": "ar70",
        "colour_description": "Yellow",
        "color_hex_code": "0xffBAA54D"
    },
    {
        "id": 837,
        "colour_name": "ar75",
        "colour_description": "Purple",
        "color_hex_code": "0xff704289"
    },
    {
        "id": 839,
        "colour_name": "4925ar20",
        "colour_description": "Blue",
        "color_hex_code": "0xff264075"
    },
    {
        "id": 849,
        "colour_name": "4925ar32",
        "colour_description": "Green",
        "color_hex_code": "0xff002D03"
    },
    {
        "id": 850,
        "colour_name": "4925ar16",
        "colour_description": "Purple",
        "color_hex_code": "0xffC79FDC"
    },
    {
        "id": 851,
        "colour_name": "4925ar21",
        "colour_description": "Purple",
        "color_hex_code": "0xff000000"
    },
    {
        "id": 852,
        "colour_name": "ar101",
        "colour_description": "Blue",
        "color_hex_code": "0xff3C91AC"
    },
    {
        "id": 853,
        "colour_name": "ar79",
        "colour_description": "Pink",
        "color_hex_code": "0xffAC4B62"
    },
    {
        "id": 854,
        "colour_name": "ar57",
        "colour_description": "Pink",
        "color_hex_code": "0xff490012"
    }
    ]
    const sizes=[
    {
        "id": 1,
        "size_name": "xsf",
        "size_description": "femle extra small",
        "gender_id": 2,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 2,
        "size_name": "smf",
        "size_description": "femalesmall",
        "gender_id": 2,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 3,
        "size_name": "mef",
        "size_description": "female medium",
        "gender_id": 2,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 4,
        "size_name": "lgf",
        "size_description": "female large",
        "gender_id": 2,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 5,
        "size_name": "xlf",
        "size_description": "female  extra large",
        "gender_id": 2,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 6,
        "size_name": "xxlf",
        "size_description": "female 2 extra large",
        "gender_id": 2,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 7,
        "size_name": "xxxlf",
        "size_description": "female 3 extra large",
        "gender_id": 2,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 8,
        "size_name": "xxxxlf",
        "size_description": "female 4 extra large",
        "gender_id": 2,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 9,
        "size_name": "xsm",
        "size_description": "male extra small",
        "gender_id": 3,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 10,
        "size_name": "smm",
        "size_description": "male small",
        "gender_id": 3,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 11,
        "size_name": "mem",
        "size_description": "male medium",
        "gender_id": 3,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 12,
        "size_name": "lgm",
        "size_description": "male large",
        "gender_id": 3,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 13,
        "size_name": "xlm",
        "size_description": "male extra large",
        "gender_id": 3,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 14,
        "size_name": "xxlm",
        "size_description": "male 2 extra large",
        "gender_id": 3,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 15,
        "size_name": "xxxlm",
        "size_description": "male 3 extra large",
        "gender_id": 3,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    },
    {
        "id": 16,
        "size_name": "xxxxlm",
        "size_description": "male4 extra large",
        "gender_id": 3,
        "created_at": "2022-04-07 07:52:21",
        "updated_at": "2022-04-07 07:52:21"
    }]
  return (
  loading ?
   <div className="">Loading...</div> 
  : 
    <div>
      <ColorNav />
      <Wrapper>
        <Div className="card">
          <Title>Creat New Order</Title>
          <div className="row m-3">
            <div className="col-md-6 form-group">
              <Lable>Name</Lable>
              <Input className="form-control" value={username.name}></Input>
            </div>
            <div className="col-md-6">
              <Lable>Phone</Lable>
              <Input className="form-control" value={username.phone}></Input>
            </div>
          </div>
          <div className="row m-3">
            <div className="col-md-6 form-group">
              <Lable>Address</Lable>
              <Input className="form-control" value={username.address}></Input>
            </div>
            <div className="col-md-6">
              <Lable>Order Date</Lable>
              <Input className="form-control" value={date} />
            </div>
          </div>
          <div className="row m-3">
            <div className="col-md-6 form-group">
              <Lable>Payment Type</Lable>
              <Select1
                className="form-control"
                value={paymenttype}
                onChange={onPaymentType}
              >
                <Option>Select Payment Type</Option>
                <Option value="1">Prepaid Partial</Option>
                <Option value="2">Prepaid Full</Option>
              </Select1>
            </div>
            <div className="col-md-6">
              <Lable>Payment Channel</Lable>
              <Select1
                className="form-control"
                value={paymentchannel}
                onChange={onPaymentChannelChanged}
              >
                <Option>Select Payment Channel</Option>
                <Option value="1">Mobile Banking</Option>
                <Option value="2">Internet Banking</Option>
              </Select1>
            </div>
          </div>

          {paymentchannel == "1" ? (
            <div>
              <div className="row m-3">
                <div className="offset-4 col-md-2 form-group">
                  <Input
                    type="radio"
                    name="userdata"
                    onChange={bankInfo}
                  ></Input>
                  <Lable className="offset-1">Bank Info</Lable>
                </div>
                <div className="col-md-6">
                  <Input
                    type="radio"
                    name="userdata"
                    onChange={paidInfo}
                  ></Input>
                  <Lable className="offset-1">Paid Info</Lable>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <Text>
            Choose Items that you want!
            <input type="hidden" id={"eid"} />
          </Text>
          <Text>
            <Input
              type="checkbox"
              name="userdata"
              style={{ marginRight: "10px" }}
              onClick={() => setCheck(!check)}
            ></Input>
            Others
          </Text>

          {check ? (
            <>
              <table className="table mt-4">
                <thead>
                  <tr className="text-center">
                    <th scope="col">Item</th>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody id="addrow">
                  <tr className="text-center" id="defaultrow">
                    <td>
                      <Input
                        type="file"
                        id={"file"}
                        onChange={(e) => changefile(e.target.files[0])}
                      ></Input>
                    </td>
                    <td>
                      <Input
                        type="text"
                        id={"description"}
                        onChange={(e) => setDescription(e.target.value)}
                      ></Input>
                    </td>
                    <td>
                      <Qty id={"qty1"} placeholder="0" />
                    </td>
                    <td>
                      <Qty id={"price1"} placeholder="0" />
                    </td>
                    <td>
                      <Delete onClick={attach}>Add</Delete>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <Text>Your Preorder Items</Text>
              <div className="mt-4 mb-5" id="preorders">
                <div className="row mt-2 text-center">
                  <div className="col-md-3">
                    <span>Item</span>
                  </div>
                  <div className="col-md-2">
                    <span>Quantity</span>
                  </div>
                  <div className="col-md-2">
                    <span>Price</span>
                  </div>
                  <div className="col-md-2">
                    <span>Total</span>
                  </div>
                  <div className="col-md-3">
                    <span>Action</span>
                  </div>
                </div>
                {preattach.map((t) => (
                  <div className="row mt-2 text-center">
                    <div className="col-md-3">
                      <img src={t.file} width="140px" height="auto" />
                    </div>
                    <div className="col-md-2 mt-5">
                      <span>{t.testqty}</span>
                    </div>
                    <div className="col-md-2 mt-5">
                      <span>{t.testprice}</span>
                    </div>
                    <div className="col-md-2 mt-5">
                      <span>{t.testqty * t.testprice}</span>
                    </div>
                    <div className="col-md-3 mt-5">
                      <span>
                        <Cancel onClick={() => removeattach(t.orderid)}>
                          Cancel
                        </Cancel>
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        <Edit onClick={() => editattach(t.orderid)}>Edit</Edit>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Save onClick={() => savepreorder(2)}>Make Order</Save>
            </>
          ) : (
            <>
              <table className="table mt-4">
                <thead>
                  <tr className="text-center">
                    <th scope="col">Item Name</th>
                    <th scope="col">Specification</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <ProductRow
                units={units}
                designNameFromUnits={design_name}
                item_name={item_name}
                gendername={gendername}
                fabricname={fabricname}
                colourname={colourname}
                sizename={sizename}
                genders={genders}
                fabrics={fabrics}
                colors={colors}
                sizes={sizes}
                register={register}
                addDesign={addDesign}
                addGender={addGender}
                addFabric={addFabric}
                addColor={addColor}
                addSize={addSize}
                cheColor={cheColor}
                changeprice={changeprice}
                handleSubmit={handleSubmit}
                addToCart={addToCart}
                />
              </table>

              <Text>Your Preorder Items</Text>
              <div className="mt-4 mb-5" id="preorders">
                <div className="row mt-2 text-center">
                  <div className="col-md-3">
                    <span>Item Name</span>
                  </div>
                  <div className="col-md-2">
                    <span>Quantity</span>
                  </div>
                  <div className="col-md-2">
                    <span>Price</span>
                  </div>
                  <div className="col-md-2">
                    <span>Total</span>
                  </div>
                  <div className="col-md-3">
                    <span>Action</span>
                  </div>
                </div>
                {
                  cartItems.map((p) => (
                    <div className="row mt-2 text-center" key={p.orderid}>
                      <div className="col-md-3">
                        <span>
                          {/* {p.design_id ? designs.filter(des => des.id == p.design_id)[0]?.design_name : ""} <br />
                          {p.fabric_id ? fabrics.filter(fabric => fabric.id === p.fabric_id)[0]?.fabric_name : ""} <br />
                          {p.colour_id ? colors.filter(colr => colr.id == p.colour_id)[0]?.colour_name : ""} <br />
                          {p.gender_id ? genders.filter(gen => gen.id === p.gender_id)[0]?.gender_name : ""} <br /> */}
                          {p.design_id}
                        </span>
                      </div>
                      <div className="col-md-2">
                        <span>{p.quantity}</span>
                      </div>
                      <div className="col-md-2">
                        <span>0</span>
                      </div>
                      <div className="col-md-2">
                        <span>{p.quantity * 0}</span>
                      </div>
                      <div className="col-md-3">
                        <span>
                          <Cancel onClick={() => remove(p.id)}>
                            Cancel
                          </Cancel>
                        </span>
                        &nbsp;&nbsp;
                        <span>
                          <Edit onClick={() => edit(p.orderid)}>Edit</Edit>
                        </span>
                      </div>
                    </div>
                  ))
                }
                
              </div>
              <Save onClick={() => savepreorder()}>Make Order</Save>
            </>
          )}
        </Div>
      </Wrapper>
      <Footer />
      <BankInfoDialog
        open={showBankInfo}
        close={() => setshowBankInfo(false)}
      />
      <PaidInfoDialog
        open={showPaidInfo}
        close={() => setshowPaidInfo(false)}
      />
      <CheckColor
        name={colourname}
        open={checkColor}
        close={() => setCheckColor(false)}
      />
    </div>
  );
};

export default Order;
