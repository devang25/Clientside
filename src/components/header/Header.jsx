import './header.css';

export default function Header(){
    return (
        <>
        <div className="mainHead">
          <div className="images"> 
          <div className="image">          
           <img src="assets/indexImg/first.jpg" alt="" srcset=""/>
          </div>
           <div className="image">
           <img src="assets/indexImg/second.jpg" alt="" srcset=""/> 
          </div>
          <div className="image">
           <img src="assets/indexImg/third.jpg" alt="" srcset=""/>
          </div>
           <div className="image">
           <img src="assets/indexImg/fourth.jpg" alt="" srcset=""/>
           </div>
           <div className="image">
           <img src="assets/indexImg/fifth.jpg" alt="" srcset=""/>
           </div>
          </div>
        </div>
    </>
  )
}