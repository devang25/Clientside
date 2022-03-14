import React from 'react'
import './topPicks.css';
import {sdata} from "../../dummydata";
import TopPicksItem from '../TopPicksItems/TopPicksItem';

const items = (val)=>{
     return (
         <TopPicksItem
             img = {val.img}
             name = {val.name}
             price = {val.price}
             catagory = {val.catagory}
         />
     )
}

export default function TopPicks() {
  return (
    <>  
    <div className="topPicks__heading">
        <h2> Top Picks </h2>
    </div>
    <div className="topPicks__container">
    <div className="topPicks__items">       
       {sdata.map(items)}
       </div>
    </div>
    </>
  )
}
