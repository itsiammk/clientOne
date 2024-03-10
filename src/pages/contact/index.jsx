import React, { useEffect, useRef, useState } from 'react'
import Style from './style.module.scss'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { getAllProduct } from './apiService'
import { useRouter } from 'next/router'
import { useAppContext } from '@/context/AppContext'

const Contact = () => {
    const router = useRouter()
    const buyButtonRef = useRef();
    const [allData, setAllData] = useState({})
    const {state, dispatch} = useAppContext()
    const {srpReducer} = state
    // const [cartcnt, setCartCount] = useState(srpReducer.cartCount)
    // console.log(cartcnt,'hello')
    useEffect(()=>{
        // setCartCount(srpReducer.cartCount)
    },[srpReducer])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllProduct();
                setAllData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);
    const handleClick = (e, index) => {
        // console.log(buyButtonRef,e,'helloo',buyButtonRef.current.contains(e.target))
        router.push(`/contact/${index}`);
        // if (buyButtonRef.current && !buyButtonRef.current.contains(e.target)) {
        // }
    };
    const buyClickHandle = (e) => {
        // setCartCount(cartcnt+1)
        dispatch({type: 'COUNT' })
        e.preventDefault()
        e.stopPropagation()
    }
    return (
        <>
            <div className={Style.gridContainer} ref={buyButtonRef}>
                {allData?.products?.map((item, index) => (
                    <div  key={index} className={Style.gridItem} onClick={(e)=>handleClick(e,item?.id)}>
                        <h6 >{item.title}</h6>
                        <img className={Style.img} src={item.images[0]} alt={item.title} />
                        <button className={Style.buyButton} ref={buyButtonRef} onClick={buyClickHandle}>Buy Now</button>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Contact





// const { value, errors, handleSubmit, submitCount, setSubmitting } = formik
// const SignupSchema = Yup.object().shape({
//     firstName: Yup.string()
//         .min(2, 'Too Short!')
//         .max(70, 'Too Long!')
//         .required('Required')
// })

// const formik = useFormik({
//     initialValues : {
//         firstName : '',
//         lastName : '',
//         PhoneNo: '',
//         SocialMediaAccount: ''
//     },
//     validationSchema : SignupSchema
// })
// const handleSubmitForm = () => {
//     return
// }
// const handleChange = (e) => {
//     console.log(e)
//     formik.setFieldValue('firstName', e.target.value)
// }
// console.log(errors,'error')
// return (
//     <form onSubmit={handleSubmitForm}>
//         <label className={Style.label}>Enter Your FirstName</label>
//         <input type='text' id='firstName' name='firstName' value={formik.values.firstName} onChange={handleChange}></input>
//         {errors.firstName && <div>{errors.firstName}</div>}
//         <button className={Style.button} onClick={handleSubmitForm}>Submit</button>
//     </form>
// )




// const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     Email: '',
//     PhoneNumber: ''
// })
// const [formDataDisplay, setFormDataDisplay] = useState({
//     firstName: '',
//     lastName: '',
//     Email: '',
//     PhoneNumber: ''
// })
// const [submitClicked, setSubmitClicked] = useState(false)
// const handleInputChange = (e) => {
//     setFormData({
//         ...formData,
//         [e.target.name]: e.target.value
//     });
//     console.log(formData,'dwd')
// };
// const handleSubmit = (e) => {
//     // e.preventDefault()
//     setFormDataDisplay(formData);
//     console.log(formDataDisplay,'formData')
//     setSubmitClicked(true)
//     setFormData({
//         firstName: '',
//         lastName: '',
//         Email: '',
//         PhoneNumber: ''
//     });
// }
// return (
//     <>
//     {/* <form > */}
//         <label htmlFor="firstName">First Name:</label>
//         <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             className={Style.FirstName}
//             onChange={handleInputChange}
//             />
//         <button className={Style.button} onClick={handleSubmit}>Submit</button>
//     {/* </form> */}
//     {submitClicked && <div>
//         {/* {console.log(formDataDisplay,'he;llll')} */}
//         {formDataDisplay.firstName}
//         </div>}
//     </>
// )