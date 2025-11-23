import React from 'react'
import { buycake } from '../../redux/cake/CakeActions'
import {connect} from 'react-redux'
const Cake = (props) => {
  return (
    <div>
    <div>NUmber of cakes--{props.numOfCakes}</div>
    <button onClick={props.buycake}>Buy cake</button>
    </div>
  )

}
const mapstateToprops=state=>{
  return{
    numOfCakes:state.numOfCakes 
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    buycake:()=>dispatch(buycake())
  }
}
  export default connect(mapstateToprops,mapDispatchToProps)(Cake)