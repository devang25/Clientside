import React from 'react';
import './TopPicksItem.css';
export default function TopPicksItem(props) {
  return (
    <>

        <div className="topPicks__item">
            <div className="topPicks__img">
                <img src = {props.img} alt="" />
            </div>
            <div className="TopPicks__desc">
              <div className="topPicks__Name">
                <span> {props.name} </span>
              </div>
              <div className="TopPicks__price">
                <span> {props.price} </span>
              </div>
              <div className="catagory">
                <span> {props.catagory} </span>
              </div>
            </div> 
    </div>
    </>
  )
}
