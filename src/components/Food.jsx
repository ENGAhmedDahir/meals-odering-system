import React from 'react'
import { Link } from 'react-router-dom';
import { handleModal } from '../features/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { setOrder } from '../features/order/orderSlice';

const Food = ({food}) => {
 const dispatch = useDispatch()
 const handleOrder = ()=>{
  dispatch(setOrder(food))
  dispatch(handleModal())
}
  return (
    <div className='food'
      style={{
        
        width: "100%",
        // height : "100%",
        background: `linear-gradient( rgba(0,0,0,0.1) , rgba(0,0,0,0.1)),
        url(${food.foodImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
        {/* <img src={food.foodImage}  className='foodimg' alt="" /> */}
      <div className="info">
        
        <span>{food.foodName}</span> 
        <span>{food.Description}</span>
        <span className='price'> price {food.price}</span> 
       
      </div>
      <Link className='btn order' onClick={handleOrder}>Order
      </Link>
    </div>
  )
}

export default Food;
