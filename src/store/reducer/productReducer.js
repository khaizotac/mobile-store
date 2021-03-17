const initState = {
    products:[
        {id: '1', name: 'Iphone 12', price:'400$'},
        {id: '2', name: 'Iphone 12', price:'400$'},
        {id: '3', name: 'Iphone 12', price:'400$'}
    ]
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            console.log('create project', action.product);
            return state;
        case 'CREATE_PRODUCT_ERROR':
            console.log('create project error', action.error);
            return state;
        default:
            return state;
    }
}

export default productReducer;