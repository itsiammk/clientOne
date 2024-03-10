import React, { useEffect, useState } from 'react'
import { getSingleProduct } from './apiService'
import { useRouter } from 'next/router'
const product = () => {
    const router = useRouter()
    const {contact} = router.query 
    const [productData, setProductData] = useState({})
    useEffect(()=>{
        const fetchData = async() => {
            const res = await getSingleProduct(contact)
            setProductData(res)
        }
        if(contact){
            fetchData()
        }
    },[contact])
    return (
        <div>
            <h6>{productData?.title}</h6>
            {productData?.images && <img src={productData?.images[0]} alt={productData.title} />}
            <p>{productData?.description}</p>
        </div>
    )
}

export default product
