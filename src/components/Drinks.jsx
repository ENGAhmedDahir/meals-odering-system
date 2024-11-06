import React from 'react'
import drinks from '../assets/Drinks.json';
import Drink from './Drink';
const Drinks = () => {
  return (
    <div className='grid'>
        {drinks.map(drink=>(
           
            <Drink key = {drink.id} drink={drink}/>
        ))}

    </div>
  )
}

export default Drinks