import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buycake } from '../../redux/cake/CakeActions'
const Hookcakecomponent = () => {
    const  numOfCakmkkes=useSelector(state=>state. numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>

        <h1>NUm of cake-{numOfCakmkkes}</h1>
        <button  onClick={()=>{dispatch(buycake())}}>buy cake</button>
    </div>
  )
}

export default Hookcakecomponent