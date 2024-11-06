import React from 'react'
import foods from '../assets/Foods.json'
import Food from './Food'
const Foods = () => {
  return (
    <div className='grid'>
        {foods.map(food=>(
            <Food key={food.id} food={food}/>
        ))}
    </div>
  )
}

export default Foods