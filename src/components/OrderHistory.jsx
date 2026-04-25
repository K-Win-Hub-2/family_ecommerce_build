import React  from 'react';
import { Navigate, useNavigate,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ColorNav from './ColorNav';
import Footer from './Footer';
import { useSelector} from 'react-redux'
import Navbar from './Navbar';


const OrderHistory = () => {

    const [ inputs, setInputs ] = useState({});
    const [ oinputs, setOInputs ] = useState([]);
    const [ attachs, setAttachs ] = useState([]);
    const [ecounting, setEcounting] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const url= useSelector(state => state.user.url);
    const [order, setOrders] = useState([]);
    const [preorders, setPreorders] = useState([]);
    const username = useSelector(state=>state.user);
    const customer_id=username.id;

    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetchOrderDetail()
    // },[]);
    useEffect(() =>{
        fetchOrderList();
    },[]);

    // const fetchOrderDetail = async () => {
    //     await axios.get(url+'/api/ecommerce_order_detail/'+id)
    //     .then(res=>{
    //         setInputs({
    //             id: res.data.orders.id,
    //             order_code: res.data.orders.order_code,
    //             order_date: res.data.orders.order_date,
    //             customer_name: res.data.orders.customer_name,
    //             customer_phone: res.data.orders.customer_phone,
    //             deliver_address: res.data.orders.deliver_address,
    //             total_quantity: res.data.orders.total_quantity,
    //             total_amount: res.data.orders.total_amount,
    //             payment_type: res.data.orders.payment_type,
    //             order_status: res.data.orders.order_status,
    //             payment_channel: res.data.orders.payment_channel,
    //             delivery_fee: res.data.orders.delivery_fee,
    //         });
    //         setOInputs(res.data.counting_units);
    //         console.log('');
    //         setAttachs(res.data.attachs);
    //         setEcounting(res.data.units);
    //         setColor(res.data.color);
    //         setSize(res.data.size);
    //     });
    // }
    const fetchOrderList = () => {
        axios.get(url + '/api/ecommerce_order_index/' + customer_id)
            .then(res => {
                const sortedInstockOrders = res.data.instock.sort((a, b) =>  new Date(b.created_at)-new Date(a.created_at));
                const latestOrder = sortedInstockOrders[0];
                // console.log("Latest order:", latestOrder);
                setOrders(latestOrder);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }
    const navigate = useNavigate();
    const Orderlist = () =>{
        // console.log('or id',id);
        navigate("/order_list/");
    }    
    if (loading) {
        return <div>Loading...</div>;
      }
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
                <div className="container mx-auto px-4 py-8 max-w-6xl">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Your Order Details
                        </h1>
                        <p className="text-xl text-gray-600 font-light">
                            Track and manage your order information
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                                Order Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-blue-100">
                                    <span className="text-gray-600 font-medium">Order ID:</span>
                                    <span className="text-gray-900 font-semibold">{order.id}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-blue-100">
                                    <span className="text-gray-600 font-medium">Customer Name:</span>
                                    <span className="text-gray-900 font-semibold">{order.customer_name || username.name}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-blue-100">
                                    <span className="text-gray-600 font-medium">Phone:</span>
                                    <span className="text-gray-900 font-semibold">{order.customer_phone}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-blue-100">
                                    <span className="text-gray-600 font-medium">Address:</span>
                                    <span className="text-gray-900 font-semibold text-right max-w-xs">{order.deliver_address}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-blue-100">
                                    <span className="text-gray-600 font-medium">Order Date:</span>
                                    <span className="text-gray-900 font-semibold">{order.order_date}</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-gray-600 font-medium">Delivery Fee:</span>
                                    <span className="text-gray-900 font-semibold">${order.delivery_fee}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
                                Order Summary
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-indigo-100">
                                    <span className="text-gray-600 font-medium">Order Number:</span>
                                    <span className="text-gray-900 font-semibold">{order.order_code}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-indigo-100">
                                    <span className="text-gray-600 font-medium">Total Quantity:</span>
                                    <span className="text-gray-900 font-semibold">{order.total_quantity} items</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-indigo-100">
                                    <span className="text-gray-600 font-medium">Total Amount:</span>
                                    <span className="text-2xl font-bold text-indigo-600">${order.total_amount}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-indigo-100">
                                    <span className="text-gray-600 font-medium">Payment Type:</span>
                                    <span className="text-gray-900 font-semibold capitalize">{order.payment_type}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-indigo-100">
                                    <span className="text-gray-600 font-medium">Payment Channel:</span>
                                    <span className="text-gray-900 font-semibold capitalize">{order.payment_channel}</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-gray-600 font-medium">Status:</span>
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg capitalize">
                                        {order.order_status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <button 
                            onClick={Orderlist}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 hover:from-blue-700 hover:to-indigo-700"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Continue to Order List
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}

export default OrderHistory;