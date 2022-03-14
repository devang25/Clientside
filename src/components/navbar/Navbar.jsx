import { LocationOn, Search, ShoppingCart, Add } from "@material-ui/icons";
import './navbar.css';
export default function Navbar() {
  return (
    <>
        <div className="container__wrapper">
            <div className="Navbar__wrapper">
                <div className="logoNavbar">
                    <a href="#" className='Navlogo'>Amazon</a>
                </div>
                    <div className="IconLocation">
                      <LocationOn/> 
                    </div>
                <div className="Searchbar">
                    <input type="text" className='SearchItem' placeholder="Search in Amazon" />
                    <a href="#"><Search/></a>
                </div>
                 <div className="linksOfMainLinks">
                     <ul className="Links">
                         <li className="Link">links</li>
                         <li className="Link">links</li>
                         <li className="Link">links</li>
                         <li className="Link">links</li>
                         <li className="Link">links</li>
                     </ul>
                 </div>
                 <div className="UserLogo">
                     <div className="CartLogo">
                         <ShoppingCart/>
                     </div>
                     <div className="Login">
                         <Add/>
                     </div>
                 </div>     
            </div>
        </div>       
    </>
  )
}
