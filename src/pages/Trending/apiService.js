export const getAllProduct = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products')
        const responseJson = await response.json();
        return responseJson
    }
    catch(error){
        return error?.response
    }
}

export const getSingleProduct = async (id) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const responseJson = await response.json();
        return responseJson
    }
    catch(error){
        return error?.response
    }
}

export const getCartDetails = async(data) => {
    try{
        const res = fetch('https://dummyjson.com/carts/add',{
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data})
        })
        const response = await res.json();
        return response
        
    }
    catch(error){
        return error?.response
    }
}
