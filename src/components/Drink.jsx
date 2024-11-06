import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleModal } from '../features/modal/modalSlice'
import { setOrder } from '../features/order/orderSlice';



const Drink = ({drink}) => {
  const dispatch = useDispatch()
  const handleOrder = ()=>{
    dispatch(setOrder(drink))
    dispatch(handleModal())
  }
    
    return (
        <div className='food'
          style={{
            
            width: "100%",
          
            background: `linear-gradient( rgba(0,0,0,0.1) , rgba(0,0,0,0.1)),
            url(${drink.drinkImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
            {/* <img src={food.foodImage}  className='foodimg' alt="" /> */}
          <div className="info">
            
            <span>{drink.drinkName}</span> 
            <span>{drink.Description}</span>
            <span className='price'> price {drink.price}</span> 
           
          </div>
          <Link className='btn order' onClick={handleOrder}>Order
          </Link>
        </div>
      )
}

export default Drink