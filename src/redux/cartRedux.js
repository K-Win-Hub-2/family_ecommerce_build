// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         products: [],
//         total_pcs: 0,
//         quantity: 0,
//         total: 0,
//         discount_value: 0,
//         discount_type: '',
//         name: '',
//         phone: '',
//         deliver_address: '',
//         payment_type: '',
//         payment_channel: '',
//         remark: '',

//     },
//     reducers: {
//         addProduct: (state, action) => {
//         console.log('state is',state);
//         console.log('action is',action);
//         state.quantity += 1;
//         state.total_pcs +=action.payload.quantity;
//         state.total += action.payload.price * action.payload.quantity;
//         state.products.push(action.payload);
//         },
//         removeProduct: (state, action) => {
//             for (var i = 0; i < state.products.length; i++) {
//                 if (state.products[i].unitid === action.payload.id) {
//                     state.products.splice(i, 1);
//                 }
//             }
//         },
//         addCheckOutInfo: (state,action) => {
//             state.name = action.payload.name;
//             state.phone = action.payload.phone;
//             state.deliver_address = action.payload.deliver_address;
//             state.payment_type = action.payload.payment_type;
//             state.payment_channel = action.payload.payment_channel;
//             state.remark = action.payload.remark;
//         },
//         resetProduct: (state) => {
//             state.products.length = 0 ;
//             state.total_pcs = 0;
//             state.total = 0;
//         },
//         resetPcs: (state, action) => {
//             state.total_pcs =action.payload.total_pcs;
//             state.total = action.payload.total;
        
//         },
//     }
// })

// export const{addProduct,removeProduct,addCheckOutInfo, resetProduct,resetPcs} = cartSlice.actions
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         products: [],
//         total_pcs: 0,
//         quantity: 0,
//         total: 0,
//         discount_value: 0,
//         discount_type: '',
//         name: '',
//         phone: '',
//         deliver_address: '',
//         payment_type: '',
//         payment_channel: '',
//         remark: '',
//     },
//     reducers: {
//         addProduct: (state, action) => {
//             const existingProduct = state.products.find(product => product.unitid === action.payload.unitid);

//             if (existingProduct) {
//                 // If the product already exists, update the quantity and total
//                 existingProduct.quantity += action.payload.quantity;
//                 state.total_pcs += action.payload.quantity;
//                 state.total += action.payload.price * action.payload.quantity;
//             } else {
//                 // If the product doesn't exist, add it to the cart
//                 state.quantity += 1;
//                 state.total_pcs += action.payload.quantity;
//                 state.total += action.payload.price * action.payload.quantity;
//                 state.products.push(action.payload);
//             }
//         },

//         removeProduct: (state, action) => {
//             const productIndex = state.products.findIndex(product => product.unitid === action.payload.id);

//             if (productIndex !== -1) {
//                 const product = state.products[productIndex];

//                 // Update the total quantity, total_pcs, and total
//                 state.quantity = Math.max(0, state.quantity - 1);
//                 state.total_pcs = Math.max(0, state.total_pcs - product.quantity);
//                 state.total = Math.max(0, state.total - (product.price * product.quantity));

//                 // Remove the product from the cart
//                 state.products.splice(productIndex, 1);
//             }
//         },

//         addCheckOutInfo: (state, action) => {
//             state.name = action.payload.name;
//             state.phone = action.payload.phone;
//             state.deliver_address = action.payload.deliver_address;
//             state.payment_type = action.payload.payment_type;
//             state.payment_channel = action.payload.payment_channel;
//             state.remark = action.payload.remark;
//         },
//         resetProduct: (state) => {
//             state.products = [];
//             state.total_pcs = 0;
//             state.quantity = 0;
//             state.total = 0;
//         },
//         resetPcs: (state, action) => {
//             state.total_pcs = action.payload.total_pcs;
//             state.total = action.payload.total;
//         },
//     },
// });

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         products: [],
//         total_pcs: 0,
//         quantity: 0,
//         total: 0,
//     },
//     reducers: {
//         addProduct: (state, action) => {
//             const { id, quantity, price } = action.payload;
//             const existingProduct = state.products.find(product => product.id === id);
            
//             if (existingProduct) {
//                 existingProduct.quantity += quantity;
//                 existingProduct.price = existingProduct.quantity * price;
//             } else {
//                 state.products.push({ ...action.payload, price: quantity * price });
//             }

//             state.total_pcs += quantity;
//             state.quantity += 1;
//             state.total += quantity * price;
//         },
//         removeProduct: (state, action) => {
//             const id = action.payload;
//             const existingProductIndex = state.products.findIndex(product => product.id === id);
            
//             if (existingProductIndex !== -1) {
//                 const product = state.products[existingProductIndex];
//                 state.total_pcs -= product.quantity;
//                 state.quantity -= 1;
//                 state.total -= product.price;
                
//                 state.products.splice(existingProductIndex, 1);
//             }
//         },
//         updateQuantity: (state, action) => {
//             const { id, quantity } = action.payload;
//             const existingProduct = state.products.find(product => product.id === id);
            
//             if (existingProduct) {
//                 const oldQuantity = existingProduct.quantity;
//                 const oldPrice = existingProduct.price;

//                 existingProduct.quantity = quantity;
//                 existingProduct.price = quantity * (existingProduct.price / oldQuantity);

//                 state.total_pcs += quantity - oldQuantity;
//                 state.total += existingProduct.price - oldPrice;
//             }
//         },
//         resetPcs: (state, action) => {
//             state.total_pcs = action.payload.total_pcs;
//             state.total = action.payload.total;
//         },
//     },
// });

// // export const { addProduct, removeProduct, updateQuantity, resetPcs } = cartSlice.actions;
// // export default cartSlice.reducer;


// export const { addProduct, removeProduct, addCheckOutInfo, resetProduct, updateQuantity,resetPcs } = cartSlice.actions;
// export default cartSlice.reducer;


// cartSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         products: [],
//         total_pcs: 0,
//         quantity: 0,
//         total: 0,
//         discount_value: 0,
//         discount_type: '',
//         name: '',
//         phone: '',
//         deliver_address: '',
//         payment_type: '',
//         payment_channel: '',
//         remark: '',
//     },
//     reducers: {
//         addProduct: (state, action) => {
//             const { id, quantity, price } = action.payload;
//             const product = state.products.find(p => p.unitid === id);
//             if (product) {
//                 product.quantity = quantity;
//                 product.price = price;
//             } else {
//                 state.products.push(action.payload);
//             }
//             // Recalculate totals
//             state.total_pcs = state.products.reduce((sum, p) => sum + p.quantity, 0);
//             state.total = state.products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
//         },
//         updateQuantity: (state, action) => {
//             const { id, quantity } = action.payload;
//             const product = state.products.find(p => p.unitid === id);
//             if (product) {
//                 product.quantity = quantity;
//                 // Recalculate totals
//                 state.total_pcs = state.products.reduce((sum, p) => sum + p.quantity, 0);
//                 state.total = state.products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
//             }
//         },
//         removeProduct: (state, action) => {
//             const id = action.payload;
//             state.products = state.products.filter(product => product.unitid !== id);
//             // Recalculate totals
//             state.total_pcs = state.products.reduce((sum, p) => sum + p.quantity, 0);
//             state.total = state.products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
//         },
//         addCheckOutInfo: (state, action) => {
//             state.name = action.payload.name;
//             state.phone = action.payload.phone;
//             state.deliver_address = action.payload.deliver_address;
//             state.payment_type = action.payload.payment_type;
//             state.payment_channel = action.payload.payment_channel;
//             state.remark = action.payload.remark;
//         },
//         resetProduct: (state) => {
//             state.products = [];
//             state.total_pcs = 0;
//             state.quantity = 0;
//             state.total = 0;
//         },
//         resetPcs: (state, action) => {
//             state.total_pcs = action.payload.total_pcs;
//             state.total = action.payload.total;
//         },
//     },
// });

// export const { addProduct, updateQuantity, removeProduct, resetPcs, addCheckOutInfo, resetProduct  } = cartSlice.actions;
// export default cartSlice.reducer;

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total_pcs: 0,
        total: 0,
        discount_value: 0,
        discount_type: '',
        name: '',
        phone: '',
        deliver_address: '',
        payment_type: '',
        payment_channel: '',
        remark: '',
    },
    reducers: {
        // Helper function to recalculate totals
        recalculateTotals: (state) => {
            state.total_pcs = state.products.reduce((sum, p) => sum + p.quantity, 0);
            state.total = state.products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
        },
        addProduct: (state, action) => {
            const { unitid, quantity, price } = action.payload;
            const product = state.products.find(p => p.unitid === unitid);

            if (product) {
                // Update the quantity and price if the product already exists
                product.quantity += quantity;
                product.price = price;  // Optionally update the price, depending on your logic
            } else {
                // If the product does not exist, add it to the products array
                state.products.push(action.payload);
            }

            // Recalculate totals
            state.total_pcs = state.products.reduce((sum, p) => sum + p.quantity, 0);
            state.total = state.products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find(p => p.unitid === id);
            if (product) {
                product.quantity = quantity;
                // Recalculate totals
                cartSlice.caseReducers.recalculateTotals(state);
            }
        },
        removeProduct: (state, action) => {
            const id = action.payload;
            state.products = state.products.filter(product => product.unitid !== id);
            // Recalculate totals
            cartSlice.caseReducers.recalculateTotals(state);
        },
        addCheckOutInfo: (state, action) => {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.deliver_address = action.payload.deliver_address;
            state.payment_type = action.payload.payment_type;
            state.payment_channel = action.payload.payment_channel;
            state.remark = action.payload.remark;
        },
        resetProduct: (state) => {
            state.products = [];
            state.total_pcs = 0;
            state.total = 0;
        },
        resetPcs: (state, action) => {
            state.total_pcs = action.payload.total_pcs;
            state.total = action.payload.total;
        },
    },
});

export const { addProduct, updateQuantity, removeProduct, resetPcs, addCheckOutInfo, resetProduct  } = cartSlice.actions;
export default cartSlice.reducer;
